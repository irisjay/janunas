/*
global log
global riot
global most
global localStorage
global fetch
*/				
				
var get_cache =	function (key) {
						var data = localStorage .getItem (key);
						return data && (data === 'undefined' ? undefined : JSON .parse (data));
					};
var set_cache =	function (key, value) {
					localStorage .setItem (key, JSON .stringify (value));
				};
				
				
				
var fetcher = riot .observable ();
	fetcher .addListener = fetcher .on;
	fetcher .removeListener = fetcher .off;
var fetch_path =	function (path) {
						return	function (request, response) {
							return	query (path, {
										method: request .method,
										headers: request .headers,
										body: request .body && JSON .stringify (request .body)
									}) .then (function (response_data) {
										var value = eval_response (response, { data: response_data, response: response_data });
								        /*if (request .method === 'GET'
								        		|| request .method === 'local'
											)*/ cache (path, value);
										fetcher .trigger (path, value);
										return value;
									})/* .catch (function (error) {
										log (error);
									})*/;
						};
					};
						var eval_response =	function (response, data) {
												return riot .util .tmpl (response, data);
											};
						var query =	function (path, request) {
										if (request .method === 'local') {
											log ('queryied local', path, request, request .body && (request .body === 'undefined' ? undefined : JSON .parse (request .body)));
											return	Promise .resolve (request .body && (request .body === 'undefined' ? undefined : JSON .parse (request .body)));
										}
										else {
											return	fetch (path, request)
														.then (function (response) {//log (response);
														    return response .json ();
														})
														.then (function (response) {
															log ('queryied network', path, request, response);
															return response;
														});
										}
									};
						var cache =	function (path, value) {
								        if (JSON .stringify (value) !== JSON .stringify (get_cache (path))) {
								        	set_cache (path, value);
								        	return value;
								        }
									};
					
				

var check_out =	function (path, request, response) {
					add_temp (path, request, response);
					resolve_temps ();
				};
					var add_temp =	function (path, request, response) {
											var temps = get_cache (temp_key) || {};
											if (! temps [path]) {
												temps [path] = { request: request, response: response };
												set_cache (temp_key, temps);
											}
										};
					var resolve_temps =	function () {
											var temps = get_cache (temp_key) || {};
											for (var path in temps) {
												if (! resolutions [path]) {
													var request = temps [path] .request;
													var response = temps [path] .response;
													resolutions [path] =	fetch_path (path) (request, response) .then (
																				remove_temp .bind (this, path)
																			);
												}
											};
										};
					var remove_temp =	function (path) {
												var temps = get_cache (temp_key) || {};
												if (temps [path]) {
													delete temps [path];
													delete resolutions [path];
													set_cache (temp_key, temps);
												}
											};
					var temp_key = '__temp__';
					var resolutions = {};

				
				
var read_path =	function (path) {
						return	function (request, response) {
									return	function () {
												return (function (path) {
													check_out (path, eval_request (request), response);
													return get_cache (path);
												}) (eval_path (path));
											};
								};
					};
var edit_path =	function (path) {
					return	function (request, response, predicter) {
								return	function (data) {
											return (function (path) {
												var value =	predicter (data);
												if (value && JSON .stringify (value) !== JSON .stringify (get_cache (path)))
										        	set_cache (path, value);
													
												check_out (path, eval_request (request, { data: data }), response);
											}) (eval_path (path, { data: data }));
										};
							};
				};
var write_path =	function (path) {
						return	function (request, response) {
									return	function (data) {
												(function (path) {
													check_out (path, eval_request (request, { data: data }), response);
												}) (eval_path (path, { data: data }));
											};
								};
					};
					var eval_path =	function (path, data) {
										return	riot .util .tmpl (path, data);
									};
					var eval_request =	function (request, data) {
											return	{
														method: request .method && riot .util .tmpl (request .method, data),
														headers: request .headers && riot .util .tmpl (request .headers, data),
														body: request .body && riot .util .tmpl (request .body, data)
													};
										};
				
				
				
var reader =	function (path, request, response) {
					request = request || {};
					response = response || '{ data }';
					
					var read = read_path (path) (request .read || {}, response);
					
					var reader =	function (interest) {
										interest .observe (read);
										return most .fromEvent (path, fetcher);
									};
					reader .filter =	{
											__outgoing_memory_filter: read
										};
					
					return reader;
				};
var editer =	function (path, request, response, predicter) {
					request = request || {};
					response = response || '{ data }';
					
					var read = read_path (path) (request .read || {}, response);
					var edit = edit_path (path) (request .edit || {}, response, predicter || function (data) { return undefined; });
					
					var editer =	function (interest) {
										interest .observe (edit);
										return most .fromEvent (path, fetcher);
									}
					editer .filter =	{
											__outgoing_memory_filter: read
										};
					
					return editer;
				};
var writer =	function (path, request, response) {
					request = request || {};

					var write = write_path (path) (request .write || {}, response);
					
					var writer =	function (interest) {
										interest .observe (write);
										return most .fromEvent (path, fetcher);
									};
					writer .filter =	{
											__incoming_memory_filter: function () {}
										};
					
					return writer;
				};
				

				
	
				


var logged_in_header =	function () {
							var login_value = get_cache (backend_path + '/login');
							return login_value && { 'x-user': login_value .id };
						};

if (window .location .protocol !== 'https:') {
	window .location .replace ('https://' + window .location .hostname + window .location .pathname + window .location .hash);
}


var frontend_path = 'https://' + window .location .hostname + '/app';
var backend_path =  'https://' + window .location .hostname + '/api';
				
				
var util = {};
var content = {};


util .register =	writer (backend_path + '/register', {
						write:	{
									method: 'GET',
									headers: '{ { "x-username": data .username, "x-password": data .password } }'
								}
					}, '{ response }');
util .login =	editer (backend_path + '/login', {
					edit:	{
								method: 'GET',
								headers: '{ { "x-username": data .username, "x-password": data .password } }'
							}
				}, '{ response }');
util .logout =	writer (backend_path + '/login', {
					write:	{
								method: 'local',
								body: '{ undefined }'
							}
				}, '{ response }');
util .course_enroll =	function (course_id) {
							return	writer (backend_path + '/course/' + course_id + '/enroll', {
										write:	{
													method: 'GET',
													headers: '{ logged_in_header () }'
												}
									}, '{ response }')
						};
util .component_done =	function (course_id, module_order, component_order) {
							return	writer (backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/' + component_order + '/done', {
										write:	{
													method: 'GET',
													headers: '{ logged_in_header () }'
												}
									}, '{ response }');
						};
						
						
util .course_new =	writer (backend_path + '/my/course/new', {
						write:	{
									method: 'GET',
									headers: '{ with_ ("x-course-name", data .course_name) (with_ ("x-course-description", data .course_description) (logged_in_header ())) }'
								}
					}, '{ response }');
util .course_delete =	writer (backend_path + '/my/course/delete', {
							write:	{
										method: 'GET',
										headers: '{ with_ ("x-course", data .course_id) (logged_in_header ()) }'
									}
						}, '{ response }');
util .course_publish =	writer (backend_path + '/my/course/publish', {
							write:	{
										method: 'GET',
										headers: '{ with_ ("x-course", data .course_id) (logged_in_header ()) }'
									}
						}, '{ response }');
						
util .module_new =	function (course_id) {
						return	writer (backend_path + '/my/course/' + course_id + '/module/new', {
									write:	{
												method: 'GET',
												headers: '{ with_ ("x-module-name", data .module_name) (logged_in_header ()) }'
											}
								}, '{ response }');
					};	
util .module_reorder =	function (course_id) {
							return	writer (backend_path + '/my/course/' + course_id + '/module/reorder', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-module-1", data .module_1_order) (with_ ("x-module-2", data .module_2_order) (logged_in_header ())) }'
												}
									}, '{ response }');
						};
util .module_delete =	function (course_id) {
							return	writer (backend_path + '/my/course/' + course_id + '/module/delete', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-module", data .module_order) (logged_in_header ()) }'
												}
									}, '{ response }');
						};
						
util .component_new =	function (course_id, module_order) {
							return	writer (backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/new', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-component-name", data .component_name) (with_ ("x-component-content", data .component_content) (logged_in_header ())) }'
												}
									}, '{ response }');
						};	
util .component_reorder =	function (course_id, module_order) {
								return	writer (backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/reorder', {
											write:	{
														method: 'GET',
														headers: '{ with_ ("x-component-1", data .component_1_order) (with_ ("x-component-2", data .component_2_order) (logged_in_header ())) }'
													}
										}, '{ response }');
							};
util .component_delete =	function (course_id, module_order) {
								return	writer (backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/delete', {
											write:	{
														method: 'GET',
														headers: '{ with_ ("x-component", data .component_order) (logged_in_header ()) }'
													}
										}, '{ response }');
							};
util .component_edit =	function (course_id, module_order, component_order) {
							return	writer (backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/' + component_order + '/edit', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-component-name", data .component_name) (with_ ("x-component-content", data .component_content) (logged_in_header ())) }'
												}
									}, '{ response }');
						};	
						
util .user_edit =	function (user_id) {
						return	writer (backend_path + '/user/' + user_id + '/edit', {
									write:	{
												method: 'GET',
												headers: '{ with_ ("x-" + data .edit_type, data .edit_content) (logged_in_header ()) }'
											}
								}, '{ response }');
					};	
						
						
						
						
						
						
content .courses =	reader (backend_path + '/courses', {
						read:	{
									method: 'GET',
									headers: '{ logged_in_header () }'
								}
							
					}, '{ response }');
content .course =	function (course_id) {
						return	reader (backend_path + '/course/' + course_id, {
									read:	{
												method: 'GET',
												headers: '{ logged_in_header () }'
											}
										
								}, '{ response }');
					};
content .my_courses =	reader (backend_path + '/my/courses', {
							read:	{
										method: 'GET',
										headers: '{ logged_in_header () }'
									}
								
						}, '{ response }');
						
content .users =	reader (backend_path + '/users', {
						read:	{
									method: 'GET',
									headers: '{ logged_in_header () }'
								}
							
					}, '{ response }');
content .user =	function (user_id) {
					return	reader (backend_path + '/user/' + user_id, {
								read:	{
											method: 'GET',
											headers: '{ logged_in_header () }'
										}
									
							}, '{ response }');
				};