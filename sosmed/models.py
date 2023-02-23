
from datetime import timezone
from django.db import models
# from django.utils.timezone import timezon
  
# Create your models here.
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)

class Message(models.Model):
    create_date = models.DateTimeField(auto_now_add=True)
    message_data = models.TextField()
    edit_date = models.DateTimeField(auto_now=True)
