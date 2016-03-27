'use strict';

var glob = require('glob');

var fileUtil = {
    readmeList: function (baseDir, callback){
        glob('node_modules/**/README.md', {cwd: baseDir}, function (err, matches){
            if (err){
                callback(err, nil);
            }else{
                callback(null, matches);
            }
        });
    }
};

module.exports = fileUtil;
