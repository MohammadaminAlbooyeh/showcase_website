from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.core.mail import send_mail
from django.conf import settings
from .models import AboutMe, PortfolioItem, Project, Resume, Contact, ContactMessage
from .serializers import (
    AboutMeSerializer, 
    PortfolioItemSerializer, 
    ProjectSerializer, 
    ResumeSerializer,
    ContactSerializer
)
from .models import AboutMe, PortfolioItem, Project, Resume
from .serializers import AboutMeSerializer, PortfolioItemSerializer, ProjectSerializer, ResumeSerializer

class AboutMeViewSet(viewsets.ModelViewSet):
    queryset = AboutMe.objects.all()
    serializer_class = AboutMeSerializer

class PortfolioItemViewSet(viewsets.ModelViewSet):
    queryset = PortfolioItem.objects.all()
    serializer_class = PortfolioItemSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ResumeViewSet(viewsets.ModelViewSet):
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
                    ['amin.albooye@gmail.com'],
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

class ContactMessageView(APIView):
    def post(self, request):
        data = request.data
        ContactMessage.objects.create(
            name=data.get('name'),
            email=data.get('email'),
            subject=data.get('subject'),
            message=data.get('message')
        )
        return Response({"message": "Email saved successfully!"}, status=status.HTTP_201_CREATED)
