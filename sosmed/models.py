
from django.db import models
  
# Create your models here.
class React(models.Model):
    name = models.CharField(max_length=30)
    detail = models.CharField(max_length=500)

class Message(models.Model):
    date = models.DateField()
    message_data = models.TextField()
