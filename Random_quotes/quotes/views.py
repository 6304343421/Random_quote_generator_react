from django.shortcuts import render
from quotes.models import Quotation
from quotes.serializers import QuotationSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.


class Home(APIView):
    def get(self,request,*args,**kwargs):
        data=Quotation.objects.all()
        serializer=QuotationSerializer(data,many=True)
        return Response(serializer.data)