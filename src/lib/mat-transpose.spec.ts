import { matTranspose } from './mat-transpose'; // Adjust the import based on your actual file structure.

describe('matTranspose', () => {
  it('should transpose a 2x3 matrix to a 3x2 matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const expected = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];
    expect(matTranspose(matrix)).toEqual(expected);
  });

  it('should return an empty matrix when given an empty matrix', () => {
    const matrix = [];
    const expected = [];
    expect(matTranspose(matrix)).toEqual(expected);
  });

  // Add more test cases as needed, such as for square matrices, non-rectangular matrices, etc.
});
