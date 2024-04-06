import { matShape } from './mat-shape';

/**
 * Calculates and returns the dimension (depth) of a given array.
 * The function traverses the array recursively to determine its depth.
 * 
 * @param {Matrix} matrix The array (matrix) whose dimension is to be determined.
 * @returns {number} The dimension (depth) of the array. Returns 0 for empty array, 1 for a 1D array,
 * 2 for a 2D array and so on.
 */
export function matDim(m: Matrix) {
  const shape = matShape(m);

  return shape.length;
}
