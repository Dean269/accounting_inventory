#from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Transaction, Expense
from .serializers import TransactionSerializer, ExpenseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum, F, DecimalField

class YourSecureView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({"msg": "You are authenticated!"})
    
class TransactionViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer

class ExpenseViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Expense.objects.all()
    serializer_class = ExpenseSerializer

class ProfitLossReportView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        total_revenue = Transaction.objects.aggregate(total=Sum('revenue'))['total'] or 0
        total_fba_fees = Transaction.objects.aggregate(total=Sum('fba_fee'))['total'] or 0
        total_refunds = Transaction.objects.aggregate(total=Sum('refund'))['total'] or 0
        
        cogs = Transaction.objects.aggregate(
            total_cogs=Sum(F('quantity_sold') * F('product__cost_per_unit'), output_field=DecimalField())
        )['total_cogs'] or 0

        total_expenses = Expense.objects.aggregate(total=Sum('amount'))['total'] or 0

        gross_profit = total_revenue - cogs - total_fba_fees
        net_profit = gross_profit - total_expenses - total_refunds
        
        report = {
            'total_revenue': total_revenue,
            'cogs': cogs,
            'total_fba_fees': total_fba_fees,
            'gross_profit': gross_profit,
            'total_other_expenses': total_expenses,
            'total_refunds': total_refunds,
            'net_profit': net_profit,
        }

        return Response(report)