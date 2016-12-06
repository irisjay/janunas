var scope = function (args) {
				args = args || {};
                return  (function (self) {
					
					self .__incoming_memory = riot .observable ();
						self .__incoming_memory .addListener = self .__incoming_memory .on;
						self .__incoming_memory .removeListener = self .__incoming_memory .off;
					
					self .__memory_pathway = {};
					
					self .__incoming_memory_filter = {};
					self .__last_memory = {};
					self .__outgoing_memory_filter = {};
					
					self .__outgoing_knowledge = args .__outgoing_knowledge || riot .observable ();
						self .__outgoing_knowledge .addListener = self .__outgoing_knowledge .on;
						self .__outgoing_knowledge .removeListener = self .__outgoing_knowledge .off;
					
					
					self .parent = function (parent) {
                					    self .__parent = parent;
                					    parent .on ('*', function (what, how) {
											if (! self .__memory_pathway [what]) {
	                					    	self .__outgoing_knowledge .trigger (what, how);
											}
                					    });
                					};
					if (args .parent)
						self .parent (args .parent);
					
					
					//do i need to add lifecycle (sth) here to prevent memory leak? prolly not
					self .connects =	function (what, pathway) {
											var incoming_memories = most .fromEvent (what, self .__incoming_memory);
											self .__memory_pathway [what] = pathway (incoming_memories);
											self .__memory_pathway [what] .observe (function (how_it_really_is) {
												self.__outgoing_knowledge .trigger (what, how_it_really_is);
											});
											if ((pathway .filter || {}) .__incoming_memory_filter)
												self .__incoming_memory_filter [what] = pathway .filter .__incoming_memory_filter;
											if ((pathway .filter || {}) .__outgoing_memory_filter)
												self .__outgoing_memory_filter [what] = pathway .filter .__outgoing_memory_filter;
										};
					self .remembers =	function (what) {
											self .connects (what, function (incoming_memories) {
												return incoming_memories;
											});
										};
					self .disconnect =	function (what) {
											self .__incoming_memory .off (what);
											self .__outgoing_knowledge .off (what);
											delete self .__incoming_memory_filter [what];
											delete self .__memory_pathway [what];
											delete self .__outgoing_memory_filter [what];
											delete self .__last_memory [what];
										};
					self .recalls =	function (what) {
    										if (self .__memory_pathway [what])
    											return (self .__outgoing_memory_filter [what] || function (how) { return how; }) (self .__last_memory [what]);
    										else if (self .__parent)
    											return self .__parent .recalls (what);
    									};
					self .emit =   function (what, how) {
										if (self .__memory_pathway [what]) {
											
											self .__last_memory [what] = (self .__incoming_memory_filter [what] || function (how) { return how; }) (how);
										    if ((args .on || {}) .new_memory)
												args .on .new_memory .apply (this, arguments);
												
											self .__incoming_memory .trigger (what, how);
										}
										else if (self .__parent)
											self .__parent .emit .apply (this, arguments);
										else if (args .ex_emit) {
											args .ex_emit .apply (this, arguments);
										}
									};
    				if (args .extend) {
    					args .extend .connects = self .connects;
    					args .extend .remembers = self .remembers;
    					args .extend .recalls = self .recalls;
    					args .extend .emit = self .emit;
    				}
    
        							
        			self .on = self .__outgoing_knowledge .on .bind (self .__outgoing_knowledge);
        			self .one = self .__outgoing_knowledge .one .bind (self .__outgoing_knowledge);
        			self .off = self .__outgoing_knowledge .off .bind (self .__outgoing_knowledge);
        			self .addListener = self .__outgoing_knowledge .addListener .bind (self .__outgoing_knowledge);
        			self .removeListener = self .__outgoing_knowledge .removeListener .bind (self .__outgoing_knowledge);
    				if (args .extend && args .extend !== args .__outgoing_knowledge) {
    					args .extend .on = self .on;
    					args .extend .one = self .one;
    					args .extend .off = self .off;
    					args .extend .addListener = self .addListener;
    					args .extend .removeListener = self .removeListener;
    				}
	
	
				    return self;
                }) ({});
			};	