import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const ONE_DIMENSION_DP_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(1)
const rob = (nums) => {
  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    [rob1, rob2] = [rob2, Math.max(rob1 + num, rob2)];
  }

  return rob2;
};

console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([2, 7, 9, 3, 1])); // 12`,
    difficulty: 'medium',
    id: 'house-robber',
    link: 'https://leetcode.com/problems/house-robber/',
    name: 'House Robber',
    subject: 'one-dimension-dp',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    code: `// Время O(n), память O(1)
const rob = (nums) => {
  const helper = (start, end) => {
    let rob1 = 0;
    let rob2 = 0;

    for (let i = start; i < end; i++) {      
      [rob1, rob2] = [rob2, Math.max(rob1 + nums[i], rob2)];
    }

    return rob2;
  };

  return Math.max(nums[0], helper(0, nums.length - 1), helper(1, nums.length));
};

console.log(rob([2, 3, 2])); // 3
console.log(rob([1, 2, 3, 1])); // 4
console.log(rob([1, 2, 3])); // 3`,
    difficulty: 'medium',
    id: 'house-robber-ii',
    link: 'https://leetcode.com/problems/house-robber-ii/',
    name: 'House Robber II',
    subject: 'one-dimension-dp',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    code: `// Время O(n^2), память O(1)
const longestPalindrome = (s) => {
  let result = '';
  let substr = '';

  for (let i = 0; i < s.length; i++) {
    substr = '';
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {      
      substr = substr ? \`\${s[left]}\${substr}\${s[right]}\` : s[i];

      if (result.length < substr.length) {
        result = substr;
      }

      left--;
      right++;
    }

    substr = '';
    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      substr = \`\${s[left]}\${substr}\${s[right]}\`;

      if (result.length < substr.length) {
        result = substr;
      }

      left--;
      right++;
    }
  }

  return result;
};

console.log(longestPalindrome('babad')); // 'bab'
console.log(longestPalindrome('cbbd')); // 'bb'`,
    difficulty: 'medium',
    id: 'longest-palindromic-substring',
    link: 'https://leetcode.com/problems/longest-palindromic-substring/',
    name: 'Longest Palindromic Substring',
    subject: 'palindromes',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  },
  {
    code: `// Время O(n^2), память O(1)
const countSubstrings = (s) => {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++;
      left--;
      right++;
    }

    left = i;
    right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      result++;
      left--;
      right++;
    }
  }

  return result;
};

console.log(countSubstrings('abc')); // 3
console.log(countSubstrings('aaa')); // 6`,
    difficulty: 'medium',
    id: 'palindromic-substrings',
    link: 'https://leetcode.com/problems/palindromic-substrings/',
    name: 'Palindromic Substrings',
    subject: 'palindromes',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING]
  }
];
