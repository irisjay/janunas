var debug = false;
var alert_log =	function () {
					function safeJSONStringify (input, maxDepth, indent)
					{
					
					    var output,
					        refs = [],
					        refsPaths = [];
					        
					    maxDepth = maxDepth || 5;
					    
					    function recursion (input, path, depth)
					    {
					        var output = {},
					            pPath,
					            refIdx;
					        
					        path  = path  || "";
					        depth = depth || 0;
					        depth++;
					        
					        if (maxDepth && depth > maxDepth)
					        {
					            return "{depth over " + maxDepth + "}";
					        }
					        
					        for (var p in input)
					        {
					            pPath = (path ? (path+".") : "") + p;
					            if (typeof input[p] === "function")
					            {
					                output[p] = "{function}";
					            }
					            else if (typeof input[p] === "object")
					            {
					                refIdx = refs.indexOf(input[p]);
					                
					                if (-1 !== refIdx)
					                {
					                    output[p] = "{reference to " + refsPaths[refIdx]  + "}";
					                }
					                else
					                {
					                    refs.push(input[p]);
					                    refsPaths.push(pPath);
					                    output[p] = recursion(input[p], pPath, depth);
					                }
					            }
					            else
					            {
					                output[p] = input[p];
					            }
					        }
					        
					        return output;
					    }
					        
					    if (typeof input === "object")
					    {
					        output = recursion(input);
					    }
					    else
					    {
					        output = input;
					    }
					    
					    return JSON.stringify(output, null, indent);
					}
					var stringifyOnce = function(obj, replacer, indent){
						var printedObjects = [];
						var printedObjectKeys = [];
				
						function printOnceReplacer(key, value){
							if ( printedObjects.length > 2000){ // browsers will not print more than 20K, I don't see the point to allow 2K.. algorithm will not be fast anyway if we have too many objects
								return 'object too long';
							}
							var printedObjIndex = false;
							printedObjects.forEach(function(obj, index){
								if(obj===value){
										printedObjIndex = index;
								}
							});
				
							if ( key == ''){ //root element
								 printedObjects.push(obj);
								printedObjectKeys.push("root");
								 return value;
							}
				
							else if(printedObjIndex+"" != "false" && typeof(value)=="object"){
								if ( printedObjectKeys[printedObjIndex] == "root"){
										return "(pointer to root)";
								}else{
										return "(see " + ((!!value && !!value.constructor) ? value.constructor.name.toLowerCase()  : typeof(value)) + " with key " + printedObjectKeys[printedObjIndex] + ")";
								}
							}else{
								var qualifiedKey = key || "(empty key)";
								printedObjects.push(value);
								printedObjectKeys.push(qualifiedKey);
								if(replacer){
										return replacer(key, value);
								}else{
										return value;
								}
							}
						}
						return JSON.stringify(obj, printOnceReplacer, indent);
					};
					
					var msg = '';
					for (var key in arguments) {
						var value = arguments [key];
						//alert (value +'\n'+ safeJSONStringify (value, 3, 2));
						msg = (msg ? msg + '\n\n......\n\n' : '') + value +'\n'+ safeJSONStringify (value, 4, 2);
					}
					alert (msg);
					//debugger;
				};
			
var log_alert =	function () {
					if (window .log !== alert_log)
						window .log .apply (this, arguments);
					alert_log .apply (this, arguments);
				};
			
if (debug)
	log = alert_log;
else
	log = console .log .bind (console);