import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const GREEDY_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(1)
const canJump = (nums) => {
  let goal = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i;
    }
  }

  return goal === 0;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false`,
    difficulty: 'medium',
    id: 'jump-game',
    link: 'https://leetcode.com/problems/jump-game/',
    name: 'Jump Game',
    subject: 'greedy',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.GREEDY]
  },
  {
    code: `// Время O(n), память O(1)
const jump = (nums) => {
  let result = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length - 1) {
    let farthest = 0;

    for (let i = left; i < right + 1; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }

    left = right + 1;
    right = farthest;
    result++;
  }

  return result;
};

console.log(jump([2, 3, 1, 1, 4])); // 2
console.log(jump([2, 3, 0, 1, 4])); // 2`,
    difficulty: 'medium',
    id: 'jump-game-ii',
    link: 'https://leetcode.com/problems/jump-game-ii/',
    name: 'Jump Game II',
    subject: 'greedy',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.GREEDY]
  },
  {
    code: `// Время O(n), память O(1)
const partitionLabels = (s) => {
  const CharToLastIndex = {};

  for (let i = 0; i < s.length; i++) {
    CharToLastIndex[s[i]] = i;
  }

  const result = [];
  let size = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    size++;
    end = Math.max(end, CharToLastIndex[s[i]]);

    if (i === end) {
      result.push(size);
      size = 0;
    }
  }

  return result;
};

console.log(partitionLabels('ababcbacadefegdehijhklij')); // [9, 7, 8]
console.log(partitionLabels('eccbbbbdec')); // [10]`,
    difficulty: 'medium',
    id: 'partition-labels',
    link: 'https://leetcode.com/problems/partition-labels/',
    name: 'Partition Labels',
    subject: 'greedy',
    tags: [TaskTag.HASH_TABLE, TaskTag.TWO_POINTERS, TaskTag.STRING, TaskTag.GREEDY]
  }
];
