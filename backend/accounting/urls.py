from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, ExpenseViewSet, ProfitLossReportView

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet, basename='transaction')
router.register(r'expenses', ExpenseViewSet, basename='expense')

urlpatterns = [
    path('', include(router.urls)),
    path('profit-loss-report/', ProfitLossReportView.as_view(), name='profit-loss-report'),
]