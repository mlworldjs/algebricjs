import { matDim } from './mat-dim';
import { matShape } from './mat-shape';
import { matZeros } from './mat-zeros';
/**
 * Transposes the given matrix.
 *
 * @param {number[][]} m - A 2D array representing the matrix to be transposed.
 * @returns {number[][]} A new 2D array representing the transposed matrix.
 *
 * @example
 * const matrix = [[1, 2, 3], [4, 5, 6]];
 * const transposed = matTranspose(matrix);
 * console.log(transposed); // Output: [[1, 4], [2, 5], [3, 6]]
 */
export function matTranspose(m: Matrix) {
  const dim = matDim(m);

  if (dim > 2) {
    throw new Error(`${dim} dimension is not implemented yet`);
  }

  const shape = matShape(m);

  const result = matZeros([shape[1], shape[0]]);

  for (let i = 0; i < shape[0]; i++) {
    for (let j = 0; j < shape[1]; j++) {
      result[j][i] = m[i][j];
    }
  }

  return result;
}
