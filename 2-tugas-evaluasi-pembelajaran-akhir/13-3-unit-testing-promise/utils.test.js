const { generateRandomStringProm } = require('./utils');

describe('generateRandomStringProm', () => {
  test('should return an error if length is not a number', async () => {
    await expect(generateRandomStringProm('abc')).rejects.toEqual(Error('Length must be a number'));
  });

  test('should return an error if length is less than 1', async () => {
    await expect(generateRandomStringProm(0)).rejects.toEqual(Error('Length must be greater than 0'));
    await expect(generateRandomStringProm(-5)).rejects.toEqual(Error('Length must be greater than 0'));
  });

  test('should resolve with a string of the specified length', async () => {
    const length = 10;
    const result = await generateRandomStringProm(length);
    expect(result).toHaveLength(length);
  });

  test('should return a string containing only valid characters', async () => {
    const length = 20;
    const result = await generateRandomStringProm(length);
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let char of result) {
      expect(charset).toContain(char);
    }
  });
});
