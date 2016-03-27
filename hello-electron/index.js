'use strict';

var remote = require("remote");
var fileUtil = require("./lib/fileUtil");

document.addEventListener("DOMContentLoaded", function(e){

    fileUtil.readmeList(function(err, matches){
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
    })

});
