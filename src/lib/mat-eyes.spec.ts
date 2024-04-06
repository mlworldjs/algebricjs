import { matEyes } from './mat-eyes'; // Adjust the import according to your file structure

describe('matEyes', () => {
  it('creates a 3x3 identity matrix', () => {
    const result = matEyes(3, 3);
    const expected = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    expect(result).toEqual(expected);
  });

  it('creates a 4x2 matrix (non-square)', () => {
    const result = matEyes(4, 2);
    const expected = [
      [1, 0],
      [0, 1],
      [0, 0],
      [0, 0],
    ];
    expect(result).toEqual(expected);
  });

  it('creates a 1x1 identity matrix', () => {
    const result = matEyes(1, 1);
    const expected = [[1]];
    expect(result).toEqual(expected);
  });

  it('handles zero dimensions gracefully', () => {
    const result = matEyes(0, 0);
    const expected = [];
    expect(result).toEqual(expected);
  });
});
