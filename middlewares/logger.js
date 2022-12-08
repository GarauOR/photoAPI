'use strict';

const logger = (req,res,next) => {
    console.log(`Logged on ${new Date()}`);
    next();
};

module.exports = logger;