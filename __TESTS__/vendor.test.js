'use strict';

const delivered = require('../vendor');

describe('Test the delivered function within vendor', () => {
  test('It should return a console log', () => {
    expect(delivered).toBeDefined();
  })
})

