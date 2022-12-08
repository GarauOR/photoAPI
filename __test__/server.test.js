'use strict'

const server = require("../server");
const supertest = require("supertest");
const mockRequest = supertest(server.app);

describe("Testing Photo API", ()=>{

    it("base url test", async ()=>{
        const res = await mockRequest.get("/");
        console.log(res);
        expect(res.status).toBe(200);
        expect(res.text).toBe('BASE ENDPOINT');
    })

    it("404 wrong route test", async ()=>{
        const res = await mockRequest.get("/bad");
        expect(res.status).toBe(404);
    })

    it("404 wrong method test", async ()=>{
        const res = await mockRequest.post("/random");
        expect(res.status).toBe(404);
    })

    it("random image url test", async ()=>{
        const res = await mockRequest.get("/random");
        expect(res.status).toBe(200);
        expect(typeof res.body).toBe("object");
    })

    it("500 no title in search image", async ()=>{
        const res = await mockRequest.get("/search_image");
        expect(res.status).toBe(500);
    })

    it("200 if title is string", async ()=>{
        const data = { title: "office" };
        const res = await mockRequest.get("/search_image").query(data);
        expect(res.status).toBe(200);
        expect(typeof res).toBe("object");
    })

    it("another way to test an empty query (500)", async ()=>{
        const data = {};
        const res = await mockRequest.get("/search_image").query(data);
        expect(res.status).toBe(500);
    })
});