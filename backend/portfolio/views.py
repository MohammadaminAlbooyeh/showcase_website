from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from django.core.mail import send_mail
from django.conf import settings
from .models import AboutMe, PortfolioItem, Project, Resume, Contact
from .serializers import (
    AboutMeSerializer,
    PortfolioItemSerializer,
    ProjectSerializer,
    ResumeSerializer,
    ContactSerializer
)

class AboutMeViewSet(viewsets.ModelViewSet):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class PortfolioItemViewSet(viewsets.ModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

class ResumeViewSet(viewsets.ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

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
