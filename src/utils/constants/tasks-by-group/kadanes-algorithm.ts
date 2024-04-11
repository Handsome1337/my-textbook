import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const KADANES_ALGORITHM_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(1)
const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  let currentSum = 0;

  for (const num of nums) {
    currentSum = Math.max(currentSum, 0) + num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23`,
    difficulty: 'medium',
    id: 'maximum-subarray',
    link: 'https://leetcode.com/problems/maximum-subarray/',
    name: 'Maximum Subarray',
    subject: 'kadanes-algorithm',
    tags: [TaskTag.ARRAY, TaskTag.DIVIDE_AND_CONQUER, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    code: `// Время O(n), память O(1)
const maxSubarraySumCircular = (nums) => {
  let maxSum = -Infinity;
  let minSum = Infinity;
  let currentMaxSum = 0;
  let currentMinSum = 0;
  let total = 0;

  for (const num of nums) {
    currentMaxSum = Math.max(currentMaxSum + num, num);
    currentMinSum = Math.min(currentMinSum + num, num);
    total += num;
    maxSum = Math.max(maxSum, currentMaxSum);
    minSum = Math.min(minSum, currentMinSum);
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // 3
console.log(maxSubarraySumCircular([5, -3, 5])); // 10
console.log(maxSubarraySumCircular([-3, -2, -3])); // -2`,
    difficulty: 'medium',
    id: 'maximum-sum-circular-subarray',
    link: 'https://leetcode.com/problems/maximum-sum-circular-subarray/',
    name: 'Maximum Sum Circular Subarray',
    subject: 'kadanes-algorithm',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.DYNAMIC_PROGRAMMING,
      TaskTag.QUEUE,
      TaskTag.MONOTONIC_QUEUE
    ]
  }
];
