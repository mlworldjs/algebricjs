import { ComputeEngine } from './base-compute-engine';

export class NativeComputeEngine implements ComputeEngine {
  add(a: number, b: number): number {
    return a + b;
  }
  sub(a: number, b: number): number {
    return a - b;
  }
  mul(a: number, b: number): number {
    return a * b;
  }
  div(a: number, b: number): number {
    return a / b;
  }
}
