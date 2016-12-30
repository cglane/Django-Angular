from rest_framework import serializers
# from photos.models import Photo, LANGUAGE_CHOICES, STYLE_CHOICES
from photos.models import Photo


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('id', 'title', 'comment','album','photo','isPrimary')
