# Generated by Django 3.2.5 on 2021-07-13 18:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_useraccount_is_staff'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='college_id',
            field=models.CharField(default=0, max_length=225, unique=True),
            preserve_default=False,
        ),
    ]