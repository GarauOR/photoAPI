'use strict';

const errorHandler = (error,req,res,next) => {
    res.status(500)
    .send(`Server error 500: ${error}`)
};

module.exports = errorHandler;