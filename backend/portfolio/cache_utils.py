from django.core.cache import cache
from django.views.decorators.cache import cache_page
from rest_framework.response import Response
import hashlib
import json


def get_cache_key(prefix, *args, **kwargs):
    """Generate a consistent cache key from prefix and parameters."""
    key_data = f"{prefix}:{':'.join(str(a) for a in args)}"
    if kwargs:
        key_data += f":{json.dumps(kwargs, sort_keys=True, default=str)}"
    return hashlib.md5(key_data.encode()).hexdigest()


def cache_model_list(timeout=3600):
    """Decorator to cache model list responses with intelligent invalidation."""
    def decorator(func):
        def wrapper(self, request, *args, **kwargs):
            # Skip cache for authenticated users modifying data
            if request.method != 'GET':
                return func(self, request, *args, **kwargs)

            # Generate cache key
            model_name = self.queryset.model.__name__
            cache_key = f"list:{model_name}:all"

            # Try to get from cache
            cached_response = cache.get(cache_key)
            if cached_response is not None:
                return Response(cached_response)

            # Get fresh data
            response = func(self, request, *args, **kwargs)

            # Cache the response data
            if hasattr(response, 'data'):
                cache.set(cache_key, response.data, timeout)

            return response
        return wrapper
    return decorator


def cache_model_detail(timeout=3600):
    """Decorator to cache model detail responses."""
    def decorator(func):
        def wrapper(self, request, *args, **kwargs):
            if request.method != 'GET':
                return func(self, request, *args, **kwargs)

            model_name = self.queryset.model.__name__
            obj_id = kwargs.get('pk')
            cache_key = f"detail:{model_name}:{obj_id}"

            cached_response = cache.get(cache_key)
            if cached_response is not None:
                return Response(cached_response)

            response = func(self, request, *args, **kwargs)

            if hasattr(response, 'data'):
                cache.set(cache_key, response.data, timeout)

            return response
        return wrapper
    return decorator


def invalidate_model_cache(model_name):
    """Invalidate all cache keys for a model."""
    patterns = [
        f"list:{model_name}:*",
        f"detail:{model_name}:*",
    ]

    cache_keys = cache.keys("*")
    for pattern in patterns:
        matching_keys = [k for k in cache_keys if pattern.replace("*", "") in k]
        if matching_keys:
            cache.delete_many(matching_keys)
