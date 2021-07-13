from django.contrib import admin
from .models import student,teacher,parents
# Register your models here.

admin.site.register(student)
admin.site.register(teacher)
admin.site.register(parents)