import { matAdd } from './mat-add'; // Adjust the import according to your file structure

describe('matAdd', () => {
  it('adds two 2x2 matrices correctly', () => {
    const m1 = [
      [1, 2],
      [3, 4],
    ];
    const m2 = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [6, 8],
      [10, 12],
    ];
    expect(matAdd(m1, m2)).toEqual(expected);
  });

  it('throws an error for matrices with different shapes', () => {
    const m1 = [[1, 2]];
    const m2 = [[1, 2, 3]];
    const testFn = () => matAdd(m1, m2);
    expect(testFn).toThrowError();
  });

  it('throws an error for more than 2D matrices', () => {
    const m1 = [[[1, 2]]];
    const m2 = [[[3, 4]]];
    const testFn = () => matAdd(m1, m2);
    expect(testFn).toThrowError();
  });


  it('adds two matrices of zeroes correctly', () => {
    const m1 = [
      [0, 0],
      [0, 0],
    ];
    const m2 = [
      [0, 0],
      [0, 0],
    ];
    const expected = [
      [0, 0],
      [0, 0],
    ];
    expect(matAdd(m1, m2)).toEqual(expected);
  });
});
