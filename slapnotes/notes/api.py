from .models import Blogpost 
from .models import BlogCategory 
from .models import Product 
from .models import CarouselImage
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from django import forms
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from django_filters import rest_framework
from .serializers import (BlogpostSerializer, ContactEmailSerializer, ProductSerializer,
        CarouselImageSerializer, BlogCategorySerializer)

class BlogCategoryViewSet(viewsets.ModelViewSet):
    serializer_class = BlogCategorySerializer
    queryset = BlogCategory.objects.all()

class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-created_at')
    filter_backends = (rest_framework.DjangoFilterBackend,)
    filter_fields = ('categories',)

class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

class CarouselImageViewSet(viewsets.ModelViewSet):
    serializer_class = CarouselImageSerializer
    queryset = CarouselImage.objects.all()

class ContactEmailAPI(generics.GenericAPIView):
    serializer_class = ContactEmailSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        name = serializer.validated_data['name']
        email = serializer.validated_data['reply']
        message = serializer.validated_data['message']
        email_text = "You received a message from {name} at {email}: {message}".format(
                name=name, email=email, message=message)
        send_mail("Contact email from Slapnote", email_text, getattr(settings, 'DEFAULT_FROM_EMAIL'), [getattr(settings, 'DEFAULT_FROM_EMAIL')])
        return Response(serializer.data)
