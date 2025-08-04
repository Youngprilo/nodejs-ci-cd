const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return "Hello, DevOps!"', (done) => {
    request(app)
      .get('/')
      .expect('Hello, DevOps!', done);
  });
});
