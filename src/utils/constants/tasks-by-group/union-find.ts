import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const UNION_FIND_TASKS: TaskConfig[] = [
  {
    difficulty: 'medium',
    id: 'redundant-connection',
    link: 'https://leetcode.com/problems/redundant-connection/',
    name: 'Redundant Connection',
    subject: 'union-find',
    tags: [
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.UNION_FIND,
      TaskTag.GRAPH
    ]
  },
  {
    difficulty: 'medium',
    id: 'accounts-merge',
    link: 'https://leetcode.com/problems/accounts-merge/',
    name: 'Accounts Merge',
    subject: 'union-find',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.STRING,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.UNION_FIND,
      TaskTag.SORTING
    ]
  }
];
