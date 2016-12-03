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
				
	
				
								
		var on_next_tick =	function (action) {
								requestAnimationFrame (action);
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
										if (self .connects)
											self .connects (name, connections [name]);
										else
											connections [name] (most .fromEvent (name, self));
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
							(data || {}) .error && alert ((data || {}) .error);
						};
						

var value =	function (/*property_name*/) {
				var property_names = [] .slice .call (arguments);
				return	function (object) {
							var value = object;
							
							for (var property_name of property_names) {
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
			
							var trim_first_dot =	function (string) {
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