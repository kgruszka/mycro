'use strict';

var include = require('include-all'),
    _ = require('lodash');

module.exports = function Services(cb) {
    var self = this;
    self.services = {};

    var services = include({
        dirname:  process.cwd() + '/app/services',
        filter:  /(.+)\.js$/,
        excludeDirs:  /^\.(git|svn)$/,
        keepDirectoryPath: true,
        flattenDirectories: true,
        optional: true
    });

    services = _.mapValues(services, function(constructor) {
        if (typeof constructor === 'function') {
            if (constructor.length === 1) return constructor(self);
            return constructor();
        }
        return constructor;
    });

    _.extend(self.services, services);
    cb();
};
