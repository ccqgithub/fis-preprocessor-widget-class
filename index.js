'use strict';

var path = require('path');

var classes = {};

module.exports = function(content, file, conf) {
    var filepath = path.dirname(file.subPath);

    if (!file.isWidget) return content;

    if (!classes[filepath]) {
        classes[filepath] = new Date().getTime() + '' + Math.round(Math.random(99));
    }

    content = content.replace(/w-widget-class/ig, 'w-' + classes[filepath]);

    return content;
};