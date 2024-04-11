import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const RECURSION_TASKS: TaskConfig[] = [
  {
    code: `// Время O(2^n), память O(n)
const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3`,
    difficulty: 'easy',
    id: 'fibonacci-number',
    link: 'https://leetcode.com/problems/fibonacci-number/',
    name: 'Fibonacci Number',
    subject: 'two-branch-recursion',
    tags: [
      TaskTag.MATH,
      TaskTag.DYNAMIC_PROGRAMMING,
      TaskTag.RECURSION,
      TaskTag.MEMOIZATION
    ]
  }
];
