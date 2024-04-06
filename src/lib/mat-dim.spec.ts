// matDim.test.ts
import { matDim } from './mat-dim';

describe('matDim', () => {
  it('returns 1 for a 1D array', () => {
    expect(matDim([1, 2, 3])).toBe(1);
  });

  it('returns 2 for a 2D array', () => {
    expect(
      matDim([
        [1, 2],
        [3, 4],
      ])
    ).toBe(2);
  });

  it('returns 3 for a 3D array', () => {
    expect(matDim([[[1]], [[2]]])).toBe(3);
  });

  it('returns 0 for an empty array', () => {
    expect(matDim([])).toBe(0);
  });
});
