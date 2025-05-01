from rest_framework import serializers
from .models import Product, InventoryRecord

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class InventoryRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = InventoryRecord
        fields = '__all__'