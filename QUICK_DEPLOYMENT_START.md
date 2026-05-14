# Quick AWS Deployment Start Guide

Complete this checklist to deploy your portfolio on AWS with Redis caching.

## 📋 Pre-Deployment Checklist

- [ ] AWS CLI installed: `aws --version`
- [ ] AWS credentials configured: `aws configure`
- [ ] EC2 key pair created in AWS Console
- [ ] Latest code committed: `git status` (should be clean)
- [ ] Latest code pushed: `git push`

## 🚀 Step 1: Create EC2 Instance (5 minutes)

### Option A: AWS Console (Easiest)
1. Go to **EC2 Dashboard**
2. Click **Launch Instance**
3. Select **Ubuntu 22.04 LTS**
4. Instance type: **t3.micro** (free tier)
5. Create/select security group with ports:
   - 22 (SSH)
   - 80 (HTTP)
   - 443 (HTTPS, optional)
6. Download/use key pair
7. Click **Launch**
8. Wait 2-3 minutes for instance to start

### Option B: AWS CLI
```bash
aws ec2 run-instances \
  --image-id ami-0c55b159cbfafe1f0 \
  --instance-type t3.micro \
  --key-name your-key-pair-name \
  --security-groups default \
  --region eu-north-1
```

### Get Instance IP
1. Go to EC2 Instances
2. Copy the **Public IPv4 address**

## 🔐 Step 2: Connect to EC2 (2 minutes)

```bash
# Make key readable (first time only)
chmod 400 your-key.pem

# SSH into instance
ssh -i "your-key.pem" ubuntu@your-instance-ip

# You should now see: ubuntu@ip-xxx-xxx-xxx-xxx:~$
```

## 🔧 Step 3: Deploy Backend (10 minutes)

```bash
# Clone repository
git clone https://github.com/MohammadaminAlbooyeh/showcase_website.git
cd showcase_website

# Create .env file
cat > backend/.env << 'EOF'
DEBUG=False
SECRET_KEY=change-this-to-random-string-here
ALLOWED_HOSTS=your-instance-ip,your-domain.com
DATABASE_URL=postgresql://portfolio:portfolio@localhost:5432/portfolio
REDIS_URL=redis://127.0.0.1:6379/0
CACHE_TIMEOUT=3600
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
ADMIN_EMAIL=admin@example.com
CORS_ALLOWED_ORIGINS=https://showcase-website-amin.s3-website.eu-north-1.amazonaws.com
EOF

# Run automated deployment script
cd backend
chmod +x deploy.sh
bash deploy.sh
```

This will:
- ✅ Install all dependencies (Python, PostgreSQL, Redis, Nginx)
- ✅ Create Python virtual environment
- ✅ Install Python packages
- ✅ Set up PostgreSQL database
- ✅ Run migrations
- ✅ Collect static files
- ✅ Start Redis cache
- ✅ Configure and start Gunicorn
- ✅ Configure and start Nginx

**Wait for script to complete!**

## ✅ Verify Backend Deployment (2 minutes)

```bash
# Test API endpoint
curl http://your-instance-ip/api/projects/

# Should return JSON data

# Check service status
sudo systemctl status gunicorn
sudo systemctl status nginx
sudo systemctl status redis-server

# Check Redis cache
redis-cli KEYS *
redis-cli INFO memory
```

## 📱 Step 4: Deploy Frontend (5 minutes)

On your **local machine** (not EC2):

```bash
cd frontend

# Update API configuration
nano config/api.js
# Change: const API_BASE_URL = 'http://your-instance-ip/api'

# Deploy to S3
bash deploy-to-s3.sh
```

Or manually:
```bash
# Build
npm run build

# Upload to S3
aws s3 sync out s3://showcase-website-amin --region eu-north-1 --delete
```

## 🧪 Step 5: Test Everything (5 minutes)

### Test Backend
```bash
# From your local machine
curl http://your-instance-ip/api/projects/
curl http://your-instance-ip/api/about/

# Should see JSON responses quickly
```

### Test Frontend
1. Open browser to: `http://showcase-website-amin.s3-website.eu-north-1.amazonaws.com/`
2. Navigate to all pages
3. Test contact form
4. Open DevTools (F12) → Network tab
5. Click on API requests
6. Check response times (should be 1-5ms for cached requests!)

### Test Contact Form
1. Go to Contact page
2. Fill in form
3. Submit
4. Check your email for notification

## 📊 Monitor Performance

```bash
# SSH into EC2
ssh -i "your-key.pem" ubuntu@your-instance-ip

# Check Redis hits/misses
redis-cli INFO stats

# Monitor live
redis-cli MONITOR

# Make requests from another terminal
curl http://your-instance-ip/api/projects/
curl http://your-instance-ip/api/projects/  # Should be cached!
```

## 🔒 Optional: Set Up HTTPS

```bash
# On EC2
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

Then update your .env:
```
ALLOWED_HOSTS=your-domain.com
CORS_ALLOWED_ORIGINS=https://showcase-website-amin.s3-website.eu-north-1.amazonaws.com
```

## 📝 Update Code After Deployment

To update your code:

```bash
# SSH into EC2
ssh -i "your-key.pem" ubuntu@your-instance-ip

# Pull latest changes
cd /home/ubuntu/showcase_website
git pull origin main

# Install new dependencies (if any)
source backend/venv/bin/activate
pip install -r backend/requirements.txt

# Run migrations (if any)
cd backend
python manage.py migrate

# Collect static files (if any)
python manage.py collectstatic --noinput

# Restart services
sudo systemctl restart gunicorn
sudo systemctl restart nginx
```

## 🐛 Troubleshooting

### Can't SSH to instance
```bash
# Check security group allows port 22
# Check instance public IP is correct
# Check key file permissions: chmod 400 your-key.pem
```

### API returns 502 Bad Gateway
```bash
# SSH into EC2
sudo systemctl restart gunicorn
sudo journalctl -u gunicorn -n 20
```

### Redis not working
```bash
redis-cli ping  # Should return PONG
sudo systemctl restart redis-server
```

### Database connection error
```bash
# Check PostgreSQL is running
sudo systemctl status postgresql

# Check database exists
sudo -u postgres psql -l | grep portfolio
```

### Static files not loading
```bash
python manage.py collectstatic --noinput
sudo systemctl restart nginx
```

## 📚 Full Documentation

For detailed information, see:
- **Backend**: `AWS_DEPLOYMENT_GUIDE.md`
- **Redis Setup**: `backend/REDIS_SETUP.md`
- **Frontend Build**: `frontend/package.json`

## 💰 Cost Estimate

**Monthly with AWS Free Tier:**
- EC2 t3.micro: FREE (12 months)
- PostgreSQL: ~$10
- S3: < $1
- Total: ~$10/month

## 🎉 Success Indicators

- [ ] Backend API responds at `http://your-instance-ip/api/projects/`
- [ ] Frontend loads from S3
- [ ] Contact form sends emails
- [ ] API responses show Redis caching (1-5ms)
- [ ] All pages and features work

## 📞 Quick Reference

```bash
# Common commands on EC2

# SSH in
ssh -i "key.pem" ubuntu@your-ip

# Check services
sudo systemctl status gunicorn
sudo systemctl status nginx
sudo systemctl status redis-server
sudo systemctl status postgresql

# Restart service
sudo systemctl restart gunicorn

# View logs
sudo journalctl -u gunicorn -f

# Test API
curl http://localhost/api/projects/

# Monitor cache
redis-cli MONITOR

# Exit SSH
exit
```

## ⏱️ Total Time: ~30 minutes

- EC2 setup: 5 min
- Connect: 2 min
- Backend deploy: 10 min
- Frontend deploy: 5 min
- Testing: 5 min
- Verification: 3 min

## 🚀 You're Done!

Your portfolio is now deployed on AWS with:
- ✅ Django backend on EC2
- ✅ Next.js frontend on S3
- ✅ PostgreSQL database
- ✅ Redis caching (75-85% faster!)
- ✅ Automatic email notifications
- ✅ Production-ready setup

🎊 Congratulations!
