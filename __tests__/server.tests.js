const request = require('supertest');
const server = require('../server.js');
import { App } from "../client/src/App.jsx";
import React from 'react';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Get request /setAnswer', () => {
  test('Expects each element to be a number', (done) => {
    request(server)
    .get('/setAnswer')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const isBelowThreshold = (currentValue) => currentValue <= 7 && currentValue >= 0;
      let result = res.body.map(Number);
      expect(result.every(isBelowThreshold)).toBe(true);
    })
    .end((err) => {
      if (err) {
        return done(err);
      } else {
        return done();
      }
    })
  })
})

describe('Get request /playerInfo', () => {
  test('Return player wins/games played in numbers', (done) => {
    request(server)
    .get('/playerInfo')
    .query({playerName: 'Brandon'})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect((res) => {
      const totalwins = res.body[0].totalwins;
      const totalgames = res.body[0].totalgames;
      expect(typeof totalwins).toEqual('number')
      expect(typeof totalgames).toEqual('number')
    })
    .end((err) => {
      if (err) {
        return done(err)
      } else {
        return done();
      }
    })
  })
})

describe('App component renders', () => {
  test('App component renders', async () => {
  await render(<App />)
  await waitFor(() => screen.getByText('MasterMind'))

  expect(screen.getByText('MasterMind')).toBeTruthy();
  })
})


