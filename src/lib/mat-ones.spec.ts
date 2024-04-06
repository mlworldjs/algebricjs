import { describe, it, expect } from 'vitest';
import { matOnes } from './mat-ones';

describe('matOnes', () => {
  it('creates an empty array when called with an empty shape', () => {
    const result = matOnes([]);
    expect(result).toEqual([]);
  });

  it('creates a 1D array filled with ones', () => {
    const result = matOnes([5]);
    expect(result).toEqual([1, 1, 1, 1, 1]);
  });

  it('creates a 2D array filled with ones', () => {
    const result = matOnes([2, 3]);
    expect(result).toEqual([
      [1, 1, 1],
      [1, 1, 1],
    ]);
  });

  it('creates a 3D array filled with ones', () => {
    const result = matOnes([2, 2, 2]);
    expect(result).toEqual([
      [
        [1, 1],
        [1, 1],
      ],
      [
        [1, 1],
        [1, 1],
      ],
    ]);
  });
});
