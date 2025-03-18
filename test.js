const request = require('supertest');
const app = require('./index.js');


describe('GET /', () => {
  it('should return Hello, Node.js!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, Node.js!');
    expect(res.statusCode).toBe(200);
  });
});
