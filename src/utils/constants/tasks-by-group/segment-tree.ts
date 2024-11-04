import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const SEGMENT_TREE_TASKS: TaskConfig[] = [
  {
    difficulty: 'medium',
    id: 'range-sum-query-mutable',
    link: 'https://leetcode.com/problems/range-sum-query-mutable/',
    name: 'Range Sum Query - Mutable',
    subject: 'segment-tree',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DESIGN,
      TaskTag.BINARY_INDEXED_TREE,
      TaskTag.SEGMENT_TREE
    ]
  },
  {
    difficulty: 'medium',
    id: 'queue-reconstruction-by-height',
    link: 'https://leetcode.com/problems/queue-reconstruction-by-height/',
    name: 'Queue Reconstruction by Height',
    subject: 'segment-tree',
    tags: [
      TaskTag.ARRAY,
      TaskTag.BINARY_INDEXED_TREE,
      TaskTag.SEGMENT_TREE,
      TaskTag.SORTING
    ]
  },
  {
    difficulty: 'medium',
    id: 'my-calendar-i',
    link: 'https://leetcode.com/problems/my-calendar-i/',
    name: 'My Calendar I',
    subject: 'segment-tree',
    tags: [
      TaskTag.ARRAY,
      TaskTag.BINARY_SEARCH,
      TaskTag.DESIGN,
      TaskTag.SEGMENT_TREE,
      TaskTag.ORDERED_SET
    ]
  },
  {
    difficulty: 'hard',
    id: 'longest-increasing-subsequence-ii',
    link: 'https://leetcode.com/problems/longest-increasing-subsequence-ii/',
    name: 'Longest Increasing Subsequence II',
    subject: 'segment-tree',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.DYNAMIC_PROGRAMMING,
      TaskTag.BINARY_INDEXED_TREE,
      TaskTag.SEGMENT_TREE,
      TaskTag.QUEUE,
      TaskTag.MONOTONIC_QUEUE
    ]
  }
];
