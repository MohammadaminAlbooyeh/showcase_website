import pytest
from django.test import Client
from rest_framework.test import APIClient
from .models import AboutMe, Contact


@pytest.mark.django_db
def test_api_aboutme_get():
    """Test that GET /api/aboutme/ returns 200."""
    client = APIClient()
    response = client.get('/api/aboutme/')
    assert response.status_code == 200


@pytest.mark.django_db
def test_api_contact_create(mocker):
    """Test creating a contact form submission."""
    mocker.patch('portfolio.views.send_mail')
    client = APIClient()
    data = {
        'name': 'Test User',
        'email': 'test@example.com',
        'subject': 'Test Subject',
        'message': 'Test message'
    }
    response = client.post('/api/contact/', data, format='json')
    assert response.status_code == 201
    assert Contact.objects.filter(email='test@example.com').exists()
