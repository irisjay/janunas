/*
global log
global riot
global localStorage
global fetch
*/		
			
					
					
	var replace_all =	function (search, replacement) {
							return	function (string) {
									    var target = string;
									    return target .split (search) .join (replacement);
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
	var push =	function (key, value) {
					return	function (object) {
								object [key] = value;
								return object;
							};
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
	var with_ =	function (who, what) {
					return	function (baby) {
								var i = {};
								for (var key in baby) {
									i [key] = baby [key];
								}
								i [who] = what;
								return i;
							};
				};
				
	var parse =	function (json) {
					try {
						return JSON .parse (json);
					}
					catch (e) {
					}
				};
				
								
	var is_picture =	function (url) {
							var ext = url .split ('.') .reverse () [0];
							return ext === 'jpg' || ext === 'png' || ext === 'bmp' || ext === 'gif' || ext === 'jpeg';
						};		
	var not_picture =	function (url) {
							return ! is_picture (url);
						};
								
		var on_next_tick =	function (action) {
								requestAnimationFrame (action);
							};
							
					
    var upload =    function (bin, return__from, self) {
    	



    var url = backend_path + '/upload/';
    	return function (file) {
            var xhr = new XMLHttpRequest();
            upload = xhr.upload;
            xhr.onload = function(e) {
                if (xhr.status == 201 && xhr.readyState == 4) {
                    self .emit (return__from, JSON.parse(xhr.responseText) .links [0] .href);
                }
            };

            xhr.open(
                "POST",
                url
            );
            xhr.setRequestHeader("Cache-Control", "no-cache");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.setRequestHeader("Filename", file.name.replace(/[^A-Za-z0-9-_=,.]/g, "_"));
            xhr.setRequestHeader("Size", file.size);
            xhr.setRequestHeader("Bin", bin);
            xhr.send(file);
                    }};		
							
var array_push =	function (thing) {
						return	function (arr) {
									arr = arr ? [] .concat (arr) : [];
									thing = [] .concat (thing);
									return arr .concat (thing);
								};
					};
								
								
var filename =	function (url) {
					return url .split ('/') .reverse () [0];
				};

var each_ref =	function (ref) {
					return	function (ref_changes) {
								return	ref_changes .filter (function (change) {
											return change .add;
										})
										.map (function (change) {
											return change .add;
										});
							};
				};			
var all_refs =	function (ref) {
					var refs = [];
					return	function (ref_changes) {
								return	most .just (refs) .concat (
											ref_changes .tap (function (change) {
												if (change .add)
													refs .concat ([change .add]);
												if (change .remove)
													refs .splice (refs .indexOf (change .remove), 1);
											})
											.map (function () {
												return refs;
											})
										);
							};
				};								
								

								
	
	var rehash = function () { window.location.reload(); };
	
	
										var refs = {};
										var self_ref_expression =	function (self, ref) {
																		refs [ref] = (+ (refs [ref]) || 0) + 1;
																		var ref_id = ref + '__' + refs [ref];
																		
																		var dom;
																		var get_dom =	function () {
																							if (! dom) {
																								dom = self .root .querySelector ('[faux_ref="' + ref_id + '"]');
																								if (dom) {
																									dom .removeAttribute ('faux_ref');
																								}
																							}
																						};
																//log (self);
																		self .on ('mount', function () {
																			get_dom ();
																			self .emit (ref, { add: dom });
																		});
																		self .on ('before-unmount', function () {
																			get_dom ();
																			self .emit (ref, { remove: dom });
																		});
																		self .on ('updated', function () {
																			get_dom ();
																			self .emit (ref, { add: dom });
																			//self .emit (ref, { change: dom });
																		});
																		
																		return ref_id;
																	};

			
			
			
			
			
		
		
		
		has_done =	function (module) {
						return module .done;
					};
		has_not_done =	function (module) {
							return ! module .done;
						};
			
			
			
			
			
			
		
	var remembers =	function (data) {
						return	function (self) {
									for (var name in data) {
										self .remembers (name);
										self .emit (name, data [name]);
									}
								};
					};
	var connects =	function (connections) {
						return	function (self) {
									for (var name in connections) {
										self .connects (name, connections [name]);
									}
								};
					};
var pathway =	function (what) {
						return	function (scope) {
									return	function (incoming_memories) {
												incoming_memories .observe (function (how) {
													scope .emit (what, how);
												});
												return most .fromEvent (what, scope);
											};
								};
					};
				
					
					
var scope_next_known =	function (what) {
							return	function (scope) {
										return	(scope .recalls (what)
													? Promise .resolve (scope .recalls (what))
													: event_next (what) (scope))
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
var eventify =	function (observable) {
					var eventable = Object .create (observable);
					eventable .addListener = eventable .on;
					eventable .removeListener = eventable .off;
					return eventable;
				};
				

var display_errors =	function (data) {
							value ('.error') (data) && alert (value ('.error') (data));
						};
						

var value =	function (/*property_name*/) {
				var property_names = [] .slice .call (arguments);
				return	function (object) {
							var value = object;
							
							for (var property_name of property_names) {
								if (! property_name)
									continue;
								property_name = trim_first_dot (property_name) .replace (/\s/g, '');
								if (! property_name)
									continue;
									
								for (var property_bit of property_name .split ('.') .filter (function (truthy) { return truthy; })) {
									if (! value)
										return value;
									value = value [property_bit];
								}
							}
							
							return value;
						};
			};
			
							var trim_first_dot =	function (string) {//debugger;
														string = string + '';
														if (string [0] === '.')
															return string .slice (1);
														else
															return string;
													};
			
			
var lifecycle =	function (tag) {
					return most .fromEvent ('unmount', tag);
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