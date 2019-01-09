from django.conf.urls import include, url
from rest_framework import routers
from .api import (BlogpostViewSet, ContactEmailAPI)
from django.urls import re_path
from knox import views as knox_views

router = routers.DefaultRouter()
router.register('blogpost', BlogpostViewSet, 'blogpost')

urlpatterns = [
    re_path("^contact/$", ContactEmailAPI.as_view()),
    #re_path("^blog/$", BlogpostAPI.as_view()),
    re_path("^", include(router.urls)),
]
