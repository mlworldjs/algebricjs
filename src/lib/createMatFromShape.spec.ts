import { describe, it, expect } from 'vitest';
import { createMatFromShape } from './createMatFromShape'; // Adjust the import path as necessary

describe('createNestedArray', () => {
  it('should create an empty array when called with an empty shape', () => {
    const result = createMatFromShape([]);
    expect(result).toEqual([]);
  });

  it('should create a 1D array with the correct length', () => {
    const length = 5;
    const result = createMatFromShape([length]);
    expect(result).toHaveLength(length);
    expect(result).toEqual(Array(length).fill(null));
  });

  it('should create a 2D array with the correct dimensions', () => {
    const result = createMatFromShape([2, 3]);
    expect(result).toHaveLength(2);
    result.forEach((subArray) => {
      expect(subArray).toHaveLength(3);
      expect(subArray).toEqual(Array(3).fill(null));
    });
  });

  it('should create a 3D array with the correct dimensions', () => {
    const shape = [2, 2, 2];
    const result = createMatFromShape(shape);
    expect(result).toHaveLength(2);
    result.forEach((layer) => {
      expect(layer).toHaveLength(2);
      layer.forEach((row) => {
        expect(row).toHaveLength(2);
        expect(row).toEqual(Array(2).fill(null));
      });
    });
  });

  it('should set values to zero with the correct dimensions', () => {
    const shape = [2, 2, 2];
    const result = createMatFromShape(shape,0);
    console.log(result)
    expect(result).toHaveLength(2);
    result.forEach((layer) => {
      expect(layer).toHaveLength(2);
      layer.forEach((row) => {
        expect(row).toHaveLength(2);
        expect(row).toEqual(Array(2).fill(0));
      });
    });
  });
});
