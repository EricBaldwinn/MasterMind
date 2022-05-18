const request = require("supertest");
const server = require('../server.js');


describe('Recieve an array of length of 4', () => {
  test('the response is an array of 4 elements', (done) => {
    request(server)
    .get('/setAnswer')
    .then((response) => {
      expect(JSON.parse(response.text).length).toBe(4);
      done();
    });
  });

  test('Array elements are numbers', (done) => {
    request(server)
    .get('/setAnswer')
    .then((response) => {
      const elements = (element) =>
        typeof Number(element) === 'number';
        let output = JSON.parse(response.text);
        expect(output.every(elements)).toBe(true);
        done();
      });
    });
  });





