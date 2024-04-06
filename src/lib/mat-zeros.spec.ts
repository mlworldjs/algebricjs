import { describe, it, expect } from 'vitest';
import { matZeros } from './mat-zeros';

describe('matZeros', () => {
  it('creates an empty array when called with an empty shape', () => {
    const result = matZeros([]);
    expect(result).toEqual([]);
  });

  it('creates a 1D array filled with zeros', () => {
    const result = matZeros([5]);
    expect(result).toEqual([0, 0, 0, 0, 0]);
  });

  it('creates a 2D array filled with zeros', () => {
    const result = matZeros([2, 3]);
    expect(result).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('creates a 3D array filled with zeros', () => {
    const result = matZeros([2, 2, 2]);
    expect(result).toEqual([
      [
        [0, 0],
        [0, 0],
      ],
      [
        [0, 0],
        [0, 0],
      ],
    ]);
  });
});
