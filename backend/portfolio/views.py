from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.core.mail import send_mail
from django.conf import settings
from django.core.cache import cache
from .models import AboutMe, PortfolioItem, Project, Resume, Contact
from .serializers import (
    AboutMeSerializer,
    PortfolioItemSerializer,
    ProjectSerializer,
    ResumeSerializer,
    ContactSerializer
)
from .cache_utils import invalidate_model_cache

class CachedModelViewSet(viewsets.ModelViewSet):
    """Base ViewSet with intelligent caching for read operations."""
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_cache_timeout(self):
        return settings.CACHE_TIMEOUT

    def list(self, request, *args, **kwargs):
        cache_key = f"list:{self.queryset.model.__name__}"

        if request.method == 'GET':
            cached_data = cache.get(cache_key)
            if cached_data is not None:
                return Response(cached_data)

        response = super().list(request, *args, **kwargs)

        if request.method == 'GET' and hasattr(response, 'data'):
            cache.set(cache_key, response.data, self.get_cache_timeout())

        return response

    def retrieve(self, request, *args, **kwargs):
        obj_id = kwargs.get('pk')
        cache_key = f"detail:{self.queryset.model.__name__}:{obj_id}"

        if request.method == 'GET':
            cached_data = cache.get(cache_key)
            if cached_data is not None:
                return Response(cached_data)

        response = super().retrieve(request, *args, **kwargs)

        if request.method == 'GET' and hasattr(response, 'data'):
            cache.set(cache_key, response.data, self.get_cache_timeout())

        return response

    def perform_update(self, serializer):
        super().perform_update(serializer)
        model_name = self.queryset.model.__name__
        invalidate_model_cache(model_name)

    def perform_destroy(self, instance):
        super().perform_destroy(instance)
        model_name = self.queryset.model.__name__
        invalidate_model_cache(model_name)

    def perform_create(self, serializer):
        super().perform_create(serializer)
        model_name = self.queryset.model.__name__
        invalidate_model_cache(model_name)


class AboutMeViewSet(CachedModelViewSet):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer

class PortfolioItemViewSet(CachedModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer

class ProjectViewSet(CachedModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ResumeViewSet(CachedModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer

from .utils import ContactRateThrottle

class ContactView(APIView):
    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            # Check rate limit
            rate_throttle = ContactRateThrottle()
            if not rate_throttle.allow_request(serializer.validated_data['email']):
                return Response({
                    'status': 'error',
                    'message': 'Too many messages sent. Please try again later.'
                }, status=status.HTTP_429_TOO_MANY_REQUESTS)

            contact = serializer.save()
            
            # Send email
            subject = f"New Contact Form Submission from {contact.name}"
            message = f"""
            New contact form submission from your portfolio website:

            Name: {contact.name}
            Email: {contact.email}
            Subject: {contact.subject}
            
            Message:
            {contact.message}
            
            This email was sent from your portfolio website's contact form.
            """
            
            try:
                send_mail(
                    subject,
                    message,
                    settings.DEFAULT_FROM_EMAIL,
                    [settings.ADMIN_EMAIL],
                    fail_silently=False,
                )
                return Response({
                    'status': 'success',
                    'message': 'Your message has been sent successfully! I will get back to you soon.'
                }, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({
                    'status': 'error',
                    'message': 'Failed to send email. Please try again later.'
                }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
        return Response({
            'status': 'error',
            'errors': serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
