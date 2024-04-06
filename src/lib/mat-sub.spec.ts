import { matSub } from './mat-sub'; // Adjust the import path as needed

describe('matSub', () => {
  it('subtracts two 2x2 matrices correctly', () => {
    const m1 = [
      [6, 8],
      [10, 12],
    ];
    const m2 = [
      [1, 2],
      [3, 4],
    ];
    const expected = [
      [5, 6],
      [7, 8],
    ];
    expect(matSub(m1, m2)).toEqual(expected);
  });

  it('throws an error for matrices with different shapes', () => {
    const m1 = [[1, 2]];
    const m2 = [[1, 2, 3]]; // Different shape
    const testFn = () => matSub(m1, m2);
    expect(testFn).toThrow();
  });

  it('throws an error for more than 2D matrices', () => {
    const m1 = [[[1, 2]]]; // 3D matrix
    const m2 = [[[3, 4]]]; // 3D matrix
    const testFn = () => matSub(m1, m2);
    expect(testFn).toThrow();
  });



  it('subtracts two matrices of zeroes correctly', () => {
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
    expect(matSub(m1, m2)).toEqual(expected);
  });
});
