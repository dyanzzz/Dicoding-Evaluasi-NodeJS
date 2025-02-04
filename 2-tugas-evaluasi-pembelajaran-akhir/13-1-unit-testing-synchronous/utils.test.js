const { generateRandomStringSync } = require('./utils');

describe('generateRandomStringSync', () => {
  
  test('should throw an error if length is not a number', () => {
    expect(() => generateRandomStringSync('5')).toThrow('Length must be a number');
    expect(() => generateRandomStringSync(null)).toThrow('Length must be a number');
    expect(() => generateRandomStringSync(undefined)).toThrow('Length must be a number');
  });

  test('should throw an error if length is less than 1', () => {
    expect(() => generateRandomStringSync(0)).toThrow('Length must be at least 1');
    expect(() => generateRandomStringSync(-5)).toThrow('Length must be at least 1');
  });

  test('should return a string of the specified length', () => {
    const length = 10;
    const result = generateRandomStringSync(length);
    expect(result).toHaveLength(length);
  });

  test('should return a string containing only valid characters', () => {
    const length = 20;
    const result = generateRandomStringSync(length);
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let char of result) {
      expect(charset).toContain(char);
    }
  });
});