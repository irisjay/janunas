from django.http import JsonResponse
from django.core import serializers
import json
from django.db.models import Q
from .models import *

#   For ALL

def register(request):
    try:
        username = request.META['HTTP_X_USERNAME']
        password = request.META['HTTP_X_PASSWORD']
        
        participant = Participant()
        participant.save()
        user = User(username=username, password=password, as_participant=participant)
        user.save()
        
        data = {'registered':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def login(request):
    try:
        username = request.META['HTTP_X_USERNAME']
        password = request.META['HTTP_X_PASSWORD']
        
        user = User.objects.get(username=username,password=password)
        
        data = {'id':user.id, 'as_instructor':bool(user.as_instructor), 'as_administrator':bool(user.as_administrator), 'enroll_restricted':bool(user.as_participant.enroll_restricted)}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

#   For USERS

def courses(request):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        courses = Course.objects.filter(published=True)
        
        data = {'courses':[{'name':course.name,'id':course.id} for course in courses.all()]}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
        
def course(request, course_id):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        course = Course.objects.get(id=course_id)
        
        data = {'course':serialize_course(course, user.as_participant)}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
  
def my_courses(request):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        completed_courses = user.as_participant.completed_courses
        enrolled_courses = user.as_participant.enrolled_courses
        courses_as_instructor = user.as_instructor and user.as_instructor.course_set.all() or []
        
        data = {'as_participant':{'completed_courses':[{'name':course.name,'id':course.id} for course in completed_courses.all()], 'enrolled_courses':[{'name':course.name,'id':course.id} for course in enrolled_courses.all()]}, 'as_instructor':[{'name':course.name,'id':course.id} for course in courses_as_instructor]}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

#   For PARTICIPANTS

def course_enroll(request, course_id):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        participant = user.as_participant
        if participant.enroll_restricted and participant.enrolled_courses.count() >= 1:
            raise Exception('enroll restricted')
        else:
            course = Course.objects.get(id=course_id)
            participant.enrolled_courses.add(course)
            participant.save()
            
        data = {'enrolled':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_component_done(request, course_id, module_order, component_order):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        participant = user.as_participant
        course = Course.objects.get(id=course_id,participant=participant)
        module = Module.objects.get(order=module_order, course=course)
        component = Component.objects.get(order=component_order,module=module)
        component.completed_participants.add(participant)
        component.save()
        
        if module.component_set.filter(completed_participants=participant).count() == module.component_set.count():
        #if Component.objects.filter(module=module,completed_participants=participant).count() == module.component_set.count():
            module.completed_participants.add(participant)
            module.save()
            
            if course.module_set.filter(completed_participants=participant).count() == course.module_set.count():
            #if Module.objects.filter(course=course,completed_participants=participant).count() == course.module_set.count():
                course.completed_participants.add(participant)
                course.participant.remove(participant)
                course.save()
            
        data = {'done':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
        
#   For INSTRUCTORS

def my_course_new(request):
    try:
        user_id = request.META['HTTP_X_USER']
        course_name = request.META['HTTP_X_COURSE_NAME']
        course_description = request.META['HTTP_X_COURSE_DESCRIPTION']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course(name=course_name, description=course_description)
        course.save()
        course.instructor.add(instructor)
        course.save()
        
        data = {'id':course.id}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
    
def my_course_delete(request):
    try:
        user_id = request.META['HTTP_X_USER']
        course_id = request.META['HTTP_X_COURSE']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        course.delete()
        
        data = {'deleted':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
    
def my_course_publish(request):
    try:
        user_id = request.META['HTTP_X_USER']
        course_id = request.META['HTTP_X_COURSE']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        course.published = True
        course.save()
        
        data = {'published':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_new(request, course_id):
    try:
        user_id = request.META['HTTP_X_USER']
        module_name = request.META['HTTP_X_MODULE_NAME']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module(name=module_name, order=course.module_set.count(), course=course)
        module.save()
        
        data = {'order':module.order}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_reorder(request, course_id):
    try:
        user_id = request.META['HTTP_X_USER']
        module_1_order = request.META['HTTP_X_MODULE_1']
        module_2_order = request.META['HTTP_X_MODULE_2']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module_1 = Module.objects.get(order=module_1_order,course=course)
        module_2 = Module.objects.get(order=module_2_order,course=course)
        module_1.order = module_2_order;
        module_2.order = module_1_order;
        module_1.save()
        module_2.save()
        
        data = {'reordered':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
    
def my_course_module_delete(request, course_id):
    try:
        user_id = request.META['HTTP_X_USER']
        module_order = int(request.META['HTTP_X_MODULE'])
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module.objects.get(order=module_order,course=course)
        
        for order in range(module_order+1, course.module_set.count()):
            shifted_module = Module.objects.get(order=order,course=course)
            shifted_module.order = shifted_module.order-1
            shifted_module.save()
        
        module.delete()
        
        data = {'deleted':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_component_new(request, course_id, module_order):
    try:
        user_id = request.META['HTTP_X_USER']
        component_name = request.META['HTTP_X_COMPONENT_NAME']
        component_content = request.META['HTTP_X_COMPONENT_CONTENT']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module.objects.get(order=module_order, course=course)
        component = Component(name=component_name, order=module.component_set.count(), content=component_content, module=module)
        component.save()
        
        data = {'order':component.order}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_component_reorder(request, course_id, module_order):
    try:
        user_id = request.META['HTTP_X_USER']
        component_1_order = request.META['HTTP_X_COMPONENT_1']
        component_2_order = request.META['HTTP_X_COMPONENT_2']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module.objects.get(order=module_order, course=course)
        component_1 = Component.objects.get(order=component_1_order,module=module)
        component_2 = Component.objects.get(order=component_2_order,module=module)
        component_1.order = component_2_order;
        component_2.order = component_1_order;
        component_1.save()
        component_2.save()
        
        data = {'reordered':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_component_delete(request, course_id, module_order):
    try:
        user_id = request.META['HTTP_X_USER']
        component_order = int(request.META['HTTP_X_COMPONENT'])
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module.objects.get(order=module_order, course=course)
        component = Component.objects.get(order=component_order,module=module)
        
        for order in range(component_order+1, module.component_set.count()):
            shifted_module = Component.objects.get(order=order,module=module)
            shifted_module.order = shifted_module.order-1
            shifted_module.save()
        
        component.delete()
        
        data = {'deleted':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def my_course_module_component_edit(request, course_id, module_order, component_order):
    try:
        user_id = request.META['HTTP_X_USER']
        component_name = request.META['HTTP_X_COMPONENT_NAME']
        component_content = request.META['HTTP_X_COMPONENT_CONTENT']
        
        user = User.objects.get(id=user_id)
        instructor = user.as_instructor
        course = Course.objects.get(id=course_id,instructor=instructor)
        module = Module.objects.get(order=module_order, course=course)
        component = Component.objects.get(order=component_order,module=module)
        component.name = component_name
        component.content = component_content
        component.save()
        
        data = {'edited':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
    
#   For ADMINISTRATORS

def users(request):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        admin = user.as_administrator
        users = User.objects.all()
        
        data = {'users':[serialize_user(user) for user in users]}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def user(request, his_user_id):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        admin = user.as_administrator
        him = User.objects.get(id=his_user_id)
        
        data = {'user':serialize_user(user)}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})

def user_edit(request, his_user_id):
    try:
        user_id = request.META['HTTP_X_USER']
        
        user = User.objects.get(id=user_id)
        admin = user.as_administrator
        him = User.objects.get(id=his_user_id)
        
        if 'HTTP_X_USERNAME' in request.META:
            him.username = request.META['HTTP_X_USERNAME']
            him.save()
        if 'HTTP_X_PASSWORD' in request.META:
            him.password = edits['HTTP_X_PASSWORD']
            him.save()
        if 'HTTP_X_INSTRUCTOR_REMOVE' in request.META:
            him.as_instructor.delete()
            him.save()
        if 'HTTP_X_INSTRUCTOR_ADD' in request.META:
            his_instructor = Instructor()
            his_instructor.save()
            him.as_instructor = his_instructor
            him.save()
        if 'HTTP_X_ADMINISTRATOR_REMOVE' in request.META:
            him.as_administrator.delete()
            him.save()
        if 'HTTP_X_ADMINISTRATOR_ADD' in request.META:
            his_administrator = Administrator()
            his_administrator.save()
            him.as_administrator = his_administrator
            him.save()
        if 'HTTP_X_RESTRICT_REMOVE' in request.META:
            him.as_participant.enroll_restricted = False
            him.as_participant.save()
        if 'HTTP_X_RESTRICT_ADD' in request.META:
            him.as_participant.enroll_restricted = True
            him.as_participant.save()
        
        data = {'edited':True}
        
        return JsonResponse(data)
    except Exception as error:
        return JsonResponse({'error': repr(error)})
        
        

        
def serialize_course(self, participant):
    return {
        'name': self.name,
        'description': self.description,
        'published': self.published,
        'done': self.completed_participants.filter(id=participant.id).count(),
        'instructor': [him.id for him in self.instructor.all()],
        'participant': [him.id for hiim in self.participant.all()],
        'module_set': [serialize_module(module, participant) for module in self.module_set.all()]
    }
def serialize_module(self, participant):
    return {
        'name': self.name,
        'done': self.completed_participants.filter(id=participant.id).count(),
        'order': self.order,
        'component_set': [serialize_component(component, participant) for component in self.component_set.all()]
    }
def serialize_component(self, participant):
    return {
        'name': self.name,
        'done': self.completed_participants.filter(id=participant.id).count(),
        'order': self.order,
        'content': self.content
    }
def serialize_user(self):
    return {
        'id': self.id,
        'username': self.username,
        'password': self.password,
        'enroll_restricted': bool(self.as_participant.enroll_restricted),
        'instructor': bool(self.as_instructor),
        'administrator': bool(self.as_administrator)
    }