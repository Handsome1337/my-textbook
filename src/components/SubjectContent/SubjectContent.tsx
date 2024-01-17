import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import {
  Arrays,
  BinarySearch,
  BinarySearchTree,
  BinaryTree,
  BreadthFirstSearch,
  BSTInsertAndRemove,
  BucketSort,
  DepthFirstSearch,
  DoublyLinkedLists,
  FastAndSlowPointers,
  HashImplementation,
  InsertionSort,
  LinkedLists,
  MergeSort,
  Objects,
  OneBranchRecursion,
  PrefixSums,
  Queues,
  QuickSort,
  SlidingWindow,
  Stack,
  TwoBranchRecursion,
  TwoPointers
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
    case 'breadth-first-search': {
      return <BreadthFirstSearch />;
    }
    default: {
      return null;
    }
  }
}

export default SubjectContent;
