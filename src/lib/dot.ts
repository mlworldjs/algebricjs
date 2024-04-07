/**
 * Calculates the dot product of two vectors.
 *
 * @param a - The first vector as an array of numbers.
 * @param b - The second vector as an array of numbers. Must be the same length as `a`.
 * @returns The dot product as a number.
 * @throws {Error} If the vectors are of different lengths.
 */
export function dot(a: number[], b: number[]) {
  if (a.length !== b.length) {
    throw new Error(`shape doesn't match ${a.length} , ${b.length}`);
  }

  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}
