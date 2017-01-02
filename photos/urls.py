from django.conf.urls.defaults import *

from rest_framework.urlpatterns import format_suffix_patterns
import views

urlpatterns = [
    url(r'^photos/$', views.PhotoList.as_view(), name = "photo-list"),
    url(r'^photos/(?P<pk>[0-9]+)/$',  views.PhotoDetail.as_view()),
]
urlpatterns = format_suffix_patterns(urlpatterns)
