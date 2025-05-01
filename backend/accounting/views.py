#from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Transaction, Expense
from .serializers import TransactionSerializer, ExpenseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class YourSecureView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"msg": "You are authenticated!"})
    
class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer