#!/bin/bash

# Redis Setup Script for macOS
# This script helps set up Redis for local development

echo "🚀 Redis Setup for Portfolio Backend"
echo "===================================="
echo ""

# Check if Redis is already installed
if command -v redis-server &> /dev/null; then
    echo "✅ Redis is already installed"
    echo ""
    echo "Starting Redis server..."
    redis-server --daemonize yes
    echo "✅ Redis started in background"
    sleep 1

    if redis-cli ping > /dev/null 2>&1; then
        echo "✅ Redis is running and responding to ping"
        echo ""
        echo "📊 Redis Info:"
        redis-cli info server | grep redis_version
    else
        echo "❌ Redis is not responding"
        exit 1
    fi
else
    echo "❌ Redis is not installed"
    echo ""
    echo "Choose installation method:"
    echo "1. Homebrew (recommended for macOS)"
    echo "2. Docker"
    echo "3. Manual download"
    echo ""
    read -p "Enter choice (1-3): " choice

    case $choice in
        1)
            echo "Installing Redis via Homebrew..."
            brew install redis
            echo "Starting Redis..."
            redis-server --daemonize yes
            ;;
        2)
            echo "Installing Redis via Docker..."
            docker run -d -p 6379:6379 --name redis redis:7-alpine
            ;;
        3)
            echo "Please visit https://redis.io/download and follow the instructions"
            exit 1
            ;;
        *)
            echo "Invalid choice"
            exit 1
            ;;
    esac
fi

echo ""
echo "📝 Update .env file with:"
echo "REDIS_URL=redis://127.0.0.1:6379/0"
echo "CACHE_TIMEOUT=3600"
echo ""
echo "✅ Setup complete!"
echo ""
echo "📚 For more details, see: REDIS_SETUP.md"
