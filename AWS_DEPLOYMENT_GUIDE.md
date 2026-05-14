# AWS Deployment Guide - Django Backend + Next.js Frontend

Complete guide to deploy your portfolio on AWS with Redis caching.

## Prerequisites
- AWS CLI configured: `aws configure`
- AWS account with EC2 and S3 access
- Git repository with latest code
- SSH key pair created in AWS

## Part 1: Deploy Backend on EC2

### Step 1: Create EC2 Instance

```bash
# Create EC2 instance (Ubuntu 22.04, t3.micro for free tier)
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name your-key-pair-name \
  --security-groups default \
  --region eu-north-1
```

Or use AWS Console:
1. Go to EC2 Dashboard
2. Click "Launch Instance"
3. Select Ubuntu 22.04 LTS
4. Instance type: t3.micro (free tier eligible)
5. Create/select security group with ports:
   - 22 (SSH)
   - 80 (HTTP)
   - 443 (HTTPS)
   - 6379 (Redis, if private)

### Step 2: Connect to EC2

```bash
# Replace with your instance IP and key file
ssh -i "your-key.pem" ubuntu@your-instance-ip
```

### Step 3: Install Dependencies on EC2

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Python, pip, and system dependencies
sudo apt install -y python3 python3-pip python3-venv git curl

# Install PostgreSQL (recommended for production)
sudo apt install -y postgresql postgresql-contrib

# Install Redis
sudo apt install -y redis-server

# Install Gunicorn (production server)
pip3 install gunicorn

# Install Nginx (reverse proxy)
sudo apt install -y nginx
```

### Step 4: Clone Your Repository

```bash
cd /home/ubuntu
git clone https://github.com/MohammadaminAlbooyeh/showcase_website.git
cd showcase_website/backend
```

### Step 5: Set Up Python Environment

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install requirements
pip install -r requirements.txt
```

### Step 6: Configure Environment Variables

```bash
# Create .env file
cat > .env << EOF
DEBUG=False
SECRET_KEY=your-secret-key-here-change-this
ALLOWED_HOSTS=your-instance-ip,your-domain.com
DATABASE_URL=postgresql://postgres:password@localhost:5432/portfolio
REDIS_URL=redis://127.0.0.1:6379/0
CACHE_TIMEOUT=3600
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=admin@example.com
CORS_ALLOWED_ORIGINS=https://showcase-website-amin.s3-website.eu-north-1.amazonaws.com
EOF
```

### Step 7: Set Up PostgreSQL Database

```bash
# Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database user and database
sudo -u postgres psql << EOF
CREATE USER portfolio WITH PASSWORD 'your-password-here';
CREATE DATABASE portfolio OWNER portfolio;
ALTER ROLE portfolio SET client_encoding TO 'utf8';
ALTER ROLE portfolio SET default_transaction_isolation TO 'read committed';
ALTER ROLE portfolio SET default_transaction_deferrable TO on;
GRANT ALL PRIVILEGES ON DATABASE portfolio TO portfolio;
EOF

# Run migrations
python manage.py migrate
python manage.py createsuperuser
```

### Step 8: Set Up Redis

```bash
# Start Redis
sudo systemctl start redis-server
sudo systemctl enable redis-server

# Verify Redis is running
redis-cli ping
# Should return: PONG
```

### Step 9: Collect Static Files

```bash
python manage.py collectstatic --noinput
```

### Step 10: Configure Gunicorn

```bash
# Create systemd service file
sudo tee /etc/systemd/system/gunicorn.service > /dev/null << EOF
[Unit]
Description=Gunicorn application server for Django
After=network.target

[Service]
Type=notify
User=ubuntu
WorkingDirectory=/home/ubuntu/showcase_website/backend
Environment="PATH=/home/ubuntu/showcase_website/backend/venv/bin"
ExecStart=/home/ubuntu/showcase_website/backend/venv/bin/gunicorn \
    --workers 3 \
    --bind 0.0.0.0:8000 \
    --timeout 60 \
    backend.wsgi:application

[Install]
WantedBy=multi-user.target
EOF

# Enable and start Gunicorn
sudo systemctl daemon-reload
sudo systemctl start gunicorn
sudo systemctl enable gunicorn
sudo systemctl status gunicorn
```

### Step 11: Configure Nginx

```bash
# Create Nginx configuration
sudo tee /etc/nginx/sites-available/default > /dev/null << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    server_name _;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 60s;
    }

    location /static/ {
        alias /home/ubuntu/showcase_website/backend/staticfiles/;
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    location /media/ {
        alias /home/ubuntu/showcase_website/backend/media/;
        expires 7d;
    }
}
EOF

# Enable and restart Nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
```

### Step 12: Get Elastic IP (Optional but Recommended)

```bash
# Allocate Elastic IP so your instance IP doesn't change
aws ec2 allocate-address --domain vpc --region eu-north-1
```

## Part 2: Update Frontend Deployment

### Step 1: Build Frontend

```bash
cd frontend
npm run build
```

### Step 2: Upload to S3

```bash
# Navigate to frontend build directory
cd frontend/out

# Sync with S3
aws s3 sync . s3://showcase-website-amin --region eu-north-1 --delete

# Make files public (if using public bucket)
aws s3 sync . s3://showcase-website-amin --region eu-north-1 --acl public-read
```

### Step 3: Invalidate S3 Website Cache

```bash
# If using CloudFront (optional), invalidate cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

## Part 3: Update API Configuration

Update your frontend API configuration to point to EC2:

**frontend/config/api.js:**
```javascript
const API_BASE_URL = 'http://your-ec2-instance-ip:80/api';
// or
const API_BASE_URL = 'http://your-domain.com/api';
```

## Monitoring & Maintenance

### Check Service Status

```bash
# SSH into EC2
ssh -i "your-key.pem" ubuntu@your-instance-ip

# Check Gunicorn
sudo systemctl status gunicorn

# Check Nginx
sudo systemctl status nginx

# Check Redis
redis-cli ping

# Check logs
sudo journalctl -u gunicorn -f
sudo tail -f /var/log/nginx/access.log
```

### Update Code

```bash
# Pull latest changes
cd /home/ubuntu/showcase_website
git pull origin main

# Reactivate venv
source backend/venv/bin/activate

# Install new requirements if any
pip install -r backend/requirements.txt

# Run migrations if any
cd backend
python manage.py migrate

# Restart services
sudo systemctl restart gunicorn
sudo systemctl restart nginx
```

### Monitor Redis Cache

```bash
# SSH into EC2
redis-cli

# View cache keys
KEYS *

# Check memory usage
INFO memory

# Clear cache if needed
FLUSHDB

# Exit
exit
```

## Troubleshooting

### Connection Refused
```bash
# Check if services are running
sudo systemctl status gunicorn
sudo systemctl status nginx
sudo systemctl status redis-server

# Check logs
sudo journalctl -u gunicorn -n 50
```

### Database Connection Error
```bash
# Verify PostgreSQL is running
sudo systemctl status postgresql

# Check connection
psql -U portfolio -d portfolio -h localhost
```

### Redis Not Working
```bash
# Check Redis service
sudo systemctl status redis-server

# Verify connection
redis-cli ping

# Restart if needed
sudo systemctl restart redis-server
```

### Gunicorn Not Responding
```bash
# Check syntax errors
python -m py_compile backend/wsgi.py

# Try running directly
cd /home/ubuntu/showcase_website/backend
gunicorn --workers 1 --bind 0.0.0.0:8000 backend.wsgi:application

# Check static files
python manage.py collectstatic --noinput
```

## Security Best Practices

### 1. Use HTTPS

```bash
# Install Certbot for Let's Encrypt
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot certonly --nginx -d your-domain.com

# Update Nginx to use HTTPS
sudo certbot --nginx -d your-domain.com
```

### 2. Secure Environment Variables

```bash
# Set proper permissions
chmod 600 /home/ubuntu/showcase_website/backend/.env

# Use AWS Secrets Manager (optional)
aws secretsmanager create-secret \
  --name portfolio-env \
  --secret-string file://backend/.env
```

### 3. Update Security Groups

```bash
# Restrict to HTTPS only (80 optional for redirect)
aws ec2 authorize-security-group-ingress \
  --group-id sg-xxxxxxxx \
  --protocol tcp \
  --port 443 \
  --cidr 0.0.0.0/0
```

## Environment Variables Checklist

```
✅ DEBUG=False (Production mode)
✅ SECRET_KEY=<strong-random-key>
✅ ALLOWED_HOSTS=<your-domain>
✅ DATABASE_URL=postgresql://...
✅ REDIS_URL=redis://127.0.0.1:6379/0
✅ CACHE_TIMEOUT=3600
✅ EMAIL_HOST_USER=<email>
✅ EMAIL_HOST_PASSWORD=<app-password>
✅ CORS_ALLOWED_ORIGINS=<s3-url>
```

## Deployment Checklist

- [ ] EC2 instance created and running
- [ ] SSH access working
- [ ] Python dependencies installed
- [ ] Virtual environment created
- [ ] PostgreSQL database created
- [ ] Redis installed and running
- [ ] Static files collected
- [ ] Gunicorn service running
- [ ] Nginx configured and running
- [ ] Frontend built and uploaded to S3
- [ ] API URLs updated in frontend
- [ ] CORS configured correctly
- [ ] Redis caching working (test at `/api/projects/`)
- [ ] Email notifications working
- [ ] Domain pointing to EC2 (optional)
- [ ] HTTPS certificate installed (optional)

## Performance Verification

After deployment, verify everything is working:

```bash
# Test API endpoint
curl http://your-ec2-ip/api/projects/

# Check response time
time curl http://your-ec2-ip/api/projects/

# Should show:
# First request: ~100-200ms
# Cached requests: ~1-5ms (with Redis!)
```

## Cost Estimate

**Monthly costs (free tier eligible):**
- EC2 t3.micro: ~$9 (720 hours/month)
- PostgreSQL managed: ~$10-15
- S3: ~$0.50
- **Total: ~$20-25/month**

Or use free tier for 12 months!

## Next Steps

1. Create EC2 instance
2. Follow deployment steps above
3. Monitor with CloudWatch (optional)
4. Set up auto-scaling (optional for high traffic)
5. Configure domain name via Route 53 (optional)

## Support

If you encounter issues:
1. Check EC2 logs: `sudo journalctl -u gunicorn -n 100`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Check Redis: `redis-cli ping`
4. SSH and test manually

Good luck! 🚀
