export function matShapesAreEqual(
  shape1: ReadonlyArray<number>,
  shape2: ReadonlyArray<number>
) {
  if (shape1.length !== shape2.length) {
    return false;
  }

  for (let i = 0; i < shape1.length; i++) {
    if (shape1[i] !== shape2[i]) {
      return false;
    }
  }

  return true;
}
