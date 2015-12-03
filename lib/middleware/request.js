'use strict';

module.exports = function(microservice) {
    return function(req, res, next) {
        // attach the microservice to each request
        req.microservice = microservice;

        // define request attributes
        req.options = {
            where: {},
            values: {}
        }

        next();
    }
};