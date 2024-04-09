import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const BINARY_SEARCH_TASKS: TaskConfig[] = [
  {
    code: `// Время O(log n), память O(1)
const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] > target) {
      r = mid - 1;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1`,
    difficulty: 'easy',
    id: 'binary-search',
    link: 'https://leetcode.com/problems/binary-search/',
    name: 'Binary Search',
    subject: 'binary-search',
    tags: [TaskTag.ARRAY, TaskTag.BINARY_SEARCH]
  },
  {
    code: `// Время O(log m + log n), память O(1)
const searchMatrix = (matrix, target) => {
  const rowsCount = matrix.length;
  const columnsCount = matrix[0].length;

  let top = 0;
  let bottom = rowsCount - 1;
  let row;

  while (top <= bottom) {
    row = Math.floor((top + bottom) / 2);

    if (target > matrix[row].at(-1)) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      break;
    }
  }

  if (top > bottom) {
    return false;
  }
  
  let l = 0;
  let r = columnsCount - 1;
  
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
  
    if (target > matrix[row][mid]) {
      l = mid + 1;
    } else if (target < matrix[row][mid]) {
      r = mid - 1;
    } else {
      return true;
    }
  }

  return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)); // true
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 13)); // false`,
    difficulty: 'medium',
    id: 'search-a-2d-matrix',
    link: 'https://leetcode.com/problems/search-a-2d-matrix/',
    name: 'Search a 2D Matrix',
    subject: 'binary-search',
    tags: [TaskTag.ARRAY, TaskTag.BINARY_SEARCH, TaskTag.MATRIX]
  },
  {
    code: `// Время O(log n), память O(1)
const guessNumber = (n) => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const num = Math.floor((top + bottom) / 2);
    const result = guess(num);

    if (result > 0) {
      low = num + 1;
    } else if (result < 0) {
      high = num - 1;
    } else {
      return num;
    }
  }
};

console.log(guessNumber(10)); // 6
console.log(guessNumber(1)); // 1
console.log(guessNumber(2)); // 1`,
    difficulty: 'easy',
    id: 'guess-number-higher-or-lower',
    link: 'https://leetcode.com/problems/guess-number-higher-or-lower/',
    name: 'Guess Number Higher or Lower',
    subject: 'binary-search',
    tags: [TaskTag.BINARY_SEARCH, TaskTag.INTERACTIVE]
  },
  {
    code: `// Время O(log n), память O(1)
const solution = (isBadVersion) => (n) => {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (isBadVersion(mid)) {
      if (isBadVersion(mid - 1)) {
        high = mid - 1;
      } else {
        return mid;
      }
    } else {
      if (isBadVersion(mid + 1)) {
        return mid + 1;
      } else {
        low = mid + 1;
      }
    }
  }
};

console.log(solution(isBadVersion)(5)); // 4
console.log(solution(isBadVersion)(1)); // 1`,
    difficulty: 'easy',
    id: 'first-bad-version',
    link: 'https://leetcode.com/problems/first-bad-version/',
    name: 'First Bad Version',
    subject: 'binary-search',
    tags: [TaskTag.BINARY_SEARCH, TaskTag.INTERACTIVE]
  },
  {
    code: `// Время O(n ∗ log m), память O(1), m - максимальное количество бананов в грозди
const minEatingSpeed = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
  let result = right;

  while (left <= right) {
    const k = Math.floor((left + right) / 2);
    let hours = 0;

    for (const pile of piles) {
      hours += Math.ceil(pile / k);
    }

    if (hours <= h) {
      result = k;
      right = k - 1;
    } else {
      left = k + 1;
    }
  }

  return result;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // 23`,
    difficulty: 'medium',
    id: 'koko-eating-bananas',
    link: 'https://leetcode.com/problems/koko-eating-bananas/',
    name: 'Koko Eating Bananas',
    subject: 'binary-search',
    tags: [TaskTag.ARRAY, TaskTag.BINARY_SEARCH]
  },
  {
    code: `// Время O(log n), память O(1)
const findMin = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] > nums[right]) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11`,
    difficulty: 'medium',
    id: 'find-minimum-in-rotated-sorted-array',
    link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
    name: 'Find Minimum in Rotated Sorted Array',
    subject: 'binary-search',
    tags: [TaskTag.ARRAY, TaskTag.BINARY_SEARCH]
  },
  {
    code: `// Время O(log n), память O(1)
const search = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    }

    if (nums[left] <= nums[middle]) {
      if (target > nums[middle] || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if (target < nums[middle] || target > nums[right]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
  }

  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1`,
    difficulty: 'medium',
    id: 'search-in-rotated-sorted-array',
    link: 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
    name: 'Search in Rotated Sorted Array',
    subject: 'binary-search',
    tags: [TaskTag.ARRAY, TaskTag.BINARY_SEARCH]
  },
  {
    code: `class TimeMap {
  store = {};

  set(key, value, timestamp) {
    if (!this.store[key]) {
      this.store[key] = [];
    }

    this.store[key].push([value, timestamp]);
  };

  get(key, timestamp) {
    let result = '';
    const values = this.store[key] ?? [];
    let left = 0;
    let right = values.length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (values[middle][1] <= timestamp) {
        result = values[middle][0];
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return result;
  };
};

const timeMap = new TimeMap();
timeMap.set('foo', 'bar', 1);
console.log(timeMap.get('foo', 1)); // 'bar'
console.log(timeMap.get('foo', 3)); // 'bar'
timeMap.set('foo', 'bar2', 4);
console.log(timeMap.get('foo', 4)); // 'bar2'
console.log(timeMap.get('foo', 5)); // 'bar2'`,
    difficulty: 'medium',
    id: 'time-based-key-value-store',
    link: 'https://leetcode.com/problems/time-based-key-value-store/',
    name: 'Time Based Key-Value Store',
    subject: 'binary-search',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.BINARY_SEARCH, TaskTag.DESIGN]
  }
];
