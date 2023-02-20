from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
from django.http import HttpResponse
from django.core import serializers
from django.views.decorators.csrf import csrf_exempt
import json
from datetime import datetime


# Create your views here.
        
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
        date_data = body.get("date")
        

        new_item = Message(date=date_data, message_data=message_data)
        new_item.save()
        # print(request.POST['message_data'])
        return HttpResponse()

@csrf_exempt
def edit_data(request):
    if (request.method == 'POST'):
        pkSelek = json.loads(request.body)
        print(pkSelek)
        a = pkSelek["pk"]

        # pkSelek = int(pkSelek)
        # allData = Message.objects.all()
        # print(type(pkSelek))
        
        # all_data 

        # for i in Message.objects.all():
        #     print(i)
        #     if i == "Message objects (" + str(pkSelek) + ")":
        #         print("yey")
        #     else :
        #         print("brah")    

        a1 = Message.objects.get(pk=a)
        print(a1.message_data)
        print(a1.date)
        a1.message_data = 
        return HttpResponse()