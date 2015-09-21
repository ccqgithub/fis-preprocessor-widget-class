'use strict';

var path = require('path');

var classes = {};
var widgetIndex = 0;

module.exports = function(content, file, conf) {
    var filepath = path.dirname(file.subPath);

    if (!file.isWidget) return content;

    if (!classes[filepath]) {
        widgetIndex ++;
        classes[filepath] = widgetIndex;
        if (conf.uid) {
            classes[filepath] += '-' + new Date().getTime();
        }
    }

    content = content.replace(/w-widget-class/ig, 'w-' + classes[filepath]);

    return content;
};