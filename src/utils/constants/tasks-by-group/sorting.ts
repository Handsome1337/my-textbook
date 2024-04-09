import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const SORTING_TASKS: TaskConfig[] = [
  {
    code: `const sortArray = (nums) => {
  const quickSort = (nums, start, end) => {
    if (end - start + 1 <= 1) {
      return nums;
    }

    const pivot = nums[Math.round(Math.random() * (end - start) + start)];

    let left = start;
    let right = end;

    while (left <= right) {
      while (nums[left] < pivot) {
        left++;
      }

      while (nums[right] > pivot) {
        right--;
      }

      if (left <= right) {
        [nums[right], nums[left]] = [nums[left], nums[right]];
        left++;
        right--;
      }
    }

    quickSort(nums, start, right);
    quickSort(nums, left, end);

    return nums;
  };

  return quickSort(nums, 0, nums.length - 1);
};

console.log(sortArray([5, 2, 3, 1])); // [1, 2, 3, 5]
console.log(sortArray([5, 1, 1, 2, 0, 0])); // [0, 0, 1, 1, 2, 5]`,
    difficulty: 'medium',
    id: 'sort-an-array',
    link: 'https://leetcode.com/problems/sort-an-array/',
    name: 'Sort an Array',
    subject: 'quick-sort',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.SORTING,
      TaskTag.HEAP,
      TaskTag.MERGE_SORT,
      TaskTag.BUCKET_SORT,
      TaskTag.RADIX_SORT,
      TaskTag.COUNTING_SORT
    ]
  },
  {
    code: `const sortColors = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let i = 0;

  while (i <= right) {
    if (nums[i] === 0) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    } else if (nums[i] === 2) {
      [nums[i], nums[right]] = [nums[right], nums[i]];
      right--;
      i--;
    }

    i++;
  }
};

const array1 = [2, 0, 2, 1, 1, 0];
sortColors(array1);
console.log(array1); // [0, 0, 1, 1, 2, 2]

const array2 = [2, 0, 1];
sortColors(array2);
console.log(array2); // [0, 1, 2]`,
    difficulty: 'medium',
    id: 'sort-colors',
    link: 'https://leetcode.com/problems/sort-colors/',
    name: 'Sort Colors',
    subject: 'bucket-sort',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS, TaskTag.SORTING]
  }
];
