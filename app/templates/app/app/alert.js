window .onerror =   function (message, source, lineno, colno, error) {
						if (message && message ['srcElement'] && message ['srcElement'] ['outerHTML'] && message ['srcElement'] ['outerHTML'] ['indexOf'] && message ['srcElement'] ['outerHTML'] ['indexOf'] ('<script src="cordova.js') === 0)
							log_alert ('does not contain real cordova');
						
						else if (message && message === 'Uncaught TypeError: Cannot read property \'OneSignal\' of undefined' && source && source ['indexOf'] && source ['indexOf'] ('/js/use-onesignal.js') !== -1)
							log_alert ('does not contain cordova onesignal');
						else {
							log_alert ('error', arguments);
							log_alert ('stack', new Error ('stacktrace') .stack);
						}
					};