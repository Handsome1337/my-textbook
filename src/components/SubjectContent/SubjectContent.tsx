import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import {
  Arrays,
  BinarySearch,
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
  SlidingWindow,
  Stack,
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
    case 'fast-and-slow-pointers': {
      return <FastAndSlowPointers />;
    }
    case 'insertion-sort': {
      return <InsertionSort />;
    }
    case 'merge-sort': {
      return <MergeSort />;
    }
    default: {
      return null;
    }
  }
}

export default SubjectContent;
