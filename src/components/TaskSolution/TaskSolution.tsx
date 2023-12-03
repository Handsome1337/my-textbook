import type { ReactElement } from 'react';
import {
  ConcatenationOfArray,
  ContainsDuplicate,
  DesignHashMap,
  DesignHashSet,
  FindPivotIndex,
  LRUCache,
  ProductOfArrayExceptSelf,
  RangeSumQuery2DImmutable,
  RangeSumQueryImmutable,
  RemoveDuplicatesFromSortedArray,
  RemoveElement,
  TwoSum
} from './components';

type Props = {
  taskId: string;
};

function TaskSolution({ taskId }: Props): ReactElement | null {
  switch (taskId) {
    case 'remove-element': {
      return <RemoveElement />;
    }
    case 'remove-duplicates-from-sorted-array': {
      return <RemoveDuplicatesFromSortedArray />;
    }
    case 'concatenation-of-array': {
      return <ConcatenationOfArray />;
    }
    case 'contains-duplicate': {
      return <ContainsDuplicate />;
    }
    case 'two-sum': {
      return <TwoSum />;
    }
    case 'lru-cache': {
      return <LRUCache />;
    }
    case 'design-hashset': {
      return <DesignHashSet />;
    }
    case 'design-hashmap': {
      return <DesignHashMap />;
    }
    case 'range-sum-query-immutable': {
      return <RangeSumQueryImmutable />;
    }
    case 'range-sum-query-2d-immutable': {
      return <RangeSumQuery2DImmutable />;
    }
    case 'find-pivot-index': {
      return <FindPivotIndex />;
    }
    case 'product-of-array-except-self': {
      return <ProductOfArrayExceptSelf />;
    }
    default: {
      return null;
    }
  }
}

export default TaskSolution;
