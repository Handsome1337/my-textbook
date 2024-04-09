import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const TWO_POINTER_TASKS: TaskConfig[] = [
  {
    code: `const isAlphaNum = (char) =>
  (char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)) ||
  (char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0)) ||
  (char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0));

const isPalindrome = (s) => {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    while (l < r && !isAlphaNum(s[l])) {
      l++;
    }

    while (r > l && !isAlphaNum(s[r])) {
      r--;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
console.log(isPalindrome(' ')); // true`,
    difficulty: 'easy',
    id: 'valid-palindrome',
    link: 'https://leetcode.com/problems/valid-palindrome/',
    name: 'Valid Palindrome',
    subject: 'two-pointers',
    tags: [TaskTag.TWO_POINTERS, TaskTag.STRING]
  },
  {
    code: `const twoSum = (numbers, target) => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    
    if (sum > target) {
      r--;
    } else if (sum < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1, 2]
console.log(twoSum([2, 3, 4], 6)); // [1, 3]
console.log(twoSum([-1, 0], -1)); // [1, 2]`,
    difficulty: 'medium',
    id: 'two-sum-ii-input-array-is-sorted',
    link: 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
    name: 'Two Sum II - Input Array Is Sorted',
    subject: 'two-pointers',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS, TaskTag.BINARY_SEARCH]
  },
  {
    code: `const removeDuplicates = (nums) => {
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    let count = 1;

    while (r + 1 < nums.length && nums[r] === nums[r + 1]) {
      r++;
      count++;
    }

    for (let i = 0; i < Math.min(2, count); i++) {
      nums[l] = nums[r];
      l++;
    }

    r++;
  }

  return l;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7`,
    difficulty: 'medium',
    id: 'remove-duplicates-from-sorted-array-ii',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/',
    name: 'Remove Duplicates from Sorted Array II',
    subject: 'two-pointers',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS]
  },
  {
    code: `const threeSum = (nums) => {
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {     
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([nums[i], nums[left], nums[right]]);
        left++;

        while (nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [0, 0, 0]`,
    difficulty: 'medium',
    id: '3sum',
    link: 'https://leetcode.com/problems/3sum/',
    name: '3Sum',
    subject: 'two-pointers',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS, TaskTag.SORTING]
  },
  {
    code: `const maxArea = (height) => {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    result = Math.max(result, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1`,
    difficulty: 'medium',
    id: 'container-with-most-water',
    link: 'https://leetcode.com/problems/container-with-most-water/',
    name: 'Container With Most Water',
    subject: 'two-pointers',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS, TaskTag.GREEDY]
  }
];
