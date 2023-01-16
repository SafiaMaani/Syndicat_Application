const supertest = require('supertest');
const app = require('../server.js');

jest.setTimeout(10000);

describe('POST /api/auth/login', () => {
  describe('give invalid credentials', () => {
    it('should response with a 400 status code', async () => {
      const response = await supertest(app).post('/api/auth/login').send({
        email: 'John@gmail.com',
        password: '123456',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('give valid credentials', () => {
    it('should response with a 200 status code', async () => {
      const response = await supertest(app).post('/api/auth/login').send({
        email: process.env.EMAIL,
        password: process.env.PASSWORD,
      });
      expect(response.statusCode).toBe(200);
    });
  });
});