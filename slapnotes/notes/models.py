from django.db import models
from django.contrib.auth.models import User

class Blogpost(models.Model):
    title = models.CharField(max_length=255, default='')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)
    
    def __str__(self):
        return self.title

class Product(models.Model):
    name = models.CharField(max_length=255, default='')
    path = models.CharField(max_length=255, default='')
    description = models.TextField()
    images = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)
    
    def __str__(self):
        return self.name

class CarouselImage(models.Model):
    name = models.CharField(max_length=255, default='')
    image = models.TextField()
 
    def __str__(self):
        return self.name
