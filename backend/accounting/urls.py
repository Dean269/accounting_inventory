from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TransactionViewSet, ExpenseViewSet

router = DefaultRouter()
router.register(r'transactions', TransactionViewSet)
router.register(r'expenses', ExpenseViewSet)

urlpatterns = [
    path('', include(router.urls)),
]