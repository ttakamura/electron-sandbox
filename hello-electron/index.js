'use strict';

var remote = require("remote");
var fileUtil = require("./lib/fileUtil");

document.addEventListener("DOMContentLoaded", function(e){
    var matched = location.search.match(/baseDir=([^&]*)/);
    var baseDir = matched && decodeURIComponent(matched[1]);
    if (baseDir) {
        fileUtil.readmeList(baseDir, function(err, matches){
            if (err) {
                console.log(err);
            }else{
                var list = document.getElementById("readme-list");
                matches.forEach(function(fileName){
                    var li = document.createElement("li");
                    li.innerText = fileName;
                    list.appendChild(li);
                });
            }
        });
    }

});
