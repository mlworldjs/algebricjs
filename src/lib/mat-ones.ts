import { createMatFromShape } from './createMatFromShape';
/**
 * Creates a multi-dimensional array based on the provided shape, filled entirely with zeros.
 * The function takes a shape array, where each element represents the size of a dimension in the nested array.
 *
 * @param shape - An array of numbers, each specifying the size of a dimension in the nested array.
 * @returns A nested array with dimensions as specified by the `shape` array, filled with zeros.
 *
 * @example
 * // Creates a 2x3 matrix filled with zeros
 * const matrix = matOnes([2, 3]);
 * console.log(matrix); // [[1, 1, 1], [1, 1, 1]]
 *
 * @example
 * // Creates a 3-dimensional array 2x2x2 filled with zeros
 * const matrix = matOnes([2, 2, 2]);
 * console.log(matrix); // [[[1, 1], [1, 1]], [[1, 1], [1, 1]]]
 */
export function matOnes(shape: ReadonlyArray<number>) {
  return createMatFromShape(shape, 1);
}
