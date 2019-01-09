from .models import Blogpost 
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from django import forms
from django.core.mail import send_mail, BadHeaderError
from django.conf import settings
from .serializers import (BlogpostSerializer, ContactEmailSerializer)


class BlogpostViewSet(viewsets.ModelViewSet):
    serializer_class = BlogpostSerializer
    queryset = Blogpost.objects.all().order_by('-created_at')

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
