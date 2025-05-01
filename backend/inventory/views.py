from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

from .models import Product, InventoryRecord
from .serializers import ProductSerializer, InventoryRecordSerializer

from rest_framework.permissions import IsAuthenticated

class YourSecureView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"msg": "You are authenticated!"})
    
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class InventoryRecordViewSet(viewsets.ModelViewSet):
    queryset = InventoryRecord.objects.all()
    serializer_class = InventoryRecordSerializer