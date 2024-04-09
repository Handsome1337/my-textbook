import type { SubjectName } from './utils/constants';

export enum TaskTag {
  ARRAY = 'Array',
  BACKTRACKING = 'Backtracking',
  BINARY_SEARCH = 'Binary Search',
  BINARY_SEARCH_TREE = 'Binary Search Tree',
  BINARY_TREE = 'Binary Tree',
  BIT_MANIPULATION = 'Bit Manipulation',
  BREADTH_FIRST_SEARCH = 'Breadth-First Search',
  BUCKET_SORT = 'Bucket Sort',
  COUNTING = 'Counting',
  COUNTING_SORT = 'Counting Sort',
  DATA_STREAM = 'Data Stream',
  DEPTH_FIRST_SEARCH = 'Depth-First Search',
  DESIGN = 'Design',
  DIVIDE_AND_CONQUER = 'Divide and Conquer',
  DOUBLY_LINKED_LIST = 'Doubly-Linked List',
  DYNAMIC_PROGRAMMING = 'Dynamic Programming',
  GRAPH = 'Graph',
  GREEDY = 'Greedy',
  HASH_FUNCTION = 'Hash Function',
  HASH_TABLE = 'Hash Table',
  HEAP = 'Heap (Priority Queue)',
  INTERACTIVE = 'Interactive',
  ITERATOR = 'Iterator',
  LINKED_LIST = 'Linked List',
  MATH = 'Math',
  MATRIX = 'Matrix',
  MEMOIZATION = 'Memoization',
  MERGE_SORT = 'Merge Sort',
  MONOTONIC_QUEUE = 'Monotonic Queue',
  MONOTONIC_STACK = 'Monotonic Stack',
  PREFIX_SUM = 'Prefix Sum',
  QUEUE = 'Queue',
  QUICKSELECT = 'Quickselect',
  RADIX_SORT = 'Radix Sort',
  RECURSION = 'Recursion',
  SIMULATION = 'Simulation',
  SLIDING_WINDOW = 'Sliding Window',
  SORTING = 'Sorting',
  STACK = 'Stack',
  STRING = 'String',
  STRING_MATCHING = 'String Matching',
  TOPOLOGICAL_SORT = 'Topological sort',
  TREE = 'Tree',
  TRIE = 'Trie',
  TWO_POINTERS = 'Two Pointers',
  UNION_FIND = 'Union Find'
}

export type TaskConfig = {
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  id: string;
  link: string;
  name: string;
  subject: keyof typeof SubjectName;
  tags: TaskTag[];
};
