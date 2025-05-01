from django.db import models
from inventory.models import Product

class Transaction(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    date = models.DateField()
    quantity_sold = models.IntegerField()
    revenue = models.DecimalField(max_digits=12, decimal_places=2)
    fba_fee = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    refund = models.DecimalField(max_digits=10, decimal_places=2, default=0)

class Expense(models.Model):
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateField()