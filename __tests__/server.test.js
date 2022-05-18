const request = require("supertest");
const server = require('../server.js');



  test("/setAnswer route works", (done) => {
    request(server)
    .get('/setAnswer')
    .expect(200)
    done();
  });


  test('Numbers are between 0-7', (done) => {
    request(server)
    .get('/setAnswer')
  .then((response) => {
      const isBelowThreshold = (currentValue) => currentValue <= 7 && currentValue >= 0;
      let result = response.body.map(Number);
      expect(result.every(isBelowThreshold)).toBe(true)
      done();
    });
  });









