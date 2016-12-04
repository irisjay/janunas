from django.contrib import admin

from .models import *

admin.site.register(Category)
admin.site.register(Course)
admin.site.register(Module)
admin.site.register(Component)
admin.site.register(Participant)
admin.site.register(Instructor)
admin.site.register(Administrator)
admin.site.register(User)
admin.site.register(HR)