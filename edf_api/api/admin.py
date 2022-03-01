from django.contrib import admin
from .models import Doner, Products, User,Test,Medicine

# Register your models here.
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display =['id','firstname','lastname','email','password','phone','address','pin']

@admin.register(Test)
class testAdmin(admin.ModelAdmin):
    list_display =['id','name','discription','fees']

@admin.register(Doner)
class donerAdmin(admin.ModelAdmin):
    list_display =['id','name','email','phone']

@admin.register(Products)
class productsAdmin(admin.ModelAdmin):
    list_display =['id','name','discription','price','image']
@admin.register( Medicine)
class medicineAdmin(admin.ModelAdmin):
    list_display =['id','email','image']

    