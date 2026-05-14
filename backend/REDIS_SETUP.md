# Redis Caching Setup Guide

This project uses Redis for caching to improve API response times and reduce database load.

## Installation

### Option 1: Using Homebrew (macOS)

```bash
brew install redis
```

### Option 2: Using Docker

```bash
docker run -d -p 6379:6379 --name redis redis:7-alpine
```

### Option 3: Download from Redis.io

Visit https://redis.io/download and follow their installation guide.

## Starting Redis

### Homebrew
```bash
redis-server
```

### Docker
```bash
docker start redis  # if container already exists
# or
docker run -d -p 6379:6379 --name redis redis:7-alpine  # create new container
```

## Configuration

The Redis URL is configured in `.env`:

```env
REDIS_URL=redis://127.0.0.1:6379/0
CACHE_TIMEOUT=3600  # 1 hour (in seconds)
```

### Cache Timeout Options
- `300` = 5 minutes (for frequently changing data)
- `3600` = 1 hour (default, recommended for portfolio)
- `86400` = 24 hours (for rarely changing data)
- `0` = No expiration

## How Caching Works

### Cached Endpoints
All GET requests to these endpoints are cached:
- `GET /api/about/` - Portfolio owner info
- `GET /api/portfolio/` - Portfolio items list
- `GET /api/projects/` - Projects list
- `GET /api/resume/` - Resume data

### Cache Invalidation
Cache is automatically cleared when:
- Data is updated via admin panel
- Data is updated via API (PUT/PATCH)
- Data is deleted via API (DELETE)
- A new item is created (POST)

### Cache Keys
- List endpoints: `list:{ModelName}`
- Detail endpoints: `detail:{ModelName}:{id}`

Example: `list:Project` or `detail:Project:1`

## Development vs Production

### Development
- **Default**: Uses local memory cache (`LocMemCache`)
- **With Redis**: If `REDIS_URL` is configured in `.env`, uses Redis
- **No setup needed**: Works without Redis, but with reduced performance benefits

### Production
- **Requires Redis**: Must have Redis available
- **Connection pooling**: Configured with max 50 connections
- **Timeout**: 5 second socket timeout for reliability
- **Retry**: Automatically retries on timeout

## Testing Redis Connection

### Check if Redis is Running
```bash
redis-cli ping
# Should return: PONG
```

### Monitor Cache Activity
```bash
redis-cli
> MONITOR
```

### View Cache Keys
```bash
redis-cli
> KEYS *
```

### Clear All Cache
```bash
redis-cli
> FLUSHDB
```

## Performance Impact

### Before Caching
- First request: Database query + serialization = ~50-200ms
- Every request hits the database

### After Caching
- First request: Database query + serialization = ~50-200ms (cached)
- Subsequent requests: Cache hit = ~1-5ms (99% faster!)
- Cache expires after `CACHE_TIMEOUT` seconds

### Example
With a 1-hour cache timeout on your API:
- If 100 users visit your portfolio homepage in an hour
- Only 1 database query is executed (the first one)
- 99 requests are served directly from cache

## Troubleshooting

### "Connection refused" Error
```
ConnectionError: Error -3 connecting to 127.0.0.1:6379. Name or service not known.
```
**Solution**: Make sure Redis is running:
```bash
redis-server  # or docker start redis
```

### Cache Not Working in Development
- Check if `.env` has `REDIS_URL` configured
- Verify Redis is running: `redis-cli ping`
- Check Django logs for connection errors

### Cache Data Seems Stale
- Cache timeout is configured in `.env` as `CACHE_TIMEOUT`
- To immediately clear cache: `redis-cli FLUSHDB`
- To disable cache for debugging: Set `CACHE_TIMEOUT=0` in `.env`

## Advanced: Cache Warming

To pre-populate cache on startup:

```python
# In your Django shell or startup script
from portfolio.models import AboutMe, Project, PortfolioItem, Resume
from django.core.cache import cache

# Warm up cache
for item in Project.objects.all():
    cache.set(f"detail:Project:{item.id}", item)
```

## Monitoring Cache Performance

Add this to your views to track cache hits:

```python
from django.core.cache import cache

# In your view
cache_info = cache.get_many(['list:Project', 'list:PortfolioItem'])
print(f"Cache hits: {len([v for v in cache_info.values() if v])}")
```

## Environment Variables

```env
# Redis Connection
REDIS_URL=redis://127.0.0.1:6379/0

# Cache timeout in seconds (default: 1 hour)
CACHE_TIMEOUT=3600

# For production with authentication:
# REDIS_URL=redis://username:password@host:6379/0
```

## Resources

- [Django Redis Documentation](https://github.com/jazzband/django-redis)
- [Redis Documentation](https://redis.io/documentation)
- [Redis CLI Commands](https://redis.io/commands)
