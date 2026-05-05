from django.core.cache import cache


class ContactRateThrottle:
    """
    Rate throttle for contact form submissions using Django's cache.
    Limits each email address to 5 requests per hour.
    """
    RATE = 5
    PERIOD = 3600

    def allow_request(self, email):
        cache_key = f'contact_rate_{email}'
        requests = cache.get(cache_key, 0)

        if requests >= self.RATE:
            return False

        cache.set(cache_key, requests + 1, self.PERIOD)
        return True