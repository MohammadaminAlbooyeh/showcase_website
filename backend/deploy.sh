#!/bin/bash
# Automated deployment script for EC2

set -e  # Exit on error

echo "🚀 Portfolio Backend Deployment Script"
echo "======================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running on EC2
if [ ! -d "/home/ubuntu/showcase_website" ]; then
    echo -e "${RED}❌ Not running from /home/ubuntu/showcase_website${NC}"
    echo "Run this script from EC2 instance:"
    echo "  cd /home/ubuntu/showcase_website/backend && bash deploy.sh"
    exit 1
fi

echo -e "${YELLOW}📋 Step 1: Update System${NC}"
sudo apt update && sudo apt upgrade -y > /dev/null 2>&1
echo -e "${GREEN}✅ System updated${NC}"

echo -e "${YELLOW}📋 Step 2: Install Dependencies${NC}"
sudo apt install -y python3 python3-pip python3-venv git curl postgresql redis-server nginx > /dev/null 2>&1
echo -e "${GREEN}✅ Dependencies installed${NC}"

echo -e "${YELLOW}📋 Step 3: Create Virtual Environment${NC}"
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo -e "${GREEN}✅ Virtual environment created${NC}"
else
    echo -e "${GREEN}✅ Virtual environment already exists${NC}"
fi

echo -e "${YELLOW}📋 Step 4: Activate Virtual Environment & Install Requirements${NC}"
source venv/bin/activate
pip install --upgrade pip > /dev/null 2>&1
pip install -r requirements.txt > /dev/null 2>&1
echo -e "${GREEN}✅ Python requirements installed${NC}"

echo -e "${YELLOW}📋 Step 5: Configure .env File${NC}"
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Please create it:"
    echo "    cp .env.example .env"
    echo "    nano .env"
    echo ""
    echo "Required variables:"
    echo "  DEBUG=False"
    echo "  SECRET_KEY=<your-secret-key>"
    echo "  ALLOWED_HOSTS=<your-instance-ip>,<your-domain>"
    echo "  DATABASE_URL=postgresql://portfolio:password@localhost:5432/portfolio"
    echo "  REDIS_URL=redis://127.0.0.1:6379/0"
    echo "  CACHE_TIMEOUT=3600"
    echo "  EMAIL_HOST_USER=<your-email>"
    echo "  EMAIL_HOST_PASSWORD=<your-app-password>"
    echo ""
    exit 1
else
    echo -e "${GREEN}✅ .env file found${NC}"
fi

echo -e "${YELLOW}📋 Step 6: Set Up PostgreSQL${NC}"
sudo systemctl start postgresql > /dev/null 2>&1
sudo systemctl enable postgresql > /dev/null 2>&1
echo -e "${GREEN}✅ PostgreSQL started${NC}"

echo -e "${YELLOW}📋 Step 7: Run Database Migrations${NC}"
python manage.py migrate
echo -e "${GREEN}✅ Database migrations completed${NC}"

echo -e "${YELLOW}📋 Step 8: Collect Static Files${NC}"
python manage.py collectstatic --noinput > /dev/null 2>&1
echo -e "${GREEN}✅ Static files collected${NC}"

echo -e "${YELLOW}📋 Step 9: Set Up Redis${NC}"
sudo systemctl start redis-server > /dev/null 2>&1
sudo systemctl enable redis-server > /dev/null 2>&1
redis-cli ping > /dev/null 2>&1
echo -e "${GREEN}✅ Redis running${NC}"

echo -e "${YELLOW}📋 Step 10: Configure Gunicorn${NC}"
sudo tee /etc/systemd/system/gunicorn.service > /dev/null << 'EOF'
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
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable gunicorn
sudo systemctl start gunicorn
echo -e "${GREEN}✅ Gunicorn configured${NC}"

echo -e "${YELLOW}📋 Step 11: Configure Nginx${NC}"
sudo tee /etc/nginx/sites-available/default > /dev/null << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;

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

sudo systemctl restart nginx
sudo systemctl enable nginx
echo -e "${GREEN}✅ Nginx configured${NC}"

echo ""
echo "======================================"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo "======================================"
echo ""
echo "📊 Service Status:"
sudo systemctl status gunicorn | grep Active
sudo systemctl status nginx | grep Active
sudo systemctl status redis-server | grep Active
echo ""
echo "🧪 Testing API:"
echo "  GET http://your-ec2-ip/api/projects/"
echo ""
echo "📝 Next Steps:"
echo "  1. Update frontend API URLs to point to your EC2 instance"
echo "  2. Test API endpoints"
echo "  3. Deploy frontend to S3"
echo "  4. Set up HTTPS with Let's Encrypt (optional)"
echo ""
echo "📖 For detailed guide, see: AWS_DEPLOYMENT_GUIDE.md"
echo ""
