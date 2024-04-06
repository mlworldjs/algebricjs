/**
 * Creates a nested array of specified shape and fills the last dimension with a given value.
 *
 * The function takes a shape array, where each element represents the size of a dimension
 * in the nested array, and a value that will be used to fill the elements of the final
 * dimension.
 *
 * @param shape - An array of numbers where each number specifies the size of a dimension in the nested array.
 * @param value - The value to fill in the last dimension of the nested array. Defaults to `null` if not provided.
 * @returns A nested array with dimensions specified by the `shape` array, filled with the specified `value`.
 *
 * @example
 * // Creates a 2x3 array filled with zeros
 * const array = createMatFromShape([2, 3], 0);
 * console.log(array); // [[0, 0, 0], [0, 0, 0]]
 *
 * @example
 * // Creates a 3-dimensional array 2x2x2 filled with 'a'
 * const array = createMatFromShape([2, 2, 2], 'a');
 * console.log(array); // [[[a, a], [a, a]], [[a, a], [a, a]]]
 */
export function createMatFromShape(shape: ReadonlyArray<number>, value = null) {
  // Base case: if the shape array is empty, return null.
  if (shape.length === 0) {
    return [];
  }

  // The first element in the shape array determines the size of the current dimension.
  const size = shape[0];

  // If there's more than one element in the shape array, recursively create nested arrays.
  if (shape.length > 1) {
    // Remove the first element from the shape array for the next recursive call.
    const remainingShape = shape.slice(1);
    // Create an array of the specified size and fill it with further nested arrays.
    return Array.from({ length: size }, () =>
      createMatFromShape(remainingShape, value)
    );
  } else {
    // If this is the last dimension, fill the array with nulls (or any other default value).
    return Array.from({ length: size }, () => value);
  }
}
