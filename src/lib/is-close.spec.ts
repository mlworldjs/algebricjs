// Import the `isClose` function and the testing utilities from Vitest
import { describe, it, expect } from 'vitest';
import { isClose } from './is-close'; // Adjust the import path as necessary

// Describe the test suite for the isClose function
describe('isClose', () => {
  // Test exact equality
  it('returns true for exactly equal numbers', () => {
    expect(isClose(1.0, 1.0)).toBe(true);
  });

  // Test close numbers within the default tolerance
  it('returns true for numbers that are close', () => {
    expect(isClose(1.0, 1.00001)).toBe(true);
  });

  // Test numbers that are not close
  it('returns false for numbers that are not close', () => {
    expect(isClose(1.0, 1.1)).toBe(false);
  });

  // Test with custom tolerances
  it('respects custom relative tolerance', () => {
    expect(isClose(1.0, 1.01, 0.01)).toBe(true);
  });

  // Test edge cases (zeroes, opposites, etc.)
  it('handles edge cases correctly', () => {
    expect(isClose(0.0, -0.0)).toBe(true);
    expect(isClose(-1e-10, 1e-10)).toBe(true);
  });
});
