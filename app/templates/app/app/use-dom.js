/*
Use app
*/
document .addEventListener ('DOMContentLoaded', function () {
	riot .mount ('*');
});
/*
Catch errors
*/
riot .util .tmpl .errorHandler = log .error;/* now riot throws automatically. still catch with log? */
window .onerror =   function (message, source, lineno, colno, error) {
						if ((((message || {}) .srcElement || {}) .outerHTML || {} ) [0] === '<script src="cordova.js') {
							log .error ('does not contain real cordova');
						}
						else if (message && message === "Uncaught TypeError: Cannot read property 'OneSignal' of undefined"
								&& ((source || {}) .indexOf || function () {}) ('/js/use-onesignal.js') !== -1) {
							log .error ('does not contain cordova onesignal');
						}
						else {
							log .error ('error', arguments);
							log .error ('stack', (error || {}) .stack);
						}
					};
/*
Use riot data layer
*/
riot .mixin (
	{
		init:	function () {
					(function (self) {
											var send_event =	function (element) {
																	return	function (what, how) {
																				send_dom_event (element) ('emit', { what: what, how: how });
																			};
																};
						self .scope =	scope ({
											//be child of riot parent
											parent: (self .parent || {}) .scope,
											//latch onto riot tag
											extend: self,
											__outgoing_knowledge: self,
											//bubble as dom event on uncaptured
											ex_emit: self .root .parentNode && send_event (self .root .parentNode),
											//logging
											on:	{
													new_memory:	function (/*what, how, other args*/) {
														            log ([self] .concat ([] .slice .call (arguments)));
																}
												}
										});
						
				        //capturing bubbling events
			        	self .root .addEventListener ('emit', function (event) {
			        		var detail = event .detail;
			        		self .emit (detail .what, detail .how);
			        		event .stopPropagation ();
			        		return false;
			        	}, false);
					}) (this);			
				}
	} );
/*
Use riot interaction layer
*/
riot .mixin (
	{
		init:	function () {
					(function (self) {
						most .mergeArray ([
							most .fromEvent ('mount', self),
							most .fromEvent ('updated', self),
							most .fromEvent ('before-unmount', self)
						]) .loop (function (last_refs, changed) {
						    return	{
						    			seed: consistentfy (self .refs),
						    			value: diff_refs (last_refs, self .refs)
						    		};
						}, {}) .chain (most .from)
						.thru (consume (self, 
							function (change) {
								var diff = {};
								diff [change .type] = change .node;
								
								if (change .type === 'remove')
									send_dom_event (change .node) ('unmount');
								self .emit (change .ref, diff);
						}));
					}) (this);			
				}
	} );
						var consistentfy =	function (original_refs) {
												var shallow_refs = {};
												for (var ref in original_refs) {
													shallow_refs [ref] = original_refs [ref]
													if (! shallow_refs [ref] .length)
														shallow_refs [ref] = [shallow_refs [ref]];
													else
														shallow_refs [ref] = shallow_refs [ref] .slice ();
												}
												return shallow_refs;
											};
						var diff_refs =	function (last_refs, now_refs) {
											now_refs = consistentfy (now_refs);
							
										    var diff = [];
										    //debugger;
										    for (var ref in now_refs) {
										    	for (var node of now_refs [ref]) {
										    		var node_index;
										    		if (last_refs [ref] && (node_index = last_refs [ref] .indexOf (node)) !== -1) {
										    			last_refs [ref] .splice (node_index, 1);
										    		}
										    		else {
										    			diff .unshift ({ ref: ref, type: 'add', node: node });
										    			node .consume =	function (stream, observer) {
														    				stream .thru (consume (node, observer))
														    				return node;
														    			} 
										    		}
										    	}
										    } 
										    for (var ref in last_refs) {
										    	for (var node of last_refs [ref]) {
										    		diff .unshift ({ ref: ref, type: 'remove', node: node });
										    	}
										    } 
										    return diff;
										};
/*
Riot conveniece methods
*/
riot .mixin (
	{
		init:	function () {
					(function (self) {
						self .my =	function (what, property_name) {
										return value (property_name) (self .recalls (what));
									};
						self .self = self;
						
						self .records =	function (data) {
											for (var name in data) {
												self .remembers (name);
												self .emit (name, data [name]);
											}
											return self;
										};
						self .processes =	function (connections) {
												for (var name in connections) {
													self .connects (name, connections [name]);
												}
												return self;
											};
						self .handles =	function (listeners) {
											for (var name in listeners) {
												self .remembers (name);
												self .on (name, listeners [name]);
											}
											return self;
										};
						self .consume =	function (stream, observer) {
											stream .thru (consume (self, observer));
											return self;
										};
					}) (this);			
				}
	} );
/*
Polyfill for dom util methods
*/
window .Element && (function (ElementPrototype) {
	ElementPrototype .matchesSelector =	ElementPrototype .matchesSelector 
										|| ElementPrototype .mozMatchesSelector
										|| ElementPrototype .msMatchesSelector
										|| ElementPrototype .oMatchesSelector
										|| ElementPrototype .webkitMatchesSelector
										||	function (selector) {
												var node = this, nodes = (node .parentNode || node .document) .querySelectorAll (selector), i = -1;
										
												while (nodes [++ i] && nodes [i] != node);
										
												return !!nodes[i];
											};
}) (Element. prototype);














											var send_dom_event =	function (element) {
																		return	function (what, details) {
																					element .dispatchEvent (
																						new CustomEvent (what, { detail: details, bubbles: true } )
																					);
																				};
																	};


	
var children =  function (el, selector) {
					var selectors      = null,
						children       = null,
						childSelectors = [],
						tempId         = '';
				
					selectors = selector.split(',');
				
					if (!el.id) {
						tempId = '_temp_';
				
						el.id = tempId;
					}
				
					while (selectors.length) {
						childSelectors.push('#' + el.id + ' ' + selectors.pop());
					}
				
					children = document.querySelectorAll(childSelectors.join(', '));
				
					if (tempId) {
						el.removeAttribute('id');
					}
				
					return children;
				};
				
				
				
var child =  function (el, selector) {
	var tempId         = '';

	if (!el.id) {
		tempId = '_temp_';

		el.id = tempId;
	}

	var child = document.querySelectorAll('#' + el.id + ' > ' + selector);

	if (tempId) {
		el.removeAttribute('id');
	}

	return child;
};
var one_child =  function (el, selector) {
	var tempId = '';

	if (!el.id) {
		tempId = '_temp_';

		el.id = tempId;
	}
	var child = document.querySelector('#' + el.id + ' > ' + selector);

	if (tempId) {
		el.removeAttribute('id');
	}

	return child;
};

var closest_parent = function (el, selector) {
						var includeSelf = true;
						var parent = el.parentNode;
					
						if (includeSelf && el.matches(selector)) {
							return el;
						}
					
						while (parent && parent !== document.body) {
							if (parent.matches && parent.matches(selector)) {
								return parent;
							} else if (parent.parentNode) {
								parent = parent.parentNode;
							} else {
								return null;
							}
						}
					
						return null;
					};
					
					
					
					
					
					
var prepend =	function (parent, child) {
					parent .insertBefore (child, parent .firstChild);
				};	
var append =	function (parent, child) {
					parent .insertBefore (child, null);
				};
					
					
					
					
					
					
					
					
					


var swap_nodes =	function (obj1, obj2) {
					    // save the location of obj2
					    var parent2 = obj2.parentNode;
					    var next2 = obj2.nextSibling;
					    // special case for obj1 is the next sibling of obj2
					    if (next2 === obj1) {
					        // just put obj1 before obj2
					        parent2.insertBefore(obj1, obj2);
					    } else {
					        // insert obj2 right before obj1
					        obj1.parentNode.insertBefore(obj2, obj1);
					
					        // now insert obj1 where obj2 was
					        if (next2) {
					            // if there was an element after obj2, then insert obj1 right before that
					            parent2.insertBefore(obj1, next2);
					        } else {
					            // otherwise, just append as last child
					            parent2.appendChild(obj1);
					        }
					    }
					};