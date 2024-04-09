import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const SLIDING_WINDOW_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(k)
const containsNearbyDuplicate = (nums, k) => {
  const numsWindow = new Set();
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      numsWindow.delete(nums[l]);
      l++;
    }

    if (numsWindow.has(nums[r])) {
      return true;
    }

    numsWindow.add(nums[r]);
  }

  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false`,
    difficulty: 'easy',
    id: 'contains-duplicate-ii',
    link: 'https://leetcode.com/problems/contains-duplicate-ii/',
    name: 'Contains Duplicate II',
    subject: 'sliding-window',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.SLIDING_WINDOW]
  },
  {
    code: `// Время O(n), память O(1)
const numOfSubarrays = (arr, k, threshold) => {
  let l = 0;
  let sum = 0;
  let result = 0;

  for (let r = 0; r < arr.length; r++) {
    if (r - l === k) {
      sum -= arr[l];
      l++;
    }

    sum += arr[r];

    if (r + 1 >= k && sum / k >= threshold) {
      result++;
    }
  }

  return result;
};

console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)); // 3
console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5)); // 6`,
    difficulty: 'medium',
    id: 'number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold',
    link: 'https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/',
    name: 'Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold',
    subject: 'sliding-window',
    tags: [TaskTag.ARRAY, TaskTag.SLIDING_WINDOW]
  },
  {
    code: `// Время O(n), память O(1)
const minSubArrayLen = (target, nums) => {
  let currentSum = 0;
  let l = 0;
  let result = Infinity;

  for (let r = 0; r < nums.length; r++) {
    currentSum += nums[r];

    while (currentSum >= target) {
      result = Math.min(r - l + 1, result);
      currentSum -= nums[l];
      l++;
    }
  }

  if (result === Infinity) {
    return 0;
  }

  return result;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
console.log(minSubArrayLen(4, [1, 4, 4])); // 1
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); // 0`,
    difficulty: 'medium',
    id: 'minimum-size-subarray-sum',
    link: 'https://leetcode.com/problems/minimum-size-subarray-sum/',
    name: 'Minimum Size Subarray Sum',
    subject: 'sliding-window',
    tags: [
      TaskTag.ARRAY,
      TaskTag.BINARY_SEARCH,
      TaskTag.SLIDING_WINDOW,
      TaskTag.PREFIX_SUM
    ]
  },
  {
    code: `// Время O(n), память O(n)
const lengthOfLongestSubstring = (s) => {
  const charSet = new Set();
  let l = 0;
  let result = 0;

  for (let r = 0; r < s.length; r++) {
    while (charSet.has(s[r])) {
      charSet.delete(s[l]);
      l++;
    }

    charSet.add(s[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
};

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1
console.log(lengthOfLongestSubstring('pwwkew')); // 3`,
    difficulty: 'medium',
    id: 'longest-substring-without-repeating-characters',
    link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
    name: 'Longest Substring Without Repeating Characters',
    subject: 'sliding-window',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.SLIDING_WINDOW]
  },
  {
    code: `// Время O(n), память O(1)
const maxProfit = (prices) => {
  let l = 0;
  let maxProfit = 0;

  for (let r = 1; r < prices.length; r++) {
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0`,
    difficulty: 'easy',
    id: 'best-time-to-buy-and-sell-stock',
    link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
    name: 'Best Time to Buy and Sell Stock',
    subject: 'sliding-window',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    code: `// Время O(n), память O(1)
const characterReplacement = (s, k) => {
  const count = {};
  let result = 0;
  let left = 0;
  let maxFrequency = 0;

  for (let right = 0; right < s.length; right++) {
    count[s[right]] = 1 + (count[s[right]] ?? 0);
    maxFrequency = Math.max(maxFrequency, count[s[right]]);

    while (right - left + 1 - maxFrequency > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(result, right - left + 1);
  }

  return result;
};

console.log(characterReplacement('ABAB', 2)); // 4
console.log(characterReplacement('AABABBA', 1)); // 4`,
    difficulty: 'medium',
    id: 'longest-repeating-character-replacement',
    link: 'https://leetcode.com/problems/longest-repeating-character-replacement/',
    name: 'Longest Repeating Character Replacement',
    subject: 'sliding-window',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.SLIDING_WINDOW]
  },
  {
    code: `// Время O(n), память O(1)
const checkInclusion = (s1, s2) => {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
    s2Count[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  let matches = 0;

  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) {
      matches++;
    }
  }

  let left = 0;

  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) {
      return true;
    }

    let index = s2[right].charCodeAt() - 'a'.charCodeAt();
    s2Count[index]++;

    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] + 1 === s2Count[index]) {
      matches--;
    }

    index = s2[left].charCodeAt() - 'a'.charCodeAt();
    s2Count[index]--;

    if (s1Count[index] === s2Count[index]) {
      matches++;
    } else if (s1Count[index] - 1 === s2Count[index]) {
      matches--;
    }

    left++;
  }

  return matches === 26;
};

console.log(checkInclusion('ab', 'eidbaooo')); // true
console.log(checkInclusion('ab', 'eidboaoo')); // false`,
    difficulty: 'medium',
    id: 'permutation-in-string',
    link: 'https://leetcode.com/problems/permutation-in-string/',
    name: 'Permutation in String',
    subject: 'sliding-window',
    tags: [
      TaskTag.HASH_TABLE,
      TaskTag.TWO_POINTERS,
      TaskTag.STRING,
      TaskTag.SLIDING_WINDOW
    ]
  }
];
