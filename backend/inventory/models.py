from django.db import models

# Create your models here.
class Product(models.Model):
    sku = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=255)
    supplier = models.CharField(max_length=255, blank=True)
    cost_per_unit = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name

class InventoryRecord(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    last_updated = models.DateTimeField(auto_now=True)
