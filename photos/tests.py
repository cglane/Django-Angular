from photos.models import Photo
from django.core.urlresolvers import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .serializers import PhotoSerializer

class Photo(APITestCase):
    def test_get_photos(self):
        """
        Ensure we can create a new account object.
        """
        url = reverse('photo-list')
        data = {}
        response = self.client.get(url, data, format='json')
        self.assertTrue(status.is_success(response.status_code))

    def test_create_photos(self):
        url = reverse('photo-list')
        data = {'title': 'DabApps','code':'this is code'}
        response = self.client.post(url, data, format='json')
        self.assertEqual(Photo.objects.get().title, 'DabApps')
        self.assertEqual(Photo.objects.count(), 1)
