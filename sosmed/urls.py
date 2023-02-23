from django.contrib import admin
from django.urls import path, include
from sosmed.views import *

app_name = 'sosmed'

urlpatterns = [
    path('', index, name='index'),
    path('json/', show_json, name='show_json'),
    path('post_json/', post_data, name='post_data'),
    path('edit_json/', edit_data, name='edit_data'),
    path('delete_json/', delete_data, name='delete_data')
]


