import type { ReactElement } from 'react';
import {
  AddTwoNumbers,
  BaseballGame,
  BestTimeToBuyAndSellStock,
  BinarySearch,
  BinaryTreeInorderTraversal,
  BinaryTreeLevelOrderTraversal,
  BinaryTreePostorderTraversal,
  BinaryTreePreorderTraversal,
  BinaryTreeRightSideView,
  ConcatenationOfArray,
  ContainsDuplicate,
  ContainsDuplicate2,
  DailyTemperatures,
  DeleteNodeInABST,
  DesignBrowserHistory,
  DesignHashMap,
  DesignHashSet,
  DesignLinkedList,
  EvaluateReversePolishNotation,
  FibonacciNumber,
  FindPivotIndex,
  FirstBadVersion,
  GuessNumberHigherOrLower,
  ImplementStackUsingQueues,
  InsertIntoABinarySearchTree,
  KthSmallestElementInABST,
  LinkedListCycle,
  LinkedListCycle2,
  LongestSubstringWithoutRepeatingCharacters,
  LRUCache,
  MergeTwoSortedLists,
  MiddleOfTheLinkedList,
  MinimumSizeSubarraySum,
  MinStack,
  NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold,
  ProductOfArrayExceptSelf,
  RangeSumQuery2DImmutable,
  RangeSumQueryImmutable,
  RemoveDuplicatesFromSortedArray,
  RemoveDuplicatesFromSortedArray2,
  RemoveElement,
  ReverseLinkedList,
  SearchA2DMatrix,
  SearchInABinarySearchTree,
  SortAnArray,
  SortColors,
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
    case 'longest-substring-without-repeating-characters': {
      return <LongestSubstringWithoutRepeatingCharacters />;
    }
    case 'best-time-to-buy-and-sell-stock': {
      return <BestTimeToBuyAndSellStock />;
    }
    case 'binary-search': {
      return <BinarySearch />;
    }
    case 'search-a-2d-matrix': {
      return <SearchA2DMatrix />;
    }
    case 'guess-number-higher-or-lower': {
      return <GuessNumberHigherOrLower />;
    }
    case 'first-bad-version': {
      return <FirstBadVersion />;
    }
    case 'reverse-linked-list': {
      return <ReverseLinkedList />;
    }
    case 'merge-two-sorted-lists': {
      return <MergeTwoSortedLists />;
    }
    case 'design-linked-list': {
      return <DesignLinkedList />;
    }
    case 'design-browser-history': {
      return <DesignBrowserHistory />;
    }
    case 'implement-stack-using-queues': {
      return <ImplementStackUsingQueues />;
    }
    case 'middle-of-the-linked-list': {
      return <MiddleOfTheLinkedList />;
    }
    case 'linked-list-cycle': {
      return <LinkedListCycle />;
    }
    case 'linked-list-cycle-ii': {
      return <LinkedListCycle2 />;
    }
    case 'add-two-numbers': {
      return <AddTwoNumbers />;
    }
    case 'fibonacci-number': {
      return <FibonacciNumber />;
    }
    case 'sort-an-array': {
      return <SortAnArray />;
    }
    case 'sort-colors': {
      return <SortColors />;
    }
    case 'search-in-a-binary-search-tree': {
      return <SearchInABinarySearchTree />;
    }
    case 'insert-into-a-binary-search-tree': {
      return <InsertIntoABinarySearchTree />;
    }
    case 'delete-node-in-a-bst': {
      return <DeleteNodeInABST />;
    }
    case 'binary-tree-inorder-traversal': {
      return <BinaryTreeInorderTraversal />;
    }
    case 'kth-smallest-element-in-a-bst': {
      return <KthSmallestElementInABST />;
    }
    case 'binary-tree-preorder-traversal': {
      return <BinaryTreePreorderTraversal />;
    }
    case 'binary-tree-postorder-traversal': {
      return <BinaryTreePostorderTraversal />;
    }
    case 'binary-tree-level-order-traversal': {
      return <BinaryTreeLevelOrderTraversal />;
    }
    case 'binary-tree-right-side-view': {
      return <BinaryTreeRightSideView />;
    }
    default: {
      return null;
    }
  }
}

export default TaskSolution;
