var ejs = require ('ejs');
var fs = require ('fs');
var path = require ('path');
var compiler = require ('riot-compiler');
var tag_dir_path = path .join (__dirname, '/../tags');

				var get_files =	function (dir) {
									var results = [];
									var list = fs .readdirSync (dir);
									list .forEach (function (file) {
										file = dir + '/' + file;
										var stat = fs .statSync (file);
										if (stat && stat .isDirectory ())
											results = results .concat (get_files (file));
										else if (file .endsWith ('.ejs'))
											results .push (file);
									});
									return results;
								};
			
var tag_files = get_files (tag_dir_path);
var tags_info =	tag_files .map (function (filepath) {
					var tag_path = filepath .slice (tag_dir_path .length + 1);
					
					var tag_name =	tag_path
										.split ('/') .join ('-')
										.split ('.') [0];
					return	{
								path: filepath,
								tag: tag_name
							};
				});
					
		var expand =	function (tag_info) {
							console .error (tag_info .tag);
							return	'<' + tag_info .tag + '>' + '\n' +
										indent (
											ejs .render (
												fs .readFileSync (tag_info .path, 'utf8'),
												{
													require: require,
													module: module,
													console: console,
													__dirname: tag_info .path .split ('/') .slice (0, -1) .join ('/'),
													__filename: tag_info .path,
													tags_info: tags_info,
													__: __function,
													tag: tag_info .tag
												}
											)
										) + '\n' +
									'</' + tag_info .tag + '>' + '\n';
						};
							var indent =	function (string) {
												return '\t' + string .split ('\n') .join ('\n\t');
											};
							var __function =	function (the_function) {
													var function_source = the_function .toString ();
													var function_arguments = /^[^(]*\(([^)]*)\)/ .exec (function_source) [1] .replace (/\s/g, '') .split (',');
													var function_body = /^[^{]*{([^]*)}[^}]*$/ .exec (function_source) [1];
													return 'new Function (' + function_arguments .concat ([function_body]) .map (JSON .stringify) .join (',') + ')'
												};

var tags = '';

for (var tag_info of tags_info) {
	tags += expand (tag_info);
}

process .stdout .write (compiler .compile (tags));