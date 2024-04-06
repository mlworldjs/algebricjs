import { cAdd, cSub } from './compute-engines/compute-engine-factory';
import { matDim } from './mat-dim';
import { matShape } from './mat-shape';
import { matShapesAreEqual } from './mat-shapes-are-equal';
import { matZeros } from './mat-zeros';
/**
 * Subtracts the second matrix from the first matrix element-wise and returns the result.
 * Only supports 2D matrices and throws an error if the matrices have different shapes
 * or if the inputs are not 2D matrices. Both input matrices must be arrays of arrays of numbers.
 *
 * @param m1 - The matrix from which to subtract. It must be a 2D array where each sub-array represents a row of the matrix.
 * @param m2 - The matrix to subtract from `m1`. It must have the same shape as `m1`.
 * @returns A new matrix representing the element-wise subtraction of `m2` from `m1`.
 * @throws {Error} If either of the matrices is not a 2D matrix.
 * @throws {Error} If the shapes of the two matrices do not match.
 * @throws {Error} If either of the inputs is not an array or is an empty array.
 *
 * @example
 * const m1 = [[6, 8], [10, 12]];
 * const m2 = [[1, 2], [3, 4]];
 * const result = matSub(m1, m2);
 * // result is [[5, 6], [7, 8]]
 */
export function matSub(m1: Matrix, m2: Matrix) {
  const shape1 = matShape(m1);
  const shape2 = matShape(m2);

  if (!matShapesAreEqual(shape1, shape2)) {
    throw new Error(
      `Shape must match but got , ${shape1}, ${shape2} , broadcasting is not implemented yet`
    );
  }

  const dim1 = matDim(m1);

  if (dim1 > 2) {
    throw new Error(`dimension ${dim1} is not implemented yet only 1,2`);
  }

  const rows = shape1[0];
  const cols = shape1[1];

  const results = matZeros(shape1);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      results[i][j] = cSub(m1[i][j], m2[i][j]);
    }
  }

  return results;
}
