import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const HEAP_TASKS: TaskConfig[] = [
  {
    difficulty: 'easy',
    id: 'kth-largest-element-in-a-stream',
    link: 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',
    name: 'Kth Largest Element in a Stream',
    subject: 'heap-push-and-pop',
    tags: [
      TaskTag.TREE,
      TaskTag.DESIGN,
      TaskTag.BINARY_SEARCH_TREE,
      TaskTag.HEAP,
      TaskTag.BINARY_TREE,
      TaskTag.DATA_STREAM
    ]
  },
  {
    difficulty: 'easy',
    id: 'last-stone-weight',
    link: 'https://leetcode.com/problems/last-stone-weight/',
    name: 'Last Stone Weight',
    subject: 'heapify',
    tags: [TaskTag.ARRAY, TaskTag.HEAP]
  },
  {
    difficulty: 'medium',
    id: 'k-closest-points-to-origin',
    link: 'https://leetcode.com/problems/k-closest-points-to-origin/',
    name: 'K Closest Points to Origin',
    subject: 'heapify',
    tags: [
      TaskTag.ARRAY,
      TaskTag.MATH,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.GEOMETRY,
      TaskTag.SORTING,
      TaskTag.HEAP,
      TaskTag.QUICKSELECT
    ]
  },
  {
    difficulty: 'medium',
    id: 'kth-largest-element-in-an-array',
    link: 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
    name: 'Kth Largest Element in an Array',
    subject: 'heapify',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.SORTING,
      TaskTag.HEAP,
      TaskTag.QUICKSELECT
    ]
  }
];
