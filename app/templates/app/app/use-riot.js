
riot .util .tmpl .errorHandler = log_alert;

riot .mixin (
	{
		init:	function () {
					var self = this;
					
					var self_stuff;
					var parent_stuff = self .parent && self .parent .stuff;
					
					var stuff_i_understand = {};
					var stuff_i_remember = {};
					var things_i_remember = {};
					var stuff_emitter = riot .observable ();
					
					
					self .understands =	function (stuff) {
											stuff_i_understand [stuff] = true;
										};
					self .remembers =	function (stuff) {
											stuff_i_remember [stuff] = true;
										//log ('stuff_i_remember', stuff_i_remember, self);
											self .understands (stuff);
										};
					self .recalls =	function (something) {
										//log (stuff_i_remember [something], things_i_remember [something]);
										if (stuff_i_remember [something])
											return things_i_remember [something]
										else
											return self .parent && self .parent .recalls (something);
									};
										
					self .must_do =	function (something) {
										stuff_emitter .on ('must', function (args) {
											something .apply ({}, args);
										});
									};
					self .would_do =	function (something) {
											stuff_emitter .on ('would', function (args) {
												something .apply ({}, args);
											});
										};
					self .should_do =	function (something) {
											stuff_emitter .on ('should', function (args) {
												something .apply ({}, args);
											});
										};
										
					self .stuff =	with_redefined (
										'trigger',
										function (raw_stuff) {
											
											self_stuff = raw_stuff;
											
											return	trigger_for (
														{
															stuff_emitter: stuff_emitter,
															stuff_i_understand:	function (name_of_stuff) { return stuff_i_understand [name_of_stuff]; },
															self_stuff: self_stuff,
															parent_stuff: parent_stuff,
															self_root: self .root
														} );
										} ) (riot .observable ());
	
					self .would_do (function (name_of_thing, thing) {
						if (stuff_i_remember [name_of_thing])
							things_i_remember [name_of_thing] = thing;
					});

					//for event trickling
					if (parent_stuff)
						self .parent .would_do (
							trigger_for (
								{
									stuff_emitter: stuff_emitter,
									stuff_i_understand:	function (name_of_stuff) { return stuff_i_understand [name_of_stuff]; },
									self_stuff: self_stuff,
									parent_stuff: 'from parent',
									self_root: self .root
								}
							) );
					
					//for logging
					self .should_do (function (/*event_info*/) {
			            log (/*'event', */[self] . concat ([] .slice .call (arguments)) );
			        });
			        
			        //capturing bubbling self events
			        self .on ('mount', function () {
			        	self .root .addEventListener ('self', function (event) {
			        		self .stuff .trigger .apply (self .stuff, event .detail);
			        		event .stopPropagation ();
			        		return false;
			        	}, false);
			        });
				}
	} );
		var trigger_for =	function (stuff_info) {
								var stuff_emitter = stuff_info .stuff_emitter;
								var stuff_i_understand = stuff_info .stuff_i_understand;
								var self_stuff = stuff_info .self_stuff;
								var parent_stuff = stuff_info .parent_stuff;
								var self_root = stuff_info .self_root;
								
								var parent_node = self_root .parentNode;
								
								if (parent_stuff === 'from parent')
									return	function (name_of_thing, info_about_thing) {
												if (! stuff_i_understand (name_of_thing) /*i understand*/) {
													stuff_emitter .trigger ('would', arguments);
													
													stuff_emitter .trigger ('must', arguments);
													
													self_stuff .trigger .apply (
														self_stuff, arguments);
												}
											};
								else
									return	function (name_of_thing, info_about_thing) {
												if (stuff_i_understand (name_of_thing)) {
													stuff_emitter .trigger ('should', arguments);
													
													stuff_emitter .trigger ('would', arguments);
													
													stuff_emitter .trigger ('must', arguments);
													
													self_stuff .trigger .apply (
														self_stuff, arguments);
												}
												else if (parent_stuff /*exists*/) {
													stuff_emitter .trigger ('must', arguments);
													
													//event bubbling
													parent_stuff .trigger .apply ({}, arguments);
												}
												else if (parent_node /*exists*/) {
													//bubble as dom event
													send_event (parent_node) .apply (this, arguments);
												}
											};
							};	
		var with_redefined =	function (key, value_maker) {
									return	function (thing) {
												var redefined_thing = Object .create (thing);
												Object .defineProperty (redefined_thing, key,
													{
														enumerable: true,
														configurable: true,
														writable: true,
														value: value_maker (thing)
													}
												);
												return redefined_thing;
											};
								};

	
var send_event =	function (element) {
						return	function () {
									element .dispatchEvent (
										new CustomEvent ('self', { 'detail': arguments, bubbles: true } )
									);
								};
					};
	
	
	
var tags = riot .mount ('*');
//log (navigator .userAgent);


//var the_app = riot .util .vdom [0];

//(function (self) {
	var reload =	function () {
						screens .add_as ('page') .apply (null,
							[tag_name (page_name (window .location .hash))] .concat (page_arguments (window .location .hash)));
					};
	
	if (! window .location .hash)
		window .location .hash = '#login';
	
	window .addEventListener ('hashchange', reload);
	reload ();
	
	/*self .stuff .on ('on-page', function (page) {
		window .location .hash = '#' + page;
	});*/
	//self .stuff .trigger ('on-page', /*truthy_nicely_logged_with ('preexisting hash')*/ (isolate_hash (window .location .hash)) || 'matches-see');
//})(the_app);