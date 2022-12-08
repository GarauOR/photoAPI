'use strict';

const validate = (req,res,next) => {
    if(!req.query.title){
        next("Must enter a title name");
    }
    else{next();}
};

module.exports = validate;