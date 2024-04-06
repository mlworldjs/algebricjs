/**
 * Calculates the shape of a matrix represented as a nested array.
 *
 * The function iterates through the nested arrays, starting from the outermost layer,
 * and counts the length of each level of nesting, effectively determining the dimensions
 * of the matrix. For example, a 2x3 matrix would have a shape of [2, 3]. If the input
 * matrix is empty or not a nested structure, it returns an empty array.
 *
 * @param {Matrix} m The matrix for which to calculate the shape. The matrix is expected
 *                   to be a nested array of any depth.
 * @returns {ReadonlyArray<number>} An array representing the shape of the matrix, with each
 *                                  element indicating the size of the corresponding dimension.
 *                                  The array is readonly to indicate that the shape of a matrix
 *                                  should not be modified.
 */
export function matShape(m: Matrix): ReadonlyArray<number> {
  if (!m.length) {
    return [];
  }
  let innerM = m;
  const shape = [];

  while (Array.isArray(innerM)) {
    shape.push(innerM.length);
    innerM = innerM[0];
  }

  return shape;
}
