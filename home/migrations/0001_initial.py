# Generated by Django 5.1.3 on 2024-11-09 12:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('category', models.CharField(choices=[('iPhone', 'iPhone')], max_length=50)),
                ('image_url', models.URLField(blank=True, max_length=500, null=True)),
                ('rating', models.DecimalField(decimal_places=1, default=0.0, max_digits=2)),
                ('stock', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]