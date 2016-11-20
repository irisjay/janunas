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
riot.tag2('the-app', '', 'input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}th{font-weight:600}td,th{border-bottom:1.08px solid #ccc;padding:14.85px 18px}thead th{border-bottom-width:2.16px;padding-bottom:6.3px}table{display:block;max-width:100%;overflow-x:auto}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}input,textarea,select,button{display:block;max-width:100%;padding:9.9px}label{display:block;margin-bottom:14.76px}input[type="submit"],input[type="reset"],button{background:#f2f2f2;border-radius:3.6px;color:#8c8c8c;cursor:pointer;display:inline;margin-bottom:18px;margin-right:7.2px;padding:6.525px 23.4px;text-align:center}input[type="submit"]:hover,input[type="reset"]:hover,button:hover{background:#d9d9d9;color:#000}input[type="submit"][disabled],input[type="reset"][disabled],button[disabled]{background:#e6e6e6;color:#b3b3b3;cursor:not-allowed}input[type="submit"],button[type="submit"]{background:#367ac3;color:#fff}input[type="submit"]:hover,button[type="submit"]:hover{background:#255587;color:#bfbfbf}input[type="text"],input[type="password"],input[type="email"],input[type="url"],input[type="phone"],input[type="tel"],input[type="number"],input[type="datetime"],input[type="date"],input[type="month"],input[type="week"],input[type="color"],input[type="time"],input[type="search"],input[type="range"],input[type="file"],input[type="datetime-local"],select,textarea{border:1px solid #ccc;margin-bottom:18px;padding:5.4px 6.3px}input[type="checkbox"],input[type="radio"]{float:left;line-height:36px;margin-right:9px;margin-top:8.1px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}pre,code,kbd,samp,var,output{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:16.2px}pre{border-left:1.8px solid #96bbe2;line-height:25.2px;margin-top:29.7px;overflow:auto;padding-left:18px}pre code{background:none;border:0;line-height:29.7px;padding:0}code{background:#ededed;border:1.8px solid #ccc;border-radius:3.6px;display:inline-block;line-height:18px;padding:3px 6px 2px}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}h1,h2,h3,h4,h5,h6{color:#000;margin-bottom:18px}h1{font-size:36px;font-weight:500;margin-top:36px}h2{font-size:25.2px;font-weight:400;margin-top:27px}h3{font-size:21.6px;margin-top:21.6px}h4{font-size:18px;margin-top:18px}h5{font-size:14.4px;font-weight:bold;margin-top:18px;text-transform:uppercase}h6{color:#ccc;font-size:14.4px;font-weight:bold;margin-top:18px;text-transform:uppercase}input,textarea,select,button,html,body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:18px;font-stretch:normal;font-style:normal;font-weight:300;line-height:29.7px}a{color:#367ac3;text-decoration:none}a:hover{text-decoration:underline}hr{border-bottom:1px solid #ccc}small{font-size:15.3px}em,i{font-style:italic}strong,b{font-weight:600}*{border:0;border-collapse:separate;border-spacing:0;box-sizing:border-box;margin:0;outline:0;padding:0;text-align:left;vertical-align:baseline}html,body{height:100%;width:100%}body{background:#f5f5f5;color:#1a1a1a;padding:36px}p,ul,ol,dl,blockquote,hr,pre,table,form,fieldset,figure,address{margin-bottom:29.7px}section{margin-left:auto;margin-right:auto;max-width:100%;width:900px}article{background:#fff;border:1.8px solid #d9d9d9;border-radius:7.2px;padding:43.2px}header{margin-bottom:36px}footer{margin-top:36px}nav{text-align:center}nav ul{list-style:none;margin-left:0;text-align:center}nav ul li{display:inline;margin-left:9px;margin-right:9px}nav ul li:first-child{margin-left:0}nav ul li:last-child{margin-right:0}ol,ul{margin-left:29.7px}li ol,li ul{margin-bottom:0}@media (max-width: 767px){body{padding:18px}article{border-radius:0;margin:-18px;padding:18px}textarea,input,select{max-width:100%}fieldset{min-width:0}section{width:auto}fieldset,x:-moz-any-link{display:table-cell}} html { width: 100vw !important; height: 100vh !important; } body { width: 100% !important; height: 100% !important; position: relative; overflow: hidden; } .border { border: 2px solid black; } .cursor-pointer { cursor: pointer; } .scroll { overflow-x: hidden; overflow-y: scroll !important; } .scroll::-webkit-scrollbar { display: none; } .position-fixed { position: fixed !important; } .position-absolute { position: absolute !important; } .position-relative { position: relative !important; } .full-height { height: 100% !important; } .ninety-five-width { width: 95%; } .most-height { height: 80% !important; } .slider-box-height { height: 100px !important; } .little-height { height: 10% !important; } .most-width { width: 80% !important; } .full-width { width: 100% !important; } .no-frills { padding: 0 !important; } .no-shock { margin: 0 !important; } .match-edge { position: absolute; height: auto; width: auto; display: block; top: 0; bottom: 0; left: 0; right: 0; } .top-down { overflow: hidden; } .text-center { text-align: center; } .text-middle { vertical-align: middle; } .half-height { height: 50%; } .quarter-height { height: 25%; } .block-left { display: block; position: absolute; left: 0%; transform: translatex(0%); -webkit-transform: translatex(0%); } .block-center { display: block; position: absolute; left: 50%; transform: translatex(-50%); -webkit-transform: translatex(-50%); } .block-right { display: block; position: absolute; left: 100%; transform: translatex(-100%); -webkit-transform: translatex(-100%); } .block-top { display: block; position: absolute; top: 0%; transform: translatey(0%); -webkit-transform: translatey(0%); } .block-middle { display: block; position: absolute; top: 50% !important; transform: translatey(-50%); -webkit-transform: translatey(-50%); } .block-bottom { display: block; position: absolute; top: 100%; transform: translatey(-100%); -webkit-transform: translatey(-100%); } .block-left.block-top { top: 0%; left: 0%; transform: translatex(-0%) translatey(-0%); -webkit-transform: translatex(-0%) translatey(-0%); } .block-left.block-middle { top: 50%; left: 0%; transform: translatex(-0%) translatey(-50%); -webkit-transform: translatex(-0%) translatey(-50%); } .block-left.block-bottom { top: 100%; left: 0%; transform: translatex(-0%) translatey(-100%); -webkit-transform: translatex(-0%) translatey(-100%); } .block-center.block-top { top: 0%; left: 50%; transform: translatex(-50%) translatey(0%); -webkit-transform: translatex(-50%) translatey(0%); } .block-center.block-middle { top: 50%; left: 50%; transform: translatex(-50%) translatey(-50%); -webkit-transform: translatex(-50%) translatey(-50%); } .block-center.block-bottom { top: 100%; left: 50%; transform: translatex(-50%) translatey(-100%); -webkit-transform: translatex(-50%) translatey(-100%); } .block-right.block-top { top: 0%; left: 100%; transform: translatex(-100%) translatey(0%); -webkit-transform: translatex(-100%) translatey(0%); } .block-right.block-middle { top: 50%; left: 100%; transform: translatex(-100%) translatey(-50%); -webkit-transform: translatex(-100%) translatey(-50%); } .block-right.block-bottom { top: 100%; left: 100%; transform: translatex(-100%) translatey(-100%); -webkit-transform: translatex(-100%) translatey(-100%); } .nudge-up { padding-bottom: 20px; } .nudge-down { padding-top: 20px; } .nudge-left { padding-right: 20px; } .nudge-right { padding-left: 20px; } .nudge-up-more { padding-bottom: 40px; } .nudge-down-more { padding-top: 40px; } .nudge-left-more { padding-right: 40px; } .nudge-right-more { padding-left: 40px; } .under-half { top: 50%; } .under-bar-44 { top: 44px; } .under-bar-47 { top: 47px; } .above-bar-44 { bottom: 44px; } .above-bar-49 { bottom: 49px; } .under-bar-88 { top: 88px; } .match-me { position: relative !important; height: 100% !important; width: 100% !important; overflow: hidden; } .font-large,.font-large:before,.font-large:after { font-size: 2em !important; } .font-big,.font-big:before,.font-big:after { font-size: 1.5em !important; } .font-somewhat-big,.font-somewhat-big:before,.font-somewhat-big:after { font-size: 1.45em !important; } .font-more,.font-more:before,.font-more:after { font-size: 1.4em !important; } .font-regular,.font-regular:before,.font-regular:after { font-size: 1.2em !important; } .font-small,.font-small:before,.font-small:after { font-size: 0.8em !important; } .font-tiny,.font-tiny:before,font-tiny:after { font-size: 0.2em; line-height: 0.2em; } .neutral-color { color: white; } .sixty-height { height: 60px; } .eighty-height { height: 80px; } .hundred-fifty-height { height: 150px; } .hundred-height { height: 100px; } .prized-asset { min-height: 260px; max-height: 100%; } .free-icon { min-width: none !important; min-height: none !important; max-width: none !important; max-height: none !important; } .free-icon:before,.free-icon:after { width: auto !important; height: auto !important; } .inline { display: inline; } .inline-center { text-align: center; } .inline-left { text-align: left; } .inline-right { text-align: right; } .inline-justify { text-align: justify; } .header-text { white-space: nowrap; } .invisible { visibility: none; } .top-layer { z-index: 999; } .bottom-layer { z-index: -999; } .lax { overflow: visible !important; } .higher { z-index: 1000; } .push-up { margin-top: -10px; } .area-0to100x0to30 { position: absolute; width: 100%; height: 30%; top: 0; left: 0; } .area-0to100x30to60 { position: absolute; width: 100%; height: 30%; top: 30%; left: 0; } .area-0to100x60to100 { position: absolute; width: 100%; height: 40%; top: 60%; left: 0; } .area-0to30x0to100 { position: absolute; width: 30%; height: 100%; top: 0; left: 0; } .area-0to50x0to50 { position: absolute; width: 50%; height: 50%; top: 0; left: 0; } .area-50to85x0to50 { position: absolute; width: 35%; height: 50%; top: 0; left: 50%; } .area-0to60x50to100 { position: absolute; width: 60%; height: 50%; top: 50%; left: 0; } .area-0to20x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 0; } .area-20to100x0to100 { position: absolute; width: 80%; height: 100%; top: 0; left: 20%; } .area-0to100x0to50 { position: absolute; width: 100%; height: 50%; top: 0; left: 0; } .area-0to100x50to100 { position: absolute; width: 100%; height: 50%; top: 50%; left: 0; } .area-0to35x0to100 { position: absolute; width: 35%; height: 100%; top: 0; left: 0; } .area-35to55x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 35%; } .area-55to100x0to100 { position: absolute; width: 45%; height: 100%; top: 0; left: 55%; } .area-30to100x0to100 { position: absolute; width: 70%; height: 100%; top: 0; left: 30%; } .area-20to80x0to100 { position: absolute; width: 60%; height: 100%; top: 0; left: 20%; } .area-80to100x0to100 { position: absolute; width: 20%; height: 100%; top: 0; left: 80%; } .area-0to40x0to50 { position: absolute; width: 40%; height: 50%; top: 0; left: 0; } .area-40to60x0to50 { position: absolute; width: 20%; height: 50%; top: 0; left: 40%; } .area-60to100x0to50 { position: absolute; width: 40%; height: 50%; top: 0; left: 60%; } .area-0to100x50to100 { position: absolute; width: 100%; height: 50%; top: 50%; left: 0; } .area-0to50x0to100 { position: absolute; width: 50%; height: 100%; top: 0; left: 0; } .area-50to100x0to100 { position: absolute; width: 50%; height: 100%; top: 0; left: 50%; } .area-50to100x0to50 { position: absolute; width: 50%; height: 50%; top: 0; left: 50%; } .area-0to80x0to100 { position: absolute; width: 80%; height: 100%; top: 0; left: 0; } .area-0to25x0to100 { position: absolute; width: 25%; height: 100%; top: 0; left: 0; } .area-25to100x0to100 { position: absolute; width: 75%; height: 100%; top: 0; left: 25%; } .area-0to100x0to60 { position: absolute; width: 100%; height: 60%; top: 0; left: 0; } .area-0to100x60to100 { position: absolute; width: 100%; height: 40%; top: 60%; left: 0; } .area-0to12x50to100 { position: absolute; width: 12%; height: 50%; top: 50%; left: 0; } .area-12to100x50to100 { position: absolute; width: 88%; height: 50%; top: 50%; left: 12%; } .paragraph-text { white-space: normal !important; word-break: break-all !important; word-wrap: break-word !important; } .fitting-size { max-height: 100%; max-width: 100%; } .text-icons { font-family: Ionicons, icomoon !important; } .minify-slight { -ms-transform: scale(0.99, 0.99); -webkit-transform: scale(0.99, 0.99); transform: scale(0.99, 0.99); } .minify-some { -ms-transform: scale(0.9, 0.9); -webkit-transform: scale(0.9, 0.9); transform: scale(0.9, 0.9); } .inset-more { padding: 15px; } .inset-some { padding: 10px; } .inset-little { padding: 5px; } .inset-slight { padding: 2px; } .outset-quite { margin: 20px; } .outset-little { margin: 5px; } .outset-some { margin: 10px; } .seventy-five-height { height: 75px; } .no-border { border: none !important; } .bold { font-weight: bold; } .background-black { background: black; } .list { will-change: scroll-position; } .background-texture::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; z-index: -1; background: url(../imgs/3d_soccer15.gif); } .background-transparent { background: transparent; } .background-shadowed { background: rgba(0,0,0,0.1); } .background-double-shadowed { background: rgba(0,0,0,0.2); } .background-translucent { background: rgba(0,0,0,0.03); } .icon-size { width: 1em; height: 1em; text-align: center; } .black-to-gray { -webkit-filter: invert(50%); filter: invert(50%); } .a-block { display: block; } .a-inline-block { display: inline-block; } .square { padding-bottom: 100%; } .square > .match-edge { background-size: cover !important; } .page { margin: 0 !important; } .display-none { display: none; } .content { min-height: 100%; } .dashed { border: 1px #bbb dashed; border-radius: 5px; }', '', function(opts) {
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
