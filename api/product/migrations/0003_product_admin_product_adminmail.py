# Generated by Django 4.1.7 on 2023-05-23 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_product_desc'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='admin',
            field=models.CharField(default='John Smith', max_length=100),
        ),
        migrations.AddField(
            model_name='product',
            name='adminMail',
            field=models.CharField(default='example@email.com', max_length=50),
        ),
    ]