'use strict';

var path = require('path');

var classes = {};

module.exports = function(content, file, conf) {
    var filepath = path.dirname(file.subPath);

    if (!classes[filepath]) {
        classes[filepath] = new Date().getTime() + '' + Math.round(Math.random(99));
    }

    if (file.isWidget) {
        content = content.replace(/w-widget-class/ig, classes[filepath]);
    }

    return content;
};