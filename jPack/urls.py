
from django.conf.urls import url, include
from django.contrib import admin
from photos.models import Photo
from jPack.views import IndexView
from django.conf.urls.static import static

class PhotosAdmin(admin.ModelAdmin):
      list_display    = ['isPrimary','title', 'comment', 'photo','album']

admin.site.register(Photo, PhotosAdmin)

urlpatterns = [
    url(r'^', include('photos.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', IndexView.as_view(), name='index'),
]
