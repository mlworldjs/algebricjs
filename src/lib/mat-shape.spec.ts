import { matShape } from './mat-shape'; // Adjust the import path according to your project structure

describe('matShape', () => {
  it('returns [length, 1] for a vector', () => {
    expect(matShape([1, 2, 3])).toEqual([3]);
  });

  it('returns [2,2] for 2x2 matrix', () => {
    expect(
      matShape([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([2, 2]);
  });

  it('returns [rows, columns] for a matrix', () => {
    expect(
      matShape([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([3, 2]);
  });

  it('returns [1, columns] for a row vector', () => {
    expect(matShape([[1, 2, 3, 4]])).toEqual([1, 4]);
  });

  it('handles an empty array', () => {
    expect(matShape([])).toEqual([]); // Or adjust according to the expected behavior
  });
});
