const { generateRandomString } = require('./utils');

describe('generateRandomString', () => {
  test('should return an error if length is not a number', (done) => {
    generateRandomString('5', (err, result) => {
      expect(err).toEqual(Error('Length must be a number'));
      expect(result).toBeUndefined();
      done();
    });
  });

  test('should return an error if length is less than 1', (done) => {
    generateRandomString(0, (err, result) => {
      expect(err).toEqual(Error('Length must be greater than 0'));
      expect(result).toBeUndefined();
      done();
    });

    generateRandomString(-5, (err, result) => {
      expect(err).toEqual(Error('Length must be greater than 0'));
      expect(result).toBeUndefined();
      done();
    });
  });

  test('should return a string of the specified length', (done) => {
    const length = 10;
    generateRandomString(length, (err, result) => {
      expect(err).toBeNull();
      expect(result).toHaveLength(length);
      done();
    });
  });

  test('should return a string containing only valid characters', (done) => {
    const length = 20;
    generateRandomString(length, (err, result) => {
      expect(err).toBeNull();
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      
      for (let char of result) {
        expect(charset).toContain(char);
      }
      done();
    });
  });
});