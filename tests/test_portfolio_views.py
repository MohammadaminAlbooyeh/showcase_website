import pytest
from django.urls import reverse

@pytest.mark.django_db
def test_homepage_accessibility(client):
    """Test if the homepage is accessible."""
    url = reverse('homepage')  # Replace 'homepage' with the actual name of your homepage URL pattern
    response = client.get(url)
    assert response.status_code == 200