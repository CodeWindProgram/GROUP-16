# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email,name,password=None):
        if not email:
            raise ValueError("user must have email address")
        #email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_teacheruser(self, email, name,password=None):
        #email = self.normalize_email(email)
        user = self.create_user(self, email=email, name=name)
        user.is_teacher = True
        user.set_password(password)
        user.save()
        return user 

    def create_parentuser(self, email, name,password=None):
        #email = self.normalize_email(email)
        user =  self.create_user(self, email, name)
        user.is_parent = True
        user.set_password(password)
        user.save()
        return user 

    def create_superuser(self, email, name,password):
        #email = self.normalize_email(email)
        user =  self.model(email=email, name=name)
        user.is_superuser = True
        user.is_staff = True
        user.set_password(password)
        user.save()
        return user       

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=225, unique=True)
    name = models.CharField(max_length=225)
    is_active = models.BooleanField(default=True)
    is_teacher = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_parent = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    college_id = models.CharField(max_length=225,unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name'] #can add other required info like phone etc,add to the list

    objects = UserAccountManager()
    def get_full_name(self):
        return self.name

    def get_short_name(self):
        return self.name

    def __str__(self):
        return self.email 

class student(models.Model):
    user = models.OneToOneField(UserAccount,on_delete=models.CASCADE,primary_key=True)
    phone_number = models.CharField(max_length=225) 
    roll = models.CharField(max_length=225, default="null")
    location = models.CharField(max_length=225)
    year = models.CharField(max_length=225)
    div = models.CharField(max_length=225)

class teacher(models.Model):
    user = models.OneToOneField(UserAccount,on_delete=models.CASCADE,primary_key=True)
    phone_number = models.CharField(max_length=225) 
    department = models.CharField(max_length=225, default="null")
    location = models.CharField(max_length=225)

class parents(models.Model):
    user = models.OneToOneField(UserAccount,on_delete=models.CASCADE,primary_key=True)
    is_parent = True