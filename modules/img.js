'use strict';

const superagent = require('superagent');

async function imghandler(req,res) {
    // https://api.unsplash.com/search/photos?page=1&query=${item}&client_id=${key}
    const key=process.env.IMG_API_KEY;
    const title= req.query.title;
    const url = `https://api.unsplash.com/search/photos?page=1&query=${title}&client_id=${key}`;
    let imgInfo = await superagent.get(url);
    let imgData=imgInfo.body.results;
    let photoList = imgData.map((item)=>new Photo(item));
    res.send(photoList);
}

async function randomhandler(req,res) {
    // https://api.unsplash.com/photos/random?client_id=${key}
    const key=process.env.IMG_API_KEY;
    const url = `https://api.unsplash.com/photos/random?client_id=${key}`;
    let randomInfo = await superagent.get(url);
    let randomData = randomInfo.body;
    let randomPhoto = new Photo(randomData);
    res.send(randomPhoto);
}

class Photo {
    constructor(data) {
        this.name = data.user.name;
        this.imageUrl = data.urls.full;
        this.descr = data.description;
    }
}

module.exports = {imghandler,randomhandler};