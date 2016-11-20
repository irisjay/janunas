var ejs = require ('ejs');
var fs = require ('fs');
var path = require ('path');
var compiler = require ('riot-compiler');

var app_file = path .join (__dirname, '/../app.ejs');

process .stdout .write (
	ejs .render (
		fs .readFileSync (app_file, 'utf8'),
		{
			require: require,
			module: module,
			console: console,
			__dirname: app_file .split ('/') .slice (0, -1) .join ('/'),
			__filename: app_file
		}
	));