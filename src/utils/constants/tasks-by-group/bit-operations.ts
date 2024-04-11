import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const BIT_OPERATIONS_TASKS: TaskConfig[] = [
  {
    code: `// Время O(1), память O(1)
const hammingWeight = (n) => {
  let result = 0;

  while (n) {
    if (n & 1) {
      result++;
    }

    n >>= 1;
  }

  return result;
};

console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30`,
    difficulty: 'easy',
    id: 'number-of-1-bits',
    link: 'https://leetcode.com/problems/number-of-1-bits/',
    name: 'Number of 1 Bits',
    subject: 'bit-operations',
    tags: [TaskTag.DIVIDE_AND_CONQUER, TaskTag.BIT_MANIPULATION]
  }
];
