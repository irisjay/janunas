/*
global log
global riot
global localStorage
global fetch
*/		
				
	var remembers =	function (data) {
						return	function (self) {
									for (var name in data) {
										self .remembers (name);
										self .stuff .trigger (name, data [name]);
									}
								};
					};
					
					
	var trim_trailing_slash =	function (path) {
									if (path [path .length - 1] === '/')
										return path .slice (0, -1);
									else
										return path;
								};
	var replace_all =	function (search, replacement) {
							return	function (string) {
									    var target = string;
									    return target .split (search) .join (replacement);
									};
						};
	
				
				
									var repeat =	function (times) {
														return	function (what) {
																	var array = [];
																	for (var key = 0; key < times; key ++) {
																		array .push (what);
																	};
																	return array;
																};
													};
									var range =	function (range) {
													var the_range = [];
													for (var key = range .from; key <= range .to; key ++) {
														the_range .push (key);
													};
													Object .defineProperty (the_range, 'from', { value: range .from });
													Object .defineProperty (the_range, 'to', { value: range .to });
													return the_range;
												};
									var spread =	function (amount) {
														var front_spread = Math .floor (amount / 2);
														var rear_spread = Math .floor (amount / 2);
														return	function (position) {
																	/*var the_spread = [];
																	for (var key = position .at - front_spread; key <= position .at + rear_spread; key ++) {
																		the_spread .push (key);
																	};
																	Object .defineProperty (the_spread, 'from', { value: position .at - front_spread });
																	Object .defineProperty (the_spread, 'to', { value: position .at + rear_spread });
																	Object .defineProperty (the_spread, 'at', { value: position .at });*/
																	return	{
																				from: position .at - front_spread,
																				to: position .at + rear_spread,
																				at: position .at
																			};
																};
													};
									var as =	function (key) {
													return	function (value) {
																var item = {};
																item [key] = value;
																return item;
															};
												};
									var pluck =	function (key) {
													return	function (item) {
																return item [key];
															};
												};
									var having =	function (key) {
														return	function (value) {
																	return	function (item) {
																				item [key] = value;
																				return item;
																			};
																};
													};
										var if_positive =	function (num) {
																return (num > 0 ? num : 0);
															};
										var count =	function (range) {
														return range .to - range .from + 1;
													};
																	var range_intersection =	function (/*args*/) {
																									var args = [] .slice .call (arguments);
																									/*log (range_one, range_two,	{
																																	from: Math .max (range_one .from, range_two .from),
																																	to: Math .min (range_one .to, range_two .to)
																																});*/
																									
																									var positions = args
																														.map (function (range) { return range .at; })
																														.filter (function (at) { return at != null; });
																									
																									var position = 0;
																									if (positions .length) {
																										position =	positions
																														.reduce (function(sum, position) {
																															return sum + position;
																														}, 0)
																													/ positions .length;
																									}
																									
																									//log ('positions', positions, position);
																									
																									
																									return	{
																												from: Math .max .apply (Math, args .map (pluck ('from'))),
																												to: Math .min .apply (Math, args .map (pluck ('to'))),
																												at: Math .floor (position)
																											};
																								};
								var same =	function (place_one, place_two) {
												return place_one && place_two && place_one ['to'] === place_two ['to'] && place_one ['from'] === place_two ['from'];
											};
								var included_in =	function (bigger, smaller) {
														return same (
																	range_intersection (bigger, smaller),
																	smaller);
													};
								var position_diff =	function (position_one, position_two) {
														return Math .abs (position_one .at - position_two .at);
													};
									
			var on_next_tick =	function (action) {
									requestAnimationFrame (action);
								};
								
								
			var logged =	function (/* args */) {
								log .apply (this, arguments);
								return arguments [arguments .length - 1];
							};
			var logged_with =	function (/* args */) {
									var args = [] .slice .call (arguments);
									return	function (item) {
												log .apply (null, args .concat (item));
												return item;
											};
								};
								

var display_errors =	function (event, self) {
							self .stuff .on (event, function (data) {
								(data || {}) .error && alert ((data || {}) .error);
							});
						};

			var tag_name =	function (page_name) {
								return 'screen-page-' + replace_all ('/', '-') (trim_trailing_slash (page_name));
							};
								
			var page_name =	function (path) {
								return path .slice (path .indexOf ('#') + 1, path .indexOf ('/#') === -1 ? undefined : path .indexOf ('/#'));
							};
			var page_arguments =	function (path) {
										return (path .indexOf ('/#') ? path .slice (path .indexOf ('/#') + 2) : '') .split ('/');
									};

								
								
										var diff =	function (to_where, here) {

														var diff =	{
																		front:	{
																					from: to_where .from,
																					to: here .from - 1
																				},
																		back:	{
																					from: here .to + 1,
																					to: to_where .to
																				}
																	};
																	
														if ( opposite (diff .front, diff .back) ) {
															var positive_front = positive (diff .front);
															var positive_back = positive (diff .back);
															diff =	//logged ('ex diff',
																		{
																			front: add_sign (sign (diff .front)) (minus (positive_front, positive_back)),
																			back: add_sign (sign (diff .back)) (minus (positive_back, positive_front))
																		}
																	/*)*/;
															//if ( inclusive ) ...
														}			
														
														diff .map = function (mapper) {
																		var self = this;
																		return	{
																					front:	function (array) {
																								var diff_count = if_positive ( - count (self .front) );
																								array .splice .apply (
																									array,
																									[
																										0,
																										diff_count
																									] .concat (
																										range (self .front) .map (mapper)
																									)
																								);
																								return array;
																							},
																					back:	function (array) {
																								var diff_count = if_positive ( - count (self .back) );
																								array .splice .apply (
																									array,
																									[
																										array .length - diff_count,
																										diff_count
																									] .concat (
																										range (self .back) .map (mapper)
																									)
																								);
																								return array;
																							}
																				};
																	};
														return diff;
													};
													
										var sign = count;
										var add_sign =	function (sign) {
															return	function (range) {
																		if (sign >= 0)
																			return range;
																		else
																			return range_invert (range);
																	};
														};
										var positive =	function (range) {
															return add_sign (sign (range)) (range);
														};
										var opposite =	function (range_one, range_two) {
															var sign_one = sign (range_one);
															var sign_two = sign (range_two);
															return	(sign_one > 0 && sign_two < 0)
																	|| (sign_one < 0 && sign_two > 0);
														};
										var minus =	function (range_one, range_two) {
														var intersection = range_intersection (range_one, range_two);
														if (sign (intersection) <= 0)
															return range_one;
														else if (intersection .from === range_one .from)
															return	{
																		from: intersection . to + 1,
																		to: range_one .to
																	};
														else
															return	{
																		from: range_one .from,
																		to: intersection .from - 1
																	};
													};
													
										var do_diffs =	function (diff_map, original) {
															return diff_map .front (diff_map .back (original));
														};
														
										var range_invert =	function (range) {
																return	{
																			from: range .to + 1,
																			to: range .from - 1
																		};
															};
										var range_add =	function (range_one, range_two) {
															if (range_one .to + 1 === range_two .from)
																return	{
																			from: range_one .from,
																			to: range_two .to
																		};
															else
																throw 'unaddable';
														};	
														
			
			var throttle =	function (callback, limit) {
							    var wait = false;                  // Initially, we're not waiting
							    return	function () {               // We return a throttled function
									        if (! wait) {                   // If we're not waiting
									            callback .apply (this, arguments);           // Execute users function
									            wait = true;               // Prevent future invocations
									            setTimeout (function () {   // After a period of time
									                wait = false;          // And allow future invocations
									            }, limit);
									        }
									    }
							};
			var adthrottle =	function (callback, limit) {
									var ad = false;
								    var wait = false;                  // Initially, we're not waiting
								    var adthrottled =	function () {               // We return a throttled function
													        if (! wait) {                   // If we're not waiting
													            callback .apply (this, arguments);           // Execute users function
													            wait = true;               // Prevent future invocations
													            setTimeout (function () {   // After a period of time
													                wait = false;          // And allow future invocations
													                if (ad) {
													                	ad = false;
													                	adthrottled ();
													                }
													            }, limit);
													        }
													        else {
													        	ad = true;
													        }
													    };
									return adthrottled;
								};
			var debounce =	function(func, wait, immediate) {
								var timeout;
								immediate = immediate ();
								return	function () {
											var context = this, args = arguments;
											var later =	function () {
															timeout = null;
															if (! immediate) func.apply(context, args);
														};
											var callNow = immediate && ! timeout;
											clearTimeout (timeout);
											timeout = setTimeout (later, wait);
											if (callNow) func .apply (context, args);
										};
							};
			/*var bounce =	function(func, wait) {
								var timeout;
								var queue = [];
								
								var run_queue =	function () {
													if (queue .length) {
														if ( ! timeout ) {
															var func = queue .shift ();
															func ();
															timeout =	setTimeout (function () {
																			timeout = null;
																			run_queue ();
																		}, wait);	
														}
													}
												};
								
								return	function () {
											var context = this, args = arguments;
											var later =	function () {
															func .apply (context, args);
														};
											queue .push (later);
											
											run_queue ();
										};
							};*/
			var prebounce =	function (func, initial_wait, wait) {
								var timeout =	setTimeout (function () {
													timeout = null;
													run_queue ();
												}, initial_wait);
								var on_queue = false;
								
								var run_queue =	function () {
													if (on_queue) {
														if ( ! timeout ) {
															on_queue = false;
															func ();
															timeout =	setTimeout (function () {
																			timeout = null;
																			run_queue ();
																		}, wait);	
														}
													}
												};
								
								return	function () {
											/*var context = this, args = arguments;
											var later =	function () {
															func .apply (context, args);
														};
											queue .push (later);*/
											//debugger;
											on_queue = true;
											
											run_queue ();
										};
							};//*/
			
			var one_at_a_time =	function (get_thing_to_do/* return promise */) {
									var doing;
									return	function () {
												if (! doing) {
													doing = get_thing_to_do .apply (this, arguments);
													doing .then (function () {
														doing = undefined;
													});
												}
											};
								};
			
							
			var i_promise =	function (what) {
								return new Promise (what);
							};
							
			var stars_text =	function (how_many_stars) {
									var text = '';
									var star = 0;
									for (; star < how_many_stars; star ++) {
										text += '\uF2FC';
									}
									if (how_many_stars % 1) {
										text += '\uF3AD';
										star ++;
									}
									for (; star < 5; star ++) {
										text += '\uF3AE';
									}
									return text;
								};
								
								
								
			var is_positive_integer =	function (string) {
										    var n = ~~Number (string);
										    return String (n) === string && n >= 0;
										};
										
										
			var without =	function (you) {
								return	function (baby) {
											var i = {};
											for (var key in baby) {
												i [key] = baby [key];
											}
											delete i [you];
											return i;
										};
							};
			var with_ =	function (you, heart) {
							return	function (baby) {
										var i = {};
										for (var key in baby) {
											i [key] = baby [key];
										}
										i [you] = heart;
										return i;
									};
						};
										
				
					
		var assemble =	function (module_set) {
			                if (module_set) {
	    						var modules = {};
	    						modules .length = 0;
	    						for (var module of module_set) {
	    							modules [module .order] = module;
	    							modules .length ++;
	    						}
	    						return [] .slice .call (modules);
			                }
						};
		var piece =	function (course_set) {
						if (course_set) {
							var courses = {};
							for (var course of course_set) {
								courses [course .id] = course;
							}
							return courses;
						}
					};
					
var cache =	function (uncached) {
				var cached = false;
				var cache;
				return	function () {
							if (! cached) {
								cached = true;
								cache = uncached ();
							}
							return cache;
						};
			};
			
			
var index =	function (test) {
				return	function (array) {
							for (var x = 0; x < array .length; x ++) {
							    if (test (array [x])) return x;
							}
							// not found, return fail value
							return -1;
						};
			};
			
			
/*var connect =	function (upstream) {
					return	function (downstream) {
								return	function (self) {
											pipe_through (upstream) (downstream) (self);
											var state;
											if (state = self .recalls (upstream))
												self .stuff .trigger (downstream, state);
										};
							};
				};*/
		
var pipe_through =	function (upstream) {
						return	function (downstream) {
									return	function (self) {
												var really = {};
											
												self .stuff .on (upstream, function (value, from_downstream) {
													if (really === from_downstream)
														self .stuff .trigger (downstream, value);
												});
												self .stuff .on (downstream, function (value) {
													self .stuff .trigger (upstream, value, really);
												});
											};
								};
					};
			
var push_fork =	function (upstream) {
					return	function (downstreams) {
								return	function (self) {
											var really = {};
									
											self .stuff .on (upstream, function (value, from_downstream) {
												if (really === from_downstream)
													for (var key in downstreams) {
														self .stuff .trigger (downstreams [key], value [key]);														
													}
											});
											
											for (var key in downstreams) {
												(function (key) {
													self .stuff .on (downstreams [key], function (value) {//log (downstreams [key], key, value);
														self .stuff .trigger (upstream, with_ (key, value) (self .recalls (upstream)), really);
													});			
												})(key);
											}
										};
							};
				};
				
					
					
					
var event_next =	function (event) {
						return	function (observable) {
									return	new Promise (function (resolve, reject) {
												/*try {*/
													observable .one (event, resolve);
												/*}
												catch (error) {
													reject (error);
												}*/
											});
								};
					};
				
				
				
				
				
var get_cache =	function (key) {
						var data = localStorage .getItem (key);
						return data && (data === 'undefined' ? undefined : JSON .parse (data));
					};
var set_cache =	function (key, value) {
					localStorage .setItem (key, JSON .stringify (value));
				};
					var set_path =	function (path, value) {//debugger;//log ('setpath', path, value);debugger;
							        	set_cache (path, value);
							        	setTimeout (cacher .trigger .bind (cacher, path, value), 0); //hack
									};
				
				
				
var cacher = riot .observable ();
var cache_path =	function (path) {
						return	function (request, response) {
							return	query (path, {
										method: request .method,
										headers: request .headers,
										body: request .body && JSON .stringify (request .body)
									}) .then (function (response_data) {
										var value = eval_response (response, { data: response_data, response: response_data });
								        if (JSON .stringify (value) !== JSON .stringify (get_cache (path))) {
								        	set_path (path, value);
								        	return value;
								        }
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
													resolutions [path] =	cache_path (path) (request, response) .then (
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
												check_out (path, eval_request (request), response);
												return get_cache (path);
											};
								};
					};
var edit_path =	function (path) {
					return	function (request, response, predicter) {
								return	function (data) {
											var value =	predicter (data);
											if (value && JSON .stringify (value) !== JSON .stringify (get_cache (path)))
									        	set_path (path, value);
												
											check_out (path, eval_request (request, { data: data }), response);
										};
							};
				};
var write_path =	function (path) {
						return	function (request, response) {
									return	function (data) {
												check_out (path, eval_request (request, { data: data }), response);
											};
								};
					};
					var eval_request =	function (request, data) {
											return	{
														method: request .method && riot .util .tmpl (request .method, data),
														headers: request .headers && riot .util .tmpl (request .headers, data),
														body: request .body && riot .util .tmpl (request .body, data)
													};
										};
				
				
				
var pipe_read =	function (name, path, request, response) {
					request = request || {};
					response = response || '{ data }';
					
					var read = read_path (path) (request .read || {}, response);
					
					return	function (self) {
								var self_recalls = self .recalls;
								self .recalls =	function (event) {
													if (event === name) {
														return read ();
													}
													else {
														return self_recalls .apply (this, arguments);
													}
												};
								
								var cache_listener;
								self .understands (name);//log ('cacher subscribe once', path);
								cacher .on (path, cache_listener = function (data) {
									self .stuff .trigger (name, data, cacher);
								});
								self .on ('unmount', function () {
									cacher .off (path, cache_listener);
								});
							};
				};
var pipe_edit =	function (name, path, request, response, predicter) {
					request = request || {};
					response = response || '{ data }';
					
					var read = read_path (path) (request .read || {}, response);
					var edit = edit_path (path) (request .edit || {}, response, predicter || function (data) { return undefined; });
					
					return	function (self) {
								var self_recalls = self .recalls;
								self .recalls =	function (event) {
													if (event === name) {
														return read ();
													}
													else {
														return self_recalls .apply (this, arguments);
													}
												};
								
								var cache_listener;
								self .understands (name);//log ('cacher subscribe once', path);
								cacher .on (path, cache_listener = function (data) {
									self .stuff .trigger (name, data, cacher);
								});
								self .on ('unmount', function () {
									cacher .off (path, cache_listener);
								});
								self .stuff .on (name, function (data, from_cacher) {
									if (! from_cacher) {
										edit (data);
									}
								});
							};
				};
var pipe_write =	function (name, path, request, response) {
						request = request || {};
	
						var write = write_path (path) (request .write || {}, response);
						
						return	function (self) {
									var cache_listener;
									self .understands (name);//log ('cacher subscribe once', path);
									self .stuff .on (name, function (data, from_cacher) {
										if (! from_cacher) {
											cacher .one (path, function (data) {//console.log('cacher says hi');
												set_cache (path, undefined);
												self .stuff .trigger (name, data, cacher);
											});
											write (data);
										}
									});
								};
					};
				

				
	
				


var logged_in_header =	function () {
							var login_value = get_cache (backend_path + '/login');
							return login_value && { 'x-user': login_value .id };
						};
/*var login_body =	function () {
						var login_secrets = get_cache ('login_secrets');
						return login_secrets && {
							access_token: login_secrets .access_token,
							device_id: login_secrets .device_id,
							device_type: login_secrets .device_type
						};
					};*/
var login_using =	function (secrets) {
						//set_cache ('login_secrets', secrets);
						return secrets;
					};


var frontend_path = 'https://indiniga-mumenrider.c9users.io/app';
var backend_path = 'https://indiniga-mumenrider.c9users.io/api';
				
				
var util = {};
var content = {};


util .register =	pipe_write ('register', backend_path + '/register', {
						write:	{
									method: 'GET',
									headers: '{ { "x-username": data .username, "x-password": data .password } }'
								}
					}, '{ response }');
util .login =	pipe_edit ('login', backend_path + '/login', {
					edit:	{
								method: 'GET',
								headers: '{ { "x-username": data .username, "x-password": data .password } }'
							}
				}, '{ response }');
util .logout =	pipe_write ('logout', backend_path + '/login', {
					write:	{
								method: 'local',
								body: '{ undefined }'
							}
				}, '{ response }');
util .course_enroll =	function (course_id) {
							return	pipe_write ('enroll', backend_path + '/course/' + course_id + '/enroll', {
										write:	{
													method: 'GET',
													headers: '{ logged_in_header () }'
												}
									}, '{ response }')
						};
util .component_done =	function (course_id, module_order, component_order) {
							return	pipe_write ('done', backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/' + component_order + '/done', {
										write:	{
													method: 'GET',
													headers: '{ logged_in_header () }'
												}
									}, '{ response }');
						};
						
						
util .course_new =	pipe_write ('new', backend_path + '/my/course/new', {
						write:	{
									method: 'GET',
									headers: '{ with_ ("x-course-name", data .course_name) (logged_in_header ()) }'
								}
					}, '{ response }');
util .course_delete =	pipe_write ('delete', backend_path + '/my/course/delete', {
							write:	{
										method: 'GET',
										headers: '{ with_ ("x-course", data .course_id) (logged_in_header ()) }'
									}
						}, '{ response }');
util .course_publish =	pipe_write ('publish', backend_path + '/my/course/publish', {
							write:	{
										method: 'GET',
										headers: '{ with_ ("x-course", data .course_id) (logged_in_header ()) }'
									}
						}, '{ response }');
						
util .module_new =	function (course_id) {
						return	pipe_write ('new', backend_path + '/my/course/' + course_id + '/module/new', {
									write:	{
												method: 'GET',
												headers: '{ with_ ("x-module-name", data .module_name) (logged_in_header ()) }'
											}
								}, '{ response }');
					};	
util .module_reorder =	function (course_id) {
							return	pipe_write ('reorder', backend_path + '/my/course/' + course_id + '/module/reorder', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-module-1", data .module_1_order) (with_ ("x-module-2", data .module_2_order) (logged_in_header ())) }'
												}
									}, '{ response }');
						};
util .module_delete =	function (course_id) {
							return	pipe_write ('delete', backend_path + '/my/course/' + course_id + '/module/delete', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-module", data .module_order) (logged_in_header ()) }'
												}
									}, '{ response }');
						};
						
util .component_new =	function (course_id, module_order) {
							return	pipe_write ('new', backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/new', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-component-name", data .component_name) (with_ ("x-component-content", data .component_content) (logged_in_header ())) }'
												}
									}, '{ response }');
						};	
util .component_reorder =	function (course_id, module_order) {
								return	pipe_write ('reorder', backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/reorder', {
											write:	{
														method: 'GET',
														headers: '{ with_ ("x-component-1", data .component_1_order) (with_ ("x-component-2", data .component_2_order) (logged_in_header ())) }'
													}
										}, '{ response }');
							};
util .component_delete =	function (course_id, module_order) {
								return	pipe_write ('delete', backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/delete', {
											write:	{
														method: 'GET',
														headers: '{ with_ ("x-component", data .component_order) (logged_in_header ()) }'
													}
										}, '{ response }');
							};
util .component_edit =	function (course_id, module_order, component_order) {
							return	pipe_write ('edit', backend_path + '/my/course/' + course_id + '/module/' + module_order + '/component/' + component_order + '/edit', {
										write:	{
													method: 'GET',
													headers: '{ with_ ("x-component-name", data .component_name) (with_ ("x-component-content", data .component_content) (logged_in_header ())) }'
												}
									}, '{ response }');
						};	
						
util .user_edit =	function (user_id) {
						return	pipe_write ('edit', backend_path + '/user/' + user_id + '/edit', {
									write:	{
												method: 'GET',
												headers: '{ with_ ("x-" + data .edit_type, data .edit_content) (logged_in_header ()) }'
											}
								}, '{ response }');
					};	
						
						
						
						
						
						
content .courses =	pipe_read ('all-courses', backend_path + '/courses', {
						read:	{
									method: 'GET',
									headers: '{ logged_in_header () }'
								}
							
					}, '{ response }');
content .course =	function (course_id) {
						return	pipe_read ('course', backend_path + '/course/' + course_id, {
									read:	{
												method: 'GET',
												headers: '{ logged_in_header () }'
											}
										
								}, '{ response }');
					};
content .my_courses =	pipe_read ('my-courses', backend_path + '/my/courses', {
							read:	{
										method: 'GET',
										headers: '{ logged_in_header () }'
									}
								
						}, '{ response }');
						
content .users =	pipe_read ('all-users', backend_path + '/users', {
						read:	{
									method: 'GET',
									headers: '{ logged_in_header () }'
								}
							
					}, '{ response }');
content .user =	function (user_id) {
					return	pipe_read ('user', backend_path + '/user/' + user_id, {
								read:	{
											method: 'GET',
											headers: '{ logged_in_header () }'
										}
									
							}, '{ response }');
				};
						
						
						
						




var screens = {};

/*-me
    -login
    -user
    -matches
    -todos
    -teams
    
-match
-team*/