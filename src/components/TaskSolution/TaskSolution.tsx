import type { ReactElement } from 'react';
import {
  BaseballGame,
  ConcatenationOfArray,
  ContainsDuplicate,
  ContainsDuplicate2,
  DailyTemperatures,
  DesignHashMap,
  DesignHashSet,
  EvaluateReversePolishNotation,
  FindPivotIndex,
  LRUCache,
  MinimumSizeSubarraySum,
  MinStack,
  NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold,
  ProductOfArrayExceptSelf,
  RangeSumQuery2DImmutable,
  RangeSumQueryImmutable,
  RemoveDuplicatesFromSortedArray,
  RemoveDuplicatesFromSortedArray2,
  RemoveElement,
  SubarraySumEqualsK,
  TwoSum,
  TwoSum2InputArrayIsSorted,
  ValidAnagram,
  ValidPalindrome,
  ValidParentheses
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
    case 'subarray-sum-equals-k': {
      return <SubarraySumEqualsK />;
    }
    case 'valid-anagram': {
      return <ValidAnagram />;
    }
    case 'baseball-game': {
      return <BaseballGame />;
    }
    case 'valid-parentheses': {
      return <ValidParentheses />;
    }
    case 'min-stack': {
      return <MinStack />;
    }
    case 'evaluate-reverse-polish-notation': {
      return <EvaluateReversePolishNotation />;
    }
    case 'daily-temperatures': {
      return <DailyTemperatures />;
    }
    case 'valid-palindrome': {
      return <ValidPalindrome />;
    }
    case 'two-sum-ii-input-array-is-sorted': {
      return <TwoSum2InputArrayIsSorted />;
    }
    case 'remove-duplicates-from-sorted-array-ii': {
      return <RemoveDuplicatesFromSortedArray2 />;
    }
    case 'contains-duplicate-ii': {
      return <ContainsDuplicate2 />;
    }
    case 'number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold': {
      return <NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold />;
    }
    case 'minimum-size-subarray-sum': {
      return <MinimumSizeSubarraySum />;
    }
    default: {
      return null;
    }
  }
}

export default TaskSolution;
