# Generated by Django 3.2.12 on 2023-08-25 14:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plans', '0004_alter_plan_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plan',
            name='city',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='plan',
            name='country',
            field=models.CharField(max_length=100),
        ),
    ]