from django.conf.urls import include, url
from rest_framework import routers
from .api import (BlogpostViewSet, ContactEmailAPI, ProductViewSet, CarouselImageViewSet)
from django.urls import re_path 
from knox import views as knox_views
from dynamic_preferences.api.viewsets import GlobalPreferencesViewSet
from rest_framework.permissions import AllowAny

GlobalPreferencesViewSet.permission_classes = [AllowAny]

router = routers.DefaultRouter()
router.register('blogpost', BlogpostViewSet, 'blogpost')
router.register('carouselimage', CarouselImageViewSet, 'carouselimage')
router.register('product', ProductViewSet, 'product')
router.register('global', GlobalPreferencesViewSet, 'global')

urlpatterns = [
    re_path("^contact/$", ContactEmailAPI.as_view()),
    re_path("^", include(router.urls)),
]
