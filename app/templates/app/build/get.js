var fs = require ('fs');

module .exports =   function (tag) {
                        var tag_dir = tag .split ('.') .slice (0, -1) .join ('.') + '/';
                        return  function (the_get) {
                                    return fs .readFileSync (tag_dir + the_get, 'utf8');
                                };
                    };