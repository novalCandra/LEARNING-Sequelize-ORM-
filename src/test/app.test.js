const request = require("supertest");
const app = require("../index");

describe('API REQUEST', () => {
    it('GET API USERS', async() => {
        const res = await request(app).get("/api/users");
        expect(res.statusCode).toEqual(200);
        expect(res.body.status).toEqual('OK')
    })
})