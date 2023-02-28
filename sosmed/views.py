from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from django.http import HttpResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime

        
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def show_json(request):
    message_per_person = Message.objects.all()
    return HttpResponse(serializers.serialize("json", message_per_person), content_type="application/json")

@csrf_exempt
def post_data(request):
    if request.method == 'POST':
        print(request.body)
        body = json.loads(request.body)
        print(body.get("message_data"))
        message_data = body.get("message_data")
        

        new_item = Message(message_data=message_data)
        new_item.save()
        return HttpResponse()

@csrf_exempt
def edit_data(request):
    if (request.method == 'POST'):
        selectedData = json.loads(request.body)
        print(selectedData)
        a = selectedData["pk"]
        a1 = Message.objects.get(pk=a)
        print(a1.message_data)
        print("batas ngab")
        print(selectedData["message"])
        a1.message_data = selectedData["message"]
        a1.save()
        return HttpResponse()
    
@csrf_exempt
def delete_data(request):
    if (request.method == 'POST'):
        selectedData = json.loads(request.body)

        baseData = Message.objects.get(pk=selectedData["pk"])

        baseData.delete()
        return HttpResponse()
