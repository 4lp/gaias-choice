from django.db import models
from django.contrib.auth.models import User

class Blogpost(models.Model):
    title = models.CharField(max_length=255, default='')
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, models.SET_NULL, blank=True, null=True)
    
    def __str__(self):
        return self.title

