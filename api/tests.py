from django.test import TestCase
from django.test import Client
from .models import *

class MasterTest(TestCase):
	def setUp(self):
		participant_backing = Participant()
		participant_backing.save()
		admin_backing = Administrator()
		admin_backing.save()
		admin = User(username='admin',password='admin',as_participant=participant_backing,as_administrator=admin_backing)
		admin.save()

	def test_everything(self):
		"""Everything"""
		c = Client()
		
		def req(*args, **kwargs):
			response = c.get(*args, **kwargs)
			try:
				self.assertEqual(response.status_code, 200, 'HTTP success: '+str(response.status_code))
				self.assertFalse('error' in response.json(), 'no error: '+str('error' in response.json() and response.json()['error']))
				print(args, kwargs, response.json())
				return response.json()
			except Exception as e:
				print (response, response.json())
				raise
		
		print	('register users')
		print		('test-participant')
		req				('/api/register', HTTP_X_USERNAME='test-participant', HTTP_X_PASSWORD='testlol')
		print		('test-instructor')
		req				('/api/register', HTTP_X_USERNAME='test-instructor', HTTP_X_PASSWORD='testlol')
		print		('test-admin')
		req				('/api/register', HTTP_X_USERNAME='test-admin', HTTP_X_PASSWORD='testlol')
		print('')
		print	('login users')
		print		('test-participant')
		part_id = req	('/api/login', HTTP_X_USERNAME='test-participant', HTTP_X_PASSWORD='testlol') ['id']
		print		('test-instructor')
		instr_id = req	('/api/login', HTTP_X_USERNAME='test-instructor', HTTP_X_PASSWORD='testlol')['id']
		print		('test-admin')
		adm_id = req	('/api/login', HTTP_X_USERNAME='test-admin', HTTP_X_PASSWORD='testlol')['id']
		print		('admin')
		admin_id = req	('/api/login', HTTP_X_USERNAME='admin', HTTP_X_PASSWORD='admin')['id']
		print('')
		print	('edit users')
		print		('edit instructor')
		req				('/api/user/'+str(instr_id)+'/edit', HTTP_X_USER=admin_id, HTTP_X_INSTRUCTOR_ADD='add')
		print		('edit admin')
		req				('/api/user/'+str(adm_id)+'/edit', HTTP_X_USER=admin_id, HTTP_X_ADMINISTRATOR_ADD='add')
		print('')
		print	('query users')
		print		('query all')
		req				('/api/users', HTTP_X_USER=admin_id)
		print		('query participant')
		req				('/api/user/'+str(part_id), HTTP_X_USER=admin_id)
		print		('query instructor')
		req				('/api/user/'+str(instr_id), HTTP_X_USER=admin_id)
		print		('query administrator')
		req				('/api/user/'+str(adm_id), HTTP_X_USER=admin_id)
		print('')
		print	('manipulate course')
		print		('create course')
		crs_1_id = req	('/api/my/course/new', HTTP_X_USER=instr_id, HTTP_X_COURSE_NAME='course one')['id']
		print		('create another course')
		crs_2_id = req	('/api/my/course/new', HTTP_X_USER=instr_id, HTTP_X_COURSE_NAME='course two')['id']
		print		('delete course')
		req				('/api/my/course/delete', HTTP_X_USER=instr_id, HTTP_X_COURSE=crs_1_id)
		print		('publish course')
		req				('/api/my/course/publish', HTTP_X_USER=instr_id, HTTP_X_COURSE=crs_2_id)
		print		('add module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/new', HTTP_X_USER=instr_id, HTTP_X_MODULE_NAME='module 1')
		print		('add module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/new', HTTP_X_USER=instr_id, HTTP_X_MODULE_NAME='module 2')
		print		('add module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/new', HTTP_X_USER=instr_id, HTTP_X_MODULE_NAME='module 3')
		print		('add module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/new', HTTP_X_USER=instr_id, HTTP_X_MODULE_NAME='module 4')
		print		('delete module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/delete', HTTP_X_USER=instr_id, HTTP_X_MODULE=1)
		print		('reorder module')
		req				('/api/my/course/'+str(crs_2_id)+'/module/reorder', HTTP_X_USER=instr_id, HTTP_X_MODULE_1=0, HTTP_X_MODULE_2=2)
		print		('query courses')
		req				('/api/courses', HTTP_X_USER=instr_id)
		print		('query course')
		req				('/api/course/2', HTTP_X_USER=instr_id)
	
	
	

'''
-    /register
-    /login

X    /courses
X    /course/:id
X    /my/courses

P    /course/:id/enroll
P    /my/course/:id/module/:order/component/:order/done

I    /my/course/new
I    /my/course/delete
I    /my/course/publish
I    /my/course/:id/module/new
I    /my/course/:id/module/reorder
I    /my/course/:id/module/delete
I    /my/course/:id/module/:order/component/new
I    /my/course/:id/module/:order/component/reorder
I    /my/course/:id/module/:order/component/delete
I    /my/course/:id/module/:order/component/:order/edit

A    /users
A    /user/:id
A    /user/:id/edit
'''