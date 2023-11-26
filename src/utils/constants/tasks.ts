import type { SubjectName } from 'utils/constants/subject';

type TaskConfig = {
  code: string;
  id: string;
  link: string;
  name: string;
  subject: keyof typeof SubjectName;
};

export const TASKS: TaskConfig[] = [
  {
    code: `const removeElement = (nums, val) => {
  let index = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[index++] = num;
    }
  }

  return index;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5`,
    id: 'remove-element',
    link: 'https://leetcode.com/problems/remove-element/',
    name: 'Remove Element',
    subject: 'arrays'
  },
  {
    code: `const removeDuplicates = (nums) => {
  let currentUniqueIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[currentUniqueIndex]) {
      nums[++currentUniqueIndex] = nums[i];
    }
  }

  return currentUniqueIndex + 1;
};

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5`,
    id: 'remove-duplicates-from-sorted-array',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    name: 'Remove Duplicates from Sorted Array',
    subject: 'arrays'
  },
  {
    code: `const getConcatenation = (nums) => {
    const ans = [];
    
    for (let i = 0; i < nums.length; i++) {
      ans[i] = nums[i];
      ans[i + nums.length] = nums[i];
    }
    
    return ans;
};
  
console.log(getConcatenation([1, 2, 1])); // [1, 2, 1, 1, 2, 1]
console.log(getConcatenation([1, 3, 2, 1])); // [1, 3, 2, 1, 1, 3, 2, 1]`,
    id: 'concatenation-of-array',
    link: 'https://leetcode.com/problems/concatenation-of-array/',
    name: 'Concatenation of Array',
    subject: 'arrays'
  }
];
