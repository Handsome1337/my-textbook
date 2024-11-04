import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const TWO_DIMENSION_DP_TASKS: TaskConfig[] = [
  {
    difficulty: 'medium',
    id: 'unique-paths',
    link: 'https://leetcode.com/problems/unique-paths/',
    name: 'Unique Paths',
    subject: 'two-dimension-dp',
    tags: [TaskTag.MATH, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.COMBINATORICS]
  },
  {
    difficulty: 'medium',
    id: 'unique-paths-ii',
    link: 'https://leetcode.com/problems/unique-paths-ii/',
    name: 'Unique Paths II',
    subject: 'two-dimension-dp',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.MATRIX]
  },
  {
    difficulty: 'medium',
    id: 'target-sum',
    link: 'https://leetcode.com/problems/target-sum/',
    name: 'Target Sum',
    subject: '0-1-knapsack',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.BACKTRACKING]
  },
  {
    difficulty: 'medium',
    id: 'ones-and-zeroes',
    link: 'https://leetcode.com/problems/ones-and-zeroes/',
    name: 'Ones and Zeroes',
    subject: '0-1-knapsack',
    tags: [TaskTag.ARRAY, TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'last-stone-weight-ii',
    link: 'https://leetcode.com/problems/last-stone-weight-ii/',
    name: 'Last Stone Weight II',
    subject: '0-1-knapsack',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'minimum-cost-for-tickets',
    link: 'https://leetcode.com/problems/minimum-cost-for-tickets/',
    name: 'Minimum Cost For Tickets',
    subject: 'unbounded-knapsack',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'coin-change-ii',
    link: 'https://leetcode.com/problems/coin-change-ii/',
    name: 'Coin Change II',
    subject: 'unbounded-knapsack',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'longest-common-subsequence',
    link: 'https://leetcode.com/problems/longest-common-subsequence/',
    name: 'Longest Common Subsequence',
    subject: 'longest-common-subsequence',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'hard',
    id: 'distinct-subsequences',
    link: 'https://leetcode.com/problems/distinct-subsequences/',
    name: 'Distinct Subsequences',
    subject: 'longest-common-subsequence',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'edit-distance',
    link: 'https://leetcode.com/problems/edit-distance/',
    name: 'Edit Distance',
    subject: 'longest-common-subsequence',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'medium',
    id: 'interleaving-string',
    link: 'https://leetcode.com/problems/interleaving-string/',
    name: 'Interleaving String',
    subject: 'longest-common-subsequence',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    difficulty: 'hard',
    id: 'shortest-common-supersequence',
    link: 'https://leetcode.com/problems/shortest-common-supersequence/',
    name: 'Shortest Common Supersequence',
    subject: 'longest-common-subsequence',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  }
];
