from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.cache import cache
from .models import AboutMe, PortfolioItem, Project, Resume


def invalidate_model_cache(model_name):
    """Clear cache for a specific model's list and detail views."""
    list_key = f"list:{model_name}"
    detail_keys = cache.keys(f"detail:{model_name}:*")

    cache.delete(list_key)
    if detail_keys:
        cache.delete_many(detail_keys)


@receiver(post_save, sender=AboutMe)
def invalidate_aboutme_cache(sender, instance, **kwargs):
    invalidate_model_cache('AboutMe')


@receiver(post_save, sender=PortfolioItem)
def invalidate_portfolio_cache(sender, instance, **kwargs):
    invalidate_model_cache('PortfolioItem')


@receiver(post_save, sender=Project)
def invalidate_project_cache(sender, instance, **kwargs):
    invalidate_model_cache('Project')


@receiver(post_save, sender=Resume)
def invalidate_resume_cache(sender, instance, **kwargs):
    invalidate_model_cache('Resume')


@receiver(post_delete, sender=AboutMe)
def invalidate_aboutme_cache_on_delete(sender, instance, **kwargs):
    invalidate_model_cache('AboutMe')


@receiver(post_delete, sender=PortfolioItem)
def invalidate_portfolio_cache_on_delete(sender, instance, **kwargs):
    invalidate_model_cache('PortfolioItem')


@receiver(post_delete, sender=Project)
def invalidate_project_cache_on_delete(sender, instance, **kwargs):
    invalidate_model_cache('Project')


@receiver(post_delete, sender=Resume)
def invalidate_resume_cache_on_delete(sender, instance, **kwargs):
    invalidate_model_cache('Resume')
