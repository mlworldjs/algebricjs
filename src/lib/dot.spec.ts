// Import the necessary utilities from Vitest
import { describe, it, expect } from 'vitest';
import { dot } from './dot'; // Adjust the import path as necessary

// Describe the test suite for the dotProduct function
describe('dotProduct', () => {
  // Test the dot product of two simple vectors
  it('computes the dot product of two vectors', () => {
    expect(dot([1, 2, 3], [4, 5, 6])).toBe(32);
  });

  // Test the dot product involving zeros
  it('computes the dot product correctly when one vector contains zeros', () => {
    expect(dot([0, 0, 0], [4, 5, 6])).toBe(0);
  });

  // Test the dot product of vectors with negative numbers
  it('handles negative numbers correctly', () => {
    expect(dot([-1, -2, -3], [-4, -5, -6])).toBe(32);
  });

  // Test the dot product of vectors with mixed signs
  it('handles vectors with mixed signs correctly', () => {
    expect(dot([-1, 2, -3], [4, -5, 6])).toBe(-32);
  });

  // Test the function throws when vectors are of different lengths
  it('throws an error if vectors are of different lengths', () => {
    expect(() => dot([1, 2], [3, 4, 5])).toThrow(
   
    );
  });
});
