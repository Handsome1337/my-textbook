import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const MATH_AND_GEOMETRY_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n^2), память O(1)
const rotate = (matrix) => {
  let left = 0;
  let top = left;
  let right = matrix.length - 1;
  let bottom = right;

  while (left < right) {
    for (let i = 0; i < right - left; i++) {
      const topLeft = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = topLeft;
    }

    left++;
    top++;
    right--;
    bottom--;
  }
};

const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix1);
console.log(matrix1); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

const matrix2 = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(matrix2);
console.log(matrix2); // [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]`,
    difficulty: 'medium',
    id: 'rotate-image',
    link: 'https://leetcode.com/problems/rotate-image/',
    name: 'Rotate Image',
    subject: 'math-and-geometry',
    tags: [TaskTag.ARRAY, TaskTag.MATH, TaskTag.MATRIX]
  },
  {
    code: `// Время O(m ∗ n), память O(1)
const spiralOrder = (matrix) => {
  const result = [];

  let left = 0;
  let right = matrix[0].length;
  let top = 0;
  let bottom = matrix.length;

  while (left < right && top < bottom) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }

    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right - 1]);
    }

    right--;

    if (left >= right || top >= bottom) {
      break;
    }

    for (let i = right - 1; i > left - 1; i--) {
      result.push(matrix[bottom - 1][i]);
    }

    bottom--;

    for (let i = bottom - 1; i > top - 1; i--) {
      result.push(matrix[i][left]);
    }

    left++;
  }

  return result;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
])); // [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]`,
    difficulty: 'medium',
    id: 'spiral-matrix',
    link: 'https://leetcode.com/problems/spiral-matrix/',
    name: 'Spiral Matrix',
    subject: 'math-and-geometry',
    tags: [TaskTag.ARRAY, TaskTag.MATRIX, TaskTag.SIMULATION]
  }
];
