#!/bin/bash
# Deploy Next.js frontend to S3

set -e

echo "🚀 Frontend Deployment to S3"
echo "============================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Configuration
S3_BUCKET="showcase-website-amin"
AWS_REGION="eu-north-1"

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI not found. Install it first:${NC}"
    echo "  brew install awscli"
    exit 1
fi

# Check if AWS credentials are configured
if ! aws sts get-caller-identity > /dev/null 2>&1; then
    echo -e "${RED}❌ AWS credentials not configured${NC}"
    echo "  Run: aws configure"
    exit 1
fi

echo -e "${YELLOW}📋 Step 1: Install Dependencies${NC}"
npm install > /dev/null 2>&1
echo -e "${GREEN}✅ Dependencies installed${NC}"

echo -e "${YELLOW}📋 Step 2: Update API Configuration${NC}"
echo "⚠️  Update frontend/config/api.js with your API URL:"
echo "   const API_BASE_URL = 'http://your-ec2-instance-ip/api';"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

echo -e "${YELLOW}📋 Step 3: Build Frontend${NC}"
npm run build
echo -e "${GREEN}✅ Frontend built${NC}"

echo -e "${YELLOW}📋 Step 4: Upload to S3${NC}"
if [ ! -d "out" ]; then
    echo -e "${RED}❌ 'out' directory not found. Did the build succeed?${NC}"
    exit 1
fi

aws s3 sync out s3://$S3_BUCKET \
    --region $AWS_REGION \
    --delete \
    --cache-control "max-age=3600" \
    --exclude ".next/*"

echo -e "${GREEN}✅ Frontend uploaded to S3${NC}"

echo -e "${YELLOW}📋 Step 5: Set Cache Control for HTML${NC}"
aws s3 cp s3://$S3_BUCKET \
    s3://$S3_BUCKET \
    --recursive \
    --region $AWS_REGION \
    --exclude "*" \
    --include "*.html" \
    --cache-control "max-age=0, no-cache, must-revalidate" \
    --metadata-directive REPLACE

echo -e "${GREEN}✅ Cache control set${NC}"

echo ""
echo "======================================"
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo "======================================"
echo ""
echo "🌐 Frontend URL:"
echo "   http://showcase-website-amin.s3-website.eu-north-1.amazonaws.com/"
echo ""
echo "🧪 Test:"
echo "   1. Open the URL in browser"
echo "   2. Check network tab in DevTools"
echo "   3. Verify API calls to your EC2 backend"
echo ""
echo "📝 Next Steps:"
echo "   1. Test all features (projects, contact form, etc.)"
echo "   2. Monitor API responses"
echo "   3. Set up CloudFront (optional) for global CDN"
echo ""
