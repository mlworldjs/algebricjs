[@algebricjs/source](README.md) / Exports

# @algebricjs/source

## Table of contents

### Functions

- [matShape](modules.md#matshape)

## Functions

### matShape

▸ **matShape**(`m`): `ReadonlyArray`\<`number`\>

Calculates the shape of a matrix represented as a nested array.

The function iterates through the nested arrays, starting from the outermost layer,
and counts the length of each level of nesting, effectively determining the dimensions
of the matrix. For example, a 2x3 matrix would have a shape of [2, 3]. If the input
matrix is empty or not a nested structure, it returns an empty array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `m` | `Matrix` | The matrix for which to calculate the shape. The matrix is expected to be a nested array of any depth. |

#### Returns

`ReadonlyArray`\<`number`\>

An array representing the shape of the matrix, with each
                                 element indicating the size of the corresponding dimension.
                                 The array is readonly to indicate that the shape of a matrix
                                 should not be modified.

#### Defined in

[lib/mat-shape.ts:16](https://github.com/mlworldjs/algebricjs/blob/a8b2567/src/lib/mat-shape.ts#L16)
