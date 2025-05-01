from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, InventoryRecordViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'inventory', InventoryRecordViewSet)

urlpatterns = router.urls