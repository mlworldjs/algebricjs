import { matZeros } from './mat-zeros';

export function matEyes(n: number, m: number) {
  const zeros = matZeros([n, m]);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i === j) {
        zeros[i][j] = 1;
      }
    }
  }

  return zeros;
}
