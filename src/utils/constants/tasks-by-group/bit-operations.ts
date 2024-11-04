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
  },
  {
    difficulty: 'easy',
    id: 'single-number',
    link: 'https://leetcode.com/problems/single-number/',
    name: 'Single Number',
    subject: 'bit-operations',
    tags: [TaskTag.ARRAY, TaskTag.BIT_MANIPULATION]
  },
  {
    difficulty: 'easy',
    id: 'counting-bits',
    link: 'https://leetcode.com/problems/counting-bits/',
    name: 'Counting Bits',
    subject: 'bit-operations',
    tags: [TaskTag.DYNAMIC_PROGRAMMING, TaskTag.BIT_MANIPULATION]
  },
  {
    difficulty: 'easy',
    id: 'reverse-bits',
    link: 'https://leetcode.com/problems/reverse-bits/',
    name: 'Reverse Bits',
    subject: 'bit-operations',
    tags: [TaskTag.DIVIDE_AND_CONQUER, TaskTag.BIT_MANIPULATION]
  },
  {
    difficulty: 'easy',
    id: 'missing-number',
    link: 'https://leetcode.com/problems/missing-number/',
    name: 'Missing Number',
    subject: 'bit-operations',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.MATH,
      TaskTag.BINARY_SEARCH,
      TaskTag.BIT_MANIPULATION,
      TaskTag.SORTING
    ]
  },
  {
    difficulty: 'medium',
    id: 'sum-of-two-integers',
    link: 'https://leetcode.com/problems/sum-of-two-integers/',
    name: 'Sum of Two Integers',
    subject: 'bit-operations',
    tags: [TaskTag.MATH, TaskTag.BIT_MANIPULATION]
  },
  {
    difficulty: 'medium',
    id: 'reverse-integer',
    link: 'https://leetcode.com/problems/reverse-integer/',
    name: 'Reverse Integer',
    subject: 'bit-operations',
    tags: [TaskTag.MATH]
  }
];
