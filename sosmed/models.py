from django.db import models

class Message(models.Model):
    create_date = models.DateTimeField(auto_now_add=True)
    message_data = models.TextField()
    edit_date = models.DateTimeField(auto_now=True)
