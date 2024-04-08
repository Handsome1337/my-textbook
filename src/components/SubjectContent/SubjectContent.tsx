import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import {
  AdjacencyList,
  Arrays,
  Backtracking,
  BinarySearch,
  BinarySearchTree,
  BinaryTree,
  BitOperations,
  BreadthFirstSearch,
  BSTInsertAndRemove,
  BucketSort,
  Combinations,
  DepthFirstSearch,
  DoublyLinkedLists,
  FastAndSlowPointers,
  HashImplementation,
  Heapify,
  HeapProperties,
  HeapPushAndPop,
  InsertionSort,
  IntroToGraphs,
  IterativeDepthFirstSearch,
  KadanesAlgorithm,
  Knapsack01,
  LinkedLists,
  LongestCommonSubsequence,
  MatrixBreadthFirstSearch,
  MatrixDepthFirstSearch,
  MergeSort,
  Objects,
  OneBranchRecursion,
  OneDimensionDP,
  Palindromes,
  Permutations,
  PrefixSums,
  Queues,
  QuickSort,
  SegmentTree,
  SlidingWindow,
  Stack,
  Subsets,
  TopologicalSort,
  Trie,
  TwoBranchRecursion,
  TwoDimensionDP,
  TwoPointers,
  UnboundedKnapsack,
  UnionFind
} from './components';

type Props = {
  subjectId: keyof typeof SubjectName;
};

function SubjectContent({ subjectId }: Props): ReactElement | null {
  switch (subjectId) {
    case 'arrays': {
      return <Arrays />;
    }
    case 'objects': {
      return <Objects />;
    }
    case 'hash-implementation': {
      return <HashImplementation />;
    }
    case 'prefix-sums': {
      return <PrefixSums />;
    }
    case 'stack': {
      return <Stack />;
    }
    case 'two-pointers': {
      return <TwoPointers />;
    }
    case 'sliding-window': {
      return <SlidingWindow />;
    }
    case 'binary-search': {
      return <BinarySearch />;
    }
    case 'linked-lists': {
      return <LinkedLists />;
    }
    case 'doubly-linked-lists': {
      return <DoublyLinkedLists />;
    }
    case 'queues': {
      return <Queues />;
    }
    case 'one-branch-recursion': {
      return <OneBranchRecursion />;
    }
    case 'two-branch-recursion': {
      return <TwoBranchRecursion />;
    }
    case 'fast-and-slow-pointers': {
      return <FastAndSlowPointers />;
    }
    case 'insertion-sort': {
      return <InsertionSort />;
    }
    case 'merge-sort': {
      return <MergeSort />;
    }
    case 'quick-sort': {
      return <QuickSort />;
    }
    case 'bucket-sort': {
      return <BucketSort />;
    }
    case 'binary-tree': {
      return <BinaryTree />;
    }
    case 'binary-search-tree': {
      return <BinarySearchTree />;
    }
    case 'bst-insert-and-remove': {
      return <BSTInsertAndRemove />;
    }
    case 'depth-first-search': {
      return <DepthFirstSearch />;
    }
    case 'iterative-depth-first-search': {
      return <IterativeDepthFirstSearch />;
    }
    case 'breadth-first-search': {
      return <BreadthFirstSearch />;
    }
    case 'backtracking': {
      return <Backtracking />;
    }
    case 'subsets': {
      return <Subsets />;
    }
    case 'combinations': {
      return <Combinations />;
    }
    case 'permutations': {
      return <Permutations />;
    }
    case 'intro-to-graphs': {
      return <IntroToGraphs />;
    }
    case 'matrix-depth-first-search': {
      return <MatrixDepthFirstSearch />;
    }
    case 'matrix-breadth-first-search': {
      return <MatrixBreadthFirstSearch />;
    }
    case 'adjacency-list': {
      return <AdjacencyList />;
    }
    case 'heap-properties': {
      return <HeapProperties />;
    }
    case 'heap-push-and-pop': {
      return <HeapPushAndPop />;
    }
    case 'heapify': {
      return <Heapify />;
    }
    case 'one-dimension-dp': {
      return <OneDimensionDP />;
    }
    case 'palindromes': {
      return <Palindromes />;
    }
    case 'topological-sort': {
      return <TopologicalSort />;
    }
    case 'trie': {
      return <Trie />;
    }
    case 'union-find': {
      return <UnionFind />;
    }
    case 'segment-tree': {
      return <SegmentTree />;
    }
    case 'kadanes-algorithm': {
      return <KadanesAlgorithm />;
    }
    case 'two-dimension-dp': {
      return <TwoDimensionDP />;
    }
    case '0-1-knapsack': {
      return <Knapsack01 />;
    }
    case 'unbounded-knapsack': {
      return <UnboundedKnapsack />;
    }
    case 'longest-common-subsequence': {
      return <LongestCommonSubsequence />;
    }
    case 'bit-operations': {
      return <BitOperations />;
    }
    default: {
      return null;
    }
  }
}

export default SubjectContent;
