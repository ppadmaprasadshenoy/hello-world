const request = require('supertest');
const app = require('../hello-world.js');

describe('GET /', () => {
  it('responds with \'Hello World\'', (done) => {
    request(app)
        .get('/')
        .expect(200)
        .expect('Hello World')
        .end(done);
  });
});
