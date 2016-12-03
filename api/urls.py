from django.conf.urls import url
from . import views
from revproxy.views import ProxyView

urlpatterns = [
	url (r'^register$', views.register, name = 'register'),
	url (r'^login$', views.login, name = 'login'),
	url (r'^courses$', views.courses, name = 'courses'),
	url (r'^course/([^/]+)$', views.course, name = 'course'),
	url (r'^course/([^/]+)/enroll$', views.course_enroll, name = 'course_enroll'),
	url (r'^my/courses$', views.my_courses, name = 'my_courses'),
	url (r'^my/course/new$', views.my_course_new, name = 'my_course_new'),
	url (r'^my/course/delete$', views.my_course_delete, name = 'my_course_delete'),
	url (r'^my/course/publish$', views.my_course_publish, name = 'my_course_publish'),
	url (r'^my/course/([^/]+)/module/new$', views.my_course_module_new, name = 'my_course_module_new'),
	url (r'^my/course/([^/]+)/module/reorder$', views.my_course_module_reorder, name = 'my_course_module_reorder'),
	url (r'^my/course/([^/]+)/module/delete$', views.my_course_module_delete, name = 'my_course_module_delete'),
	url (r'^my/course/([^/]+)/module/([^/]+)/component/new$', views.my_course_module_component_new, name = 'my_course_module_component_new'),
	url (r'^my/course/([^/]+)/module/([^/]+)/component/reorder$', views.my_course_module_component_reorder, name = 'my_course_module_component_reorder'),
	url (r'^my/course/([^/]+)/module/([^/]+)/component/delete$', views.my_course_module_component_delete, name = 'my_course_module_component_delete'),
	url (r'^my/course/([^/]+)/module/([^/]+)/component/([^/]+)/done$', views.my_course_module_component_done, name = 'my_course_module_component_done'),
	url (r'^my/course/([^/]+)/module/([^/]+)/component/([^/]+)/edit$', views.my_course_module_component_edit, name = 'my_course_module_component_edit'),
	url (r'^users$', views.users, name = 'users'),
	url (r'^user/([^/]+)$', views.user, name = 'user'),
	url (r'^user/([^/]+)/edit$', views.user_edit, name = 'user_edit'),
	
	
	
    url(r'^upload/(?P<path>.*)$', ProxyView.as_view(upstream='https://filebin.net/'))
]

'''
Instructors: manage modules and components (including changing their ordering), possess sole permission to modify their courses.
Participants: register as a participant, view rendered components of an enrolled course.
Administrators: control access, restrict permission to create and modify courses to instructors, designate a user as instructor.
HR Dept.: restrict users to take only one course at a time.

need to make:
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
#A    /course/all


order:

/register
/login

/courses
#/course/all
/course/:id
/course/:id/enroll

/my/courses
/my/course/new
/my/course/delete
/my/course/publish
/my/course/:id/module/new
/my/course/:id/module/reorder
/my/course/:id/module/delete
/my/course/:id/module/:order/component/new
/my/course/:id/module/:order/component/reorder
/my/course/:id/module/:order/component/delete
/my/course/:id/module/:order/component/:order/done
/my/course/:id/module/:order/component/:order/edit

/users
/user/:id
/user/:id/edit
'''