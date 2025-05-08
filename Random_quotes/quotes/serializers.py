from rest_framework import serializers
from rest_framework.response import Response
from quotes.models import Quotation

class QuotationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Quotation
        fields="__all__"