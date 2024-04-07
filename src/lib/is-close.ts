import { cSub } from './compute-engines/compute-engine-factory';
/**
 * Determines whether two floating-point numbers are close to each other.
 *
 * @param a - The first number to compare.
 * @param b - The second number to compare.
 * @param rtol - The relative tolerance parameter (default is 1e-5). It's the maximum allowed difference between `a` and `b`, relative to the larger absolute value of `a` or `b`.
 * @param atol - The absolute tolerance parameter (default is 1e-8). It's the minimum absolute difference between `a` and `b` for them to be considered close.
 * @returns `true` if the numbers are considered close, otherwise `false`.
 */
export function isClose(a: number, b: number, rtol = 1e-5, atol = 1e-8) {
  return Math.abs(cSub(a, b)) <= atol + rtol * Math.abs(b);
}
