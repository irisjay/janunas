from __future__ import unicode_literals

from django.db import models
	
class Course(models.Model):
	name = models.CharField(max_length=30, unique=True)
	published = models.BooleanField(default=False)
	instructor = models.ManyToManyField('Instructor')
	participant = models.ManyToManyField('Participant', related_name='enrolled_courses', blank=True)
	
class Module(models.Model):
	name = models.CharField(max_length=30)
	order = models.IntegerField()
	course = models.ForeignKey(Course)

class Component(models.Model):
	name = models.CharField(max_length=30)
	order = models.IntegerField()
	content = models.TextField()
	module = models.ForeignKey(Module)

class Participant(models.Model):
	enroll_restricted = models.BooleanField(default=False)
	completed_courses = models.ManyToManyField(Course, related_name='completed_participants', blank=True)
	completed_modules = models.ManyToManyField(Module, related_name='completed_participants', blank=True)
	completed_components = models.ManyToManyField(Component, related_name='completed_participants', blank=True)

class Instructor(models.Model):
	pass

class Administrator(models.Model):
	pass

class User(models.Model):
	username = models.CharField(max_length=30, unique=True)
	password = models.CharField(max_length=30)
	as_participant = models.OneToOneField(Participant, on_delete=models.PROTECT)
	as_instructor = models.OneToOneField(Instructor, on_delete=models.SET_NULL, null=True, blank=True)
	as_administrator = models.OneToOneField(Administrator, on_delete=models.SET_NULL, null=True, blank=True)