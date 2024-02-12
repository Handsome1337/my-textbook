import type { ReactElement } from 'react';
import {
  AddTwoNumbers,
  BalancedBinaryTree,
  BaseballGame,
  BestTimeToBuyAndSellStock,
  BinarySearch,
  BinarySearchTreeIterator,
  BinaryTreeInorderTraversal,
  BinaryTreeLevelOrderTraversal,
  BinaryTreePostorderTraversal,
  BinaryTreePreorderTraversal,
  BinaryTreeRightSideView,
  CarFleet,
  Combinations,
  CombinationSum,
  ConcatenationOfArray,
  ConstructBinaryTreeFromPreorderAndInorderTraversal,
  ContainerWithMostWater,
  ContainsDuplicate,
  ContainsDuplicate2,
  CopyListWithRandomPointer,
  CountGoodNodesInBinaryTree,
  DailyTemperatures,
  DeleteNodeInABST,
  DesignBrowserHistory,
  DesignHashMap,
  DesignHashSet,
  DesignLinkedList,
  DiameterOfBinaryTree,
  EvaluateReversePolishNotation,
  FibonacciNumber,
  FindMinimumInRotatedSortedArray,
  FindPivotIndex,
  FindTheDuplicateNumber,
  FirstBadVersion,
  GenerateParentheses,
  GroupAnagrams,
  GuessNumberHigherOrLower,
  ImplementStackUsingQueues,
  InsertIntoABinarySearchTree,
  InvertBinaryTree,
  KokoEatingBananas,
  KthSmallestElementInABST,
  LinkedListCycle,
  LinkedListCycle2,
  LongestConsecutiveSequence,
  LongestRepeatingCharacterReplacement,
  LongestSubstringWithoutRepeatingCharacters,
  LowestCommonAncestorOfABinarySearchTree,
  LRUCache,
  MaximumDepthOfBinaryTree,
  MaximumTwinSumOfALinkedList,
  MergeTwoSortedLists,
  MiddleOfTheLinkedList,
  MinimumSizeSubarraySum,
  MinStack,
  NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold,
  PathSum,
  PermutationInString,
  ProductOfArrayExceptSelf,
  RangeSumQuery2DImmutable,
  RangeSumQueryImmutable,
  RemoveDuplicatesFromSortedArray,
  RemoveDuplicatesFromSortedArray2,
  RemoveElement,
  RemoveNthNodeFromEndOfList,
  ReorderList,
  ReverseLinkedList,
  SameTree,
  SearchA2DMatrix,
  SearchInABinarySearchTree,
  SearchInRotatedSortedArray,
  SortAnArray,
  SortColors,
  SubarraySumEqualsK,
  Subsets,
  Subsets2,
  SubtreeOfAnotherTree,
  ThreeSum,
  TimeBasedKeyValueStore,
  TopKFrequentElements,
  TwoSum,
  TwoSum2InputArrayIsSorted,
  ValidAnagram,
  ValidateBinarySearchTree,
  ValidPalindrome,
  ValidParentheses,
  ValidSudoku
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
    case 'group-anagrams': {
      return <GroupAnagrams />;
    }
    case 'top-k-frequent-elements': {
      return <TopKFrequentElements />;
    }
    case 'valid-sudoku': {
      return <ValidSudoku />;
    }
    case 'longest-consecutive-sequence': {
      return <LongestConsecutiveSequence />;
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
    case 'car-fleet': {
      return <CarFleet />;
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
    case '3sum': {
      return <ThreeSum />;
    }
    case 'container-with-most-water': {
      return <ContainerWithMostWater />;
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
    case 'longest-repeating-character-replacement': {
      return <LongestRepeatingCharacterReplacement />;
    }
    case 'permutation-in-string': {
      return <PermutationInString />;
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
    case 'koko-eating-bananas': {
      return <KokoEatingBananas />;
    }
    case 'find-minimum-in-rotated-sorted-array': {
      return <FindMinimumInRotatedSortedArray />;
    }
    case 'search-in-rotated-sorted-array': {
      return <SearchInRotatedSortedArray />;
    }
    case 'time-based-key-value-store': {
      return <TimeBasedKeyValueStore />;
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
    case 'maximum-twin-sum-of-a-linked-list': {
      return <MaximumTwinSumOfALinkedList />;
    }
    case 'linked-list-cycle': {
      return <LinkedListCycle />;
    }
    case 'linked-list-cycle-ii': {
      return <LinkedListCycle2 />;
    }
    case 'find-the-duplicate-number': {
      return <FindTheDuplicateNumber />;
    }
    case 'reorder-list': {
      return <ReorderList />;
    }
    case 'remove-nth-node-from-end-of-list': {
      return <RemoveNthNodeFromEndOfList />;
    }
    case 'copy-list-with-random-pointer': {
      return <CopyListWithRandomPointer />;
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
    case 'construct-binary-tree-from-preorder-and-inorder-traversal': {
      return <ConstructBinaryTreeFromPreorderAndInorderTraversal />;
    }
    case 'binary-search-tree-iterator': {
      return <BinarySearchTreeIterator />;
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
    case 'invert-binary-tree': {
      return <InvertBinaryTree />;
    }
    case 'maximum-depth-of-binary-tree': {
      return <MaximumDepthOfBinaryTree />;
    }
    case 'diameter-of-binary-tree': {
      return <DiameterOfBinaryTree />;
    }
    case 'balanced-binary-tree': {
      return <BalancedBinaryTree />;
    }
    case 'same-tree': {
      return <SameTree />;
    }
    case 'subtree-of-another-tree': {
      return <SubtreeOfAnotherTree />;
    }
    case 'lowest-common-ancestor-of-a-binary-search-tree': {
      return <LowestCommonAncestorOfABinarySearchTree />;
    }
    case 'count-good-nodes-in-binary-tree': {
      return <CountGoodNodesInBinaryTree />;
    }
    case 'validate-binary-search-tree': {
      return <ValidateBinarySearchTree />;
    }
    case 'path-sum': {
      return <PathSum />;
    }
    case 'generate-parentheses': {
      return <GenerateParentheses />;
    }
    case 'subsets': {
      return <Subsets />;
    }
    case 'subsets-ii': {
      return <Subsets2 />;
    }
    case 'combinations': {
      return <Combinations />;
    }
    case 'combination-sum': {
      return <CombinationSum />;
    }
    default: {
      return null;
    }
  }
}

export default TaskSolution;
