riot.tag2('content-login', '<model-themer> <model-loginner></model-loginner> <button type="submit" name="login"> Login! </button> <button type="submit" name="register"> Register! </button> </model-themer>', '', '', function(opts) {
(function (self) {
	    remembers ({
	        username: undefined,
	        password: undefined
	    }) (self);

	    self .on ('mount', function () {
	        var login = self .root .querySelector ('button[name="login"]');
	        var register = self .root .querySelector ('button[name="register"]');

	        login .addEventListener ('click', function () {
	            self .stuff .trigger ('login', {
	                username: self .recalls ('username'),
	                password: self .recalls ('password')
	            });
	            self .stuff .one ('login', function (response) {
	                if (! response .error) {
	                    window .location .hash = '#service'
	                }
	            });
	        });
	        register .addEventListener ('click', function () {
	            self .stuff .trigger ('register', {
	                username: self .recalls ('username'),
	                password: self .recalls ('password')
	            });
	            self .stuff .one ('register', function (response) {
	                if (! response .error) {
	                    alert ('Successfully registered!');
	                }
	            });
	        });
	    });

	})(this);
});
riot.tag2('content-service-administrator', '<model-themer> <h1>MASTER SUPER SECRET ADMINISTRATOR BOARD</h1> <table> <tr><th>All Users</th><th></th><th></th></tr> <tr each="{id, user in piece ((recalls (\'all-users\') || {}) .users || {})}" riot-script="{(new Function (⁗self⁗,⁗user⁗,⁗\\n\\t\\t\\t\\tvar buttons_work =\\tfunction () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tutil .user_edit (user .id) (self);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar make_administrator = self .root .querySelector (\'button[to=\\⁗make_administrator\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmake_administrator && make_administrator .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'administrator-add\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'add\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar revoke_administrator = self .root .querySelector (\'button[to=\\⁗revoke_administrator\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trevoke_administrator && revoke_administrator .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'administrator-remove\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'remove\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar make_instructor = self .root .querySelector (\'button[to=\\⁗make_instructor\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tmake_instructor && make_instructor .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'instructor-add\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'add\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar unmake_instructor = self .root .querySelector (\'button[to=\\⁗unmake_instructor\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tunmake_instructor && unmake_instructor .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'instructor-remove\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'remove\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar restrict_enrolling = self .root .querySelector (\'button[to=\\⁗restrict_enrolling\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\trestrict_enrolling && restrict_enrolling .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'restrict-add\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'add\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvar unrestrict_enrolling = self .root .querySelector (\'button[to=\\⁗unrestrict_enrolling\\⁗]\');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tunrestrict_enrolling && unrestrict_enrolling .addEventListener (\'click\', function () {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tself .stuff .trigger (\'edit\', {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_type: \'restrict-remove\',\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tedit_content: \'remove\'\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t});\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}, false);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t};\\n\\t\\t\\t\\tself .on (\'mount\', buttons_work);\\n\\t\\t\\t\\tself .on (\'updated\', buttons_work);\\n\\t\\t\\t⁗))(this, user)}"><td if="{user .instructor & user .administrator}"><mark><strong>{user .username}</strong></mark></td ><td if="{! user .instructor & user .administrator}"><mark>{user .username}</mark></td ><td if="{user .instructor & ! user .administrator}"><strong>{user .username}</strong></td ><td if="{! user .administrator && ! user .instructor}">{user .username}</td ><td if="{! user .administrator}"><button type="submit" to="make_administrator">Make Admin</button></td ><td if="{user .administrator}"><button to="revoke_administrator">Revoke Admin</button></td ><td if="{! user .instructor}"><button type="submit" to="make_instructor">Make Instructor</button></td ><td if="{user .instructor}"><button to="unmake_instructor">Unmake Instructor</button></td ><td if="{! user .enroll_restricted}"><button to="restrict_enrolling">Restrict Enrolling</button></td ><td if="{user .enroll_restricted}"><button type="submit" to="unrestrict_enrolling">Unrestrict Enrolling</button></td ></tr> </table> </model-themer>', '', '', function(opts) {
	(function (self) {
		self .stuff .on ('all-users', function () {
			self .update ();
		});
	})(this);
});
riot.tag2('content-service-instructor-component-add', '<model-themer> <fieldset> <label>Component name:<input name="component_name" type="text" placeholder="Wow. Such sp."></label> <label>Component content:<textarea name="component_content" cols="40" rows="3" placeholder="So component"></textarea></label> </fieldset> <button type="submit" name="add_component"> Add component! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var component_name = self .root .querySelector ('input[name="component_name"]');
	        var component_content = self .root .querySelector ('textarea[name="component_content"]');
	        var add_component = self .root .querySelector ('button[name="add_component"]');

	        add_component .addEventListener ('click', function () {
	            self .stuff .one ('new', function (response) {
	                if (! response .error) {

	                    window .location .hash = '#service/instructor/module/#' + self .recalls ('course_id') + '/' + self .recalls ('module_order')
	                }
	            })
	            self .stuff .trigger ('new', {
	                component_name: component_name .value,
	                component_content: component_content .value
	            });
	        });
	    });
	})(this);
});
riot.tag2('content-service-instructor-component', '<model-themer> <h2>{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .name}</h2> <p>{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .content}</p> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });
	    self .stuff .on ('module_order', function () {
	        self .update ();
	    });
	    self .stuff .on ('component_order', function () {
	        self .update ();
	    });
	})(this);
});
riot.tag2('content-service-instructor-course-add', '<model-themer> <fieldset> <label>Course name:<input name="course_name" type="text" placeholder="Wow. Such course."></label> </fieldset> <button type="submit" name="add_course"> Add course! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var course_name = self .root .querySelector ('input[name="course_name"]');
	        var add_course = self .root .querySelector ('button[name="add_course"]');

	        add_course .addEventListener ('click', function () {
	            self .stuff .one ('new', function (response) {
	                if (! response .error) {
	                    window .location .hash = '#service/instructor/'
	                }
	            })
	            self .stuff .trigger ('new', {
	                course_name: course_name .value
	            });
	        });
	    });
	})(this);
});
riot.tag2('content-service-instructor-course', '<model-themer> <h2>{((recalls (\'course\') || {}) .course || {}) .name}<h3 if="{((recalls (\'course\') || {}) .course || {}) .published}">(published)</h3></h2> <table> <tr><th>Modules</th></tr> <tr each="{assemble (((recalls (\'course\') || {}) .course || {}) .module_set)}"><td><a href="#service/instructor/module/#{recalls (\'course_id\')}/{order}">{name}</a></td ><td><button to="delete" order="{order}">x</button></td ><td><button to="shift" order="{order}">shift</button></td ></tr> </table> <button type="submit" name="add_module"> Add module </button> <button type="submit" name="publish_course" if="{! ((recalls (\'course\') || {}) .course || {}) .published}"> Publish course! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var add_module = self .root .querySelector ('button[name="add_module"]');

	        add_module .addEventListener ('click', function () {
	            window .location .hash = '#service/instructor/module/add/#' + self .recalls ('course_id')
	        });
	    });
	    self .on ('updated', function () {
	        [] .forEach .call (self .root .querySelectorAll ('button[to="delete"]'), function (delete_module) {
	            delete_module .addEventListener ('click', function () {
	                var order = delete_module .getAttribute ('order');
	                self .stuff .trigger ('delete', {
	                    module_order: +order
	                });
	            }, false);
	        });
	        [] .forEach .call (self .root .querySelectorAll ('button[to="shift"]'), function (shift_module) {
	            shift_module .addEventListener ('click', function () {
	                var order = shift_module .getAttribute ('order');
	                self .stuff .trigger ('reorder', {
	                    module_1_order: +order,
	                    module_2_order: (+order + 1) % assemble (((self .recalls ('course') || {}) .course || {}) .module_set) .length
	                });
	            }, false);
	        });

	        var publish_course = self .root .querySelector ('button[name="publish_course"]');

	        publish_course && publish_course .addEventListener ('click', function () {
	            self .stuff .trigger ('publish', {
	                course_id: self .recalls ('course_id')
	            });
	        }, false);
	    });

	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-instructor-module-add', '<model-themer> <fieldset> <label>Module name:<input name="module_name" type="text" placeholder="Wow. Such module."></label> </fieldset> <button type="submit" name="add_module"> Add module! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var module_name = self .root .querySelector ('input[name="module_name"]');
	        var add_module = self .root .querySelector ('button[name="add_module"]');

	        add_module .addEventListener ('click', function () {
	            self .stuff .one ('new', function (response) {
	                if (! response .error) {

	                    window .location .hash = '#service/instructor/course/#' + self .recalls ('course_id')
	                }
	            })
	            self .stuff .trigger ('new', {
	                module_name: module_name .value
	            });
	        });
	    });
	})(this);
});
riot.tag2('content-service-instructor-module', '<model-themer> <h2>{((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .name}</h2> <table> <tr><th>Components</th><th></th></tr> <tr each="{assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set)}"><td><a href="#service/instructor/component/#{recalls (\'course_id\')}/{recalls (\'module_order\')}/{order}">{name}</a></td ><td><button to="delete" order="{order}">x</button></td ><td><button to="shift" order="{order}">shift</button></td ></tr> </table> <button type="submit" name="add_component"> Add component </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var add_component = self .root .querySelector ('button[name="add_component"]');

	        add_component .addEventListener ('click', function () {
	            window .location .hash = '#service/instructor/component/add/#' + self .recalls ('course_id') + '/' + self .recalls ('module_order')
	        });
	    });
	    self .on ('updated', function () {
	        [] .forEach .call (self .root .querySelectorAll ('button[to="delete"]'), function (delete_component) {
	            delete_component .addEventListener ('click', function () {
	                var order = delete_component .getAttribute ('order');
	                self .stuff .trigger ('delete', {
	                    component_order: +order
	                });
	            }, false);
	        });
	        [] .forEach .call (self .root .querySelectorAll ('button[to="shift"]'), function (shift_component) {
	            shift_component .addEventListener ('click', function () {
	                var order = shift_component .getAttribute ('order');
	                self .stuff .trigger ('reorder', {
	                    component_1_order: +order,
	                    component_2_order: (+order + 1) % assemble (((assemble (((self .recalls ('course') || {}) .course || {}) .module_set) || {}) [self .recalls ('module_order')] || {}) .component_set) .length
	                });
	            }, false);
	        });
	    });

	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });
	    self .stuff .on ('module_order', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-instructor', '<model-themer> <table> <tr><th>Courses created by me</th></tr> <tr each="{(recalls (\'my-courses\') || {}) .as_instructor}"><td><a href="#service/instructor/course/#{id}">{name}</a></td ><td><button to="delete" id="{id}">x</button></td ></tr> </table> <button type="submit" name="add_course"> Add course </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var add_course = self .root .querySelector ('button[name="add_course"]');

	        add_course .addEventListener ('click', function () {
	            window .location .hash = '#service/instructor/course/add'
	        });

	        [] .forEach .call (self .root .querySelectorAll ('button[to="delete"]'), function (delete_course) {
	            delete_course .addEventListener ('click', function () {
	                var id = delete_course .getAttribute ('id');
	                self .stuff .trigger ('delete', {
	                    course_id: id
	                });
	            }, false);
	        });
	    });
	    self .on ('updated', function () {
	        [] .forEach .call (self .root .querySelectorAll ('button[to="delete"]'), function (delete_course) {
	            delete_course .addEventListener ('click', function () {
	                var id = delete_course .getAttribute ('id');
	                self .stuff .trigger ('delete', {
	                    course_id: id
	                });
	            }, false);
	        });
	    });

	    self .stuff .on ('my-courses', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-participant-course', '<model-themer> <h2 if="{(piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [recalls (\'course_id\') || \'\']}"><mark>{((recalls (\'course\') || {}) .course || {}) .name}</mark></h2> <h2 if="{! (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [recalls (\'course_id\') || \'\'] && (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .completed_courses) || {}) [recalls (\'course_id\') || \'\']}"><strike>{((recalls (\'course\') || {}) .course || {}) .name}</strike></h2> <h2 if="{! (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [recalls (\'course_id\') || \'\'] && ! (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .completed_courses) || {}) [recalls (\'course_id\') || \'\']}">{((recalls (\'course\') || {}) .course || {}) .name}</h2> <button disabled if="{(piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [recalls (\'course_id\') || \'\']}"> You are already enrolled in this course </button> <button disabled if="{(get_cache (backend_path + \'/login\') || {}) .enroll_restricted && Object .keys (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) .length}"> You are restricted to take one course at a time </button> <button type="submit" name="enroll_course" if="{! logged_with(\'enrolled?\')(logged_with(\'enrolled courses\')(piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [recalls (\'course_id\') || \'\']) && logged_with(\'unrestricted\')( ! (get_cache (backend_path + \'/login\') || {}) .enroll_restricted || ! Object .keys (piece (((get_cache (backend_path + \'/my/courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) .length )}"> Enroll! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var enroll_course = self .root .querySelector ('button[name="enroll_course"]');

	        enroll_course && enroll_course .addEventListener ('click', function () {
	            self .stuff .one ('enroll', function () {
	                window .location .hash = '#service/participant'
	            });
	            self .stuff .trigger ('enroll');
	        }, false);
	    });
	    self .on ('updated', function () {
	        var enroll_course = self .root .querySelector ('button[name="enroll_course"]');

	        enroll_course && enroll_course .addEventListener ('click', function () {
	            self .stuff .one ('enroll', function () {
	                window .location .hash = '#service/participant'
	            });
	            self .stuff .trigger ('enroll');
	        }, false);
	    });

	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-participant-my-component', '<model-themer> <h2 if="{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .done}"><strike>{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .name}</strike></h2> <h2 if="{! ((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .done}">{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .name}</h2> <p>{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .content}</p> <button disabled if="{((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .done}"> Already done! </button> <button type="submit" name="done_component" if="{! ((assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set) || {}) [recalls (\'component_order\')] || {}) .done}"> I am done! </button> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var done_component = self .root .querySelector ('button[name="done_component"]');

	        done_component && done_component .addEventListener ('click', function () {
	            self .stuff .trigger ('done');
	        }, false);
	    });
	    self .on ('updated', function () {
	        var done_component = self .root .querySelector ('button[name="done_component"]');

	        done_component && done_component .addEventListener ('click', function () {
	            self .stuff .trigger ('done');
	        }, false);
	    });

	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });
	    self .stuff .on ('module_order', function () {
	        self .update ();
	    });
	    self .stuff .on ('component_order', function () {
	        self .update ();
	    });
	})(this);
});
riot.tag2('content-service-participant-my-course', '<model-themer> <h2>{((recalls (\'course\') || {}) .course || {}) .name}</h2> <table> <tr><th>Modules</th></tr> <tr each="{assemble (((recalls (\'course\') || {}) .course || {}) .module_set)}"><td><a href="#service/participant/my/module/#{recalls (\'course_id\')}/{order}" if="{done}"><strike>{name}</strike></a ><a href="#service/participant/my/module/#{recalls (\'course_id\')}/{order}" if="{! done}">{name}</a ></td ></tr> </table> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-participant-my-module', '<model-themer> <h2 if="{((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .done}"><strike>{((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .name}</strike></h2> <h2 if="{! ((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .done}">{((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .name}</h2> <table> <tr><th>Components</th><th></th></tr> <tr each="{assemble (((assemble (((recalls (\'course\') || {}) .course || {}) .module_set) || {}) [recalls (\'module_order\')] || {}) .component_set)}"><td><a href="#service/participant/my/component/#{recalls (\'course_id\')}/{recalls (\'module_order\')}/{order}" if="{done}"><strike>{name}</strike></a ><a href="#service/participant/my/component/#{recalls (\'course_id\')}/{recalls (\'module_order\')}/{order}" if="{! done}">{name}</a ></td ></tr> </table> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .stuff .on ('course', function () {
	        self .update ();
	    });
	    self .stuff .on ('course_id', function () {
	        self .update ();
	    });
	    self .stuff .on ('module_order', function () {
	        self .update ();
	    });

	})(this);
});
riot.tag2('content-service-participant', '<model-themer> <table> <tr><th>Courses i am enrolled in</th></tr> <tr each="{((recalls (\'my-courses\') || {}) .as_participant || {}) .enrolled_courses}"><td><a href="#service/participant/my/course/#{id}"><mark>{name}</mark></a></td></tr> </table> <table> <tr><th>Courses completed</th></tr> <tr each="{((recalls (\'my-courses\') || {}) .as_participant || {}) .completed_courses}"><td><a href="#service/participant/my/course/#{id}"><strike>{name}</strike></a></td></tr> </table> <table> <tr><th>Courses catalogue</th></tr> <tr each="{(recalls (\'all-courses\') || {}) .courses}"><td><a href="#service/participant/course/#{id}" if="{(piece (((recalls (\'my-courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [id]}"><mark>{name}</mark></a ><a href="#service/participant/course/#{id}" if="{! (piece (((recalls (\'my-courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [id] && (piece (((recalls (\'my-courses\') || {}) .as_participant || {}) .completed_courses) || {}) [id]}"><strike>{name}</strike></a ><a href="#service/participant/course/#{id}" if="{! (piece (((recalls (\'my-courses\') || {}) .as_participant || {}) .enrolled_courses) || {}) [id] && ! (piece (((recalls (\'my-courses\') || {}) .as_participant || {}) .completed_courses) || {}) [id]}">{name}</a ></td></tr> </table> </model-themer>', '', '', function(opts) {
	(function (self) {
	    self .stuff .on ('all-courses', function () {
	        self .update ();
	    });
	    self .stuff .on ('my-courses', function () {
	        self .update ();
	    });
	})(this);
});
riot.tag2('content-service', '<model-themer> <button type="submit" name="as_participant"> Participant services </button> <button type="submit" name="as_instructor" if="{(get_cache (backend_path + \'/login\') || {}) .as_instructor}"> Instructor services </button> <button type="submit" name="as_administrator" if="{(get_cache (backend_path + \'/login\') || {}) .as_administrator}"> Administrator services </button> </model-themer>', '', '', function(opts) {
(function (self) {
	    if (! (get_cache (backend_path + '/login') || {}) .id)
	        window .location .hash = '#login';

	    self .on ('mount', function () {
	        var as_participant = self .root .querySelector ('button[name="as_participant"]');
	        var as_instructor = self .root .querySelector ('button[name="as_instructor"]');
	        var as_administrator = self .root .querySelector ('button[name="as_administrator"]');

	        as_participant .addEventListener ('click', function () {
	            window .location .hash = '#service/participant';
	        });
	        as_instructor && as_instructor .addEventListener ('click', function () {
	            window .location .hash = '#service/instructor';
	        });
	        as_administrator && as_administrator .addEventListener ('click', function () {
	            window .location .hash = '#service/administrator';
	        });
	    });

	})(this);
});
riot.tag2('model-loginner', '<fieldset> <label>Username:<input name="username" type="text" placeholder="admin"></label> <label>Password:<input name="password" type="password"></label> </fieldset>', '', '', function(opts) {
	(function (self) {
	    self .on ('mount', function () {
	        var username = self .root .querySelector ('input[name="username"]');
	        var password = self .root .querySelector ('input[name="password"]');

	        username .addEventListener ('input', function () {
	            self .stuff .trigger ('username', username .value);
	        });
	        password .addEventListener ('input', function () {
	            self .stuff .trigger ('password', password .value);
	        });
	    });
	})(this);
});
riot.tag2('model-themer', '<section> <article><yield></yield></article> <footer><button name="logout">Logout</button><button name="service">Services</button></footer> </section>', '', '', function(opts) {
	(function (self) {
	    util .logout (self);

	    self .on ('mount', function () {
	        var logout = self .root .querySelector ('button[name="logout"]');
	        var service = self .root .querySelector ('button[name="service"]');
	        logout .addEventListener ('click', function () {
	            self .stuff .one ('logout', function () {
	                window .location .hash = '#login';
	            });
	            self .stuff .trigger ('logout');
	        });
	        service .addEventListener ('click', function () {
	            window .location .hash = '#service';
	        });
	    });
	})(this);
});
riot.tag2('screen-page-login', '<content-login></content-login>', '', '', function(opts) {
	(function (self) {
		if (get_cache (backend_path + '/login')) {
			window .location .hash = '#service'
		}

		util .register (self);
		util .login (self);

		display_errors ('register', self);
		display_errors ('login', self);

	})(this);
});
riot.tag2('screen-page-service-administrator', '<content-service-administrator></content-service-administrator>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    content .users (self);
	    leak = setInterval (self .recalls .bind (self, 'all-users'), 300);

	    display_errors ('all-users', self);

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor-component-add', '<content-service-instructor-component-add></content-service-instructor-component-add>', '', '', function(opts) {
	(function (self) {
	    self .understands ('input');
	    self .stuff .on ('input', function (course_id, module_order) {
	        remembers ({
	            course_id: course_id,
	            module_order: module_order
	        }) (self);

	        util .component_new (course_id, module_order) (self);

		    display_errors ('new', self);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor-component', '<content-service-instructor-component></content-service-instructor-component>', '', '', function(opts) {
	(function (self) {
	    self .understands ('input');
	    self .stuff .on ('input', function (course_id, module_order, component_order) {
	        content .course (course_id) (self);
	        self .recalls ('course');

		    display_errors ('course', self);

	        remembers ({
	            course_id: course_id,
	            module_order: module_order,
	            component_order: component_order
	        }) (self);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor-course-add', '<content-service-instructor-course-add></content-service-instructor-course-add>', '', '', function(opts) {
	(function (self) {
	    util .course_new (self);

	    display_errors ('new', self);
	})(this);
});
riot.tag2('screen-page-service-instructor-course', '<content-service-instructor-course></content-service-instructor-course>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    self .understands ('input');
	    self .stuff .on ('input', function (course_id) {
	        content .course (course_id) (self);
	        leak = setInterval (self .recalls .bind (self, 'course'), 300);
	        util .module_delete (course_id) (self);
	        util .module_reorder (course_id) (self);
	        util .course_publish (self);

		    display_errors ('course', self);
		    display_errors ('delete', self);
		    display_errors ('reorder', self);

	        remembers ({
	            course_id: course_id
	        }) (self);
	    });

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor-module-add', '<content-service-instructor-module-add></content-service-instructor-module-add>', '', '', function(opts) {
	(function (self) {
	    self .understands ('input');
	    self .stuff .on ('input', function (course_id) {
	        remembers ({
	            course_id: course_id
	        }) (self);

	        util .module_new (course_id) (self);

		    display_errors ('new', self);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor-module', '<content-service-instructor-module></content-service-instructor-module>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    self .understands ('input');
	    self .stuff .on ('input', function (course_id, module_order) {
	        content .course (course_id) (self);
	        leak = setInterval (self .recalls .bind (self, 'course'), 300);
	        util .component_delete (course_id, module_order) (self);
	        util .component_reorder (course_id, module_order) (self);

		    display_errors ('course', self);
		    display_errors ('delete', self);
		    display_errors ('reorder', self);

	        remembers ({
	            course_id: course_id,
	            module_order: module_order
	        }) (self);
	    });

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-instructor', '<content-service-instructor></content-service-instructor>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    content .my_courses (self);
	    leak = setInterval (self .recalls .bind (self, 'my-courses'), 300);
	    util .course_delete (self);

		display_errors ('my-courses', self);
	    display_errors ('delete', self);

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-participant-course', '<content-service-participant-course></content-service-participant-course>', '', '', function(opts) {
	(function (self) {
	    self .understands ('input');
	    self .stuff .on ('input', function (course_id) {
	        content .course (course_id) (self);
	        util .course_enroll (course_id) (self);

		    display_errors ('course', self);

	        remembers ({
	            course_id: course_id
	        }) (self);
	    });
	})(this);
});
riot.tag2('screen-page-service-participant-my-component', '<content-service-participant-my-component></content-service-participant-my-component>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    self .understands ('input');
	    self .stuff .on ('input', function (course_id, module_order, component_order) {
	        content .course (course_id) (self);
	        leak = setInterval (self .recalls .bind (self, 'course'), 300);
	        util .component_done (course_id, module_order, component_order) (self);

		    display_errors ('course', self);
		    display_errors ('done', self);

	        remembers ({
	            course_id: course_id,
	            module_order: module_order,
	            component_order: component_order
	        }) (self);
	    });

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-participant-my-course', '<content-service-participant-my-course></content-service-participant-my-course>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    self .understands ('input');
	    self .stuff .on ('input', function (course_id) {
	        content .course (course_id) (self);
	        leak = setInterval (self .recalls .bind (self, 'course'), 300);

		    display_errors ('course', self);

	        remembers ({
	            course_id: course_id
	        }) (self);
	    });

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-participant-my-module', '<content-service-participant-my-module></content-service-participant-my-module>', '', '', function(opts) {
	(function (self) {
	    var leak = undefined;

	    self .understands ('input');
	    self .stuff .on ('input', function (course_id, module_order) {
	        content .course (course_id) (self);
	        leak = setInterval (self .recalls .bind (self, 'course'), 300);

		    display_errors ('course', self);

	        remembers ({
	            course_id: course_id,
	            module_order: module_order
	        }) (self);
	    });

	    self .on ('unmount', function () {
	        leak && clearInterval (leak);
	    });
	})(this);
});
riot.tag2('screen-page-service-participant', '<content-service-participant></content-service-participant>', '', '', function(opts) {
	(function (self) {
	    var leak1 = undefined;
	    var leak2 = undefined;

	    content .courses (self);
	    content .my_courses (self);
	    leak1 = setInterval (self .recalls .bind (self, 'all-courses'), 300);
	    leak2 = setInterval (self .recalls .bind (self, 'my-courses'), 300);

		display_errors ('all-courses', self);
		display_errors ('my-courses', self);

	    self .on ('unmount', function () {
	        leak1 && clearInterval (leak1);
	        leak2 && clearInterval (leak2);
	    });
	})(this);
});
riot.tag2('screen-page-service', '<content-service></content-service>', '', '', function(opts) {
});
riot.tag2('the-app', '', 'input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}th{font-weight:600}td,th{border-bottom:1.08px solid #ccc;padding:14.85px 18px}thead th{border-bottom-width:2.16px;padding-bottom:6.3px}table{display:block;max-width:100%;overflow-x:auto}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}input,textarea,select,button{display:block;max-width:100%;padding:9.9px}label{display:block;margin-bottom:14.76px}input[type="submit"],input[type="reset"],button{background:#f2f2f2;border-radius:3.6px;color:#8c8c8c;cursor:pointer;display:inline;margin-bottom:18px;margin-right:7.2px;padding:6.525px 23.4px;text-align:center}input[type="submit"]:hover,input[type="reset"]:hover,button:hover{background:#d9d9d9;color:#000}input[type="submit"][disabled],input[type="reset"][disabled],button[disabled]{background:#e6e6e6;color:#b3b3b3;cursor:not-allowed}input[type="submit"],button[type="submit"]{background:#367ac3;color:#fff}input[type="submit"]:hover,button[type="submit"]:hover{background:#255587;color:#bfbfbf}input[type="text"],input[type="password"],input[type="email"],input[type="url"],input[type="phone"],input[type="tel"],input[type="number"],input[type="datetime"],input[type="date"],input[type="month"],input[type="week"],input[type="color"],input[type="time"],input[type="search"],input[type="range"],input[type="file"],input[type="datetime-local"],select,textarea{border:1px solid #ccc;margin-bottom:18px;padding:5.4px 6.3px}input[type="checkbox"],input[type="radio"]{float:left;line-height:36px;margin-right:9px;margin-top:8.1px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}pre,code,kbd,samp,var,output{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:16.2px}pre{border-left:1.8px solid #96bbe2;line-height:25.2px;margin-top:29.7px;overflow:auto;padding-left:18px}pre code{background:none;border:0;line-height:29.7px;padding:0}code{background:#ededed;border:1.8px solid #ccc;border-radius:3.6px;display:inline-block;line-height:18px;padding:3px 6px 2px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}h1,h2,h3,h4,h5,h6{color:#000;margin-bottom:18px}h1{font-size:36px;font-weight:500;margin-top:36px}h2{font-size:25.2px;font-weight:400;margin-top:27px}h3{font-size:21.6px;margin-top:21.6px}h4{font-size:18px;margin-top:18px}h5{font-size:14.4px;font-weight:bold;margin-top:18px;text-transform:uppercase}h6{color:#ccc;font-size:14.4px;font-weight:bold;margin-top:18px;text-transform:uppercase}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}a{color:#367ac3;text-decoration:none}a:hover{text-decoration:underline}hr{border-bottom:1px solid #ccc}small{font-size:15.3px}em,i{font-style:italic}strong,b{font-weight:600}*{border:0;border-collapse:separate;border-spacing:0;box-sizing:border-box;margin:0;outline:0;padding:0;text-align:left;vertical-align:baseline}html,body{height:100%;width:100%}body{background:#f5f5f5;color:#1a1a1a;padding:36px}p,ul,ol,dl,blockquote,hr,pre,table,form,fieldset,figure,address{margin-bottom:29.7px}section{margin-left:auto;margin-right:auto;max-width:100%;width:900px}article{background:#fff;border:1.8px solid #d9d9d9;border-radius:7.2px;padding:43.2px}header{margin-bottom:36px}footer{margin-top:36px}nav{text-align:center}nav ul{list-style:none;margin-left:0;text-align:center}nav ul li{display:inline;margin-left:9px;margin-right:9px}nav ul li:first-child{margin-left:0}nav ul li:last-child{margin-right:0}ol,ul{margin-left:29.7px}li ol,li ul{margin-bottom:0}@media (max-width: 767px){body{padding:18px}article{border-radius:0;margin:-18px;padding:18px}textarea,input,select{max-width:100%}fieldset{min-width:0}section{width:auto}fieldset,x:-moz-any-link{display:table-cell}} html { width: 100vw !important; height: 100vh !important; } body { width: 100% !important; height: 100% !important; position: relative; overflow: hidden; } .border { border: 2px solid black; } .cursor-pointer { cursor: pointer; } .scroll { overflow-x: hidden; overflow-y: scroll !important; } .scroll::-webkit-scrollbar { display: none; } .position-fixed { position: fixed !important; } .position-absolute { position: absolute !important; } .position-relative { position: relative !important; } .full-height { height: 100% !important; } .ninety-five-width { width: 95%; } .most-height { height: 80% !important; } .slider-box-height { height: 100px !important; } .little-height { height: 10% !important; } .most-width { width: 80% !important; } .full-width { width: 100% !important; } .no-frills { padding: 0 !important; } .no-shock { margin: 0 !important; } .match-edge { position: absolute; height: auto; width: auto; display: block; top: 0; bottom: 0; left: 0; right: 0; } .top-down { overflow: hidden; } .phone-container { position: relative; } .text-center { text-align: center; } .text-middle { vertical-align: middle; } .half-height { height: 50%; } .quarter-height { height: 25%; } .button-positive { color: rgba(9, 72, 179, 1) !important; } .block-left { display: block; position: absolute; left: 0%; transform: translatex(0%); -webkit-transform: translatex(0%); } .block-center { display: block; position: absolute; left: 50%; transform: translatex(-50%); -webkit-transform: translatex(-50%); } .block-right { display: block; position: absolute; left: 100%; transform: translatex(-100%); -webkit-transform: translatex(-100%); } .block-top { display: block; position: absolute; top: 0%; transform: translatey(0%); -webkit-transform: translatey(0%); } .block-middle { display: block; position: absolute; top: 50% !important; transform: translatey(-50%); -webkit-transform: translatey(-50%); } .block-bottom { display: block; position: absolute; top: 100%; transform: translatey(-100%); -webkit-transform: translatey(-100%); } .block-left.block-top { top: 0%; left: 0%; transform: translatex(-0%) translatey(-0%); -webkit-transform: translatex(-0%) translatey(-0%); } .block-left.block-middle { top: 50%; left: 0%; transform: translatex(-0%) translatey(-50%); -webkit-transform: translatex(-0%) translatey(-50%); } .block-left.block-bottom { top: 100%; left: 0%; transform: translatex(-0%) translatey(-100%); -webkit-transform: translatex(-0%) translatey(-100%); } .block-center.block-top { top: 0%; left: 50%; transform: translatex(-50%) translatey(0%); -webkit-transform: translatex(-50%) translatey(0%); } .block-center.block-middle { top: 50%; left: 50%; transform: translatex(-50%) translatey(-50%); -webkit-transform: translatex(-50%) translatey(-50%); } .block-center.block-bottom { top: 100%; left: 50%; transform: translatex(-50%) translatey(-100%); -webkit-transform: translatex(-50%) translatey(-100%); } .block-right.block-top { top: 0%; left: 100%; transform: translatex(-100%) translatey(0%); -webkit-transform: translatex(-100%) translatey(0%); } .block-right.block-middle { top: 50%; left: 100%; transform: translatex(-100%) translatey(-50%); -webkit-transform: translatex(-100%) translatey(-50%); } .block-right.block-bottom { top: 100%; left: 100%; transform: translatex(-100%) translatey(-100%); -webkit-transform: translatex(-100%) translatey(-100%); } .nudge-up { padding-bottom: 20px; } .nudge-down { padding-top: 20px; } .nudge-left { padding-right: 20px; } .nudge-right { padding-left: 20px; } .nudge-up-more { padding-bottom: 40px; } .nudge-down-more { padding-top: 40px; } .nudge-left-more { padding-right: 40px; } .nudge-right-more { padding-left: 40px; } .under-half { top: 50%; } .under-bar-44 { top: 44px; } .under-bar-47 { top: 47px; } .above-bar-44 { bottom: 44px; } .above-bar-49 { bottom: 49px; } .under-bar-88 { top: 88px; } .match-me { position: relative !important; height: 100% !important; width: 100% !important; overflow: hidden; } .font-large,.font-large:before,.font-large:after { font-size: 2em !important; } .font-big,.font-big:before,.font-big:after { font-size: 1.5em !important; } .font-somewhat-big,.font-somewhat-big:before,.font-somewhat-big:after { font-size: 1.45em !important; } .font-more,.font-more:before,.font-more:after { font-size: 1.4em !important; } .font-regular,.font-regular:before,.font-regular:after { font-size: 1.2em !important; } .font-small,.font-small:before,.font-small:after { font-size: 0.8em !important; } .font-tiny,.font-tiny:before,font-tiny:after { font-size: 0.2em; line-height: 0.2em; } .neutral-color { color: white; } .sixty-height { height: 60px; } .eighty-height { height: 80px; } .hundred-fifty-height { height: 150px; } .hundred-height { height: 100px; } .prized-asset { min-height: 260px; max-height: 100%; } .free-icon { min-width: none !important; min-height: none !important; max-width: none !important; max-height: none !important; } .free-icon:before,.free-icon:after { width: auto !important; height: auto !important; } .inline { display: inline; } .inline-center { text-align: center; } .inline-left { text-align: left; } .inline-right { text-align: right; } .inline-justify { text-align: justify; } .header-text { white-space: nowrap; } .invisible { visibility: none; } .top-layer { z-index: 999; } .bottom-layer { z-index: -999; } .lax { overflow: visible !important; } .higher { z-index: 1000; } .push-up { margin-top: -10px; } .area-0to100x0to30 { position: absolute; width: 100%; height: 30%; top: 0; left: 0; } .area-0to100x30to60 { position: absolute; width: 100%; height: 30%; top: 30%; left: 0; } .area-0to100x60to100 { position: absolute; width: 100%; height: 40%; top: 60%; left: 0; } .area-0to30x0to100 { position: absolute; width: 30%; height: 100%; top: 0; left: 0; } .area-0to50x0to50 { position: absolute; width: 50%; height: 50%; top: 0; left: 0; } .area-50to85x0to50 { position: absolute; width: 35%; height: 50%; top: 0; left: 50%; } .area-0to60x50to100 { position: absolute; width: 60%; height: 50%; top: 50%; left: 0; } .area-0to20x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 0; } .area-20to100x0to100 { position: absolute; width: 80%; height: 100%; top: 0; left: 20%; } .area-0to100x0to50 { position: absolute; width: 100%; height: 50%; top: 0; left: 0; } .area-0to100x50to100 { position: absolute; width: 100%; height: 50%; top: 50%; left: 0; } .area-0to35x0to100 { position: absolute; width: 35%; height: 100%; top: 0; left: 0; } .area-35to55x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 35%; } .area-55to100x0to100 { position: absolute; width: 45%; height: 100%; top: 0; left: 55%; } .area-30to100x0to100 { position: absolute; width: 70%; height: 100%; top: 0; left: 30%; } .area-20to80x0to100 { position: absolute; width: 60%; height: 100%; top: 0; left: 20%; } .area-80to100x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 80%; } .area-0to40x0to50 { position: absolute; width: 40%; height: 50%; top: 0; left: 0; } .area-40to60x0to50 { position: absolute; width: 20%; height: 50%; top: 0; left: 40%; } .area-60to100x0to50 { position: absolute; width: 40%; height: 50%; top: 0; left: 60%; } .area-0to100x50to100 { position: absolute; width: 100%; height: 50%; top: 50%; left: 0; } .area-0to50x0to100 { position: absolute; width: 50%; height: 100%; top: 0; left: 0; } .area-50to100x0to100 { position: absolute; width: 50%; height: 100%; top: 0; left: 50%; } .area-50to100x0to50 { position: absolute; width: 50%; height: 50%; top: 0; left: 50%; } .area-0to80x0to100 { position: absolute; width: 80%; height: 100%; top: 0; left: 0; } .area-0to25x0to100 { position: absolute; width: 25%; height: 100%; top: 0; left: 0; } .area-25to100x0to100 { position: absolute; width: 75%; height: 100%; top: 0; left: 25%; } .area-0to100x0to60 { position: absolute; width: 100%; height: 60%; top: 0; left: 0; } .area-0to100x60to100 { position: absolute; width: 100%; height: 40%; top: 60%; left: 0; } .area-0to12x50to100 { position: absolute; width: 12%; height: 50%; top: 50%; left: 0; } .area-12to100x50to100 { position: absolute; width: 88%; height: 50%; top: 50%; left: 12%; } .paragraph-text { white-space: normal !important; word-break: break-all !important; word-wrap: break-word !important; } .fitting-size { max-height: 100%; max-width: 100%; } .text-icons { font-family: Ionicons, icomoon !important; } .minify-slight { -ms-transform: scale(0.99, 0.99); -webkit-transform: scale(0.99, 0.99); transform: scale(0.99, 0.99); } .minify-some { -ms-transform: scale(0.9, 0.9); -webkit-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); } .inset-more { padding: 15px; } .inset-some { padding: 10px; } .inset-little { padding: 5px; } .inset-slight { padding: 2px; } .outset-quite { margin: 20px; } .outset-little { margin: 5px; } .outset-some { margin: 10px; } .seventy-five-height { height: 75px; } .no-border { border: none !important; } .bold { font-weight: bold; } .background-black { background: black; } .list { will-change: scroll-position; } .background-texture::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; z-index: -1; background: url(../imgs/3d_soccer15.gif); } .background-transparent { background: transparent; } .background-shadowed { background: rgba(0,0,0,0.1); } .background-double-shadowed { background: rgba(0,0,0,0.2); } .background-translucent { background: rgba(0,0,0,0.03); } .icon-size { width: 1em; height: 1em; text-align: center; } .black-to-gray { -webkit-filter: invert(50%); filter: invert(50%); } .a-block { display: block; } .a-inline-block { display: inline-block; } .square { padding-bottom: 100%; } .square > .match-edge { background-size: cover !important; } .page { margin: 0 !important; } .display-none { display: none; } .content { min-height: 100%; } .dashed { border: 1px #bbb dashed; border-radius: 5px; }', '', function(opts) {
	(function (self) {

		var screens_data = {};
		screens .add =	function (tag, args) {
							return add_screen_as .apply (self, [undefined] .concat ([] .slice .call (arguments)));
						};
		screens .add_as =	function (id) {
								return	function ( ) {
											return add_screen_as .apply (self, [id] .concat ([] .slice .call (arguments)));
										};
							};
							var add_screen_as =	function (id, tag_name ) {
												var time = new Date ();
													if (id && screens_data [id] && screens_data [id] .root .localName === tag_name)
														var tag = screens_data [id];
													else {
														screens .remove (id);

														var tag_root = document .createElement (tag_name);
														self .root .insertBefore (tag_root, null);
														var tag = riot .mount (tag_root, tag_name) [0];
													}
													var args = [] .slice .call (arguments, 2);
													tag .stuff .trigger .apply (null, ['input'] .concat (args));

													screens_data [id || tag ._riot_id] = tag;
												log ('update screen time ' + (new Date () - time) + 'ms', arguments);
													return tag;
												};
		screens .get =	function () {
							return screens_data;
						};
		screens .remove =	function (id) {
								if (id && screens_data [id]) {
									screens_data [id] .unmount ();
									delete screens_data [id];
								}
							};
	})(this);
});
riot.tag2('toolbox-content-date-edit', '<input type="text" class="field" value="{recalls (\'date\') .format (format)}" readonly>', '', '', function(opts) {
	(function (self) {
		self .format = 'LL';

		self .recalls ('date') || self .stuff .trigger ('date', moment ());
		self .stuff .on ('date', function () {
			self .update ();
		});

		self .on ('mount', function () {
			self .root .addEventListener ('click', screen_date_edit);
		});

		var screen_date_edit =	function () {
									screens .add_as ('date-edit') ('screen-util-date', self .recalls ('date'))
										.stuff .one ('output', self .stuff .trigger .bind (self .stuff, 'date'));
								};
	})(this)
});
riot.tag2('toolbox-content-date-show', '<input type="text" class="field" value="{recalls (\'date\') .format (format)}" readonly>', '', '', function(opts) {
	(function (self) {
		self .format = 'LL';

		self .recalls ('date') || self .stuff .trigger ('date', moment ());
		self .stuff .on ('date', function () {
			self .update ();
		});

	})(this)
});
riot.tag2('toolbox-content-image-edit', '<form><label><input type="radio" name="image" value="undefined" riot-checked="{recalls (\'choices\') .indexOf (recalls (\'image\')) === -1}"><img src="http://www.lincscareassociation.org.uk/data/files/NoImageSelected.png"></label ><label each="{image, choice in recalls (\'choices\')}"><input type="radio" name="image" value="{image}" riot-checked="{image === recalls (\'image\')}"><img riot-src="{image}"></label ></form>', 'toolbox-content-image-edit form { width:100%; height:75%; overflow:hidden; -moz-transition: height 0.1s; -webkit-transition: height 0.1s; -ms-transition: height 0.1s; -o-transition: height 0.1s; transition: height 0.1s; white-space: normal; border-top-right-radius: 0; border-bottom-right-radius: 0; padding: .5em; border: 0; border: 1px solid hsl(80%, 80%, 80%); background: hsla(0,0%,100%,.2); border-radius: .3em; box-shadow: .05em .1em .3em rgba(0,0,0,.3) inset; text-align: center; line-height: 50px; } toolbox-content-image-edit form:hover { height: 100%; overflow-y:scroll; -moz-transition: height 0.5s; -webkit-transition: height 0.5s; -ms-transition: height 0.5s; -o-transition: height 0.5s; transition: height 0.5s; line-height: initial; } toolbox-content-image-edit form input { height: 0; width: 0; opacity:0; } toolbox-content-image-edit form img { height: auto; width: 20%; } toolbox-content-image-edit form label input[value="undefined"] ~ * { height: 100%; width: auto; } toolbox-content-image-edit form:hover label input[value="undefined"] ~ * { display:none; } toolbox-content-image-edit form label input ~ * { display:none; margin:2px; opacity:0.2; -webkit-filter: blur(1px); } toolbox-content-image-edit form:hover label input ~ * { display:inline-block; } toolbox-content-image-edit form label:hover input ~ * { opacity:0.5; -webkit-filter: none; } toolbox-content-image-edit form label input:checked ~ * { opacity:1; -webkit-filter: none; display:inline-block; }', '', function(opts) {
	(function (self) {
		self .stuff .on ('image', function (value, from_downstream) {
			if (! from_downstream)
				self .update ();
		});

		self .on ('mount', function () {
	    	var radios = self .root .querySelectorAll('input[type=radio][name="image"]');

	        [] .forEach .call (radios, function (radio) {
	            radio .addEventListener ('change', function (event) {
	               self .stuff .trigger ('image', this .value, event);
	            });
	        });
		});

	})(this);
});
riot.tag2('toolbox-content-image-show', '<img riot-src="{recalls (\'image\')}">', '', '', function(opts) {
});
riot.tag2('toolbox-content-loading-item', '<div class="item item-icon sixty-height button button-block button-clear button-large button-positive background-transparent"> <i class="icon ion-load-a"></i> </div>', '', '', function(opts) {
});
riot.tag2('toolbox-content-search-bar', '<div class="bar background-translucent"> <div class="nav-item"> <span class="font-large icon-size text-icons a-inline-block">&#62628;</span> </div> <div class="nav-item"> <div class="search-bar"> <input class="match-me font-big background-shadowed" type="text"> </div> </div> </div>', 'toolbox-content-search-bar .bar { position: relative; }', '', function(opts) {
});
riot.tag2('toolbox-content-text-edit', '<input class="dropdown-input" value="{recalls (\'text\')}"> <button class="dropdown-btn text-icons" type="button">&#xf123;</button>', '.awesomplete [hidden] { display: none; } .awesomplete .visually-hidden { position: absolute; clip: rect(0, 0, 0, 0); } .awesomplete { display: inline-block; position: relative; } .awesomplete > input { display: block; } .awesomplete > ul { position: absolute; left: 0; z-index: 1; min-width: 100%; box-sizing: border-box; list-style: none; padding: 0; margin: 0; background: #fff; } .awesomplete > ul:empty { display: none; } .awesomplete > ul { border-radius: .3em; margin: .2em 0 0; background: hsla(0,0%,100%,.9); background: linear-gradient(to bottom right, white, hsla(0,0%,100%,.8)); border: 1px solid rgba(0,0,0,.3); box-shadow: .05em .2em .6em rgba(0,0,0,.2); text-shadow: none; } @supports (transform: scale(0)) { .awesomplete > ul { transition: .3s cubic-bezier(.4,.2,.5,1.4); transform-origin: 1.43em -.43em; } .awesomplete > ul[hidden], .awesomplete > ul:empty { opacity: 0; transform: scale(0); display: block; transition-timing-function: ease; } } .awesomplete > ul:before { content: ""; position: absolute; top: -.43em; left: 1em; width: 0; height: 0; padding: .4em; background: white; border: inherit; border-right: 0; border-bottom: 0; -webkit-transform: rotate(45deg); transform: rotate(45deg); } .awesomplete > ul > li { position: relative; padding: .2em .5em; cursor: pointer; } .awesomplete > ul > li:hover { background: hsl(200, 40%, 80%); color: black; } .awesomplete > ul > li[aria-selected="true"] { background: hsl(205, 40%, 40%); color: white; } .awesomplete mark { background: hsl(65, 100%, 50%); } .awesomplete li:hover mark { background: hsl(68, 100%, 41%); } .awesomplete li[aria-selected="true"] mark { background: hsl(86, 100%, 21%); color: inherit; } toolbox-content-text-edit .dropdown-input { border-top-right-radius: 0; border-bottom-right-radius: 0; width: 12em; height: 2em; padding: .1em .3em; border: 0; border: 1px solid hsl(80%, 80%, 80%); background: hsla(0,0%,100%,.2); border-radius: .3em; box-shadow: .05em .1em .3em rgba(0,0,0,.3) inset; } toolbox-content-text-edit input, button { font: inherit; text-shadow: inherit; } toolbox-content-text-edit .dropdown-btn { vertical-align: top; height: 2em; border-top-left-radius: 0; border-bottom-left-radius: 0; } toolbox-content-text-edit button { padding: .1em .5em; border-radius: .3em; background: hsl(80, 80%, 80%); background: hsla(0, 0%, 100%,.2); border: 1px solid rgba(0,0,0,.3); box-shadow: 0 1px white inset, 0 .3em .3em -.3em rgba(0,0,0,.3); }', '', function(opts) {


	(function () {

	var _ = function (input, o) {
		var me = this;

		this.isOpened = false;

		this.input = $(input);
		this.input.setAttribute("autocomplete", "off");
		this.input.setAttribute("aria-autocomplete", "list");

		o = o || {};

		configure(this, {
			minChars: 2,
			maxItems: 10,
			autoFirst: false,
			data: _.DATA,
			filter: _.FILTER_CONTAINS,
			sort: _.SORT_BYLENGTH,
			item: _.ITEM,
			replace: _.REPLACE
		}, o);

		this.index = -1;

		this.container = $.create("div", {
			className: "awesomplete",
			around: input
		});

		this.ul = $.create("ul", {
			hidden: "hidden",
			inside: this.container
		});

		this.status = $.create("span", {
			className: "visually-hidden",
			role: "status",
			"aria-live": "assertive",
			"aria-relevant": "additions",
			inside: this.container
		});

		$.bind(this.input, {
			"input": this.evaluate.bind(this),
			"blur": this.close.bind(this, { reason: "blur" }),
			"keydown": function(evt) {
				var c = evt.keyCode;

				if(me.opened) {
					if (c === 13 && me.selected) {
						evt.preventDefault();
						me.select();
					}
					else if (c === 27) {
						me.close({ reason: "esc" });
					}
					else if (c === 38 || c === 40) {
						evt.preventDefault();
						me[c === 38? "previous" : "next"]();
					}
				}
			}
		});

		$.bind(this.input.form, {"submit": this.close.bind(this, { reason: "submit" })});

		$.bind(this.ul, {"mousedown": function(evt) {
			var li = evt.target;

			if (li !== this) {

				while (li && !/li/i.test(li.nodeName)) {
					li = li.parentNode;
				}

				if (li && evt.button === 0) {
					evt.preventDefault();
					me.select(li, evt.target);
				}
			}
		}});

		if (this.input.hasAttribute("list")) {
			this.list = "#" + this.input.getAttribute("list");
			this.input.removeAttribute("list");
		}
		else {
			this.list = this.input.getAttribute("data-list") || o.list || [];
		}

		_.all.push(this);
	};

	_.prototype = {
		set list(list) {
			if (Array.isArray(list)) {
				this._list = list;
			}
			else if (typeof list === "string" && list.indexOf(",") > -1) {
					this._list = list.split(/\s*,\s*/);
			}
			else {
				list = $(list);

				if (list && list.children) {
					var items = [];
					slice.apply(list.children).forEach(function (el) {
						if (!el.disabled) {
							var text = el.textContent.trim();
							var value = el.value || text;
							var label = el.label || text;
							if (value !== "") {
								items.push({ label: label, value: value });
							}
						}
					});
					this._list = items;
				}
			}

			if (document.activeElement === this.input) {
				this.evaluate();
			}
		},

		get selected() {
			return this.index > -1;
		},

		get opened() {
			return this.isOpened;
		},

		close: function (o) {
			if (!this.opened) {
				return;
			}

			this.ul.setAttribute("hidden", "");
			this.isOpened = false;
			this.index = -1;

			$.fire(this.input, "awesomplete-close", o || {});
		},

		open: function () {
			this.ul.removeAttribute("hidden");
			this.isOpened = true;

			if (this.autoFirst && this.index === -1) {
				this.goto(0);
			}

			$.fire(this.input, "awesomplete-open");
		},

		next: function () {
			var count = this.ul.children.length;
			this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1) );
		},

		previous: function () {
			var count = this.ul.children.length;
			var pos = this.index - 1;

			this.goto(this.selected && pos !== -1 ? pos : count - 1);
		},

		goto: function (i) {
			var lis = this.ul.children;

			if (this.selected) {
				lis[this.index].setAttribute("aria-selected", "false");
			}

			this.index = i;

			if (i > -1 && lis.length > 0) {
				lis[i].setAttribute("aria-selected", "true");
				this.status.textContent = lis[i].textContent;

				$.fire(this.input, "awesomplete-highlight", {
					text: this.suggestions[this.index]
				});
			}
		},

		select: function (selected, origin) {
			if (selected) {
				this.index = $.siblingIndex(selected);
			} else {
				selected = this.ul.children[this.index];
			}

			if (selected) {
				var suggestion = this.suggestions[this.index];

				var allowed = $.fire(this.input, "awesomplete-select", {
					text: suggestion,
					origin: origin || selected
				});

				if (allowed) {
					this.replace(suggestion);
					this.close({ reason: "select" });
					$.fire(this.input, "awesomplete-selectcomplete", {
						text: suggestion
					});
				}
			}
		},

		evaluate: function() {
			var me = this;
			var value = this.input.value;

			if (value.length >= this.minChars && this._list.length > 0) {
				this.index = -1;

				this.ul.innerHTML = "";

				this.suggestions = this._list
					.map(function(item) {
						return new Suggestion(me.data(item, value));
					})
					.filter(function(item) {
						return me.filter(item, value);
					})
					.sort(this.sort)
					.slice(0, this.maxItems);

				this.suggestions.forEach(function(text) {
						me.ul.appendChild(me.item(text, value));
					});

				if (this.ul.children.length === 0) {
					this.close({ reason: "nomatches" });
				} else {
					this.open();
				}
			}
			else {
				this.close({ reason: "nomatches" });
			}
		}
	};

	_.all = [];

	_.FILTER_CONTAINS = function (text, input) {
		return RegExp($.regExpEscape(input.trim()), "i").test(text);
	};

	_.FILTER_STARTSWITH = function (text, input) {
		return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
	};

	_.SORT_BYLENGTH = function (a, b) {
		if (a.length !== b.length) {
			return a.length - b.length;
		}

		return a < b? -1 : 1;
	};

	_.ITEM = function (text, input) {
		var html = input === '' ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
		return $.create("li", {
			innerHTML: html,
			"aria-selected": "false"
		});
	};

	_.REPLACE = function (text) {
		this.input.value = text.value;
	};

	_.DATA = function (item ) { return item; };

	function Suggestion(data) {
		var o = Array.isArray(data)
		  ? { label: data[0], value: data[1] }
		  : typeof data === "object" && "label" in data && "value" in data ? data : { label: data, value: data };

		this.label = o.label || o.value;
		this.value = o.value;
	}
	Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
		get: function() { return this.label.length; }
	});
	Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
		return "" + this.label;
	};

	function configure(instance, properties, o) {
		for (var i in properties) {
			var initial = properties[i],
			    attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

			if (typeof initial === "number") {
				instance[i] = parseInt(attrValue);
			}
			else if (initial === false) {
				instance[i] = attrValue !== null;
			}
			else if (initial instanceof Function) {
				instance[i] = null;
			}
			else {
				instance[i] = attrValue;
			}

			if (!instance[i] && instance[i] !== 0) {
				instance[i] = (i in o)? o[i] : initial;
			}
		}
	}

	var slice = Array.prototype.slice;

	function $(expr, con) {
		return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
	}

	function $$(expr, con) {
		return slice.call((con || document).querySelectorAll(expr));
	}

	$.create = function(tag, o) {
		var element = document.createElement(tag);

		for (var i in o) {
			var val = o[i];

			if (i === "inside") {
				$(val).appendChild(element);
			}
			else if (i === "around") {
				var ref = $(val);
				ref.parentNode.insertBefore(element, ref);
				element.appendChild(ref);
			}
			else if (i in element) {
				element[i] = val;
			}
			else {
				element.setAttribute(i, val);
			}
		}

		return element;
	};

	$.bind = function(element, o) {
		if (element) {
			for (var event in o) {
				var callback = o[event];

				event.split(/\s+/).forEach(function (event) {
					element.addEventListener(event, callback);
				});
			}
		}
	};

	$.fire = function(target, type, properties) {
		var evt = document.createEvent("HTMLEvents");

		evt.initEvent(type, true, true );

		for (var j in properties) {
			evt[j] = properties[j];
		}

		return target.dispatchEvent(evt);
	};

	$.regExpEscape = function (s) {
		return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
	};

	$.siblingIndex = function (el) {

		for (var i = 0; el = el.previousElementSibling; i++);
		return i;
	};

	function init() {
		$$("input.awesomplete").forEach(function (input) {
			new _(input);
		});
	}

	if (typeof Document !== "undefined") {

		if (document.readyState !== "loading") {
			init();
		}
		else {

			document.addEventListener("DOMContentLoaded", init);
		}
	}

	_.$ = $;
	_.$$ = $$;

	if (typeof self !== "undefined") {
		self.Awesomplete = _;
	}

	if (typeof module === "object" && module.exports) {
		module.exports = _;
	}

	return _;

	}());

		(function (self) {

			self .on ('mount', function () {
				on_next_tick (function () {
					var text_input = self .root .firstElementChild;
					var input_button = text_input .nextElementSibling;

					var autocomplete =	new Awesomplete (text_input, self .recalls (opts .autocomplete));
					input_button .addEventListener ('click', function () {
						if (autocomplete .ul .childNodes .length === 0) {
							autocomplete .evaluate ();
						}
						else if (autocomplete .ul . hasAttribute ('hidden')) {
							autocomplete .open ();
						}
						else {
							autocomplete .close ();
						}
					});
				});
			});
		}) (this);
});
riot.tag2('toolbox-content-text-show', '<input class="dropdown-input" value="{recalls (\'text\')}" disabled> <button class="dropdown-btn text-icons" type="button">&#xf123;</button>', '.awesomplete [hidden] { display: none; } .awesomplete .visually-hidden { position: absolute; clip: rect(0, 0, 0, 0); } .awesomplete { display: inline-block; position: relative; } .awesomplete > input { display: block; } .awesomplete > ul { position: absolute; left: 0; z-index: 1; min-width: 100%; box-sizing: border-box; list-style: none; padding: 0; margin: 0; background: #fff; } .awesomplete > ul:empty { display: none; } .awesomplete > ul { border-radius: .3em; margin: .2em 0 0; background: hsla(0,0%,100%,.9); background: linear-gradient(to bottom right, white, hsla(0,0%,100%,.8)); border: 1px solid rgba(0,0,0,.3); box-shadow: .05em .2em .6em rgba(0,0,0,.2); text-shadow: none; } @supports (transform: scale(0)) { .awesomplete > ul { transition: .3s cubic-bezier(.4,.2,.5,1.4); transform-origin: 1.43em -.43em; } .awesomplete > ul[hidden], .awesomplete > ul:empty { opacity: 0; transform: scale(0); display: block; transition-timing-function: ease; } } .awesomplete > ul:before { content: ""; position: absolute; top: -.43em; left: 1em; width: 0; height: 0; padding: .4em; background: white; border: inherit; border-right: 0; border-bottom: 0; -webkit-transform: rotate(45deg); transform: rotate(45deg); } .awesomplete > ul > li { position: relative; padding: .2em .5em; cursor: pointer; } .awesomplete > ul > li:hover { background: hsl(200, 40%, 80%); color: black; } .awesomplete > ul > li[aria-selected="true"] { background: hsl(205, 40%, 40%); color: white; } .awesomplete mark { background: hsl(65, 100%, 50%); } .awesomplete li:hover mark { background: hsl(68, 100%, 41%); } .awesomplete li[aria-selected="true"] mark { background: hsl(86, 100%, 21%); color: inherit; } toolbox-content-text-show .dropdown-input { border-top-right-radius: 0; border-bottom-right-radius: 0; width: 12em; height: 2em; padding: .1em .3em; border: 0; border: 1px solid hsl(80%, 80%, 80%); background: hsla(0,0%,60%,.2); border-radius: .3em; box-shadow: .05em .1em .3em rgba(0,0,0,.3) inset; } toolbox-content-text-show input, button { font: inherit; text-shadow: inherit; } toolbox-content-text-show .dropdown-btn { vertical-align: top; height: 2em; border-top-left-radius: 0; border-bottom-left-radius: 0; } toolbox-content-text-show button { padding: .1em .5em; border-radius: .3em; background: hsl(80, 80%, 80%); background: hsla(0, 0%, 100%,.2); border: 1px solid rgba(0,0,0,.3); box-shadow: 0 1px white inset, 0 .3em .3em -.3em rgba(0,0,0,.3); }', '', function(opts) {


	(function () {

	var _ = function (input, o) {
		var me = this;

		this.isOpened = false;

		this.input = $(input);
		this.input.setAttribute("autocomplete", "off");
		this.input.setAttribute("aria-autocomplete", "list");

		o = o || {};

		configure(this, {
			minChars: 2,
			maxItems: 10,
			autoFirst: false,
			data: _.DATA,
			filter: _.FILTER_CONTAINS,
			sort: _.SORT_BYLENGTH,
			item: _.ITEM,
			replace: _.REPLACE
		}, o);

		this.index = -1;

		this.container = $.create("div", {
			className: "awesomplete",
			around: input
		});

		this.ul = $.create("ul", {
			hidden: "hidden",
			inside: this.container
		});

		this.status = $.create("span", {
			className: "visually-hidden",
			role: "status",
			"aria-live": "assertive",
			"aria-relevant": "additions",
			inside: this.container
		});

		$.bind(this.input, {
			"input": this.evaluate.bind(this),
			"blur": this.close.bind(this, { reason: "blur" }),
			"keydown": function(evt) {
				var c = evt.keyCode;

				if(me.opened) {
					if (c === 13 && me.selected) {
						evt.preventDefault();
						me.select();
					}
					else if (c === 27) {
						me.close({ reason: "esc" });
					}
					else if (c === 38 || c === 40) {
						evt.preventDefault();
						me[c === 38? "previous" : "next"]();
					}
				}
			}
		});

		$.bind(this.input.form, {"submit": this.close.bind(this, { reason: "submit" })});

		$.bind(this.ul, {"mousedown": function(evt) {
			var li = evt.target;

			if (li !== this) {

				while (li && !/li/i.test(li.nodeName)) {
					li = li.parentNode;
				}

				if (li && evt.button === 0) {
					evt.preventDefault();
					me.select(li, evt.target);
				}
			}
		}});

		if (this.input.hasAttribute("list")) {
			this.list = "#" + this.input.getAttribute("list");
			this.input.removeAttribute("list");
		}
		else {
			this.list = this.input.getAttribute("data-list") || o.list || [];
		}

		_.all.push(this);
	};

	_.prototype = {
		set list(list) {
			if (Array.isArray(list)) {
				this._list = list;
			}
			else if (typeof list === "string" && list.indexOf(",") > -1) {
					this._list = list.split(/\s*,\s*/);
			}
			else {
				list = $(list);

				if (list && list.children) {
					var items = [];
					slice.apply(list.children).forEach(function (el) {
						if (!el.disabled) {
							var text = el.textContent.trim();
							var value = el.value || text;
							var label = el.label || text;
							if (value !== "") {
								items.push({ label: label, value: value });
							}
						}
					});
					this._list = items;
				}
			}

			if (document.activeElement === this.input) {
				this.evaluate();
			}
		},

		get selected() {
			return this.index > -1;
		},

		get opened() {
			return this.isOpened;
		},

		close: function (o) {
			if (!this.opened) {
				return;
			}

			this.ul.setAttribute("hidden", "");
			this.isOpened = false;
			this.index = -1;

			$.fire(this.input, "awesomplete-close", o || {});
		},

		open: function () {
			this.ul.removeAttribute("hidden");
			this.isOpened = true;

			if (this.autoFirst && this.index === -1) {
				this.goto(0);
			}

			$.fire(this.input, "awesomplete-open");
		},

		next: function () {
			var count = this.ul.children.length;
			this.goto(this.index < count - 1 ? this.index + 1 : (count ? 0 : -1) );
		},

		previous: function () {
			var count = this.ul.children.length;
			var pos = this.index - 1;

			this.goto(this.selected && pos !== -1 ? pos : count - 1);
		},

		goto: function (i) {
			var lis = this.ul.children;

			if (this.selected) {
				lis[this.index].setAttribute("aria-selected", "false");
			}

			this.index = i;

			if (i > -1 && lis.length > 0) {
				lis[i].setAttribute("aria-selected", "true");
				this.status.textContent = lis[i].textContent;

				$.fire(this.input, "awesomplete-highlight", {
					text: this.suggestions[this.index]
				});
			}
		},

		select: function (selected, origin) {
			if (selected) {
				this.index = $.siblingIndex(selected);
			} else {
				selected = this.ul.children[this.index];
			}

			if (selected) {
				var suggestion = this.suggestions[this.index];

				var allowed = $.fire(this.input, "awesomplete-select", {
					text: suggestion,
					origin: origin || selected
				});

				if (allowed) {
					this.replace(suggestion);
					this.close({ reason: "select" });
					$.fire(this.input, "awesomplete-selectcomplete", {
						text: suggestion
					});
				}
			}
		},

		evaluate: function() {
			var me = this;
			var value = this.input.value;

			if (value.length >= this.minChars && this._list.length > 0) {
				this.index = -1;

				this.ul.innerHTML = "";

				this.suggestions = this._list
					.map(function(item) {
						return new Suggestion(me.data(item, value));
					})
					.filter(function(item) {
						return me.filter(item, value);
					})
					.sort(this.sort)
					.slice(0, this.maxItems);

				this.suggestions.forEach(function(text) {
						me.ul.appendChild(me.item(text, value));
					});

				if (this.ul.children.length === 0) {
					this.close({ reason: "nomatches" });
				} else {
					this.open();
				}
			}
			else {
				this.close({ reason: "nomatches" });
			}
		}
	};

	_.all = [];

	_.FILTER_CONTAINS = function (text, input) {
		return RegExp($.regExpEscape(input.trim()), "i").test(text);
	};

	_.FILTER_STARTSWITH = function (text, input) {
		return RegExp("^" + $.regExpEscape(input.trim()), "i").test(text);
	};

	_.SORT_BYLENGTH = function (a, b) {
		if (a.length !== b.length) {
			return a.length - b.length;
		}

		return a < b? -1 : 1;
	};

	_.ITEM = function (text, input) {
		var html = input === '' ? text : text.replace(RegExp($.regExpEscape(input.trim()), "gi"), "<mark>$&</mark>");
		return $.create("li", {
			innerHTML: html,
			"aria-selected": "false"
		});
	};

	_.REPLACE = function (text) {
		this.input.value = text.value;
	};

	_.DATA = function (item ) { return item; };

	function Suggestion(data) {
		var o = Array.isArray(data)
		  ? { label: data[0], value: data[1] }
		  : typeof data === "object" && "label" in data && "value" in data ? data : { label: data, value: data };

		this.label = o.label || o.value;
		this.value = o.value;
	}
	Object.defineProperty(Suggestion.prototype = Object.create(String.prototype), "length", {
		get: function() { return this.label.length; }
	});
	Suggestion.prototype.toString = Suggestion.prototype.valueOf = function () {
		return "" + this.label;
	};

	function configure(instance, properties, o) {
		for (var i in properties) {
			var initial = properties[i],
			    attrValue = instance.input.getAttribute("data-" + i.toLowerCase());

			if (typeof initial === "number") {
				instance[i] = parseInt(attrValue);
			}
			else if (initial === false) {
				instance[i] = attrValue !== null;
			}
			else if (initial instanceof Function) {
				instance[i] = null;
			}
			else {
				instance[i] = attrValue;
			}

			if (!instance[i] && instance[i] !== 0) {
				instance[i] = (i in o)? o[i] : initial;
			}
		}
	}

	var slice = Array.prototype.slice;

	function $(expr, con) {
		return typeof expr === "string"? (con || document).querySelector(expr) : expr || null;
	}

	function $$(expr, con) {
		return slice.call((con || document).querySelectorAll(expr));
	}

	$.create = function(tag, o) {
		var element = document.createElement(tag);

		for (var i in o) {
			var val = o[i];

			if (i === "inside") {
				$(val).appendChild(element);
			}
			else if (i === "around") {
				var ref = $(val);
				ref.parentNode.insertBefore(element, ref);
				element.appendChild(ref);
			}
			else if (i in element) {
				element[i] = val;
			}
			else {
				element.setAttribute(i, val);
			}
		}

		return element;
	};

	$.bind = function(element, o) {
		if (element) {
			for (var event in o) {
				var callback = o[event];

				event.split(/\s+/).forEach(function (event) {
					element.addEventListener(event, callback);
				});
			}
		}
	};

	$.fire = function(target, type, properties) {
		var evt = document.createEvent("HTMLEvents");

		evt.initEvent(type, true, true );

		for (var j in properties) {
			evt[j] = properties[j];
		}

		return target.dispatchEvent(evt);
	};

	$.regExpEscape = function (s) {
		return s.replace(/[-\\^$*+?.()|[\]{}]/g, "\\$&");
	};

	$.siblingIndex = function (el) {

		for (var i = 0; el = el.previousElementSibling; i++);
		return i;
	};

	function init() {
		$$("input.awesomplete").forEach(function (input) {
			new _(input);
		});
	}

	if (typeof Document !== "undefined") {

		if (document.readyState !== "loading") {
			init();
		}
		else {

			document.addEventListener("DOMContentLoaded", init);
		}
	}

	_.$ = $;
	_.$$ = $$;

	if (typeof self !== "undefined") {
		self.Awesomplete = _;
	}

	if (typeof module === "object" && module.exports) {
		module.exports = _;
	}

	return _;

	}());

		(function (self) {

			self .on ('mount', function () {
				on_next_tick (function () {
					var text_input = self .root .firstElementChild;
					var input_button = text_input .nextElementSibling;

					var autocomplete =	new Awesomplete (text_input, self .recalls (opts .autocomplete));
					input_button .addEventListener ('click', function () {
						if (autocomplete .ul .childNodes .length === 0) {
							autocomplete .evaluate ();
						}
						else if (autocomplete .ul . hasAttribute ('hidden')) {
							autocomplete .open ();
						}
						else {
							autocomplete .close ();
						}
					});
				});
			});
		}) (this);
});
riot.tag2('toolbox-content-timeslots-edit', '<div class="time-table"> <div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (7)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (7)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (6)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (6)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (5)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (5)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (4)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (4)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (3)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (3)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (2)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (2)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (1)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (1)}"></span> </div><div class="hour-column time"> <span class="hour-column-item header">{recalls (\'header\') (0)}</span> <span class="hour-column-item time" each="{name, timeslot in recalls (\'timeslots\') (0)}">{name}</span> </div> </div>', 'toolbox-content-timeslots-edit .time-table { text-align: center; z-index: 200; width: 100%; height: 100%; margin: 0 !important; padding: 15px !important; max-width: none; font-size: 14px; white-space: nowrap; direction: rtl; } toolbox-content-timeslots-edit .hour-column { padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0; width: 12.25%; max-width: 12.25%; height: 100%; display: inline-table; position: relative; } toolbox-content-timeslots-edit .hour-column-item.header { font-weight: bold; border: none; font-size: 1.3em; margin-bottom: 10px; margin-top: -5px; } toolbox-content-timeslots-edit .time-table .hour-column:first-child .hour-column-item { border-right: none; } toolbox-content-timeslots-edit .hour-column-item { width: 100%; height: 5%; display: block; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; box-sizing: content-box; } toolbox-content-timeslots-edit .hour-column-item:last-child { border-bottom: none; } toolbox-content-timeslots-edit .hour-column-item.selected { background: rgba(66, 165, 245, 0.5); border: none; -webkit-filter: drop-shadow(5px 5px 5px rgba(66, 165, 245, 0.5)); filter: drop-shadow(5px 5px 5px rgba(66, 165, 245, 0.5)); } toolbox-content-timeslots-edit .time .hour-column-item.time { border-radius: 3px; border: 1px solid #aaa; font-size: 1.3em; transform: scale3d(0.9, 0.9, 1) translate3d(-2px, 0px, 0px); box-sizing: content-box; font-weight: lighter; } toolbox-content-timeslots-edit .time .hour-column-item.time:not(.clicked) { box-shadow: 2px 1px 1px #ddd; }', '', function(opts) {
	(function (self) {
		var custom_headers = {}
		var selected_slots = {};

		var headers;
		var timeslots;

		var timeslot_elements;

		var regenerate_timeslots =	function () {
										if (opts .headers)
											custom_headers = self .recalls (opts .headers);
										if (opts .selections)
											selected_slots = self .recalls (opts .selections);

										headers = ['幾點', '一', '二', '三', '四', '五', '六', '日'];
										timeslots =	[
														['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM'],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
													];

										for (var each in custom_headers) {
											headers [each] = custom_headers [each];
										}
										for (var each in selected_slots) {
											var day = (each - each % 100) / 100;
											var hour = each % 100;
											timeslots [day] [hour] = selected_slots [each];
										}

									};
		regenerate_timeslots ();

		var click_area =	function (box) {
								for (var x = box .start_x; x <= box .end_x; x++) {
									for (var y = box .start_y; y <= box .end_y; y++) {
										timeslots [x] [y] = ! timeslots [x] [y];
										if (timeslots [x] [y]) {
											selected_slots [serialize_timeslot (x, y)] = true;
											timeslot_elements [x] [y] .classList .add ('selected');
										}
										else {
											delete selected_slots [serialize_timeslot (x, y)];
											timeslot_elements [x] [y] .classList .remove ('selected');
										}
									}
								}
								if (opts .selections)
									self .stuff .trigger (opts .selections, selected_slots);
							};

							var serialize_timeslot =	function (day, hour) {
															return day * 100 + hour;
														};

		self .on ('update', regenerate_timeslots);

		self .remembers ('header');
		self .remembers ('timeslots');

		self .stuff .trigger ('header', function (day) {
			return headers [day];
		});
		self .stuff .trigger ('timeslots', function (day) {
			return timeslots [day];
		});

		self .remembers ('click-header');
		self .remembers ('click-item');
		self .stuff .trigger ('click-header', function (day) {
			return	function (e) {

						if (day === 0) {
							click_area ({
								start_x: 1,
								end_x: 7,
								start_y: 0,
								end_y: 18
							});
						}
						else {
							click_area ({
								start_x: day,
								end_x: day,
								start_y: 0,
								end_y: 18
							});
						}
						e .preventUpdate = true;
					}
		});
		self .stuff .trigger ('click-item', function (day) {
			return	function (timeslot) {
						return	function (e) {

									if (day === 0) {
										click_area ({
											start_x: 1,
											end_x: 7,
											start_y: timeslot,
											end_y: timeslot
										});
										timeslot_elements [0] [timeslot] .classList .add ('clicked');
										setTimeout (function () {
											if (timeslot_elements [0] [timeslot])
												timeslot_elements [0] [timeslot] .classList .remove ('clicked');
										}, 150);
									}
									else {
										click_area ({
											start_x: day,
											end_x: day,
											start_y: timeslot,
											end_y: timeslot
										});
									}
									e .preventUpdate = true;
								};
					};
		});

		self .on ('mount', function () {
			var days = [] .slice .call (self .root .querySelectorAll ('.hour-column')) .reverse ();
			timeslot_elements =	days .map (function (day) {
									return [] .slice .call (day .querySelectorAll ('.hour-column-item'), 1);
								});

			var header_elements = [] .slice .call (self .root .querySelectorAll ('.hour-column-item.header')) .reverse ();

			for (var day of [0, 1, 2, 3, 4, 5, 6, 7]) {
				header_elements [day] .addEventListener ('click', self .recalls ('click-header') (day));
				for (var timeslot in timeslot_elements [day]) {
					timeslot_elements [day] [timeslot] .addEventListener ('click', self .recalls ('click-item') (day) (timeslot));
				}
			}
		});
		self .on ('updated', function () {
			var days = [] .slice .call (self .root .querySelectorAll ('.hour-column')) .reverse ();
			timeslot_elements =	days .map (function (day) {
									return [] .slice .call (day .querySelectorAll ('.hour-column-item'), 1);
								});

			var header_elements = [] .slice .call (self .root .querySelectorAll ('.hour-column-item.header')) .reverse ();

			for (var day of [0, 1, 2, 3, 4, 5, 6, 7]) {
				header_elements [day] .addEventListener ('click', self .recalls ('click-header') (day));
				for (var timeslot in timeslot_elements [day]) {
					timeslot_elements [day] [timeslot] .addEventListener ('click', self .recalls ('click-item') (day) (timeslot));
				}
			}
		});

	})(this)
});
riot.tag2('toolbox-content-timeslots-show', '<div class="time-table"> <div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (7)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (7)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (6)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (6)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (5)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (5)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (4)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (4)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (3)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (3)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (2)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (2)}"></span> </div><div class="hour-column"> <span class="hour-column-item header">{recalls (\'header\') (1)}</span> <span class="hour-column-item {selected: available}" each="{available, timeslot in recalls (\'timeslots\') (1)}"></span> </div><div class="hour-column time"> <span class="hour-column-item header">{recalls (\'header\') (0)}</span> <span class="hour-column-item time" each="{name, timeslot in recalls (\'timeslots\') (0)}">{name}</span> </div> </div>', 'toolbox-content-timeslots-show .time-table { text-align: center; z-index: 200; width: 100%; height: 100%; margin: 0 !important; padding: 15px !important; max-width: none; font-size: 14px; white-space: nowrap; direction: rtl; } toolbox-content-timeslots-show .hour-column { padding-left: 0; padding-right: 0; padding-top: 0; padding-bottom: 0; width: 12.25%; max-width: 12.25%; height: 100%; display: inline-table; position: relative; } toolbox-content-timeslots-show .hour-column-item.header { font-weight: bold; border: none; font-size: 1.3em; margin-bottom: 10px; margin-top: -5px; } toolbox-content-timeslots-show .time-table .hour-column:first-child .hour-column-item { border-right: none; } toolbox-content-timeslots-show .hour-column-item { width: 100%; height: 5%; display: block; border-right: 1px solid #ddd; border-bottom: 1px solid #ddd; box-sizing: content-box; } toolbox-content-timeslots-show .hour-column-item:last-child { border-bottom: none; } toolbox-content-timeslots-show .hour-column-item.selected { background: rgba(66, 165, 245, 0.5); border: none; -webkit-filter: drop-shadow(5px 5px 5px rgba(66, 165, 245, 0.5)); filter: drop-shadow(5px 5px 5px rgba(66, 165, 245, 0.5)); } toolbox-content-timeslots-show .time .hour-column-item.time { border-radius: 3px; border: 1px solid #aaa; font-size: 1.3em; transform: scale3d(0.9, 0.9, 1) translate3d(-2px, 0px, 0px); box-sizing: content-box; font-weight: lighter; } toolbox-content-timeslots-show .time .hour-column-item.time:not(.clicked) { box-shadow: 2px 1px 1px #ddd; }', '', function(opts) {
	(function (self) {
		var custom_headers = {}
		var selected_slots = {};

		var headers;
		var timeslots;

		var regenerate_timeslots =	function () {
										if (opts .headers)
											custom_headers = self .recalls (opts .headers);
										if (opts .selections)
											selected_slots = self .recalls (opts .selections);

										headers = ['幾點', '一', '二', '三', '四', '五', '六', '日'];
										timeslots =	[
														['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM'],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
														[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
													];

										for (var each in custom_headers) {
											headers [each] = custom_headers [each];
										}
										for (var each in selected_slots) {
											var day = (each - each % 100) / 100;
											var hour = each % 100;
											timeslots [day] [hour] = selected_slots [each];
										}

									};
		regenerate_timeslots ();

		self .on ('update', regenerate_timeslots);

		self .remembers ('header');
		self .remembers ('timeslots');

		self .stuff .trigger ('header', function (day) {
			return headers [day];
		});
		self .stuff .trigger ('timeslots', function (day) {
			return timeslots [day];
		});

	})(this)
});
riot.tag2('toolbox-content-where-edit', '<toolbox-content-text-edit autocomplete=".autocomplete"></toolbox-content-text-edit>', '', '', function(opts) {
	(function (self) {
		remembers ({
			'text':	self .recalls ('where'),
			'.autocomplete':	{
									list: ['HK', 'NT', 'KW'],
									minChars: 0
								}
		}) (self);
		pipe_through ('where') ('text') (self);
	}) (this);
});
riot.tag2('toolbox-content-where-show', '<toolbox-content-text-show autocomplete=".autocomplete"></toolbox-content-text-show>', '', '', function(opts) {
	(function (self) {
		remembers ({
			'text':	self .recalls ('where'),
			'.autocomplete':	{
									list: ['HK', 'NT', 'KW'],
									minChars: 0
								}
		}) (self);
		pipe_through ('where') ('text') (self);
	}) (this);
});
riot.tag2('toolbox-util-bar', '<div class="bar item item-divider">{opts .text}</div>', '', '', function(opts) {
});
riot.tag2('toolbox-util-draggable', '<div class="drag-box display-none"> <span class="text-icons drag-cue">&#xf400;</span> </div> <toolbox-util-placeholder> <yield></yield> </toolbox-util-placeholder>', 'toolbox-util-draggable .drag-cue { font-size: 35px; margin: 0 auto; text-align: center; vertical-align: middle; width: 1em; line-height: 1em; right: 1px; top: 1px; position: absolute; color: #000; opacity: 0.3; z-index: 9999; will-change: opacity; } toolbox-util-draggable.dragging .drag-cue { opacity: 1; } toolbox-util-draggable { z-index: 999; } toolbox-util-draggable.dragging { z-index: 9999; } toolbox-util-draggable.item { padding: 0; } toolbox-util-draggable .drag-box { display: block; background: rgba(255,255,255,0.1); border: 1px #bbb solid; border-radius: 5px; -ms-transform: scale(0.99, 0.99); -webkit-transform: scale(0.99, 0.99); transform: scale(0.99, 0.99); } toolbox-util-expandable toolbox-util-draggable .drag-box { background: none; border: 0; } toolbox-util-draggable.dragging .drag-box { -ms-transform: scale(0.9, 0.9); -webkit-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); }', '', function(opts) {
		!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.interact=e()}}(function(){return function e(t,n,r){function i(a,s){if(!n[a]){if(!t[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var p=n[a]={exports:{}};t[a][0].call(p.exports,function(e){var n=t[a][1][e];return i(n?n:e)},p,p.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){"undefined"==typeof window?t.exports=function(t){return e("./src/utils/window").init(t),e("./src/index")}:t.exports=e("./src/index")},{"./src/index":18,"./src/utils/window":45}],2:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0,r=t.length;n<r&&!e.immediatePropagationStopped;n++)t[n](e)}var o=e("./utils/arr"),a=o.indexOf,s=e("./utils/extend.js"),l=function(){function e(t){r(this,e),this.options=s({},t||{})}return e.prototype.fire=function(e){var t=void 0,n="on"+e.type,r=this.global;(t=this[e.type])&&i(e,t),this[n]&&this[n](e),!e.propagationStopped&&r&&(t=r[e.type])&&i(e,t)},e.prototype.on=function(e,t){e in this?this[e].push(t):this[e]=[t]},e.prototype.off=function(e,t){var n=this[e],r=n?a(n,t):-1;r!==-1&&this[e].splice(r,1)},e}();t.exports=l},{"./utils/arr":30,"./utils/extend.js":35}],3:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("./utils/extend"),o=e("./utils/getOriginXY"),a=e("./defaultOptions"),s=e("./utils/Signals")["new"](),l=function(){function e(t,n,l,c,p,u){r(this,e);var d=t.target,v=(d&&d.options||a).deltaSource,f=o(d,p,l),g="start"===c,h="end"===c,m=g?t.startCoords:t.curCoords;p=p||t.element;var y=i({},m.page),x=i({},m.client);y.x-=f.x,y.y-=f.y,x.x-=f.x,x.y-=f.y,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.button=n.button,this.buttons=n.buttons,this.target=p,this.currentTarget=p,this.relatedTarget=u||null,this.t0=t.downTimes[t.downTimes.length-1],this.type=l+(c||""),this.interaction=t,this.interactable=d;var b={interaction:t,event:n,action:l,phase:c,element:p,related:u,page:y,client:x,coords:m,starting:g,ending:h,deltaSource:v,iEvent:this};if(s.fire("set-xy",b),h){var w=t.prevEvent;this.pageX=w.pageX,this.pageY=w.pageY,this.clientX=w.clientX,this.clientY=w.clientY}else this.pageX=y.x,this.pageY=y.y,this.clientX=x.x,this.clientY=x.y;this.x0=t.startCoords.page.x-f.x,this.y0=t.startCoords.page.y-f.y,this.clientX0=t.startCoords.client.x-f.x,this.clientY0=t.startCoords.client.y-f.y,s.fire("set-delta",b),this.timeStamp=m.timeStamp,this.dt=t.pointerDelta.timeStamp,this.duration=this.timeStamp-t.downTimes[0],this.speed=t.pointerDelta[v].speed,this.velocityX=t.pointerDelta[v].vx,this.velocityY=t.pointerDelta[v].vy,this.swipe=h||"inertiastart"===c?this.getSwipe():null,s.fire("new",b)}return e.prototype.getSwipe=function(){var e=this.interaction;if(e.prevEvent.speed<600||this.timeStamp-e.prevEvent.timeStamp>150)return null;var t=180*Math.atan2(e.prevEvent.velocityY,e.prevEvent.velocityX)/Math.PI,n=22.5;t<0&&(t+=360);var r=135-n<=t&&t<225+n,i=225-n<=t&&t<315+n,o=!r&&(315-n<=t||t<45+n),a=!i&&45-n<=t&&t<135+n;return{up:i,down:a,left:r,right:o,angle:t,speed:e.prevEvent.speed,velocity:{x:e.prevEvent.velocityX,y:e.prevEvent.velocityY}}},e.prototype.preventDefault=function(){},e.prototype.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},e.prototype.stopPropagation=function(){this.propagationStopped=!0},e}();s.on("set-delta",function(e){var t=e.iEvent,n=e.interaction,r=e.starting,i=e.deltaSource,o=r?t:n.prevEvent;"client"===i?(t.dx=t.clientX-o.clientX,t.dy=t.clientY-o.clientY):(t.dx=t.pageX-o.pageX,t.dy=t.pageY-o.pageY)}),l.signals=s,t.exports=l},{"./defaultOptions":17,"./utils/Signals":29,"./utils/extend":35,"./utils/getOriginXY":36}],4:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("./utils/isType"),o=e("./utils/events"),a=e("./utils/extend"),s=e("./utils/domUtils"),l=e("./actions"),c=e("./scope"),p=e("./Eventable"),u=e("./defaultOptions"),d=e("./utils/Signals")["new"](),v=e("./utils/domUtils"),f=v.getElementRect,g=v.nodeContains,h=e("./utils/arr"),m=h.indexOf,y=h.contains,x=e("./utils/browser"),b=x.wheelEvent;c.interactables=[];var w=function(){function e(t,n){r(this,e),n=n||{},this.target=t,this.events=new p,this._context=n.context||c.document,this._win=c.getWindow(i.trySelector(t)?this._context:t),this._doc=this._win.document,d.fire("new",{target:t,options:n,interactable:this,win:this._win}),c.addDocument(this._doc,this._win),c.interactables.push(this),this.set(n)}return e.prototype.setOnEvents=function(e,t){var n="on"+e;return i.isFunction(t.onstart)&&(this.events[n+"start"]=t.onstart),i.isFunction(t.onmove)&&(this.events[n+"move"]=t.onmove),i.isFunction(t.onend)&&(this.events[n+"end"]=t.onend),i.isFunction(t.oninertiastart)&&(this.events[n+"inertiastart"]=t.oninertiastart),this},e.prototype.setPerAction=function(e,t){for(var n in t)n in u[e]&&(i.isObject(t[n])?(this.options[e][n]=a(this.options[e][n]||{},t[n]),i.isObject(u.perAction[n])&&"enabled"in u.perAction[n]&&(this.options[e][n].enabled=t[n].enabled!==!1)):i.isBool(t[n])&&i.isObject(u.perAction[n])?this.options[e][n].enabled=t[n]:void 0!==t[n]&&(this.options[e][n]=t[n]))},e.prototype.getRect=function(e){return e=e||this.target,i.isString(this.target)&&!i.isElement(e)&&(e=this._context.querySelector(this.target)),f(e)},e.prototype.rectChecker=function(e){return i.isFunction(e)?(this.getRect=e,this):null===e?(delete this.options.getRect,this):this.getRect},e.prototype._backCompatOption=function(e,t){if(i.trySelector(t)||i.isObject(t)){this.options[e]=t;for(var n=l.names,r=Array.isArray(n),o=0,n=r?n:n[Symbol.iterator]();;){var a;if(r){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var s=a;this.options[s][e]=t}return this}return this.options[e]},e.prototype.origin=function(e){return this._backCompatOption("origin",e)},e.prototype.deltaSource=function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):this.options.deltaSource},e.prototype.context=function(){return this._context},e.prototype.inContext=function(e){return this._context===e.ownerDocument||g(this._context,e)},e.prototype.ignoreFrom=function(e){return this._backCompatOption("ignoreFrom",e)},e.prototype.allowFrom=function(e){return this._backCompatOption("allowFrom",e)},e.prototype.testIgnore=function(e,t,n){return!(!e||!i.isElement(n))&&(i.isString(e)?s.matchesUpTo(n,e,t):!!i.isElement(e)&&s.nodeContains(e,n))},e.prototype.testAllow=function(e,t,n){return!e||!!i.isElement(n)&&(i.isString(e)?s.matchesUpTo(n,e,t):!!i.isElement(e)&&s.nodeContains(e,n))},e.prototype.testIgnoreAllow=function(e,t,n){return!this.testIgnore(e.ignoreFrom,t,n)&&this.testAllow(e.allowFrom,t,n)},e.prototype.fire=function(e){return this.events.fire(e),this},e.prototype._onOffMultiple=function(e,t,n,r){if(i.isString(t)&&t.search(" ")!==-1&&(t=t.trim().split(/ +/)),i.isArray(t)){for(var o=0;o<t.length;o++)this[e](t[o],n,r);return!0}if(i.isObject(t)){for(var a in t)this[e](a,t[a],n);return!0}},e.prototype.on=function(t,n,r){return r=!!r,this._onOffMultiple("on",t,n,r)?this:("wheel"===t&&(t=b),y(e.eventTypes,t)?this.events.on(t,n):i.isString(this.target)?o.addDelegate(this.target,this._context,t,n,r):o.add(this.target,t,n,r),this)},e.prototype.off=function(t,n,r){return r=!!r,this._onOffMultiple("off",t,n,r)?this:("wheel"===t&&(t=b),y(e.eventTypes,t)?this.events.on(t,n):i.isString(this.target)?o.removeDelegate(this.target,this._context,t,n,r):o.remove(this.target,t,n,r),this)},e.prototype.set=function(t){i.isObject(t)||(t={}),this.options=a({},u.base);var n=a({},u.perAction);for(var r in l.methodDict){var o=l.methodDict[r];this.options[r]=a({},u[r]),this.setPerAction(r,n),this[o](t[r])}for(var s=e.settingsMethods,c=Array.isArray(s),p=0,s=c?s:s[Symbol.iterator]();;){var v;if(c){if(p>=s.length)break;v=s[p++]}else{if(p=s.next(),p.done)break;v=p.value}var f=v;this.options[f]=u.base[f],f in t&&this[f](t[f])}return d.fire("set",{options:t,interactable:this}),this},e.prototype.unset=function(){if(o.remove(this.target,"all"),i.isString(this.target))for(var e in o.delegatedEvents){var t=o.delegatedEvents[e];t.selectors[0]===this.target&&t.contexts[0]===this._context&&(t.selectors.splice(0,1),t.contexts.splice(0,1),t.listeners.splice(0,1),t.selectors.length||(t[e]=null)),o.remove(this._context,e,o.delegateListener),o.remove(this._context,e,o.delegateUseCapture,!0)}else o.remove(this,"all");d.fire("unset",{interactable:this}),c.interactables.splice(m(c.interactables,this),1);for(var n=c.interactions||[],r=Array.isArray(n),a=0,n=r?n:n[Symbol.iterator]();;){var s;if(r){if(a>=n.length)break;s=n[a++]}else{if(a=n.next(),a.done)break;s=a.value}var l=s;l.target===this&&l.interacting()&&l.stop()}return c.interact},e}();c.interactables.indexOfElement=function(e,t){t=t||c.document;for(var n=0;n<this.length;n++){var r=this[n];if(r.target===e&&(!i.isString(e)||r._context===t))return n}return-1},c.interactables.get=function(e,t,n){var r=this[this.indexOfElement(e,t&&t.context)];return r&&(n||r.inContext(e))?r:null},c.interactables.forEachSelector=function(e,t){for(var n=0;n<this.length;n++){var r=this[n];if(i.isString(r.target)&&(!t||r.inContext(t))){var o=e(r,r.target,r._context,n,this);if(void 0!==o)return o}}},w.eventTypes=c.eventTypes=[],w.signals=d,w.settingsMethods=["deltaSource","origin","preventDefault","rectChecker"],t.exports=w},{"./Eventable":2,"./actions":9,"./defaultOptions":17,"./scope":28,"./utils/Signals":29,"./utils/arr":30,"./utils/browser":31,"./utils/domUtils":33,"./utils/events":34,"./utils/extend":35,"./utils/isType":40}],5:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return function(t){var n=l.getActualElement(t.path?t.path[0]:t.target),r=l.getActualElement(t.currentTarget),i=[];if(p.supportsTouch&&/touch/.test(t.type)){g=(new Date).getTime();for(var o=0;o<t.changedTouches.length;o++){var a=t.changedTouches[o],c=u.search(a,t.type,n);i.push([a,c||new h])}}else{var d=!1;if(!p.supportsPointerEvent&&/mouse/.test(t.type)){for(var o=0;o<s.interactions.length&&!d;o++)d=!s.interactions[o].mouse&&s.interactions[o].pointerIsDown;d=d||(new Date).getTime()-g<500}if(!d){var c=u.search(t,t.type,n);c||(c=new h,c.mouse=/mouse/i.test(t.pointerType||t.type)||4===t.pointerType),i.push([t,c])}}for(var v=i,f=Array.isArray(v),m=0,v=f?v:v[Symbol.iterator]();;){var y;if(f){if(m>=v.length)break;y=v[m++]}else{if(m=v.next(),m.done)break;y=m.value}var a=y[0],c=y[1];c._updateEventTargets(n,r),c[e](a,t,n,r)}}}function o(e){for(var t=0;t<s.interactions.length;t++)s.interactions[t].end(e)}function a(e,t){var n=e.doc,r=0===t.indexOf("add")?c.add:c.remove;for(var i in s.delegatedEvents)r(n,i,c.delegateListener),r(n,i,c.delegateUseCapture,!0);for(var i in b)r(n,i,b[i])}var s=e("./scope"),l=e("./utils"),c=e("./utils/events"),p=e("./utils/browser"),u=e("./utils/interactionFinder"),d=e("./utils/Signals")["new"](),v={},f=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer"],g=0;s.interactions=[];for(var h=function(){function e(){r(this,e),this.target=null,this.element=null,this.prepared={name:null,axis:null,edges:null},this.pointers=[],this.pointerIds=[],this.downTargets=[],this.downTimes=[],this.holdTimers=[],this.prevCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.curCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.startCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.pointerDelta={page:{x:0,y:0,vx:0,vy:0,speed:0},client:{x:0,y:0,vx:0,vy:0,speed:0},timeStamp:0},this.downEvent=null,this.downPointer={},this._eventTarget=null,this._curEventTarget=null,this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this.mouse=!1,d.fire("new",this),s.interactions.push(this)}return e.prototype.pointerDown=function(e,t,n){var r=this.updatePointer(e);this.pointerIsDown=!0,this.interacting()||(l.setCoords(this.startCoords,this.pointers),l.copyCoords(this.curCoords,this.startCoords),l.copyCoords(this.prevCoords,this.startCoords),this.downEvent=t,this.downTimes[r]=this.curCoords.timeStamp,this.downTargets[r]=n,this.pointerWasMoved=!1,l.pointerExtend(this.downPointer,e)),d.fire("down",{pointer:e,event:t,eventTarget:n,pointerIndex:r,interaction:this})},e.prototype.start=function(e,t,n){this.interacting()||!this.pointerIsDown||this.pointerIds.length<("gesture"===e.name?2:1)||(l.indexOf(s.interactions,this)===-1&&s.interactions.push(this),l.copyAction(this.prepared,e),this.target=t,this.element=n,d.fire("action-start",{interaction:this,event:this.downEvent}))},e.prototype.pointerMove=function(t,n,r){this.simulation||(this.updatePointer(t),l.setCoords(this.curCoords,this.pointers));var i=this.curCoords.page.x===this.prevCoords.page.x&&this.curCoords.page.y===this.prevCoords.page.y&&this.curCoords.client.x===this.prevCoords.client.x&&this.curCoords.client.y===this.prevCoords.client.y,o=void 0,a=void 0;this.pointerIsDown&&!this.pointerWasMoved&&(o=this.curCoords.client.x-this.startCoords.client.x,a=this.curCoords.client.y-this.startCoords.client.y,this.pointerWasMoved=l.hypot(o,a)>e.pointerMoveTolerance);var s={pointer:t,pointerIndex:this.getPointerIndex(t),event:n,eventTarget:r,dx:o,dy:a,duplicate:i,interaction:this,interactingBeforeMove:this.interacting()};i||l.setCoordDeltas(this.pointerDelta,this.prevCoords,this.curCoords),d.fire("move",s),i||(this.interacting()&&this.doMove(s),this.pointerWasMoved&&l.copyCoords(this.prevCoords,this.curCoords))},e.prototype.doMove=function(e){e=l.extend({pointer:this.pointers[0],event:this.prevEvent,eventTarget:this._eventTarget,interaction:this},e||{}),d.fire("before-action-move",e),this._dontFireMove||d.fire("action-move",e),this._dontFireMove=!1},e.prototype.pointerUp=function(e,t,n,r){var i=this.getPointerIndex(e);d.fire(/cancel$/i.test(t.type)?"cancel":"up",{pointer:e,pointerIndex:i,event:t,eventTarget:n,curEventTarget:r,interaction:this}),this.simulation||this.end(t),this.pointerIsDown=!1,this.removePointer(e)},e.prototype.end=function(e){e=e||this.prevEvent,this.interacting()&&d.fire("action-end",{event:e,interaction:this}),this.stop()},e.prototype.currentAction=function(){return this._interacting?this.prepared.name:null},e.prototype.interacting=function(){return this._interacting},e.prototype.stop=function(){d.fire("stop",{interaction:this}),this._interacting&&(d.fire("stop-active",{interaction:this}),d.fire("stop-"+this.prepared.name,{interaction:this})),this.target=this.element=null,this.pointerIsDown=this._interacting=!1,this.prepared.name=this.prevEvent=null},e.prototype.getPointerIndex=function(e){return this.mouse?0:l.indexOf(this.pointerIds,l.getPointerId(e))},e.prototype.updatePointer=function(e){var t=l.getPointerId(e),n=this.getPointerIndex(e);return n===-1&&(n=this.pointerIds.length),this.pointerIds[n]=t,this.pointers[n]=e,n},e.prototype.removePointer=function(e){var t=l.getPointerId(e),n=this.mouse?0:l.indexOf(this.pointerIds,t);n!==-1&&(this.pointers.splice(n,1),this.pointerIds.splice(n,1),this.downTargets.splice(n,1),this.downTimes.splice(n,1),this.holdTimers.splice(n,1))},e.prototype._updateEventTargets=function(e,t){this._eventTarget=e,this._curEventTarget=t},e}(),m=0,y=f.length;m<y;m++){var x=f[m];v[x]=i(x)}var b={},w=p.pEventTypes;s.PointerEvent?(b[w.down]=v.pointerDown,b[w.move]=v.pointerMove,b[w.up]=v.pointerUp,b[w.cancel]=v.pointerUp):(b.mousedown=v.pointerDown,b.mousemove=v.pointerMove,b.mouseup=v.pointerUp,b.touchstart=v.pointerDown,b.touchmove=v.pointerMove,b.touchend=v.pointerUp,b.touchcancel=v.pointerUp),b.blur=o,s.signals.on("add-document",a),s.signals.on("remove-document",a),h.pointerMoveTolerance=1,h.doOnInteractions=i,h.endAll=o,h.signals=d,h.docEvents=b,s.endAllInteractions=o,t.exports=h},{"./scope":28,"./utils":38,"./utils/Signals":29,"./utils/browser":31,"./utils/events":34,"./utils/interactionFinder":39}],6:[function(e,t,n){var r=e("./index"),i=e("../utils"),o=e("../InteractEvent"),a=e("../Interactable"),s=e("../Interaction"),l=e("../defaultOptions"),c={defaults:{enabled:!1,origin:null,snap:null,restrict:null,inertia:null,autoScroll:null,startAxis:"xy",lockAxis:"xy"},checker:function(e,t,n){var r=n.options.drag;return r.enabled?{name:"drag",axis:"start"===r.lockAxis?r.startAxis:r.lockAxis}:null},getCursor:function(){return"move"}};s.signals.on("action-start",function(e){var t=e.interaction,n=e.event;if("drag"===t.prepared.name){var r=new o(t,n,"drag","start",t.element);t._interacting=!0,t.target.fire(r),t.prevEvent=r}}),s.signals.on("before-action-move",function(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.prepared.axis;"x"===n?(t.curCoords.page.y=t.startCoords.page.y,t.curCoords.client.y=t.startCoords.client.y,t.pointerDelta.page.speed=Math.abs(t.pointerDelta.page.vx),t.pointerDelta.client.speed=Math.abs(t.pointerDelta.client.vx),t.pointerDelta.client.vy=0,t.pointerDelta.page.vy=0):"y"===n&&(t.curCoords.page.x=t.startCoords.page.x,t.curCoords.client.x=t.startCoords.client.x,t.pointerDelta.page.speed=Math.abs(t.pointerDelta.page.vy),t.pointerDelta.client.speed=Math.abs(t.pointerDelta.client.vy),t.pointerDelta.client.vx=0,t.pointerDelta.page.vx=0)}}),s.signals.on("action-move",function(e){var t=e.interaction,n=e.event;if("drag"===t.prepared.name){var r=new o(t,n,"drag","move",t.element),i=t.prepared.axis;return"x"===i?(r.pageY=t.startCoords.page.y,r.clientY=t.startCoords.client.y,r.dy=0):"y"===i&&(r.pageX=t.startCoords.page.x,r.clientX=t.startCoords.client.x,r.dx=0),t.target.fire(r),t.prevEvent=r,!!t.interacting()&&void 0}}),s.signals.on("action-end",function(e){var t=e.interaction,n=e.event;if("drag"===t.prepared.name){var r=new o(t,n,"drag","end",t.element);t.target.fire(r),t.prevEvent=r}}),a.prototype.draggable=function(e){return i.isObject(e)?(this.options.drag.enabled=e.enabled!==!1,this.setPerAction("drag",e),this.setOnEvents("drag",e),/^(xy|x|y|start)$/.test(e.lockAxis)&&(this.options.drag.lockAxis=e.lockAxis),/^(xy|x|y)$/.test(e.startAxis)&&(this.options.drag.startAxis=e.startAxis),this):i.isBool(e)?(this.options.drag.enabled=e,e||(this.ondragstart=this.ondragstart=this.ondragend=null),this):this.options.drag},r.drag=c,r.names.push("drag"),i.merge(a.eventTypes,["dragstart","dragmove","draginertiastart","draginertiaresume","dragend"]),r.methodDict.drag="draggable",l.drag=c.defaults,t.exports=c},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":17,"../utils":38,"./index":9}],7:[function(e,t,n){function r(e,t){var n=[],r=[];t=t||e.element;for(var i=u.interactables,o=Array.isArray(i),a=0,i=o?i:i[Symbol.iterator]();;){var s;if(o){if(a>=i.length)break;s=i[a++]}else{if(a=i.next(),a.done)break;s=a.value}var l=s;if(l.options.drop.enabled){var c=l.options.drop.accept;if(!(p.isElement(c)&&c!==t||p.isString(c)&&!p.matchesSelector(t,c)))for(var d=p.isString(l.target)?l._context.querySelectorAll(l.target):[l.target],v=0;v<d.length;v++){var f=d[v];f!==t&&(n.push(l),r.push(f))}}}return{elements:r,dropzones:n}}function i(e,t){for(var n=void 0,r=0;r<e.activeDrops.dropzones.length;r++){var i=e.activeDrops.dropzones[r],o=e.activeDrops.elements[r];o!==n&&(t.target=o,i.fire(t)),n=o}}function o(e,t){var n=r(e,t,!0);e.activeDrops.dropzones=n.dropzones,e.activeDrops.elements=n.elements,e.activeDrops.rects=[];for(var i=0;i<e.activeDrops.dropzones.length;i++)e.activeDrops.rects[i]=e.activeDrops.dropzones[i].getRect(e.activeDrops.elements[i])}function a(e,t,n){var r=e.interaction,i=[];y&&o(r,n);for(var a=0;a<r.activeDrops.dropzones.length;a++){var s=r.activeDrops.dropzones[a],l=r.activeDrops.elements[a],c=r.activeDrops.rects[a];i.push(s.dropCheck(e,t,r.target,n,l,c)?l:null)}var u=p.indexOfDeepestElement(i);return{dropzone:r.activeDrops.dropzones[u]||null,element:r.activeDrops.elements[u]||null}}function s(e,t,n){var r={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null},i={dragEvent:n,interaction:e,target:e.dropElement,dropzone:e.dropTarget,relatedTarget:n.target,draggable:n.interactable,timeStamp:n.timeStamp};return e.dropElement!==e.prevDropElement&&(e.prevDropTarget&&(r.leave=p.extend({type:"dragleave"},i),n.dragLeave=r.leave.target=e.prevDropElement,n.prevDropzone=r.leave.dropzone=e.prevDropTarget),e.dropTarget&&(r.enter={dragEvent:n,interaction:e,target:e.dropElement,dropzone:e.dropTarget,relatedTarget:n.target,draggable:n.interactable,timeStamp:n.timeStamp,type:"dragenter"},n.dragEnter=e.dropElement,n.dropzone=e.dropTarget)),"dragend"===n.type&&e.dropTarget&&(r.drop=p.extend({type:"drop"},i),n.dropzone=e.dropTarget,n.relatedTarget=e.dropElement),"dragstart"===n.type&&(r.activate=p.extend({type:"dropactivate"},i),r.activate.target=null,r.activate.dropzone=null),"dragend"===n.type&&(r.deactivate=p.extend({type:"dropdeactivate"},i),r.deactivate.target=null,r.deactivate.dropzone=null),"dragmove"===n.type&&e.dropTarget&&(r.move=p.extend({dragmove:n,type:"dropmove"},i),n.dropzone=e.dropTarget),r}function l(e,t){t.leave&&e.prevDropTarget.fire(t.leave),t.enter&&e.dropTarget.fire(t.enter),t.drop&&e.dropTarget.fire(t.drop),t.deactivate&&i(e,t.deactivate),e.prevDropTarget=e.dropTarget,e.prevDropElement=e.dropElement}var c=e("./index"),p=e("../utils"),u=e("../scope"),d=e("../interact"),v=e("../InteractEvent"),f=e("../Interactable"),g=e("../Interaction"),h=e("../defaultOptions"),m={defaults:{enabled:!1,accept:null,overlap:"pointer"}},y=!1;g.signals.on("action-start",function(e){var t=e.interaction,n=e.event;if("drag"===t.prepared.name){t.activeDrops.dropzones=[],t.activeDrops.elements=[],t.activeDrops.rects=[],t.dropEvents=null,t.dynamicDrop||o(t,t.element);var r=t.prevEvent,a=s(t,n,r);a.activate&&i(t,a.activate)}}),v.signals.on("new",function(e){var t=e.interaction,n=e.iEvent,r=e.event;if("dragmove"===n.type||"dragend"===n.type){var i=t.element,o=n,l=a(o,r,i);t.dropTarget=l.dropzone,t.dropElement=l.element,t.dropEvents=s(t,r,o)}}),g.signals.on("action-move",function(e){var t=e.interaction;"drag"===t.prepared.name&&l(t,t.dropEvents)}),g.signals.on("action-end",function(e){var t=e.interaction;"drag"===t.prepared.name&&l(t,t.dropEvents)}),g.signals.on("stop-drag",function(e){var t=e.interaction;t.activeDrops.dropzones=t.activeDrops.elements=t.activeDrops.rects=t.dropEvents=null}),f.prototype.dropzone=function(e){return p.isObject(e)?(this.options.drop.enabled=e.enabled!==!1,p.isFunction(e.ondrop)&&(this.events.ondrop=e.ondrop),p.isFunction(e.ondropactivate)&&(this.events.ondropactivate=e.ondropactivate),p.isFunction(e.ondropdeactivate)&&(this.events.ondropdeactivate=e.ondropdeactivate),p.isFunction(e.ondragenter)&&(this.events.ondragenter=e.ondragenter),p.isFunction(e.ondragleave)&&(this.events.ondragleave=e.ondragleave),p.isFunction(e.ondropmove)&&(this.events.ondropmove=e.ondropmove),/^(pointer|center)$/.test(e.overlap)?this.options.drop.overlap=e.overlap:p.isNumber(e.overlap)&&(this.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(this.options.drop.accept=e.accept),"checker"in e&&(this.options.drop.checker=e.checker),this):p.isBool(e)?(this.options.drop.enabled=e,e||(this.ondragenter=this.ondragleave=this.ondrop=this.ondropactivate=this.ondropdeactivate=null),this):this.options.drop},f.prototype.dropCheck=function(e,t,n,r,i,o){var a=!1;if(!(o=o||this.getRect(i)))return!!this.options.drop.checker&&this.options.drop.checker(e,t,a,this,i,n,r);var s=this.options.drop.overlap;if("pointer"===s){var l=p.getOriginXY(n,r,"drag"),c=p.getPageXY(e);c.x+=l.x,c.y+=l.y;var u=c.x>o.left&&c.x<o.right,d=c.y>o.top&&c.y<o.bottom;a=u&&d}var v=n.getRect(r);if("center"===s){var f=v.left+v.width/2,g=v.top+v.height/2;a=f>=o.left&&f<=o.right&&g>=o.top&&g<=o.bottom}if(p.isNumber(s)){var h=Math.max(0,Math.min(o.right,v.right)-Math.max(o.left,v.left))*Math.max(0,Math.min(o.bottom,v.bottom)-Math.max(o.top,v.top)),m=h/(v.width*v.height);a=m>=s}return this.options.drop.checker&&(a=this.options.drop.checker(e,t,a,this,i,n,r)),a},f.signals.on("unset",function(e){var t=e.interactable;t.dropzone(!1)}),f.settingsMethods.push("dropChecker"),g.signals.on("new",function(e){e.dropTarget=null,e.dropElement=null,e.prevDropTarget=null,e.prevDropElement=null,e.dropEvents=null,e.activeDrops={dropzones:[],elements:[],rects:[]}}),g.signals.on("stop",function(e){var t=e.interaction;t.dropTarget=t.dropElement=t.prevDropTarget=t.prevDropElement=null}),d.dynamicDrop=function(e){return p.isBool(e)?(y=e,d):y},p.merge(f.eventTypes,["dragenter","dragleave","dropactivate","dropdeactivate","dropmove","drop"]),c.methodDict.drop="dropzone",h.drop=m.defaults,t.exports=m},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":17,"../interact":20,"../scope":28,"../utils":38,"./index":9}],8:[function(e,t,n){var r=e("./index"),i=e("../utils"),o=e("../InteractEvent"),a=e("../Interactable"),s=e("../Interaction"),l=e("../defaultOptions"),c={defaults:{enabled:!1,origin:null,restrict:null},checker:function(e,t,n,r,i){return i.pointerIds.length>=2?{name:"gesture"}:null},getCursor:function(){return""}};s.signals.on("action-start",function(e){var t=e.interaction,n=e.event;if("gesture"===t.prepared.name){var r=new o(t,n,"gesture","start",t.element);r.ds=0,t.gesture.startDistance=t.gesture.prevDistance=r.distance,t.gesture.startAngle=t.gesture.prevAngle=r.angle,t.gesture.scale=1,t._interacting=!0,t.target.fire(r),t.prevEvent=r}}),s.signals.on("action-move",function(e){var t=e.interaction,n=e.event;if("gesture"===t.prepared.name){var r=new o(t,n,"gesture","move",t.element);return r.ds=r.scale-t.gesture.scale,t.target.fire(r),t.gesture.prevAngle=r.angle,t.gesture.prevDistance=r.distance,r.scale===1/0||null===r.scale||void 0===r.scale||isNaN(r.scale)||(t.gesture.scale=r.scale),t.prevEvent=r,!!t.interacting()&&void 0}}),s.signals.on("action-end",function(e){var t=e.interaction,n=e.event;if("gesture"===t.prepared.name){var r=new o(t,n,"gesture","end",t.element);t.target.fire(r),t.prevEvent=r}}),a.prototype.gesturable=function(e){return i.isObject(e)?(this.options.gesture.enabled=e.enabled!==!1,this.setPerAction("gesture",e),this.setOnEvents("gesture",e),this):i.isBool(e)?(this.options.gesture.enabled=e,e||(this.ongesturestart=this.ongesturestart=this.ongestureend=null),this):this.options.gesture},o.signals.on("set-delta",function(e){var t=e.interaction,n=e.iEvent,r=e.action,a=e.event,s=e.starting,l=e.ending,c=e.deltaSource;if("gesture"===r){var p=t.pointers;n.touches=[p[0],p[1]],s?(n.distance=i.touchDistance(p,c),n.box=i.touchBBox(p),n.scale=1,n.ds=0,n.angle=i.touchAngle(p,void 0,c),n.da=0):l||a instanceof o?(n.distance=t.prevEvent.distance,n.box=t.prevEvent.box,n.scale=t.prevEvent.scale,n.ds=n.scale-1,n.angle=t.prevEvent.angle,n.da=n.angle-t.gesture.startAngle):(n.distance=i.touchDistance(p,c),n.box=i.touchBBox(p),n.scale=n.distance/t.gesture.startDistance,n.angle=i.touchAngle(p,t.gesture.prevAngle,c),n.ds=n.scale-t.gesture.prevScale,n.da=n.angle-t.gesture.prevAngle)}}),s.signals.on("new",function(e){e.gesture={start:{x:0,y:0},startDistance:0,prevDistance:0,distance:0,scale:1,startAngle:0,prevAngle:0}}),r.gesture=c,r.names.push("gesture"),i.merge(a.eventTypes,["gesturestart","gesturemove","gestureend"]),r.methodDict.gesture="gesturable",l.gesture=c.defaults,t.exports=c},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":17,"../utils":38,"./index":9}],9:[function(e,t,n){var r={names:[],methodDict:{}};t.exports=r},{}],10:[function(e,t,n){function r(e,t,n,r,i,a,s){if(!t)return!1;if(t===!0){var l=o.isNumber(a.width)?a.width:a.right-a.left,c=o.isNumber(a.height)?a.height:a.bottom-a.top;if(l<0&&("left"===e?e="right":"right"===e&&(e="left")),c<0&&("top"===e?e="bottom":"bottom"===e&&(e="top")),"left"===e)return n.x<(l>=0?a.left:a.right)+s;if("top"===e)return n.y<(c>=0?a.top:a.bottom)+s;if("right"===e)return n.x>(l>=0?a.right:a.left)-s;if("bottom"===e)return n.y>(c>=0?a.bottom:a.top)-s}return!!o.isElement(r)&&(o.isElement(t)?t===r:o.matchesUpTo(r,t,i))}var i=e("./index"),o=e("../utils"),a=e("../utils/browser"),s=e("../InteractEvent"),l=e("../Interactable"),c=e("../Interaction"),p=e("../defaultOptions"),u=a.supportsTouch||a.supportsPointerEvent?20:10,d={defaults:{enabled:!1,origin:null,snap:null,restrict:null,inertia:null,autoScroll:null,square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},checker:function(e,t,n,i,a,s){if(!s)return null;var l=o.extend({},a.curCoords.page),c=n.options;if(c.resize.enabled){var p=c.resize,d={left:!1,right:!1,top:!1,bottom:!1};if(o.isObject(p.edges)){for(var v in d)d[v]=r(v,p.edges[v],l,a._eventTarget,i,s,p.margin||u);if(d.left=d.left&&!d.right,d.top=d.top&&!d.bottom,d.left||d.right||d.top||d.bottom)return{name:"resize",edges:d}}else{var f="y"!==c.resize.axis&&l.x>s.right-u,g="x"!==c.resize.axis&&l.y>s.bottom-u;if(f||g)return{name:"resize",axes:(f?"x":"")+(g?"y":"")}}}return null},cursors:a.isIe9OrOlder?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"},getCursor:function(e){if(e.axis)return d.cursors[e.name+e.axis];if(e.edges){for(var t="",n=["top","bottom","left","right"],r=0;r<4;r++)e.edges[n[r]]&&(t+=n[r]);return d.cursors[t]}}};c.signals.on("action-start",function(e){var t=e.interaction,n=e.event;if("resize"===t.prepared.name){var r=new s(t,n,"resize","start",t.element);if(t.prepared.edges){var i=t.target.getRect(t.element),a=t.target.options.resize;if(a.square||a.preserveAspectRatio){var l=o.extend({},t.prepared.edges);l.top=l.top||l.left&&!l.bottom,l.left=l.left||l.top&&!l.right,l.bottom=l.bottom||l.right&&!l.top,l.right=l.right||l.bottom&&!l.left,t.prepared._linkedEdges=l}else t.prepared._linkedEdges=null;a.preserveAspectRatio&&(t.resizeStartAspectRatio=i.width/i.height),t.resizeRects={start:i,current:o.extend({},i),restricted:o.extend({},i),previous:o.extend({},i),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.rect=t.resizeRects.restricted,r.deltaRect=t.resizeRects.delta}t.target.fire(r),t._interacting=!0,t.prevEvent=r}}),c.signals.on("action-move",function(e){var t=e.interaction,n=e.event;if("resize"===t.prepared.name){var r=new s(t,n,"resize","move",t.element),i=t.target.options.resize,a=i.invert,l="reposition"===a||"negate"===a,c=t.prepared.edges;if(c){var p=t.resizeRects.start,u=t.resizeRects.current,d=t.resizeRects.restricted,v=t.resizeRects.delta,f=o.extend(t.resizeRects.previous,d),g=c,h=r.dx,m=r.dy;if(i.preserveAspectRatio||i.square){var y=i.preserveAspectRatio?t.resizeStartAspectRatio:1;c=t.prepared._linkedEdges,g.left&&g.bottom||g.right&&g.top?m=-h/y:g.left||g.right?m=h/y:(g.top||g.bottom)&&(h=m*y)}if(c.top&&(u.top+=m),c.bottom&&(u.bottom+=m),c.left&&(u.left+=h),c.right&&(u.right+=h),l){if(o.extend(d,u),"reposition"===a){var x=void 0;d.top>d.bottom&&(x=d.top,d.top=d.bottom,d.bottom=x),d.left>d.right&&(x=d.left,d.left=d.right,d.right=x)}}else d.top=Math.min(u.top,p.bottom),d.bottom=Math.max(u.bottom,p.top),d.left=Math.min(u.left,p.right),d.right=Math.max(u.right,p.left);d.width=d.right-d.left,d.height=d.bottom-d.top;for(var b in d)v[b]=d[b]-f[b];r.edges=t.prepared.edges,r.rect=d,r.deltaRect=v}return t.target.fire(r),t.prevEvent=r,!!t.interacting()&&void 0}}),c.signals.on("action-end",function(e){var t=e.interaction,n=e.event;if("resize"===t.prepared.name){
	var r=new s(t,n,"resize","end",t.element);t.target.fire(r),t.prevEvent=r}}),l.prototype.resizable=function(e){return o.isObject(e)?(this.options.resize.enabled=e.enabled!==!1,this.setPerAction("resize",e),this.setOnEvents("resize",e),/^x$|^y$|^xy$/.test(e.axis)?this.options.resize.axis=e.axis:null===e.axis&&(this.options.resize.axis=p.resize.axis),o.isBool(e.preserveAspectRatio)?this.options.resize.preserveAspectRatio=e.preserveAspectRatio:o.isBool(e.square)&&(this.options.resize.square=e.square),this):o.isBool(e)?(this.options.resize.enabled=e,e||(this.onresizestart=this.onresizestart=this.onresizeend=null),this):this.options.resize},c.signals.on("new",function(e){e.resizeAxes="xy"}),s.signals.on("set-delta",function(e){var t=e.interaction,n=e.iEvent,r=e.action;if("resize"===r&&t.resizeAxes){var i=t.target.options;i.resize.square?("y"===t.resizeAxes?n.dx=n.dy:n.dy=n.dx,n.axes="xy"):(n.axes=t.resizeAxes,"x"===t.resizeAxes?n.dy=0:"y"===t.resizeAxes&&(n.dx=0))}}),i.resize=d,i.names.push("resize"),o.merge(l.eventTypes,["resizestart","resizemove","resizeinertiastart","resizeinertiaresume","resizeend"]),i.methodDict.resize="resizable",p.resize=d.defaults,t.exports=d},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":17,"../utils":38,"../utils/browser":31,"./index":9}],11:[function(e,t,n){var r=e("./utils/raf"),i=e("./utils/window").getWindow,o=e("./utils/isType").isWindow,a=e("./utils/domUtils"),s=e("./Interaction"),l=e("./defaultOptions"),c={defaults:{enabled:!1,container:null,margin:60,speed:300},interaction:null,i:null,x:0,y:0,isScrolling:!1,prevTime:0,start:function(e){c.isScrolling=!0,r.cancel(c.i),c.interaction=e,c.prevTime=(new Date).getTime(),c.i=r.request(c.scroll)},stop:function(){c.isScrolling=!1,r.cancel(c.i)},scroll:function(){var e=c.interaction.target.options[c.interaction.prepared.name].autoScroll,t=e.container||i(c.interaction.element),n=(new Date).getTime(),a=(n-c.prevTime)/1e3,s=e.speed*a;s>=1&&(o(t)?t.scrollBy(c.x*s,c.y*s):t&&(t.scrollLeft+=c.x*s,t.scrollTop+=c.y*s),c.prevTime=n),c.isScrolling&&(r.cancel(c.i),c.i=r.request(c.scroll))},check:function(e,t){var n=e.options;return n[t].autoScroll&&n[t].autoScroll.enabled},onInteractionMove:function(e){var t=e.interaction,n=e.pointer;if(t.interacting()&&c.check(t.target,t.prepared.name)){if(t.simulation)return void(c.x=c.y=0);var r=void 0,s=void 0,l=void 0,p=void 0,u=t.target.options[t.prepared.name].autoScroll,d=u.container||i(t.element);if(o(d))p=n.clientX<c.margin,r=n.clientY<c.margin,s=n.clientX>d.innerWidth-c.margin,l=n.clientY>d.innerHeight-c.margin;else{var v=a.getElementClientRect(d);p=n.clientX<v.left+c.margin,r=n.clientY<v.top+c.margin,s=n.clientX>v.right-c.margin,l=n.clientY>v.bottom-c.margin}c.x=s?1:p?-1:0,c.y=l?1:r?-1:0,c.isScrolling||(c.margin=u.margin,c.speed=u.speed,c.start(t))}}};s.signals.on("stop-active",function(){c.stop()}),s.signals.on("action-move",c.onInteractionMove),l.perAction.autoScroll=c.defaults,t.exports=c},{"./Interaction":5,"./defaultOptions":17,"./utils/domUtils":33,"./utils/isType":40,"./utils/raf":44,"./utils/window":45}],12:[function(e,t,n){var r=e("./index"),i=e("../Interaction");i.signals.on("new",function(e){e.delayTimer=null}),r.signals.on("prepared",function(e){var t=e.interaction,n=t.prepared.name;if(n){var r=t.target.options[n].delay;r>0&&(t.delayTimer=setTimeout(function(){t.start(t.prepared,t.target,t.element)},r))}}),i.signals.on("move",function(e){var t=e.interaction,n=e.duplicate;t.pointerWasMoved&&!n&&clearTimeout(t.delayTimer)}),r.signals.on("before-start",function(e){var t=e.interaction,n=t.prepared.name;if(n){var r=t.target.options[n].delay;r>0&&(t.prepared.name=null)}})},{"../Interaction":5,"./index":15}],13:[function(e,t,n){function r(e,t){if(!t)return!1;var n=t.options.drag.startAxis;return"xy"===e||"xy"===n||n===e}var i=e("./index"),o=e("../scope"),a=e("../utils/browser"),s=e("../utils/isType"),l=s.isElement,c=e("../utils/domUtils"),p=c.matchesSelector,u=c.parentNode;e("./index").setActionDefaults(e("../actions/drag")),i.signals.on("before-start",function(e){var t=e.interaction,n=e.eventTarget,s=e.dx,c=e.dy;if("drag"===t.prepared.name){var d=Math.abs(s),v=Math.abs(c),f=t.target.options.drag,g=f.startAxis,h=d>v?"x":d<v?"y":"xy";t.prepared.axis="start"===f.lockAxis?h[0]:f.lockAxis,"xy"!==h&&"xy"!==g&&g!==h&&(t.prepared.name=null,t.prepared.name||!function(){for(var e=n,s=function(o,s,l){var c=a.useMatchesSelectorPolyfill?l.querySelectorAll(s):void 0;if(o!==t.target){var u=o.options;if(!u.drag.manualStart&&!o.testIgnoreAllow(u,e,n)&&p(e,s,c)){var d=o.getAction(t.downPointer,t.downEvent,t,e);if(d&&"drag"===d.name&&r(h,o)&&i.validateAction(d,o,e))return o}}},c=null;l(e);){var d=o.interactables.get(e);if(d&&d!==t.target&&!d.options.drag.manualStart&&(c=d.getAction(t.downPointer,t.downEvent,t,e)),c&&"drag"===c.name&&r(h,d)){t.prepared.name="drag",t.target=d,t.element=e;break}var v=o.interactables.forEachSelector(s,e);if(v){t.prepared.name="drag",t.target=v,t.element=e;break}e=u(e)}}())}})},{"../actions/drag":6,"../scope":28,"../utils/browser":31,"../utils/domUtils":33,"../utils/isType":40,"./index":15}],14:[function(e,t,n){e("./index").setActionDefaults(e("../actions/gesture"))},{"../actions/gesture":8,"./index":15}],15:[function(e,t,n){function r(e,t,n){return g.isObject(e)&&t.options[e.name].enabled&&s(t,n,e)?e:null}function i(e,t,n,i,o){for(var a=0,s=i.length;a<s;a++){var l=i[a],c=o[a],p=r(l.getAction(t,n,e,c),l,c);if(p)return{action:p,target:l,element:c}}return{}}function o(e,t,n,o){function a(e,t,n){var r=v.useMatchesSelectorPolyfill?n.querySelectorAll(t):void 0,i=e.options;e.testIgnoreAllow(i,c,o)&&g.matchesSelector(c,t,r)&&(s.push(e),l.push(c))}for(var s=[],l=[],c=o,p=null;g.isElement(c);){s=[],l=[];var u=f.interactables.get(c);if(u&&(p=r(u.getAction(t,n,e,c),u,c))&&!u.options[p.name].manualStart)return{element:c,action:p,target:u};f.interactables.forEachSelector(a,c);var d=i(e,t,n,s,l);if(d.action&&!d.target.options[d.action.name].manualStart)return d;c=g.parentNode(c)}return{}}function a(e,t){var n=t.action,r=t.target,i=t.element;if(n=n||{},e.target&&e.target.options.styleCursor&&(e.target._doc.documentElement.style.cursor=""),e.target=r,e.element=i,g.copyAction(e.prepared,n),r&&r.options.styleCursor){var o=n?u[n.name].getCursor(n):"";e.target._doc.documentElement.style.cursor=o}h.fire("prepared",{interaction:e})}function s(e,t,n){var r=e.options,i=r[n.name].max,o=r[n.name].maxPerElement,a=0,s=0,l=0;if(i&&o&&m.maxInteractions){for(var c=0,p=f.interactions.length;c<p;c++){var u=f.interactions[c],d=u.prepared.name;if(u.interacting()){if(a++,a>=m.maxInteractions)return!1;if(u.target===e){if(s+=d===n.name|0,s>=i)return!1;if(u.element===t&&(l++,d!==n.name||l>=o))return!1}}}return m.maxInteractions>0}}var l=e("../interact"),c=e("../Interactable"),p=e("../Interaction"),u=e("../actions"),d=e("../defaultOptions"),v=e("../utils/browser"),f=e("../scope"),g=e("../utils"),h=e("../utils/Signals")["new"](),m={signals:h,withinInteractionLimit:s,maxInteractions:1/0,perActionDefaults:{manualStart:!1,max:1/0,maxPerElement:1},setActionDefaults:function(e){g.extend(e.defaults,m.perActionDefaults)}};p.signals.on("down",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget;if(!t.interacting()){var s=o(t,n,r,i);a(t,s)}}),p.signals.on("move",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget;if(t.mouse&&!t.pointerIsDown&&!t.interacting()){var s=o(t,n,r,i);a(t,s)}}),p.signals.on("move",function(e){var t=e.interaction,n=e.event;if(t.pointerIsDown&&!t.interacting()&&t.pointerWasMoved&&t.prepared.name){h.fire("before-start",e);var r=t.target;t.prepared.name&&r&&(r.options[t.prepared.name].manualStart||!s(r,t.element,t.prepared)?t.stop(n):t.start(t.prepared,r,t.element))}}),p.signals.on("stop",function(e){var t=e.interaction,n=t.target;n&&n.options.styleCursor&&(n._doc.documentElement.style.cursor="")}),c.prototype.getAction=function(e,t,n,r){var i=this.defaultActionChecker(e,t,n,r);return this.options.actionChecker?this.options.actionChecker(e,t,i,this,r,n):i},c.prototype.actionChecker=function(e){return g.isFunction(e)?(this.options.actionChecker=e,this):null===e?(delete this.options.actionChecker,this):this.options.actionChecker},c.prototype.styleCursor=function(e){return g.isBool(e)?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor},c.prototype.defaultActionChecker=function(e,t,n,r){for(var i=this.getRect(r),o=null,a=u.names,s=Array.isArray(a),l=0,a=s?a:a[Symbol.iterator]();;){var c;if(s){if(l>=a.length)break;c=a[l++]}else{if(l=a.next(),l.done)break;c=l.value}var p=c;if(o=u[p].checker(e,t,this,r,n,i))return o}},l.maxInteractions=function(e){return g.isNumber(e)?(m.maxInteractions=e,this):m.maxInteractions},c.settingsMethods.push("styleCursor"),c.settingsMethods.push("actionChecker"),c.settingsMethods.push("ignoreFrom"),c.settingsMethods.push("allowFrom"),d.base.actionChecker=null,d.base.ignoreFrom=null,d.base.allowFrom=null,d.base.styleCursor=!0,g.extend(d.perAction,m.perActionDefaults),t.exports=m},{"../Interactable":4,"../Interaction":5,"../actions":9,"../defaultOptions":17,"../interact":20,"../scope":28,"../utils":38,"../utils/Signals":29,"../utils/browser":31}],16:[function(e,t,n){e("./index").setActionDefaults(e("../actions/resize"))},{"../actions/resize":10,"./index":15}],17:[function(e,t,n){t.exports={base:{accept:null,preventDefault:"auto",deltaSource:"page",allowFrom:null},perAction:{origin:{x:0,y:0},inertia:{enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}}}},{}],18:[function(e,t,n){e("./legacyBrowsers"),e("./pointerEvents"),e("./pointerEvents/interactableTargets"),e("./inertia"),e("./modifiers/snap"),e("./modifiers/restrict"),e("./autoStart/delay"),e("./autoStart/gesture"),e("./autoStart/resize"),e("./autoStart/drag"),e("./actions/drop"),e("./interactablePreventDefault.js"),e("./autoScroll"),t.exports=e("./interact")},{"./actions/drop":7,"./autoScroll":11,"./autoStart/delay":12,"./autoStart/drag":13,"./autoStart/gesture":14,"./autoStart/resize":16,"./inertia":19,"./interact":20,"./interactablePreventDefault.js":21,"./legacyBrowsers":22,"./modifiers/restrict":24,"./modifiers/snap":25,"./pointerEvents":26,"./pointerEvents/interactableTargets":27}],19:[function(e,t,n){function r(e,t){var n=e.target.options[e.prepared.name].inertia,r=n.resistance,i=-Math.log(n.endSpeed/t.v0)/r;t.x0=e.prevEvent.pageX,t.y0=e.prevEvent.pageY,t.t0=t.startEvent.timeStamp/1e3,t.sx=t.sy=0,t.modifiedXe=t.xe=(t.vx0-i)/r,t.modifiedYe=t.ye=(t.vy0-i)/r,t.te=i,t.lambda_v0=r/t.v0,t.one_ve_v0=1-n.endSpeed/t.v0}function i(){a(this),p.setCoordDeltas(this.pointerDelta,this.prevCoords,this.curCoords);var e=this.inertiaStatus,t=this.target.options[this.prepared.name].inertia,n=t.resistance,r=(new Date).getTime()/1e3-e.t0;if(r<e.te){var i=1-(Math.exp(-n*r)-e.lambda_v0)/e.one_ve_v0;if(e.modifiedXe===e.xe&&e.modifiedYe===e.ye)e.sx=e.xe*i,e.sy=e.ye*i;else{var o=p.getQuadraticCurvePoint(0,0,e.xe,e.ye,e.modifiedXe,e.modifiedYe,i);e.sx=o.x,e.sy=o.y}this.doMove(),e.i=u.request(this.boundInertiaFrame)}else e.sx=e.modifiedXe,e.sy=e.modifiedYe,this.doMove(),this.end(e.startEvent),e.active=!1,this.simulation=null;p.copyCoords(this.prevCoords,this.curCoords)}function o(){a(this);var e=this.inertiaStatus,t=(new Date).getTime()-e.t0,n=this.target.options[this.prepared.name].inertia.smoothEndDuration;t<n?(e.sx=p.easeOutQuad(t,0,e.xe,n),e.sy=p.easeOutQuad(t,0,e.ye,n),this.pointerMove(e.startEvent,e.startEvent),e.i=u.request(this.boundSmoothEndFrame)):(e.sx=e.xe,e.sy=e.ye,this.pointerMove(e.startEvent,e.startEvent),this.end(e.startEvent),e.smoothEnd=e.active=!1,this.simulation=null)}function a(e){var t=e.inertiaStatus;if(t.active){var n=t.upCoords.page,r=t.upCoords.client;p.setCoords(e.curCoords,[{pageX:n.x+t.sx,pageY:n.y+t.sy,clientX:r.x+t.sx,clientY:r.y+t.sy}])}}var s=e("./InteractEvent"),l=e("./Interaction"),c=e("./modifiers"),p=e("./utils"),u=e("./utils/raf");l.signals.on("new",function(e){e.inertiaStatus={active:!1,smoothEnd:!1,allowResume:!1,startEvent:null,upCoords:{},xe:0,ye:0,sx:0,sy:0,t0:0,vx0:0,vys:0,duration:0,lambda_v0:0,one_ve_v0:0,i:null},e.boundInertiaFrame=function(){return i.apply(e)},e.boundSmoothEndFrame=function(){return o.apply(e)}}),l.signals.on("down",function(e){var t=e.interaction,n=e.event,r=e.pointer,i=e.eventTarget,o=t.inertiaStatus;if(o.active)for(var a=i;p.isElement(a);){if(a===t.element){u.cancel(o.i),o.active=!1,t.simulation=null,t.updatePointer(r),p.setCoords(t.curCoords,t.pointers);var d={interaction:t};l.signals.fire("before-action-move",d),l.signals.fire("action-resume",d);var v=new s(t,n,t.prepared.name,"inertiaresume",t.element);t.target.fire(v),t.prevEvent=v,c.resetStatuses(t.modifierStatuses),p.copyCoords(t.prevCoords,t.curCoords);break}a=p.parentNode(a)}}),l.signals.on("up",function(e){var t=e.interaction,n=e.event,i=t.inertiaStatus;if(t.interacting()&&!i.active){var o=t.target,a=o&&o.options,l=a&&t.prepared.name&&a[t.prepared.name].inertia,d=(new Date).getTime(),v={},f=p.extend({},t.curCoords.page),g=t.pointerDelta.client.speed,h=!1,m=!1,y=!1,x=void 0;h=l&&l.enabled&&"gesture"!==t.prepared.name&&n!==i.startEvent,m=h&&d-t.curCoords.timeStamp<50&&g>l.minSpeed&&g>l.endSpeed,h&&!m&&(c.resetStatuses(v),x=c.setAll(t,f,v,!0,!0),x.shouldMove&&x.locked&&(y=!0)),(m||y)&&(p.copyCoords(i.upCoords,t.curCoords),t.pointers[0]=i.startEvent=new s(t,n,t.prepared.name,"inertiastart",t.element),i.t0=d,i.active=!0,i.allowResume=l.allowResume,t.simulation=i,o.fire(i.startEvent),m?(i.vx0=t.pointerDelta.client.vx,i.vy0=t.pointerDelta.client.vy,i.v0=g,r(t,i),p.extend(f,t.curCoords.page),f.x+=i.xe,f.y+=i.ye,c.resetStatuses(v),x=c.setAll(t,f,v,!0,!0),i.modifiedXe+=x.dx,i.modifiedYe+=x.dy,i.i=u.request(t.boundInertiaFrame)):(i.smoothEnd=!0,i.xe=x.dx,i.ye=x.dy,i.sx=i.sy=0,i.i=u.request(t.boundSmoothEndFrame)))}}),l.signals.on("stop-active",function(e){var t=e.interaction,n=t.inertiaStatus;n.active&&(u.cancel(n.i),n.active=!1,t.simulation=null)})},{"./InteractEvent":3,"./Interaction":5,"./modifiers":23,"./utils":38,"./utils/raf":44}],20:[function(e,t,n){function r(e,t){var n=s.interactables.get(e,t);return n||(n=new l(e,t),n.events.global=p),n}var i=e("./utils/browser"),o=e("./utils/events"),a=e("./utils"),s=e("./scope"),l=e("./Interactable"),c=e("./Interaction"),p={};r.isSet=function(e,t){return s.interactables.indexOfElement(e,t&&t.context)!==-1},r.on=function(e,t,n){if(a.isString(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)),a.isArray(e)){for(var i=e,c=Array.isArray(i),u=0,i=c?i:i[Symbol.iterator]();;){var d;if(c){if(u>=i.length)break;d=i[u++]}else{if(u=i.next(),u.done)break;d=u.value}var v=d;r.on(v,t,n)}return r}if(a.isObject(e)){for(var f in e)r.on(f,e[f],t);return r}return a.contains(l.eventTypes,e)?p[e]?p[e].push(t):p[e]=[t]:o.add(s.document,e,t,n),r},r.off=function(e,t,n){if(a.isString(e)&&e.search(" ")!==-1&&(e=e.trim().split(/ +/)),a.isArray(e)){for(var i=e,c=Array.isArray(i),u=0,i=c?i:i[Symbol.iterator]();;){var d;if(c){if(u>=i.length)break;d=i[u++]}else{if(u=i.next(),u.done)break;d=u.value}var v=d;r.off(v,t,n)}return r}if(a.isObject(e)){for(var f in e)r.off(f,e[f],t);return r}if(a.contains(l.eventTypes,e)){var g=void 0;e in p&&(g=a.indexOf(p[e],t))!==-1&&p[e].splice(g,1)}else o.remove(s.document,e,t,n);return r},r.debug=function(){return s},r.getPointerAverage=a.pointerAverage,r.getTouchBBox=a.touchBBox,r.getTouchDistance=a.touchDistance,r.getTouchAngle=a.touchAngle,r.getElementRect=a.getElementRect,r.getElementClientRect=a.getElementClientRect,r.matchesSelector=a.matchesSelector,r.closest=a.closest,r.supportsTouch=function(){return i.supportsTouch},r.supportsPointerEvent=function(){return i.supportsPointerEvent},r.stop=function(e){for(var t=s.interactions.length-1;t>=0;t--)s.interactions[t].stop(e);return r},r.pointerMoveTolerance=function(e){return a.isNumber(e)?(c.pointerMoveTolerance=e,this):c.pointerMoveTolerance},r.addDocument=s.addDocument,r.removeDocument=s.removeDocument,s.interact=r,t.exports=r},{"./Interactable":4,"./Interaction":5,"./scope":28,"./utils":38,"./utils/browser":31,"./utils/events":34}],21:[function(e,t,n){function r(e){var t=e.interaction,n=e.event;t.target&&t.target.checkAndPreventDefault(n)}var i=e("./Interactable"),o=e("./Interaction"),a=e("./scope"),s=e("./utils/isType"),l=e("./utils/domUtils"),c=l.nodeContains;i.prototype.preventDefault=function(e){return/^(always|never|auto)$/.test(e)?(this.options.preventDefault=e,this):s.isBool(e)?(this.options.preventDefault=e?"always":"never",this):this.options.preventDefault},i.prototype.checkAndPreventDefault=function(e){var t=this.options.preventDefault;if("never"!==t)return"always"===t?void e.preventDefault():void(/^(mouse|pointer|touch)*(down|start)/i.test(e.type)||/^(input|select|textarea)$/i.test(e.target.nodeName)||e.preventDefault())};for(var p=["down","move","up","cancel"],u=0;u<p.length;u++){var d=p[u];o.signals.on(d,r)}o.docEvents.dragstart=function(e){for(var t=a.interactions,n=Array.isArray(t),r=0,t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if(r=t.next(),r.done)break;i=r.value}var o=i;if(o.element&&(o.element===e.target||c(o.element,e.target)))return void o.target.checkAndPreventDefault(e)}}},{"./Interactable":4,"./Interaction":5,"./scope":28,"./utils/domUtils":33,"./utils/isType":40}],22:[function(e,t,n){function r(e){var t=s.search(e,e.type,e.target);t&&t.prevTap&&e.clientX===t.prevTap.clientX&&e.clientY===t.prevTap.clientY&&e.target===t.prevTap.target&&(t.downTargets[0]=e.target,t.downTimes[0]=(new Date).getTime(),i.pointerEvents.collectEventTargets(t,e,e,e.target,"tap"))}var i=e("./scope"),o=e("./utils/events"),a=e("./utils/browser"),s=e("./utils/interactionFinder"),l=Object.prototype.toString;window.Array.isArray||(window.Array.isArray=function(e){return"[object Array]"===l.call(e)}),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),a.isIE8&&!function(){var e=function(e){for(var t=i.interactions,n=Array.isArray(t),r=0,t=n?t:t[Symbol.iterator]();;){var o;if(n){if(r>=t.length)break;o=t[r++]}else{if(r=t.next(),r.done)break;o=r.value}var a=o;a.interacting()&&a.target.checkAndPreventDefault(e)}},t=function(t,n){var a=t.doc,s=(t.win,0===n.indexOf("listen")?o.add:o.remove);s(a,"selectstart",e),i.pointerEvents&&s(a,"dblclick",r)};i.signals.on("add-document",t),i.signals.on("remove-document",t)}(),t.exports=null},{"./scope":28,"./utils/browser":31,"./utils/events":34,"./utils/interactionFinder":39}],23:[function(e,t,n){var r=e("../InteractEvent"),i=e("../Interaction"),o=e("../utils/extend"),a={names:[],setOffsets:function(e,t){var n=e.target,r=e.element,i=n.getRect(r);i?(e.startOffset.left=t.page.x-i.left,e.startOffset.top=t.page.y-i.top,e.startOffset.right=i.right-t.page.x,e.startOffset.bottom=i.bottom-t.page.y,"width"in i||(i.width=i.right-i.left),"height"in i||(i.height=i.bottom-i.top)):e.startOffset.left=e.startOffset.top=e.startOffset.right=e.startOffset.bottom=0,a.setModifierOffsets(e,n,r,i,e.modifierOffsets)},setModifierOffsets:function(e,t,n,r,i){for(var o=0;o<a.names.length;o++){var s=a.names[o];i[s]=a[a.names[o]].setOffset(e,t,n,r,e.startOffset)}},setAll:function(e,t,n,r,i){for(var s={dx:0,dy:0,changed:!1,locked:!1,shouldMove:!0},l=e.target,c=o({},t),p=void 0,u=a.names,d=Array.isArray(u),v=0,u=d?u:u[Symbol.iterator]();;){var f;if(d){if(v>=u.length)break;f=u[v++]}else{if(v=u.next(),v.done)break;f=v.value}var g=f,h=a[g];h.shouldDo(l,e.prepared.name,r,i)&&(p=h.set(c,e,n[g]),p.locked&&(c.x+=p.dx,c.y+=p.dy,s.dx+=p.dx,s.dy+=p.dy,s.locked=!0))}return s.shouldMove=!p||p.changed,s},resetStatuses:function(e){for(var t=a.names,n=Array.isArray(t),r=0,t=n?t:t[Symbol.iterator]();;){var i;if(n){if(r>=t.length)break;i=t[r++]}else{if(r=t.next(),r.done)break;i=r.value}var o=i;e[o]=a[o].reset(e[o]||{})}return e},start:function(e,t){var n=e.interaction;a.setOffsets(n,"action-resume"===t?n.curCoords:n.startCoords),a.resetStatuses(n.modifierStatuses),a.setAll(n,n.startCoords.page,n.modifierStatuses)}};i.signals.on("new",function(e){e.startOffset={left:0,right:0,top:0,bottom:0},e.modifierOffsets={},e.modifierStatuses=a.resetStatuses({})}),i.signals.on("action-start",a.start),i.signals.on("action-resume",a.start),i.signals.on("before-action-move",function(e){var t=e.interaction,n=e.preEnd,r=e.interactingBeforeMove,i=a.setAll(t,t.curCoords.page,t.modifierStatuses,n);!i.shouldMove&&r&&(t._dontFireMove=!0)}),i.signals.on("action-end",function(e){for(var t=e.interaction,n=e.event,r=0;r<a.names.length;r++)if(a[a.names[r]].shouldDo(t.target,t.prepared.name,!0,!0)){t.doMove({event:n,preEnd:!0});break}}),r.signals.on("set-xy",function(e){for(var t=e.iEvent,n=e.interaction,r=e.page,i=e.client,o=e.phase,s=e.action,l=n.target,c=0;c<a.names.length;c++){var p=a.names[c],u=a[p];t[p]=u.modifyCoords(r,i,l,n.modifierStatuses[p],s,o)}}),t.exports=a},{"../InteractEvent":3,"../Interaction":5,"../utils/extend":35}],24:[function(e,t,n){var r=e("./index"),i=e("../utils"),o=e("../defaultOptions"),a={defaults:{enabled:!1,endOnly:!1,restriction:null,elementRect:null},shouldDo:function(e,t,n,r){var i=e.options[t].restrict;return i&&i.enabled&&(n||!i.endOnly)&&(!r||i.endOnly)},setOffset:function(e,t,n,r,i){var o=t.options[e.prepared.name].restrict.elementRect,a={};return r&&o?(a.left=i.left-r.width*o.left,a.top=i.top-r.height*o.top,a.right=i.right-r.width*(1-o.right),a.bottom=i.bottom-r.height*(1-o.bottom)):a.left=a.top=a.right=a.bottom=0,a},set:function(e,t,n){var r=t.target,o=r&&r.options[t.prepared.name].restrict,a=o&&o.restriction;if(!a)return n;var s=n.useStatusXY?{x:n.x,y:n.y}:i.extend({},e);if(n.dx=0,n.dy=0,n.locked=!1,i.isString(a)&&(a="parent"===a?i.parentNode(t.element):"self"===a?r.getRect(t.element):i.closest(t.element,a),!a))return n;i.isFunction(a)&&(a=a(s.x,s.y,t.element)),i.isElement(a)&&(a=i.getElementRect(a));var l=a,c=void 0,p=void 0,u=t.modifierOffsets.restrict;return a?"x"in a&&"y"in a?(c=Math.max(Math.min(l.x+l.width-u.right,s.x),l.x+u.left),p=Math.max(Math.min(l.y+l.height-u.bottom,s.y),l.y+u.top)):(c=Math.max(Math.min(l.right-u.right,s.x),l.left+u.left),p=Math.max(Math.min(l.bottom-u.bottom,s.y),l.top+u.top)):(c=s.x,p=s.y),n.dx=c-s.x,n.dy=p-s.y,n.changed=n.restrictedX!==c||n.restrictedY!==p,n.locked=!(!n.dx&&!n.dy),n.restrictedX=c,n.restrictedY=p,n},reset:function(e){return e.dx=e.dy=0,e.modifiedX=e.modifiedY=NaN,e.locked=!1,e.changed=!0,e},modifyCoords:function(e,t,n,r,i,o){var a=n.options[i].restrict,s=a&&a.elementRect;if(a&&a.enabled&&("start"!==o||!s||!r.locked)&&r.locked)return e.x+=r.dx,e.y+=r.dy,t.x+=r.dx,t.y+=r.dy,{dx:r.dx,dy:r.dy}}};r.restrict=a,r.names.push("restrict"),o.perAction.restrict=a.defaults,t.exports=a},{"../defaultOptions":17,"../utils":38,"./index":23}],25:[function(e,t,n){var r=e("./index"),i=e("../interact"),o=e("../utils"),a=e("../defaultOptions"),s={defaults:{enabled:!1,endOnly:!1,range:1/0,targets:null,offsets:null,relativePoints:null},shouldDo:function(e,t,n,r){var i=e.options[t].snap;return i&&i.enabled&&(n||!i.endOnly)&&(!r||i.endOnly)},setOffset:function(e,t,n,r,i){var a=[],s=o.getOriginXY(t,n,e.prepared.name),l=t.options[e.prepared.name].snap||{},c=void 0;if(c="startCoords"===l.offset?{x:e.startCoords.page.x-s.x,y:e.startCoords.page.y-s.y}:"self"===l.offset?{x:r.left-s.x,y:r.top-s.y}:l.offset||{x:0,y:0},r&&l.relativePoints&&l.relativePoints.length)for(var p=l.relativePoints,u=Array.isArray(p),d=0,p=u?p:p[Symbol.iterator]();;){var v;if(u){if(d>=p.length)break;v=p[d++]}else{if(d=p.next(),d.done)break;v=d.value}var f=v.x,g=v.y;a.push({x:i.left-r.width*f+c.x,y:i.top-r.height*g+c.y})}else a.push(c);return a},set:function(e,t,n){var r=t.target.options[t.prepared.name].snap,i=[],a=void 0,s=void 0,l=void 0;if(n.useStatusXY)s={x:n.x,y:n.y};else{var c=o.getOriginXY(t.target,t.element,t.prepared.name);s=o.extend({},e),s.x-=c.x,s.y-=c.y}n.realX=s.x,n.realY=s.y;for(var p=t.modifierOffsets.snap,u=r.targets?r.targets.length:0,d=p,v=Array.isArray(d),f=0,d=v?d:d[Symbol.iterator]();;){var g;if(v){if(f>=d.length)break;g=d[f++]}else{if(f=d.next(),f.done)break;g=f.value}for(var h=g.x,m=g.y,y=s.x-h,x=s.y-m,b=r.targets,w=Array.isArray(b),E=0,b=w?b:b[Symbol.iterator]();;){var S;if(w){if(E>=b.length)break;S=b[E++]}else{if(E=b.next(),E.done)break;S=E.value}var T=S;a=o.isFunction(T)?T(y,x,t):T,a&&i.push({x:o.isNumber(a.x)?a.x+h:y,y:o.isNumber(a.y)?a.y+m:x,range:o.isNumber(a.range)?a.range:r.range})}}var A={target:null,inRange:!1,distance:0,range:0,dx:0,dy:0};for(l=0,u=i.length;l<u;l++){a=i[l];var D=a.range,C=a.x-s.x,O=a.y-s.y,I=o.hypot(C,O),k=I<=D;D===1/0&&A.inRange&&A.range!==1/0&&(k=!1),A.target&&!(k?A.inRange&&D!==1/0?I/D<A.distance/A.range:D===1/0&&A.range!==1/0||I<A.distance:!A.inRange&&I<A.distance)||(A.target=a,A.distance=I,A.range=D,A.inRange=k,A.dx=C,A.dy=O,n.range=D)}var M=void 0;return A.target?(M=n.snappedX!==A.target.x||n.snappedY!==A.target.y,n.snappedX=A.target.x,n.snappedY=A.target.y):(M=!0,n.snappedX=NaN,n.snappedY=NaN),n.dx=A.dx,n.dy=A.dy,n.changed=M||A.inRange&&!n.locked,n.locked=A.inRange,n},reset:function(e){return e.dx=e.dy=0,e.snappedX=e.snappedY=NaN,e.locked=!1,e.changed=!0,e},modifyCoords:function(e,t,n,r,i,o){var a=n.options[i].snap,s=a&&a.relativePoints;if(a&&a.enabled&&("start"!==o||!s||!s.length))return r.locked&&(e.x+=r.dx,e.y+=r.dy,t.x+=r.dx,t.y+=r.dy),{range:r.range,locked:r.locked,x:r.snappedX,y:r.snappedY,realX:r.realX,realY:r.realY,dx:r.dx,dy:r.dy}}};i.createSnapGrid=function(e){return function(t,n){var r=e.limits||{left:-(1/0),right:1/0,top:-(1/0),bottom:1/0},i=0,a=0;o.isObject(e.offset)&&(i=e.offset.x,a=e.offset.y);var s=Math.round((t-i)/e.x),l=Math.round((n-a)/e.y),c=Math.max(r.left,Math.min(r.right,s*e.x+i)),p=Math.max(r.top,Math.min(r.bottom,l*e.y+a));return{x:c,y:p,range:e.range}}},r.snap=s,r.names.push("snap"),a.perAction.snap=s.defaults,t.exports=s},{"../defaultOptions":17,"../interact":20,"../utils":38,"./index":23}],26:[function(e,t,n){function r(){this.originalEvent.preventDefault()}function i(){this.immediatePropagationStopped=this.propagationStopped=!0}function o(){this.propagationStopped=!0}function a(e,t,n,a,l,c){var p=e.getPointerIndex(t),v={},g=void 0,h=void 0,m=void 0;"doubletap"===c?v=t:(u.pointerExtend(v,n),n!==t&&u.pointerExtend(v,t),v.preventDefault=r,v.stopPropagation=o,v.stopImmediatePropagation=i,v.interaction=e,v.timeStamp=(new Date).getTime(),v.originalEvent=n,v.type=c,v.pointerId=u.getPointerId(t),v.pointerType=e.mouse?"mouse":d.supportsPointerEvent?u.isString(t.pointerType)?t.pointerType:[void 0,void 0,"touch","pen","mouse"][t.pointerType]:"touch"),"tap"===c&&(v.dt=v.timeStamp-e.downTimes[p],h=v.timeStamp-e.tapTime,m=!!(e.prevTap&&"doubletap"!==e.prevTap.type&&e.prevTap.target===v.target&&h<500),v["double"]=m,e.tapTime=v.timeStamp);var y={pointerEvent:v,pointer:t,event:n,targets:l};for(f.fire("new",y),g=0;g<l.length;g++){var x=l[g];v.currentTarget=x.element;for(var b in x.props||{})v[b]=x.props[b];var w=u.getOriginXY(x.eventable,x.element),E=w.x,S=w.y;if(v.pageX-=E,v.pageY-=S,v.clientX-=E,v.clientY-=S,x.eventable.fire(v),v.pageX+=E,v.pageY+=S,v.clientX+=E,v.clientY+=S,v.immediatePropagationStopped||v.propagationStopped&&g+1<l.length&&l[g+1].element!==v.currentTarget)break}if(f.fire("fired",y),m){var T={};u.extend(T,v),T.dt=h,T.type="doubletap",s(e,T,n,a,"doubletap"),e.prevTap=T}else"tap"===c&&(e.prevTap=v)}function s(e,t,n,r,i){var o=e.getPointerIndex(t);if("tap"!==i||!e.pointerWasMoved&&e.downTargets[o]&&e.downTargets[o]===r){for(var s=[],l=u.getPath(r),c={targets:s,interaction:e,pointer:t,event:n,eventTarget:r,eventType:i,path:l,element:null},p=l,d=Array.isArray(p),v=0,p=d?p:p[Symbol.iterator]();;){var g;if(d){if(v>=p.length)break;g=p[v++]}else{if(v=p.next(),v.done)break;g=v.value}var m=g;c.element=m,f.fire("collect-targets",c)}"hold"===i&&(s=h(s,function(t){return t.eventable.options.holdDuration===e.holdTimers[o].duration})),(s.length||"tap"===i)&&a(e,t,n,r,s,i)}}function l(e){return function(t){s(t.interaction,t.pointer,t.event,t.eventTarget,e)}}var c=e("../scope"),p=e("../Interaction"),u=e("../utils"),d=e("../utils/browser"),v=e("../defaultOptions"),f=e("../utils/Signals")["new"](),g=e("../utils/arr"),h=g.filter,m=["down","up","up","cancel"],y=["down","up","tap","cancel"];p.signals.on("move",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget,o=e.duplicateMove,a=t.getPointerIndex(n);o||t.pointerIsDown&&!t.pointerWasMoved||(t.pointerIsDown&&clearTimeout(t.holdTimers[a].timeout),s(t,n,r,i,"move"))}),p.signals.on("down",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget,o=e.pointerIndex,a=d.isIE8?u.extend({},r):r,l=t.holdTimers;l[o]||(l[o]={duration:1/0,timeout:null});for(var c=l[o],p=u.getPath(i),v={interaction:t,pointer:n,event:r,eventTarget:i,eventType:"hold",targets:[],path:p,element:null},g=p,h=Array.isArray(g),m=0,g=h?g:g[Symbol.iterator]();;){var y;if(h){if(m>=g.length)break;y=g[m++]}else{if(m=g.next(),m.done)break;y=m.value}var x=y;v.element=x,f.fire("collect-targets",v)}if(v.targets.length){for(var b=1/0,w=0;w<v.targets.length;w++){var E=v.targets[w],S=E.eventable.options.holdDuration;S<b&&(b=S)}c.duration=b,c.timeout=setTimeout(function(){s(t,d.isIE8?a:n,a,i,"hold",b)},b)}}),["up","cancel"].forEach(function(e){p.signals.on(e,function(e){var t=e.interaction,n=e.pointerIndex;t.holdTimers[n]&&clearTimeout(t.holdTimers[n].timeout)})});for(var x=0;x<m.length;x++)p.signals.on(m[x],l(y[x]));p.signals.on("new",function(e){e.prevTap=null,e.tapTime=0}),v.pointerEvents={holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},t.exports=c.pointerEvents={firePointers:a,collectEventTargets:s,preventOriginalDefault:r,signals:f,defaults:v.pointerEvents,types:["down","move","up","cancel","tap","doubletap","hold"]}},{"../Interaction":5,"../defaultOptions":17,"../scope":28,"../utils":38,"../utils/Signals":29,"../utils/arr":30,"../utils/browser":31}],27:[function(e,t,n){var r=e("./index"),i=e("../Interactable"),o=e("../utils/browser"),a=e("../utils/isType"),s=e("../utils/domUtils"),l=e("../scope"),c=e("../utils/extend"),p=e("../utils/arr"),u=p.merge;r.signals.on("collect-targets",function(e){function t(e,t,l){var p=o.useMatchesSelectorPolyfill?l.querySelectorAll(t):void 0,u=e.events,d=u.options;u[i]&&a.isElement(r)&&s.matchesSelector(r,t,p)&&e.testIgnoreAllow(d,r,c)&&n.push({element:r,eventable:u,props:{interactable:e}})}var n=e.targets,r=e.element,i=e.eventType,c=e.eventTarget,p=l.interactables.get(r);if(p){var u=p.events,d=u.options;u[i]&&p.testIgnoreAllow(d,r,c)&&n.push({element:r,eventable:u,props:{interactable:p}})}l.interactables.forEachSelector(t,r)}),i.signals.on("new",function(e){var t=e.interactable;t.events.getRect=function(e){return t.getRect(e)}}),i.signals.on("set",function(e){var t=e.interactable,n=e.options;c(t.events.options,r.defaults),c(t.events.options,n)}),u(i.eventTypes,r.types),i.prototype.pointerEvents=function(e){return c(this.events.options,e),this};var d=i.prototype._backCompatOption;i.prototype._backCompatOption=function(e,t){var n=d.call(this,e,t);return n===this&&(this.events.options[e]=t),n},i.settingsMethods.push("pointerEvents")},{"../Interactable":4,"../scope":28,"../utils/arr":30,"../utils/browser":31,"../utils/domUtils":33,"../utils/extend":35,"../utils/isType":40,"./index":26}],28:[function(e,t,n){var r=e("./utils"),i=e("./utils/extend"),o=e("./utils/events"),a=e("./utils/Signals")["new"](),s={signals:a,events:o,utils:r,documents:[],addDocument:function(e,t){return!r.contains(s.documents,e)&&(t=t||s.getWindow(e),s.documents.push(e),o.documents.push(e),e!==s.document&&o.add(t,"unload",s.onWindowUnload),void a.fire("add-document",{doc:e,win:t}))},removeDocument:function(e,t){var n=r.indexOf(s.documents,e);t=t||s.getWindow(e),o.remove(t,"unload",s.onWindowUnload),s.documents.splice(n,1),o.documents.splice(n,1),a.fire("remove-document",{win:t,doc:e})},onWindowUnload:function(){s.removeDocument(this.document,this)}};i(s,e("./utils/window")),i(s,e("./utils/domObjects")),
	t.exports=s},{"./utils":38,"./utils/Signals":29,"./utils/domObjects":32,"./utils/events":34,"./utils/extend":35,"./utils/window":45}],29:[function(e,t,n){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("./arr"),o=i.indexOf,a=function(){function e(){r(this,e),this.listeners={}}return e.prototype.on=function(e,t){return this.listeners[e]?void this.listeners[e].push(t):void(this.listeners[e]=[t])},e.prototype.off=function(e,t){if(this.listeners[e]){var n=o(this.listeners[e],t);n!==-1&&this.listeners[e].splice(n,1)}},e.prototype.fire=function(e,t){var n=this.listeners[e];if(n)for(var r=0;r<n.length;r++)if(n[r](t,e)===!1)return},e}();a["new"]=function(){return new a},t.exports=a},{"./arr":30}],30:[function(e,t,n){function r(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function i(e,t){return r(e,t)!==-1}function o(e,t){for(var n=0;n<t.length;n++)e.push(t[n]);return e}function a(e,t){for(var n=[],r=0;r<e.length;r++)t(e[r])&&n.push(e[r]);return n}t.exports={indexOf:r,contains:i,merge:o,filter:a}},{}],31:[function(e,t,n){var r=e("./window"),i=e("./isType"),o=e("./domObjects"),a={supportsTouch:!!("ontouchstart"in r.window||i.isFunction(r.window.DocumentTouch)&&o.document instanceof r.DocumentTouch),supportsPointerEvent:!!o.PointerEvent,isIE8:"attachEvent"in r.window&&!("addEventListener"in r.window),isOperaMobile:"Opera"===navigator.appName&&a.supportsTouch&&navigator.userAgent.match("Presto"),isIOS7:/iP(hone|od|ad)/.test(navigator.platform)&&/OS 7[^\d]/.test(navigator.appVersion),isIe9OrOlder:/MSIE (8|9)/.test(navigator.userAgent),prefixedMatchesSelector:"matches"in Element.prototype?"matches":"webkitMatchesSelector"in Element.prototype?"webkitMatchesSelector":"mozMatchesSelector"in Element.prototype?"mozMatchesSelector":"oMatchesSelector"in Element.prototype?"oMatchesSelector":"msMatchesSelector",useMatchesSelectorPolyfill:!1,pEventTypes:o.PointerEvent?o.PointerEvent===r.window.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,wheelEvent:"onmousewheel"in o.document?"mousewheel":"wheel"};a.useMatchesSelectorPolyfill=!i.isFunction(Element.prototype[a.prefixedMatchesSelector]),t.exports=a},{"./domObjects":32,"./isType":40,"./window":45}],32:[function(e,t,n){function r(){}var i={},o=e("./window").window;i.document=o.document,i.DocumentFragment=o.DocumentFragment||r,i.SVGElement=o.SVGElement||r,i.SVGSVGElement=o.SVGSVGElement||r,i.SVGElementInstance=o.SVGElementInstance||r,i.HTMLElement=o.HTMLElement||o.Element,i.Event=o.Event,i.Touch=o.Touch||r,i.PointerEvent=o.PointerEvent||o.MSPointerEvent,t.exports=i},{"./window":45}],33:[function(e,t,n){var r=e("./window"),i=e("./browser"),o=e("./isType"),a=e("./domObjects"),s={nodeContains:function(e,t){for(;t;){if(t===e)return!0;t=t.parentNode}return!1},closest:function(e,t){for(;o.isElement(e);){if(s.matchesSelector(e,t))return e;e=s.parentNode(e)}return null},parentNode:function(e){var t=e.parentNode;if(o.isDocFrag(t)){for(;(t=t.host)&&o.isDocFrag(t););return t}return t},matchesSelectorPolyfill:i.useMatchesSelectorPolyfill?function(e,t,n){n=n||e.parentNode.querySelectorAll(t);for(var r=0,i=n.length;r<i;r++)if(n[r]===e)return!0;return!1}:null,matchesSelector:function(e,t,n){return i.useMatchesSelectorPolyfill?s.matchesSelectorPolyfill(e,t,n):(r.window!==r.realWindow&&(t=t.replace(/\/deep\//g," ")),e[i.prefixedMatchesSelector](t))},indexOfDeepestElement:function(e){var t=[],n=[],r=void 0,i=e[0],o=i?0:-1,s=void 0,l=void 0,c=void 0,p=void 0;for(c=1;c<e.length;c++)if(r=e[c],r&&r!==i)if(i){if(r.parentNode!==r.ownerDocument)if(i.parentNode!==r.ownerDocument){if(!t.length)for(s=i;s.parentNode&&s.parentNode!==s.ownerDocument;)t.unshift(s),s=s.parentNode;if(i instanceof a.HTMLElement&&r instanceof a.SVGElement&&!(r instanceof a.SVGSVGElement)){if(r===i.parentNode)continue;s=r.ownerSVGElement}else s=r;for(n=[];s.parentNode!==s.ownerDocument;)n.unshift(s),s=s.parentNode;for(p=0;n[p]&&n[p]===t[p];)p++;var u=[n[p-1],n[p],t[p]];for(l=u[0].lastChild;l;){if(l===u[1]){i=r,o=c,t=[];break}if(l===u[2])break;l=l.previousSibling}}else i=r,o=c}else i=r,o=c;return o},matchesUpTo:function(e,t,n){for(;o.isElement(e);){if(s.matchesSelector(e,t))return!0;if(e=s.parentNode(e),e===n)return s.matchesSelector(e,t)}return!1},getActualElement:function(e){return e instanceof a.SVGElementInstance?e.correspondingUseElement:e},getScrollXY:function(e){return e=e||r.window,{x:e.scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop}},getElementClientRect:function(e){var t=e instanceof a.SVGElement?e.getBoundingClientRect():e.getClientRects()[0];return t&&{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}},getElementRect:function(e){var t=s.getElementClientRect(e);if(!i.isIOS7&&t){var n=s.getScrollXY(r.getWindow(e));t.left+=n.x,t.right+=n.x,t.top+=n.y,t.bottom+=n.y}return t},getPath:function(e){for(var t=[];e;)t.push(e),e=s.parentNode(e);return t}};t.exports=s},{"./browser":31,"./domObjects":32,"./isType":40,"./window":45}],34:[function(e,t,n){function r(e,t,n,r){var i=h(T,e),o=A[i];if(o||(o={events:{},typeCount:0},i=T.push(e)-1,A.push(o),D.push(b?{supplied:[],wrapped:[],useCount:[]}:null)),o.events[t]||(o.events[t]=[],o.typeCount++),!m(o.events[t],n)){var a=void 0;if(b){var s=D[i],l=s.supplied,p=s.wrapped,v=s.useCount,f=h(l,n),g=p[f]||function(t){t.immediatePropagationStopped||(t.target=t.srcElement,t.currentTarget=e,t.preventDefault=t.preventDefault||c,t.stopPropagation=t.stopPropagation||u,t.stopImmediatePropagation=t.stopImmediatePropagation||d,/mouse|click/.test(t.type)&&(t.pageX=t.clientX+y(e).document.documentElement.scrollLeft,t.pageY=t.clientY+y(e).document.documentElement.scrollTop),n(t))};a=e[w](S+t,g,!!r),f===-1?(l.push(n),p.push(g),v.push(1)):v[f]++}else a=e[w](t,n,!!r);return o.events[t].push(n),a}}function i(e,t,n,r){var o=h(T,e),a=A[o];if(a&&a.events){var s=n,l=void 0,c=void 0;if(b&&(l=D[o],c=h(l.supplied,n),s=l.wrapped[c]),"all"!==t){if(a.events[t]){var p=a.events[t].length;if("all"===n){for(var u=0;u<p;u++)i(e,t,a.events[t][u],!!r);return}for(var u=0;u<p;u++)if(a.events[t][u]===n){e[E](S+t,s,!!r),a.events[t].splice(u,1),b&&l&&(l.useCount[c]--,0===l.useCount[c]&&(l.supplied.splice(c,1),l.wrapped.splice(c,1),l.useCount.splice(c,1)));break}a.events[t]&&0===a.events[t].length&&(a.events[t]=null,a.typeCount--)}a.typeCount||(A.splice(o,1),T.splice(o,1),D.splice(o,1))}else for(t in a.events)a.events.hasOwnProperty(t)&&i(e,t,"all")}}function o(e,t,n,i,o){if(!C[n]){C[n]={selectors:[],contexts:[],listeners:[]};for(var a=0;a<O.length;a++)r(O[a],n,s),r(O[a],n,l,!0)}var c=C[n],p=void 0;for(p=c.selectors.length-1;p>=0&&(c.selectors[p]!==e||c.contexts[p]!==t);p--);p===-1&&(p=c.selectors.length,c.selectors.push(e),c.contexts.push(t),c.listeners.push([])),c.listeners[p].push([i,o])}function a(e,t,n,r,o){var a=C[n],c=!1,p=void 0;if(a)for(p=a.selectors.length-1;p>=0;p--)if(a.selectors[p]===e&&a.contexts[p]===t){for(var u=a.listeners[p],d=u.length-1;d>=0;d--){var v=u[d][0],f=u[d][1];if(v===r&&f===o){u.splice(d,1),u.length||(a.selectors.splice(p,1),a.contexts.splice(p,1),a.listeners.splice(p,1),i(t,n,s),i(t,n,l,!0),a.selectors.length||(C[n]=null)),c=!0;break}}if(c)break}}function s(e,t){var n={},r=C[e.type],i=g.getActualElement(e.path?e.path[0]:e.target),o=i;for(t=!!t,x(n,e),n.originalEvent=e,n.preventDefault=p;f.isElement(o);){for(var a=0;a<r.selectors.length;a++){var s=r.selectors[a],l=r.contexts[a];if(g.matchesSelector(o,s)&&g.nodeContains(l,i)&&g.nodeContains(l,o)){var c=r.listeners[a];n.currentTarget=o;for(var u=0;u<c.length;u++)c[u][1]===t&&c[u][0](n)}}o=g.parentNode(o)}}function l(e){return s.call(this,e,!0)}function c(){this.returnValue=!1}function p(){this.originalEvent.preventDefault()}function u(){this.cancelBubble=!0}function d(){this.cancelBubble=!0,this.immediatePropagationStopped=!0}var v=e("./arr"),f=e("./isType"),g=e("./domUtils"),h=v.indexOf,m=v.contains,y=e("./window").getWindow,x=e("./pointerExtend"),b="attachEvent"in window&&!("addEventListener"in window),w=b?"attachEvent":"addEventListener",E=b?"detachEvent":"removeEventListener",S=b?"on":"",T=[],A=[],D=[],C={},O=[];t.exports={add:r,remove:i,addDelegate:o,removeDelegate:a,delegateListener:s,delegateUseCapture:l,delegatedEvents:C,documents:O,useAttachEvent:b,_elements:T,_targets:A,_attachedListeners:D}},{"./arr":30,"./domUtils":33,"./isType":40,"./pointerExtend":42,"./window":45}],35:[function(e,t,n){t.exports=function(e,t){for(var n in t)e[n]=t[n];return e}},{}],36:[function(e,t,n){var r=e("./domUtils"),i=r.closest,o=r.parentNode,a=r.getElementRect,s=e("./isType"),l=s.isElement,c=s.isFunction,p=s.trySelector;t.exports=function(e,t,n){var r=n?e.options[n].origin:e.options.origin;return"parent"===r?r=o(t):"self"===r?r=e.getRect(t):p(r)&&(r=i(t,r)||{x:0,y:0}),c(r)&&(r=r(e&&t)),l(r)&&(r=a(r)),r.x="x"in r?r.x:r.left,r.y="y"in r?r.y:r.top,r}},{"./domUtils":33,"./isType":40}],37:[function(e,t,n){t.exports=function(e,t){return Math.sqrt(e*e+t*t)}},{}],38:[function(e,t,n){var r=e("./extend"),i=e("./window"),o={warnOnce:function(e,t){var n=!1;return function(){return n||(i.window.console.warn(t),n=!0),e.apply(this,arguments)}},_getQBezierValue:function(e,t,n,r){var i=1-e;return i*i*t+2*i*e*n+e*e*r},getQuadraticCurvePoint:function(e,t,n,r,i,a,s){return{x:o._getQBezierValue(s,e,n,i),y:o._getQBezierValue(s,t,r,a)}},easeOutQuad:function(e,t,n,r){return e/=r,-n*e*(e-2)+t},copyAction:function(e,t){return e.name=t.name,e.axis=t.axis,e.edges=t.edges,e},extend:r,hypot:e("./hypot"),getOriginXY:e("./getOriginXY")};r(o,e("./arr")),r(o,e("./isType")),r(o,e("./domUtils")),r(o,e("./pointerUtils")),t.exports=o},{"./arr":30,"./domUtils":33,"./extend":35,"./getOriginXY":36,"./hypot":37,"./isType":40,"./pointerUtils":43,"./window":45}],39:[function(e,t,n){var r=e("../scope"),i=e("./index"),o=e("./browser"),a={methodOrder:["simulationResume","mouse","hasPointer","idle"],search:function(e,t,n){for(var r=/mouse/i.test(e.pointerType||t)||4===e.pointerType,o=i.getPointerId(e),s={pointer:e,pointerId:o,mouseEvent:r,eventType:t,eventTarget:n},l=a.methodOrder,c=Array.isArray(l),p=0,l=c?l:l[Symbol.iterator]();;){var u;if(c){if(p>=l.length)break;u=l[p++]}else{if(p=l.next(),p.done)break;u=p.value}var d=u,v=a[d](s);if(v)return v}},simulationResume:function(e){var t=e.mouseEvent,n=e.eventType,o=e.eventTarget;if(!/down|start/i.test(n))return null;for(var a=r.interactions,s=Array.isArray(a),l=0,a=s?a:a[Symbol.iterator]();;){var c;if(s){if(l>=a.length)break;c=a[l++]}else{if(l=a.next(),l.done)break;c=l.value}var p=c,u=o;if(p.simulation&&p.simulation.allowResume&&p.mouse===t)for(;u;){if(u===p.element)return p;u=i.parentNode(u)}}return null},mouse:function(e){var t=e.pointerId,n=e.mouseEvent,a=e.eventType;if(!n&&(o.supportsTouch||o.supportsPointerEvent))return null;for(var s=void 0,l=r.interactions,c=Array.isArray(l),p=0,l=c?l:l[Symbol.iterator]();;){var u;if(c){if(p>=l.length)break;u=l[p++]}else{if(p=l.next(),p.done)break;u=p.value}var d=u;if(d.mouse){if(d.simulation&&!i.contains(d.pointerIds,t))continue;if(d.interacting())return d;s||(s=d)}}if(s)return s;for(var v=r.interactions,f=Array.isArray(v),g=0,v=f?v:v[Symbol.iterator]();;){var h;if(f){if(g>=v.length)break;h=v[g++]}else{if(g=v.next(),g.done)break;h=g.value}var d=h;if(d.mouse&&(!/down/.test(a)||!d.simulation))return d}return null},hasPointer:function(e){for(var t=e.pointerId,n=r.interactions,o=Array.isArray(n),a=0,n=o?n:n[Symbol.iterator]();;){var s;if(o){if(a>=n.length)break;s=n[a++]}else{if(a=n.next(),a.done)break;s=a.value}var l=s;if(i.contains(l.pointerIds,t))return l}},idle:function(e){for(var t=e.mouseEvent,n=r.interactions,i=Array.isArray(n),o=0,n=i?n:n[Symbol.iterator]();;){var a;if(i){if(o>=n.length)break;a=n[o++]}else{if(o=n.next(),o.done)break;a=o.value}var s=a;if(1===s.pointerIds.length){var l=s.target;if(l&&!l.options.gesture.enabled)continue}else if(s.pointerIds.length>=2)continue;if(!s.interacting()&&(t||!s.mouse))return s}return null}};t.exports=a},{"../scope":28,"./browser":31,"./index":38}],40:[function(e,t,n){var r=e("./window"),i=e("./isWindow"),o=e("./domObjects"),a={isElement:function(e){if(!e||"object"!=typeof e)return!1;var t=r.getWindow(e)||r.window;return/object|function/.test(typeof t.Element)?e instanceof t.Element:1===e.nodeType&&"string"==typeof e.nodeName},isArray:null,isWindow:function(e){return e===r.window||i(e)},isDocFrag:function(e){return a.isObject(e)&&11===e.nodeType},isObject:function(e){return!!e&&"object"==typeof e},isFunction:function(e){return"function"==typeof e},isNumber:function(e){return"number"==typeof e},isBool:function(e){return"boolean"==typeof e},isString:function(e){return"string"==typeof e},trySelector:function(e){return!!a.isString(e)&&(o.document.querySelector(e),!0)}};a.isArray=function(e){return a.isObject(e)&&"undefined"!=typeof e.length&&a.isFunction(e.splice)},t.exports=a},{"./domObjects":32,"./isWindow":41,"./window":45}],41:[function(e,t,n){t.exports=function(e){return!(!e||!e.Window)&&e instanceof e.Window}},{}],42:[function(e,t,n){function r(e,n){for(var r in n){var i=t.exports.prefixedPropREs,o=!1;for(var a in i)if(0===r.indexOf(a)&&i[a].test(r)){o=!0;break}o||(e[r]=n[r])}return e}r.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/},t.exports=r},{}],43:[function(e,t,n){var r=e("./hypot"),i=e("./browser"),o=e("./domObjects"),a=e("./isType"),s=e("./pointerExtend"),l={copyCoords:function(e,t){e.page=e.page||{},e.page.x=t.page.x,e.page.y=t.page.y,e.client=e.client||{},e.client.x=t.client.x,e.client.y=t.client.y,e.timeStamp=t.timeStamp},setCoordDeltas:function(e,t,n){e.page.x=n.page.x-t.page.x,e.page.y=n.page.y-t.page.y,e.client.x=n.client.x-t.client.x,e.client.y=n.client.y-t.client.y,e.timeStamp=n.timeStamp-t.timeStamp;var i=Math.max(e.timeStamp/1e3,.001);e.page.speed=r(e.page.x,e.page.y)/i,e.page.vx=e.page.x/i,e.page.vy=e.page.y/i,e.client.speed=r(e.client.x,e.page.y)/i,e.client.vx=e.client.x/i,e.client.vy=e.client.y/i},isNativePointer:function(e){return e instanceof o.Event||e instanceof o.Touch},getXY:function(e,t,n){return n=n||{},e=e||"page",n.x=t[e+"X"],n.y=t[e+"Y"],n},getPageXY:function(e,t){return t=t||{},i.isOperaMobile&&l.isNativePointer(e)?(l.getXY("screen",e,t),t.x+=window.scrollX,t.y+=window.scrollY):l.getXY("page",e,t),t},getClientXY:function(e,t){return t=t||{},i.isOperaMobile&&l.isNativePointer(e)?l.getXY("screen",e,t):l.getXY("client",e,t),t},getPointerId:function(e){return a.isNumber(e.pointerId)?e.pointerId:e.identifier},setCoords:function(e,t,n){var r=t.length>1?l.pointerAverage(t):t[0],i={};l.getPageXY(r,i),e.page.x=i.x,e.page.y=i.y,l.getClientXY(r,i),e.client.x=i.x,e.client.y=i.y,e.timeStamp=a.isNumber(n)?n:(new Date).getTime()},pointerExtend:s,getTouchPair:function(e){var t=[];return a.isArray(e)?(t[0]=e[0],t[1]=e[1]):"touchend"===e.type?1===e.touches.length?(t[0]=e.touches[0],t[1]=e.changedTouches[0]):0===e.touches.length&&(t[0]=e.changedTouches[0],t[1]=e.changedTouches[1]):(t[0]=e.touches[0],t[1]=e.touches[1]),t},pointerAverage:function(e){for(var t={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=e,r=Array.isArray(n),i=0,n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if(i=n.next(),i.done)break;o=i.value}var a=o;for(var s in t)t[s]+=a[s]}for(var s in t)t[s]/=e.length;return t},touchBBox:function(e){if(e.length||e.touches&&e.touches.length>1){var t=l.getTouchPair(e),n=Math.min(t[0].pageX,t[1].pageX),r=Math.min(t[0].pageY,t[1].pageY),i=Math.max(t[0].pageX,t[1].pageX),o=Math.max(t[0].pageY,t[1].pageY);return{x:n,y:r,left:n,top:r,width:i-n,height:o-r}}},touchDistance:function(e,t){var n=t+"X",i=t+"Y",o=l.getTouchPair(e),a=o[0][n]-o[1][n],s=o[0][i]-o[1][i];return r(a,s)},touchAngle:function(e,t,n){var r=n+"X",i=n+"Y",o=l.getTouchPair(e),a=o[1][r]-o[0][r],s=o[1][i]-o[0][i],c=180*Math.atan2(s,a)/Math.PI;return c}};t.exports=l},{"./browser":31,"./domObjects":32,"./hypot":37,"./isType":40,"./pointerExtend":42}],44:[function(e,t,n){for(var r=["ms","moz","webkit","o"],i=0,o=void 0,a=void 0,s=0;s<r.length&&!window.requestAnimationFrame;s++)o=window[r[s]+"RequestAnimationFrame"],a=window[r[s]+"CancelAnimationFrame"]||window[r[s]+"CancelRequestAnimationFrame"];o||(o=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-i)),r=setTimeout(function(){e(t+n)},n);return i=t+n,r}),a||(a=function(e){clearTimeout(e)}),t.exports={request:o,cancel:a}},{}],45:[function(e,t,n){function r(e){i.realWindow=e;var t=e.document.createTextNode("");t.ownerDocument!==e.document&&"function"==typeof e.wrap&&e.wrap(t)===t&&(i.window=e.wrap(e)),i.window=e}var i=t.exports,o=e("./isWindow");"undefined"==typeof window?(i.window=void 0,i.realWindow=void 0):r(window),i.getWindow=function(e){if(o(e))return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||i.window},i.init=r},{"./isWindow":41}]},{},[1])(1)});

		var drag =	function (draggable, emit_options) {

						emit_options = emit_options || {};
						emit_options =	{
											start: emit_options ['start'] || 'drag-start',
											move: emit_options ['move'] || 'dragging',
											end: emit_options ['end'] || 'drag-end'
										};

						var x = 0;
						var y = 0;

						var dragging = false;

						var drag_calculate =	function (dx, dy) {
													x += dx;
													y += dy;
												};
						var drag_move =	adthrottle (function () {
											draggable .style .webkitTransform =
											draggable .style .transform =
												'translate(' + x + 'px, ' + y + 'px)';
										}, 50);
						var drag_emit =	function ( ) {

											send_event (draggable) .apply (this, arguments);
										};
						var track_coordinates =	function (action ) {
													var coordinates = { x: x, y: y };
													action .apply (this, [coordinates] .concat ([] .slice .call (arguments, 1)));
													if (coordinates .x !== x || coordinates .y !== y) {
														x = coordinates .x;
														y = coordinates .y;
														drag_move ();
													}
												};

						interact (draggable)
							.draggable (
								{
									inertia: true,
									restrict: {
										restriction: closest_parent (draggable, '.content') || closest_parent (draggable, '.page') || closest_parent (draggable, 'body'),
										endOnly: true,
										elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
									},
									autoScroll: true,

									onstart:	function (event) {
													track_coordinates (
														drag_emit .bind ({}, emit_options .start)
													);
													draggable .classList .add ('dragging');
												},
									onmove:	function (event) {
												if (! dragging) {
													track_coordinates (
														drag_emit .bind ({}, emit_options .move),
														event .dx, event .dy
													);
													dragging = true;
												}

												drag_calculate (event .dx, event .dy);
												drag_move ();

												track_coordinates (
													drag_emit .bind ({}, emit_options .move),
													event .dx, event .dy
												);
											},
									onend:	function (event) {
												draggable .classList .remove ('dragging');
												track_coordinates (
													drag_emit .bind ({}, emit_options .end)
												);
												dragging = false;
											},
									manualStart: true
								}
							) .on ('down', function (event) {
							    var interaction  = event .interaction;

							    if (event .srcElement .classList .contains ('drag-cue')) {
									interaction .start (
										{ name: 'drag' },
										event .interactable,
										event .currentTarget
									);
							    }
							});

					};

						var lift =	function (liftable) {
										var body = closest_parent (liftable, '.scroll') || closest_parent (liftable, '.page') || closest_parent (liftable, 'body');

										var lift_position = liftable .getBoundingClientRect ();
										var relative_position = body .getBoundingClientRect ();

										var placeholder = liftable .cloneNode (false);
										placeholder .style .setProperty ('display', 'none');
										prepend (body, placeholder);
										swap_nodes (placeholder, liftable);

										liftable .style .setProperty ('position', 'absolute', 'important');
										liftable .style .setProperty ('top', (lift_position .top - relative_position .top) + 'px', 'important');
										liftable .style .setProperty ('left', (lift_position .left - relative_position .left) + 'px', 'important');
										liftable .style .setProperty ('width', lift_position .width + 'px', 'important');
										liftable .style .setProperty ('height', lift_position .height + 'px', 'important');
										liftable .style .setProperty ('overflow', 'visible', 'important');

										return placeholder;
									};
						var unlift =	function (liftable, placeholder) {
											if (placeholder) {
												liftable .style .removeProperty ('position');
												liftable .style .removeProperty ('top');
												liftable .style .removeProperty ('left');
												liftable .style .removeProperty ('width');
												liftable .style .removeProperty ('height');
												liftable .style .removeProperty ('overflow');

												swap_nodes (placeholder, liftable);
												placeholder .parentNode .removeChild (placeholder);
											}
										};
						var reset =	function (outward_face, inward_face) {
										inward_face .style .removeProperty ('width');
										inward_face .style .removeProperty ('height');
										inward_face .classList .add ('display-none');

										outward_face .style .removeProperty ('position');
										outward_face .style .removeProperty ('display');
									};
						var lift_push =	function (lift) {
											return	function (element) {
														if (element .getAttribute ('lift') != undefined) {
															element .removeAttribute ('lift');
															return lift (element);
														}
													};
										};

		var self = this;

		var loaded_signal = 'loaded';

		var lift_placeholder;
		var lifted = !! opts .lift;

		self .understands (loaded_signal);

		self .understands ('drag-start');
		self .understands ('dragging');
		self .understands ('drag-end');

		if (opts .start) self .stuff .on ('drag-start', function (coordinates) {
			self .stuff .trigger (opts .start, coordinates);
		});
		if (opts .move) self .stuff .on ('dragging', function (coordinates, dx, dy) {
			self .stuff .trigger (opts .move, coordinates, dx, dy);
		});
		if (opts .end) self .stuff .on ('drag-end', function (coordinates) {
			self .stuff .trigger (opts .end, coordinates);
		});

		self .on ('mount', function () {
			drag (self .root);
			self .stuff .trigger (loaded_signal);
		});
		self .on ('unmount', function () {
			unlift (self .root, lift_placeholder);
		});
		self .on ('update', function () {

			self .stuff .trigger (loaded_signal);
		});

		self .stuff .on (loaded_signal, function () {
			var outward_face = self .root;
			var inward_face = self .root .firstElementChild;

			unlift (self .root, lift_placeholder);
			reset (outward_face, inward_face);
			on_next_tick (function () {

				var content = self .tags ['toolbox-util-placeholder'] .root;

				var content_size = content .getBoundingClientRect ();

				inward_face .style .setProperty ('width', content_size .width + 'px', 'important');
				inward_face .style .setProperty ('height', content_size .height + 'px', 'important');
				inward_face .classList .remove ('display-none');

				outward_face .style .setProperty ('position', 'relative', 'important');
				outward_face .style .setProperty ('display', 'block', 'important');

				append (inward_face, content);

				on_next_tick (function () {
					lift_placeholder = lift_push (lift) (self .root);
				});
			});
		});
});
riot.tag2('toolbox-util-dynamic-load', '<toolbox-util-placeholder riot-style="height: {top_placeholder_height}px; display: block;"></toolbox-util-placeholder> <div each="{item, nth in loaded_items}" item="{item}" onload="{item != null && on_next_tick (stuff .trigger .bind (stuff, declare_item_signal, item) )}" no-reorder> {recalls (read_item_signal) (tags) (item)} <yield from="item"></yield> </div> <toolbox-util-placeholder riot-style="height: {bottom_placeholder_height}px; display: block;"></toolbox-util-placeholder> <div if="{recalls (continue_signal)}"> <yield from="loading"></yield> </div>', '', '', function(opts) {
			var self = this;

			var items_to_load = + self .opts .items_to_load;
			var interval_for_loading = + self .opts .interval_for_loading;

			var request_signal = self .opts .request_signal;
			var response_signal = self .opts .response_signal;
			var continue_signal = self .continue_signal = self .opts .continue_signal;

			var how_to_read_signal = self .opts .how_to_read_signal;

			var declare_item_signal = self .declare_item_signal = self .opts .declare_item_signal || 'loaded-item';
			var read_item_signal = self .read_item_signal = self .opts .read_item_signal || 'read-item';

			self .top_placeholder_height = 0;
			self .bottom_placeholder_height = 0;
			self .loaded_items = [];

			var list = self .root .parentNode;
			var dynamic_load = self .root;
			var top_placeholder;

			var the_imported_items = [];
			var imported_items =	function () {
										return	{
													from: 0,
													to: the_imported_items .length - 1
												};
									};
			var item =	function (item_index) {
							return the_imported_items [item_index] .item;
						};
			var height =	function (item_index) {
								return the_imported_items [item_index] && the_imported_items [item_index] .height;
							};
			self .remembers ('item');
			self .stuff .trigger ('item', item);

			var load =	prebounce (function () {
					        var time = new Date ();
								self .top_placeholder_height = top_placeholder_height ();
								self .bottom_placeholder_height = bottom_placeholder_height ();
								self .loaded_items = loaded_items (loaded_range);

								self .update ();
					        log ('update dynamic '+(new Date () - time)+ 'ms');
						}, 200, interval_for_loading);
							var loaded_items =	function (loaded_range) {
													return	range (loaded_range);
												};
							var top_placeholder_height =	function () {
																var the_height = 0;
																for (var item = 0; item < loaded_range .from; item ++) {
																	if (height (item) == null)
																		break;
																	the_height += height (item);
																}
																return the_height;
															};
							var bottom_placeholder_height =	function () {
																var the_height = 0;
																for (var item = loaded_range .to + 1; item < the_imported_items .length; item ++) {
																	if (height (item) == null)
																		break;
																	the_height += height (item);
																}
																return the_height;
															};

							var loaded_range =	{
													from: 0,
													to: -1
												};

			var import_items =	function (new_items) {

									for (var item_index in new_items) {
										importing_items [item_index] = new_items [item_index];
									}

									for (
										var next_imported_item = the_imported_items .length;
										  (importing_items [next_imported_item]);
										next_imported_item ++
									) {
										the_imported_items .push (
											{
												item: importing_items [next_imported_item]
											} );
										delete importing_items [next_imported_item];
									}

									for (var item_index in importing_items) {
										if (item_index < the_imported_items .length)
										the_imported_items [item_index] .item = importing_items [item_index];
										delete importing_items [next_imported_item];
									}

									realign_items ();
								};
									var importing_items = {};

			self .understands (declare_item_signal);
			self .stuff .on (declare_item_signal, function (item) {
				if (! document .body .contains (self .root))
					return;

				var loaded_item = one_child (self .root, '[item="'+item+'"]');
				var height = loaded_item .offsetHeight;
				var last_height = the_imported_items [item] .height;
				if (last_height == null) {
					the_imported_items [item] .height = height;
				}
				else if (last_height !== height) {
					the_imported_items [item] .height = height;

					var height_difference = height - last_height;
					self .top_placeholder_height = if_positive (self .top_placeholder_height + height_difference);
					top_placeholder .style .height = self .top_placeholder_height + 'px';
					list .scrollHeight = logged_with ('changing scroll by') (if_positive (list .scrollHeight + height_difference));
				}

			});

			self .stuff
				.on (response_signal, import_items);

			self .on ('mount', function () {
				top_placeholder = self .tags ['toolbox-util-placeholder'] [0];
				realign_items ();
				list .addEventListener ('scroll', realign_items);
			});
				var realign_items =	function () {

										var now_displayed_range = displayed_range ();
										if (unaligned (now_displayed_range)) {

											if (self .recalls (continue_signal))
												demand_items (unimported_items (now_displayed_range));

											loaded_range = loaded_part (now_displayed_range);
							                on_next_tick (load);
										}
									};
										var unaligned =	function (displayed_range) {
														    return ! included_in (loaded_range, displayed_range);
														};
										var unimported_items =	function (displayed_range) {

																	if (displayed_range .to + items_to_load > imported_items () .to) {
																		return	{
																					from: imported_items () .to + 1,
																					to: displayed_range .to + items_to_load
																				};
																	}
																};
										var loaded_part =	function (displayed_range) {
																	return range_intersection (displayed_range, imported_items ());
																};
										var demand_items =	function (items_range) {
																if (items_range)
																	self .stuff .trigger (request_signal, items_range);
															};
										var displayed_range =	function () {
																	return most_symmetrical_range (displayed_ranges ());
																};
																	var displayed_ranges =	function () {
																								var the_displayed_height_range = displayed_height_range ();
																								return	{
																											heights: the_displayed_height_range,
																											items: displayed_item_range (the_displayed_height_range)
																										};
																							};
																								var displayed_item_range =	function (the_displayed_height_range) {
																																var displayed_item = 0;
																																var displayed_height = 0;

																																for (
																																		;
																																	displayed_item < count (imported_items ())
																																	&& height (displayed_item) != null
																																	&& displayed_height + height (displayed_item) < the_displayed_height_range .from
																																		;
																																	displayed_item ++
																																) {
																																	displayed_height += height (displayed_item);
																																}
																																var top_item = displayed_item;

																																for (
																																		;
																																	displayed_item < count (imported_items ())
																																	&& height (displayed_item) != null
																																	&& displayed_height < the_displayed_height_range .to
																																		;
																																	displayed_item ++
																																) {
																																	displayed_height += height (displayed_item);
																																}
																																var bottom_item = displayed_item;

																																var positive_range =	{
																																							from: if_positive (bottom_item - (items_to_load - 1)),
																																							to: top_item - 1
																																						};
																																var negative_range =	{
																																							from: top_item - 1,
																																							to: if_positive (bottom_item - (items_to_load - 1))
																																						};
																																if (count (negative_range) > count (positive_range))
																																	return negative_range;
																																else
																																	return positive_range;
																															};
																								var displayed_height_range =	function () {
																																	return	{
																																				from: if_positive (list .scrollTop - dynamic_load .offsetTop),
																																				to: if_positive (list .scrollTop - dynamic_load .offsetTop + list .clientHeight)
																																			};
																																};
																	var most_symmetrical_range =	function (displayed_ranges) {
																										var displayed_item_range = displayed_ranges .items;
																										var displayed_height_range = displayed_ranges .heights;

																										var least_asymmetry = Number .MAX_VALUE;

																										var displayed_height_top = 0;
																										for (
																											var displayed_item = 0;
																											displayed_item < displayed_item_range .from;
																											displayed_item ++
																										) {
																											displayed_height_top += height (displayed_item);
																										}

																										var displayed_height_bottom = displayed_height_top;
																										for (
																											var item_to_load = 0;
																											item_to_load < items_to_load;
																											item_to_load ++
																										) {
																											displayed_height_bottom += height (displayed_item_range .from + item_to_load);
																										}

																										var displayed_item;
																										for (
																											displayed_item = displayed_item_range .from;
																											displayed_item <= displayed_item_range .to;
																											displayed_item ++
																										) {
																											var top_difference = displayed_height_range .from - displayed_height_top;
																											var bottom_difference = displayed_height_bottom - displayed_height_range .to;
																											var asymmetry = Math .abs (top_difference - bottom_difference);
																											if (asymmetry > least_asymmetry) {
																												return	{
																															from: (displayed_item - 1),
																															to: (displayed_item  - 1) + (items_to_load - 1)
																														};
																											}
																											else {
																												least_asymmetry = asymmetry;
																												displayed_height_top += height (displayed_item);
																												displayed_height_bottom += height (displayed_item + items_to_load);
																											}
																										}

																										return	{
																													from: (displayed_item - 1),
																													to: (displayed_item  - 1) + (items_to_load - 1)
																												};
																									};

			self .remembers (read_item_signal);
			self .stuff .trigger (read_item_signal, function (item_tags) {
				return	function (item_number) {
							var item;
							for (var item_tag of flatten (values (item_tags))) {
								item = item || self .recalls ('item') (item_number);
								if (! item_tag .recalls) {
									item_tag .on ('before-mount', function () {
										self .recalls (how_to_read_signal) (item_tag, item);
									});
								}
								else {
									self .recalls (how_to_read_signal) (item_tag, item);
								}
							}
						};
			});
			var flatten =	function (arr) {
								return	arr .reduce (function (flat, toFlatten) {
											return flat .concat (Array .isArray (toFlatten) ? flatten (toFlatten) : toFlatten);
										}, []);
							}
			var values =	function (obj) {
								return	Object .keys (obj) .map (function (key) {
											return obj [key];
										});
							};
});
riot.tag2('toolbox-util-expandable', '<div class="expand-box"> <span class="text-icons expand-cue">{recalls (\'_expand-cue-icon\')}</span> <yield from="expandable"></yield> </div> <toolbox-util-if if_="{recalls (\'$expanded\')}"> <yield from="to-expand"></yield> </toolbox-util-if>', 'toolbox-util-expandable .expand-cue { font-size: 35px; margin: 0 auto; text-align: center; vertical-align: middle; width: 1em; line-height: 1em; left: 5px; top: 5px; position: absolute; color: #000; opacity: 0.3; z-index: 9999; } toolbox-util-expandable { position: relative; display: block; z-index: 999; } toolbox-util-expandable.item { z-index: 999; margin: 0; } toolbox-util-expandable .expand-box { display: block; background: rgba(255,255,255,0.1); } toolbox-util-draggable toolbox-util-expandable .expand-box{ background: none; border: 0; }', '', function(opts) {
		var self = this;

		var already_expanded = opts .already_expanded || false;
		var expanded_signal = opts .expanded_signal;

		var expand_cue;

		self .remembers ('$expanded');

		self .remembers ('_expand-cue-icon');

		self .stuff .trigger ('$expanded', already_expanded);
		if (already_expanded)
			self .stuff .trigger ('_expand-cue-icon', '');
		else
			self .stuff .trigger ('_expand-cue-icon', '');

		self .stuff .on ('$expanded', function (expanded) {
			if (expanded)
				self .stuff .trigger ('_expand-cue-icon', '');
			else
				self .stuff .trigger ('_expand-cue-icon', '');
			self .update ();

			if (expanded_signal && expanded_signal !== '$expanded')
				self .stuff .trigger (expanded_signal);
		});

		self .on ('mount', function () {
			self .root .classList .add ('item');
			on_next_tick (function () {
				expand_cue = self .root .firstElementChild .firstElementChild;
				expand_cue .addEventListener ('click', function () {
					self .stuff .trigger ('$expanded', ! (self .recalls ('$expanded')));
				});
			});
		});
});
riot.tag2('toolbox-util-if', '<virtual each="{opts .if_ ? [0] : []}"> <yield></yield> </virtual>', '', '', function(opts) {
});
riot.tag2('toolbox-util-lazy-load', '<toolbox-util-if if_="{recalls (\'$show-loading\')}"> <yield from="loading"></yield> </toolbox-util-if> <toolbox-util-if if_="{! recalls (\'$show-loading\')}"> <yield from="content"></yield> </toolbox-util-if>', '', '', function(opts) {
		var self = this;

		self .remembers ('$show-loading');

		self .stuff .trigger ('$show-loading', true);

		var going_to_load = false;

		self .on ('after-update', function () {
			if (self .recalls ('$show-loading')) {
				self .stuff .trigger ('$show-loading', false);
				setTimeout (function () {
					self .update ();
				}, 50);
			}
			else {
				self .stuff .trigger ('$show-loading', true);
			}
		});

		on_next_tick (function () {
			self .stuff .trigger ('$show-loading', false);
			setTimeout (function () {
				self .update ();
			}, 200);
		});

});
riot.tag2('toolbox-util-placeholder', '<yield></yield>', '', '', function(opts) {
});
riot.tag2('toolbox-util-screen', '', '', '', function(opts) {
	(function (self) {
		var the_screen =	function (opts) {
								return opts .screen;
							};
		var the_tag =	function (opts) {
							return opts .tag;
						};
		var screen_how =	function (opts) {
								if (opts .how)
									return [opts .how];

								var object = without ('tag') (without ('screen') (opts));
								for (var key of Object .keys (object)) {
									var value = object [key];
									delete object [key];

									var parts = key .split ('__');
									var anchor = object;
									for (var part of parts .slice (0, -1)) {
										if (! anchor [part])
											anchor [part] = {};
										anchor = anchor [part];
									}
									anchor [parts .reverse () [0]] = value;
								}

								if (object .length)
									object = [] .slice .call (object);
								else
									object = [object];

								return object;
							};

		screens .add_as (the_screen (opts)) .apply (null, [the_tag (opts)] .concat (screen_how (opts)));
	})(this);
});
riot.tag2('toolbox-util-signal', '', '', '', function(opts) {
		var self = this;

		var for_what =	function (opts) {
							return opts .for;
						};
		var what_for =	function (opts) {
							if (opts .what)
								return opts .what;
							var object = without ('for') (opts);
							for (var key of Object .keys (object)) {
								var value = object [key];
								delete object [key];

								var parts = key .split ('__');
								var anchor = object;
								for (var part of parts .slice (0, -1)) {
									if (! anchor [part])
										anchor [part] = {};
									anchor = anchor [part];
								}
								anchor [parts .reverse () [0]] = value;
							}
							return object
						};

		self .stuff .trigger (for_what (opts), what_for (opts));

		self .on ('mount', function () {
			var element = self .root;
			if (element .getAttribute ('update') != undefined) {
				element .removeAttribute ('update');
				self .on ('update',
					function () {
						self .stuff .trigger (for_what (opts), what_for (opts));
					}
				);
			}
		});
});
riot.tag2('toolbox-util-tag', '', '', '', function(opts) {
	(function (self) {
	    riot .mount (self .root, opts .tag, without ('tag') (opts));
	})(this);
});
