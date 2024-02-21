import type { SubjectName } from 'utils/constants/subject';

export enum TaskTag {
  ARRAY = 'Array',
  BACKTRACKING = 'Backtracking',
  BINARY_SEARCH = 'Binary Search',
  BINARY_SEARCH_TREE = 'Binary Search Tree',
  BINARY_TREE = 'Binary Tree',
  BIT_MANIPULATION = 'Bit Manipulation',
  BREADTH_FIRST_SEARCH = 'Breadth-First Search',
  BUCKET_SORT = 'Bucket Sort',
  COUNTING = 'Counting',
  COUNTING_SORT = 'Counting Sort',
  DATA_STREAM = 'Data Stream',
  DEPTH_FIRST_SEARCH = 'Depth-First Search',
  DESIGN = 'Design',
  DIVIDE_AND_CONQUER = 'Divide and Conquer',
  DOUBLY_LINKED_LIST = 'Doubly-Linked List',
  DYNAMIC_PROGRAMMING = 'Dynamic Programming',
  GRAPH = 'Graph',
  GREEDY = 'Greedy',
  HASH_FUNCTION = 'Hash Function',
  HASH_TABLE = 'Hash Table',
  HEAP = 'Heap (Priority Queue)',
  INTERACTIVE = 'Interactive',
  ITERATOR = 'Iterator',
  LINKED_LIST = 'Linked List',
  MATH = 'Math',
  MATRIX = 'Matrix',
  MEMOIZATION = 'Memoization',
  MERGE_SORT = 'Merge Sort',
  MONOTONIC_STACK = 'Monotonic Stack',
  PREFIX_SUM = 'Prefix Sum',
  QUEUE = 'Queue',
  QUICKSELECT = 'Quickselect',
  RADIX_SORT = 'Radix Sort',
  RECURSION = 'Recursion',
  SIMULATION = 'Simulation',
  SLIDING_WINDOW = 'Sliding Window',
  SORTING = 'Sorting',
  STACK = 'Stack',
  STRING = 'String',
  STRING_MATCHING = 'String Matching',
  TOPOLOGICAL_SORT = 'Topological sort',
  TREE = 'Tree',
  TWO_POINTERS = 'Two Pointers',
  UNION_FIND = 'Union Find'
}

export type TaskConfig = {
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  id: string;
  link: string;
  name: string;
  subject: keyof typeof SubjectName;
  tags: TaskTag[];
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
    difficulty: 'easy',
    id: 'remove-element',
    link: 'https://leetcode.com/problems/remove-element/',
    name: 'Remove Element',
    subject: 'arrays',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS]
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
    difficulty: 'easy',
    id: 'remove-duplicates-from-sorted-array',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    name: 'Remove Duplicates from Sorted Array',
    subject: 'arrays',
    tags: [TaskTag.ARRAY, TaskTag.TWO_POINTERS]
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
    difficulty: 'easy',
    id: 'concatenation-of-array',
    link: 'https://leetcode.com/problems/concatenation-of-array/',
    name: 'Concatenation of Array',
    subject: 'arrays',
    tags: [TaskTag.ARRAY]
  },
  {
    code: `const containsDuplicate = (nums) => {
  const hashset = new Set();

  for (const num of nums) {
    if (hashset.has(num)) {
      return true;
    }
    
    hashset.add(num);
  }
  
  return false;
};
  
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false`,
    difficulty: 'easy',
    id: 'contains-duplicate',
    link: 'https://leetcode.com/problems/contains-duplicate/',
    name: 'Contains Duplicate',
    subject: 'objects',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.SORTING]
  },
  {
    code: `const twoSum = (nums, target) => {
  const prevMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    
    if (prevMap.has(diff)) {
      return [prevMap.get(diff), i];
    }
    
    prevMap.set(nums[i], i);
  }
};
  
console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]`,
    difficulty: 'easy',
    id: 'two-sum',
    link: 'https://leetcode.com/problems/two-sum/',
    name: 'Two Sum',
    subject: 'objects',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE]
  },
  {
    code: `function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

function LRUCache(capacity) {
  this.capacity = capacity;
  this.cache = new Map();

  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  this.left.next = this.right;
  this.right.prev = this.left;
}

LRUCache.prototype.remove = function(node) {
  const { prev, next } = node;  
  prev.next = next;
  next.prev = prev;
};

LRUCache.prototype.insert = function(node) {
  const prev = this.right.prev;
  const next = this.right;

  prev.next = node;
  next.prev = node;
  node.next = next;
  node.prev = prev;
};

LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
  }
  
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.remove(this.cache.get(key));
  }
  
  const node = new Node(key, value);
  this.cache.set(key, node);
  this.insert(node);
  
  if (this.cache.size > this.capacity) {
    const lru = this.left.next;
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

const cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 1
cache.put(3, 3);
console.log(cache.get(2)); // -1
cache.put(4, 4);
console.log(cache.get(1)); // -1
console.log(cache.get(3)); // 3
console.log(cache.get(4)); // 4`,
    difficulty: 'medium',
    id: 'lru-cache',
    link: 'https://leetcode.com/problems/lru-cache/',
    name: 'LRU Cache',
    subject: 'objects',
    tags: [
      TaskTag.HASH_TABLE,
      TaskTag.LINKED_LIST,
      TaskTag.DESIGN,
      TaskTag.DOUBLY_LINKED_LIST
    ]
  },
  {
    code: `class ListNode {
  next = null;

  constructor(key) {
    this.key = key;
  }
}

class MyHashSet {
  set = Array.from({ length: 10 ** 4 }, () => new ListNode(0));

  #getNodeByKey(key) {
    return this.set[key % this.set.length];
  }

  add(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(key);
  }
  
  remove(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next = currentNode.next.next;

        return;
      }

      currentNode = currentNode.next;
    }
  }

  contains(key) {
    let currentNode = this.#getNodeByKey(key);
    
    while (currentNode.next) {
      if (currentNode.next.key === key) {
        return true;
      }
      
      currentNode = currentNode.next;
    }
    
    return false;
  }
}

const myHashSet = new MyHashSet();
myHashSet.add(1);
myHashSet.add(2);
console.log(myHashSet.contains(1)); // true
console.log(myHashSet.contains(3)); // false
myHashSet.add(2);
console.log(myHashSet.contains(2)); // true
myHashSet.remove(2);
console.log(myHashSet.contains(2)); // false`,
    difficulty: 'easy',
    id: 'design-hashset',
    link: 'https://leetcode.com/problems/design-hashset/',
    name: 'Design HashSet',
    subject: 'hash-implementation',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.LINKED_LIST,
      TaskTag.DESIGN,
      TaskTag.HASH_FUNCTION
    ]
  },
  {
    code: `class ListNode {
  next = null;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MyHashMap {
  map = Array.from({ length: 10 ** 4 }, () => new ListNode(-1, -1));

  #getNodeByKey(key) {
    return this.map[key % this.map.length];
  }

  put(key, value) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next.value = value;

        return;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = new ListNode(key, value);
  }

  get(key) {
    let currentNode = this.#getNodeByKey(key).next;

    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }

      currentNode = currentNode.next;
    }

    return -1;
  }
  
  remove(key) {
    let currentNode = this.#getNodeByKey(key);

    while (currentNode.next) {
      if (currentNode.next.key === key) {
        currentNode.next = currentNode.next.next;

        return;
      }

      currentNode = currentNode.next;
    }
  }
}

const myHasMap = new MyHashMap();
myHasMap.put(1, 1);
myHasMap.put(2, 2);
console.log(myHasMap.get(1)); // 1
console.log(myHasMap.get(3)); // -1
myHasMap.put(2, 1);
console.log(myHasMap.get(2)); // 1
myHasMap.remove(2);
console.log(myHasMap.get(2)); // -1`,
    difficulty: 'easy',
    id: 'design-hashmap',
    link: 'https://leetcode.com/problems/design-hashmap/',
    name: 'Design HashMap',
    subject: 'hash-implementation',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.LINKED_LIST,
      TaskTag.DESIGN,
      TaskTag.HASH_FUNCTION
    ]
  },
  {
    code: `class NumArray {
  prefix = [];

  constructor(nums) {
    let total = 0;
    
    for (const num of nums) {
      total += num;
      this.prefix.push(total);
    }
  }
  
  sumRange(left, right) {
    const rightSum = this.prefix[right];
    const leftSum = left > 0 ? this.prefix[left - 1] : 0;
    
    return rightSum - leftSum;
  }
}

const myNumArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(myNumArray.sumRange(0, 2)); // 1
console.log(myNumArray.sumRange(2, 5)); // -1
console.log(myNumArray.sumRange(0, 5)); // -3`,
    difficulty: 'easy',
    id: 'range-sum-query-immutable',
    link: 'https://leetcode.com/problems/range-sum-query-immutable/',
    name: 'Range Sum Query - Immutable',
    subject: 'prefix-sums',
    tags: [TaskTag.ARRAY, TaskTag.DESIGN, TaskTag.PREFIX_SUM]
  },
  {
    code: `class NumMatrix {
  constructor(matrix) {
    const rowsCount = matrix.length;
    const columnsCount = matrix[0].length;
    
    this.sumMatrix = Array.from({ length: rowsCount + 1 }, () => Array(columnsCount + 1).fill(0));
    
    for (let rowIdx = 0; rowIdx < rowsCount; rowIdx++) {
      let prefix = 0;
      
      for (let columnIdx = 0; columnIdx < columnsCount; columnIdx++) {
        prefix += matrix[rowIdx][columnIdx];
        
        const above = this.sumMatrix[rowIdx][columnIdx + 1];
        
        this.sumMatrix[rowIdx + 1][columnIdx + 1] = prefix + above;
      }
    }
  }
  
  sumRegion(row1, col1, row2, col2) {
    const r1 = row1 + 1;
    const c1 = col1 + 1;
    const r2 = row2 + 1;
    const c2 = col2 + 1;
    
    const bottomRight = this.sumMatrix[r2][c2];
    const above = this.sumMatrix[r1 - 1][c2];
    const left = this.sumMatrix[r2][c1 - 1];
    const topLeft = this.sumMatrix[r1 - 1][c1 - 1];
    
    return bottomRight - above - left + topLeft;
  }
}

const myNumMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
console.log(myNumMatrix.sumRegion(2, 1, 4, 3)); // 8
console.log(myNumMatrix.sumRegion(1, 1, 2, 2)); // 11
console.log(myNumMatrix.sumRegion(1, 2, 2, 4)); // 12`,
    difficulty: 'medium',
    id: 'range-sum-query-2d-immutable',
    link: 'https://leetcode.com/problems/range-sum-query-2d-immutable/',
    name: 'Range Sum Query 2D - Immutable',
    subject: 'prefix-sums',
    tags: [TaskTag.ARRAY, TaskTag.DESIGN, TaskTag.MATRIX, TaskTag.PREFIX_SUM]
  },
  {
    code: `const pivotIndex = (nums) => {
  const total = nums.reduce((result, num) => result + num);
  
  let leftSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - nums[i] - leftSum;
    
    if (leftSum === rightSum) {
      return i;
    }
    
    leftSum += nums[i];
  }
  
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0`,
    difficulty: 'easy',
    id: 'find-pivot-index',
    link: 'https://leetcode.com/problems/find-pivot-index/',
    name: 'Find Pivot Index',
    subject: 'prefix-sums',
    tags: [TaskTag.ARRAY, TaskTag.PREFIX_SUM]
  },
  {
    code: `const productExceptSelf = (nums) => {
  const result = Array(nums.length);

  let prefix = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  let postfix = 1;

  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= postfix;
    postfix *= nums[j];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0, 0, 9, 0, 0]`,
    difficulty: 'medium',
    id: 'product-of-array-except-self',
    link: 'https://leetcode.com/problems/product-of-array-except-self/',
    name: 'Product of Array Except Self',
    subject: 'prefix-sums',
    tags: [TaskTag.ARRAY, TaskTag.PREFIX_SUM]
  },
  {
    code: `const subarraySum = (nums, k) => {
  const prefixSum = new Map([[0, 1]]);

  let result = 0;
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;    

    const diff = currentSum - k;

    result += prefixSum.get(diff) ?? 0;
    prefixSum.set(currentSum, 1 + (prefixSum.get(currentSum) ?? 0));
  }

  return result;
};

console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2`,
    difficulty: 'medium',
    id: 'subarray-sum-equals-k',
    link: 'https://leetcode.com/problems/subarray-sum-equals-k/',
    name: 'Subarray Sum Equals K',
    subject: 'prefix-sums',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.PREFIX_SUM]
  },
  {
    code: `const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCount = {};
  const tCharCount = {};

  for (let i = 0; i < s.length; i++) {
    sCharCount[s[i]] = 1 + (sCharCount[s[i]] ?? 0);
    tCharCount[t[i]] = 1 + (tCharCount[t[i]] ?? 0);
  }

  for (char of Object.keys(sCharCount)) {
    if (sCharCount[char] !== tCharCount[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false`,
    difficulty: 'easy',
    id: 'valid-anagram',
    link: 'https://leetcode.com/problems/valid-anagram/',
    name: 'Valid Anagram',
    subject: 'objects',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.SORTING]
  },
  {
    code: `const groupAnagrams = (strs) => {
  const result = {};

  for (const str of strs) {
    const count = Array(26).fill(0);

    for (const char of str) {
      count[char.charCodeAt() - 'a'.charCodeAt()] += 1;
    }

    const commaSeparatedCount = count.join(',');

    if (result[commaSeparatedCount]) {
      result[commaSeparatedCount].push(str);
    } else {
      result[commaSeparatedCount] = [str];
    }
  }

  return Object.values(result);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])); // [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams([''])); // [['']]
console.log(groupAnagrams(['a'])); // [['a']]`,
    difficulty: 'medium',
    id: 'group-anagrams',
    link: 'https://leetcode.com/problems/group-anagrams/',
    name: 'Group Anagrams',
    subject: 'objects',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.SORTING]
  },
  {
    code: `const topKFrequent = (nums, k) => {
  const result = [];
  const count = new Map();
  const frequencies = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
    count.set(num, 1 + (count.get(num) ?? 0));
  }

  for (const [num, frequency] of count) {
    frequencies[frequency].push(num);
  }

  for (let i = frequencies.length - 1; i > 0; i--) {
    for (const n of frequencies[i]) {
      result.push(n);

      if (result.length === k) {
        return result;
      }
    }
  }
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1, 2]
console.log(topKFrequent([1], 1)); // [1]`,
    difficulty: 'medium',
    id: 'top-k-frequent-elements',
    link: 'https://leetcode.com/problems/top-k-frequent-elements/',
    name: 'Top K Frequent Elements',
    subject: 'objects',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.SORTING,
      TaskTag.HEAP,
      TaskTag.BUCKET_SORT,
      TaskTag.COUNTING,
      TaskTag.QUICKSELECT
    ]
  },
  {
    code: `const isValidSudoku = (board) => {
  const rows = Array.from({ length: board.length }, () => new Set());
  const columns = Array.from({ length: board.length }, () => new Set());
  const squares = Array.from({ length: board.length }, () => new Set());

  for (let row = 0; row < rows.length; row++) {
    for (let col = 0; col < rows.length; col++) {
      if (board[row][col] === '.') {
        continue;
      }

      const squaresIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (rows[row].has(board[row][col])
        || columns[col].has(board[row][col])
        || squares[squaresIndex].has(board[row][col])) {
          return false;
      }

      rows[row].add(board[row][col]);
      columns[col].add(board[row][col]);
      squares[squaresIndex].add(board[row][col]);
    }
  }

  return true;
};

console.log(isValidSudoku([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // true
console.log(isValidSudoku([
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
])); // false`,
    difficulty: 'medium',
    id: 'valid-sudoku',
    link: 'https://leetcode.com/problems/valid-sudoku/',
    name: 'Valid Sudoku',
    subject: 'objects',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.MATRIX]
  },
  {
    code: `const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longest = 0;

  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let length = 1;

      while (numSet.has(num + length)) {
        length++;
      }

      longest = Math.max(length, longest);
    }
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9`,
    difficulty: 'medium',
    id: 'longest-consecutive-sequence',
    link: 'https://leetcode.com/problems/longest-consecutive-sequence/',
    name: 'Longest Consecutive Sequence',
    subject: 'objects',
    tags: [TaskTag.ARRAY, TaskTag.HASH_TABLE, TaskTag.UNION_FIND]
  },
  {
    code: `const calPoints = (operations) => {
  const record = [];
  
  for (const operation of operations) {
    switch (operation) {
      case '+': {
        record.push(record.at(-1) + record.at(-2));
        break;
      }
      case 'D': {
        record.push(record.at(-1) * 2);
        break;
      }
      case 'C': {
        record.pop();
        break;
      }
      default: {
        record.push(Number(operation));
      }
    }
  }

  return record.reduce((result, cur) => result + cur, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])); // 27
console.log(calPoints(['1', 'C'])); // 0`,
    difficulty: 'easy',
    id: 'baseball-game',
    link: 'https://leetcode.com/problems/baseball-game/',
    name: 'Baseball Game',
    subject: 'stack',
    tags: [TaskTag.ARRAY, TaskTag.STACK, TaskTag.SIMULATION]
  },
  {
    code: `const CloseToOpenBracket = {
  ')' : '(',
  ']' : '[',
  '}' : '{'
};

const isValid = (s) => {
  if (s.length % 2) {
    return false;
  }

  const stack = [];

  for (const char of s) {
    if (CloseToOpenBracket[char]) {
      if (stack.length && stack.at(-1) === CloseToOpenBracket[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false`,
    difficulty: 'easy',
    id: 'valid-parentheses',
    link: 'https://leetcode.com/problems/valid-parentheses/',
    name: 'Valid Parentheses',
    subject: 'stack',
    tags: [TaskTag.STRING, TaskTag.STACK]
  },
  {
    code: `class MinStack {
  stack = [];
  minStack = [];

  push(value) {
    this.stack.push(value);

    const minValue = Math.min(value, this.minStack.at(-1) ?? value);

    this.minStack.push(minValue);
  }

  pop() {
    this.stack.pop();
    this.minStack.pop();
  }

  top() {
    return this.stack.at(-1);
  }

  getMin() {
    return this.minStack.at(-1);
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2`,
    difficulty: 'medium',
    id: 'min-stack',
    link: 'https://leetcode.com/problems/min-stack/',
    name: 'Min Stack',
    subject: 'stack',
    tags: [TaskTag.STACK, TaskTag.DESIGN]
  },
  {
    code: `const evalRPN = (tokens) => {
  const stack = [];

  for (const token of tokens) {
     if (['+', '-', '*', '/'].includes(token)) {
      const lastValue = stack.pop();
      const penultimateValue = stack.pop();

      switch (token) {
        case '+': {
          stack.push(penultimateValue + lastValue);
          break;
        }
        case '-': {
          stack.push(penultimateValue - lastValue);
          break;
        }
        case '*': {
          stack.push(penultimateValue * lastValue);
          break;
        }
        case '/': {
          stack.push(Math.trunc(penultimateValue / lastValue));
          break;
        }
        default: {
          break;
        }
      }
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};

console.log(evalRPN(['2', '1', '+', '3', '*'])); // 9
console.log(evalRPN(['4', '13', '5', '/', '+'])); // 6
console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])); // 22`,
    difficulty: 'medium',
    id: 'evaluate-reverse-polish-notation',
    link: 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
    name: 'Evaluate Reverse Polish Notation',
    subject: 'stack',
    tags: [TaskTag.ARRAY, TaskTag.MATH, TaskTag.STACK]
  },
  {
    code: `const dailyTemperatures = (temperatures) => {
  const answer = Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack.at(-1)]) {
      const colderDayIndex = stack.pop();

      answer[colderDayIndex] = i - colderDayIndex;
    }

    stack.push(i);
  }

  return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]`,
    difficulty: 'medium',
    id: 'daily-temperatures',
    link: 'https://leetcode.com/problems/daily-temperatures/',
    name: 'Daily Temperatures',
    subject: 'stack',
    tags: [TaskTag.ARRAY, TaskTag.STACK, TaskTag.MONOTONIC_STACK]
  },
  {
    code: `const carFleet = (target, position, speed) => {
  const pairs = Array.from({ length: position.length }, (_, i) => [position[i], speed[i]]).sort(([p1], [p2]) => p2 - p1);
  const stack = [];

  for (const [p, s] of pairs) {
    stack.push((target - p) / s);

    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }

  return stack.length;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
console.log(carFleet(10, [3], [3])); // 1
console.log(carFleet(100, [0, 2, 4], [4, 2, 1])); // 1`,
    difficulty: 'medium',
    id: 'car-fleet',
    link: 'https://leetcode.com/problems/car-fleet/',
    name: 'Car Fleet',
    subject: 'stack',
    tags: [TaskTag.ARRAY, TaskTag.STACK, TaskTag.SORTING, TaskTag.MONOTONIC_STACK]
  },
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
  },
  {
    code: `const containsNearbyDuplicate = (nums, k) => {
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
    code: `const numOfSubarrays = (arr, k, threshold) => {
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
    code: `const minSubArrayLen = (target, nums) => {
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
    code: `const lengthOfLongestSubstring = (s) => {
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
    code: `const maxProfit = (prices) => {
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
    code: `const characterReplacement = (s, k) => {
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
    code: `const checkInclusion = (s1, s2) => {
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
  },
  {
    code: `const search = (nums, target) => {
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
    code: `const searchMatrix = (matrix, target) => {
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
    code: `const guessNumber = (n) => {
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
    code: `const solution = (isBadVersion) => (n) => {
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
    code: `const minEatingSpeed = (piles, h) => {
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
    code: `const findMin = (nums) => {
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
    code: `const search = (nums, target) => {
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
  },
  {
    code: `const reverseList = (head) => {
  let prev = null;
  let cur = head;

  while (cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

console.log(reverseList({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }));
// result: { val: 5, next: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } } }
console.log(reverseList({ val: 1, next: { val: 2, next: null } })); // { val: 2, next: { val: 1, next: null } }
console.log(reverseList(null)); // null`,
    difficulty: 'easy',
    id: 'reverse-linked-list',
    link: 'https://leetcode.com/problems/reverse-linked-list/',
    name: 'Reverse Linked List',
    subject: 'linked-lists',
    tags: [TaskTag.LINKED_LIST, TaskTag.RECURSION]
  },
  {
    code: `const mergeTwoLists = (list1, list2) => {
  const dummyNode = new ListNode();
  let tail = dummyNode;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    
    tail = tail.next;
  }
  
  if (list1) {
    tail.next = list1;
  } else {
    tail.next = list2;
  }

  return dummyNode.next;
};

console.log(mergeTwoLists({ val: 1, next: { val: 2, next: { val: 4, next: null } } }, { val: 1, next: { val: 3, next: { val: 4, next: null } } }));
// result: { val: 1, next: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 4, next: null } } } } } }
console.log(mergeTwoLists(null, null)); // null
console.log(mergeTwoLists(null, { val: 0, next: null })); // { val: 0, next: null }`,
    difficulty: 'easy',
    id: 'merge-two-sorted-lists',
    link: 'https://leetcode.com/problems/merge-two-sorted-lists/',
    name: 'Merge Two Sorted Lists',
    subject: 'linked-lists',
    tags: [TaskTag.LINKED_LIST, TaskTag.RECURSION]
  },
  {
    code: `class ListNode {
  prev = null;
  next = null;

  constructor(val) {
    this.val = val;
  }    
}

class MyLinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && currentNode !== this.tail && index === 0) {
      return currentNode.val;
    }

    return -1;
  }

  addAtHead(val) {
    const node = new ListNode(val);
    const next = this.head.next;
    const prev = this.head;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtTail(val) {
    const node = new ListNode(val);
    const next = this.tail;
    const prev = this.tail.prev;

    prev.next = node;
    next.prev = node;
    node.next = next;
    node.prev = prev;
  }

  addAtIndex(index, val) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && index === 0) {
      const node = new ListNode(val);
      const next = currentNode;
      const prev = currentNode.prev;
  
      prev.next = node;
      next.prev = node;
      node.next = next;
      node.prev = prev;
    }
  }

  deleteAtIndex(index, val) {
    let currentNode = this.head.next;

    while (currentNode && index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode && currentNode !== this.tail && index === 0) {
      const next = currentNode.next;
      const prev = currentNode.prev;
  
      next.prev = prev;
      prev.next = next;
    }
  }
}

const myLinkedList = new MyLinkedList();
myLinkedList.addAtHead(1);
myLinkedList.addAtTail(3);
myLinkedList.addAtIndex(1, 2);
console.log(myLinkedList.get(1)); // 2
myLinkedList.deleteAtIndex(1);
console.log(myLinkedList.get(1)); // 3`,
    difficulty: 'medium',
    id: 'design-linked-list',
    link: 'https://leetcode.com/problems/design-linked-list/',
    name: 'Design Linked List',
    subject: 'doubly-linked-lists',
    tags: [TaskTag.LINKED_LIST, TaskTag.DESIGN]
  },
  {
    code: `class ListNode {
  constructor(val, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }    
}

class BrowserHistory {
  constructor(homepage) {
    this.currentPage = new ListNode(homepage);
  }

  visit(url) {
    this.currentPage.next = new ListNode(url, this.currentPage);
    this.currentPage = this.currentPage.next;
  }

  back(steps) {
    while (this.currentPage.prev && steps > 0) {
      this.currentPage = this.currentPage.prev;
      steps--;
    }

    return this.currentPage.val;
  }

  forward(steps) {
    while (this.currentPage.next && steps > 0) {
      this.currentPage = this.currentPage.next;
      steps--;
    }

    return this.currentPage.val;
  }
}

const browserHistory = new BrowserHistory('leetcode.com');
browserHistory.visit('google.com');
browserHistory.visit('facebook.com');
browserHistory.visit('youtube.com');
console.log(browserHistory.back(1)); // 'facebook.com'
console.log(browserHistory.back(1)); // 'google.com'
console.log(browserHistory.forward(1)); // 'facebook.com'
browserHistory.visit('linkedin.com');
console.log(browserHistory.forward(2)); // 'linkedin.com'
console.log(browserHistory.back(2)); // 'google.com'
console.log(browserHistory.back(7)); // 'leetcode.com'`,
    difficulty: 'medium',
    id: 'design-browser-history',
    link: 'https://leetcode.com/problems/design-browser-history/',
    name: 'Design Browser History',
    subject: 'doubly-linked-lists',
    tags: [
      TaskTag.ARRAY,
      TaskTag.LINKED_LIST,
      TaskTag.STACK,
      TaskTag.DESIGN,
      TaskTag.DOUBLY_LINKED_LIST,
      TaskTag.DATA_STREAM
    ]
  },

  {
    code: `class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.head.next.value;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

class MyStack {
  queue = new MyQueue();

  push(x) {
    this.queue.enqueue(x);

    for (let i = 0; i < this.queue.size - 1; i++) {
      this.queue.enqueue(this.queue.dequeue());
    }
  };

  pop() {
    return this.queue.dequeue();
  };

  top() {
    return this.queue.peek();
  };

  empty() {
    return this.queue.isEmpty();
  };
}

const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top()); // 2
console.log(myStack.pop()); // 2
console.log(myStack.empty()); // false`,
    difficulty: 'easy',
    id: 'implement-stack-using-queues',
    link: 'https://leetcode.com/problems/implement-stack-using-queues/',
    name: 'Implement Stack using Queues',
    subject: 'queues',
    tags: [TaskTag.STACK, TaskTag.DESIGN, TaskTag.QUEUE]
  },
  {
    code: `const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null} } } } })); // { val: 3 }
console.log(middleNode({ val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: { val: 6, next: null } } } } } })); // { val: 4 }`,
    difficulty: 'easy',
    id: 'middle-of-the-linked-list',
    link: 'https://leetcode.com/problems/middle-of-the-linked-list/',
    name: 'Middle of the Linked List',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS]
  },
  {
    code: `const pairSum = (head) => {
  let slow = head;
  let fast = head;
  let prev = null;
  let result = 0;

  while (fast?.next) {
    fast = fast.next.next;
    [slow.next, prev, slow] = [prev, slow, slow.next];
  }

  while (slow) {
    result = Math.max(result, prev.val + slow.val);
    prev = prev.next;
    slow = slow.next;
  }

  return result;
};

console.log(pairSum({ val: 5, next: { val: 4, next: { val: 2, next: { val: 1, next: null } } } })); // 6
console.log(pairSum({ val: 4, next: { val: 2, next: { val: 2, next: { val: 3, next: null } } } })); // 7
console.log(pairSum({ val: 1, next: { val: 100000, next: null } })); // 100001`,
    difficulty: 'medium',
    id: 'maximum-twin-sum-of-a-linked-list',
    link: 'https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/',
    name: 'Maximum Twin Sum of a Linked List',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS, TaskTag.STACK]
  },
  {
    code: `const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true;
    }
  }

  return false;
};

const cycleHead1 = { val: 2, next: null }; 
const cycledList1 = { val: 3, next: null };
const cycledList1Tail = { val: 0, next: { val: -4, next: cycleHead1 } };
cycleHead1.next = cycledList1Tail;
cycledList1.next = cycleHead1;

console.log(hasCycle(cycledList1)); // true

const cycledList2 = { val: 1, next: null };
const cycledList2Tail = { val: 2, next: cycledList2 };
cycledList2.next = cycledList2Tail;

console.log(hasCycle(cycledList2)); // true
console.log(hasCycle({ val: 1, next: null })) // false`,
    difficulty: 'easy',
    id: 'linked-list-cycle',
    link: 'https://leetcode.com/problems/linked-list-cycle/',
    name: 'Linked List Cycle',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.HASH_TABLE, TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS]
  },
  {
    code: `const detectCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      break;
    }
  }

  if (!fast?.next) {
    return null;
  }

  let slow2 = head;

  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
};

const cycleHead1 = { val: 2, next: null }; 
const cycledList1 = { val: 3, next: null };
const cycledList1Tail = { val: 0, next: { val: -4, next: cycleHead1 } };
cycleHead1.next = cycledList1Tail;
cycledList1.next = cycleHead1;

console.log(detectCycle(cycledList1)); // { val: 2 }

const cycledList2 = { val: 1, next: null };
const cycledList2Tail = { val: 2, next: cycledList2 };
cycledList2.next = cycledList2Tail;

console.log(detectCycle(cycledList2)); // { val: 1 }
console.log(detectCycle({ val: 1, next: null })); // null`,
    difficulty: 'medium',
    id: 'linked-list-cycle-ii',
    link: 'https://leetcode.com/problems/linked-list-cycle-ii/',
    name: 'Linked List Cycle II',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.HASH_TABLE, TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS]
  },
  {
    code: `const findDuplicate = (nums) => {
  let slow = 0;
  let fast = 0;

  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]];

    if (slow === fast) {
      break;
    }
  }

  let slow2 = 0;

  while (true) {
    slow = nums[slow];
    slow2 = nums[slow2];

    if (slow === slow2) {
      return slow;
    }
  }
};

console.log(findDuplicate([1, 3, 4, 2, 2])); // 2
console.log(findDuplicate([3, 1, 3, 4, 2])); // 3`,
    difficulty: 'medium',
    id: 'find-the-duplicate-number',
    link: 'https://leetcode.com/problems/find-the-duplicate-number/',
    name: 'Find the Duplicate Number',
    subject: 'fast-and-slow-pointers',
    tags: [
      TaskTag.ARRAY,
      TaskTag.TWO_POINTERS,
      TaskTag.BINARY_SEARCH,
      TaskTag.BIT_MANIPULATION
    ]
  },
  {
    code: `const addTwoNumbers = (l1, l2) => {
  const dummyNode = new ListNode();
  let currentNode = dummyNode;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1?.val ?? 0;
    const val2 = l2?.val ?? 0;

    let val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    currentNode.next = new ListNode(val);

    currentNode = currentNode.next;
    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;
  }

  return dummyNode.next;
};

console.log(addTwoNumbers(
  { val: 2, next: { val: 4, next: { val: 3, next: null } } },
  { val: 5, next: { val: 6, next: { val: 4, next: null } } }  
)); // { val: 7, next: { val: 0, next: { val: 8, next: null } } }
console.log(addTwoNumbers({ val: 0, next: null }, { val: 0, next: null })); // { val: 0, next: null }
console.log(addTwoNumbers(
  { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } } } } },
  { val: 9, next: { val: 9, next: { val: 9, next: { val: 9, next: null } } } }  
));
// { val: 8, next: { val: 9, next: { val: 9, next: { val: 9, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } }`,
    difficulty: 'medium',
    id: 'add-two-numbers',
    link: 'https://leetcode.com/problems/add-two-numbers/',
    name: 'Add Two Numbers',
    subject: 'linked-lists',
    tags: [TaskTag.LINKED_LIST, TaskTag.MATH, TaskTag.RECURSION]
  },
  {
    code: `const reorderList = (head) => {
  let slow = head;
  let fast = head.next;
  
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let second = slow.next;
  let prev = null;
  slow.next = null;

  while (second) {
    [second.next, prev, second] = [prev, second, second.next];
  }

  let first = head;
  second = prev;

  while (second) {
    [first.next, second.next, first, second] = [second, first.next, first.next, second.next];
  }
};

const list1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null } } } };
reorderList(list1);
console.log(list1); // { val: 1, next: { val: 4, next: { val: 2, next: { val: 3, next: null } } } }

const list2 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
reorderList(list2);
console.log(list2); // { val: 1, next: { val: 5, next: { val: 2, next: { val: 4, next: { val: 3, next: null } } } } }`,
    difficulty: 'medium',
    id: 'reorder-list',
    link: 'https://leetcode.com/problems/reorder-list/',
    name: 'Reorder List',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS, TaskTag.STACK, TaskTag.RECURSION]
  },
  {
    code: `const removeNthFromEnd = (head, n) => {
  const dummyNode = new ListNode(null, head);
  let left = dummyNode;
  let right = head;

  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  while (right) {
    left = left.next;
    right = right.next;
  }

  left.next = left.next.next;
  return dummyNode.next;
};

console.log(removeNthFromEnd({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}, 2)); // { val: 1, next: { val: 2, next: { val: 3, next: { val: 5, next: null } } } }
console.log(removeNthFromEnd({ val: 1, next: null }, 1)); // null
console.log(removeNthFromEnd({ val: 1, next: { val: 2, next: null } }, 1)); // { val: 1, next: null }`,
    difficulty: 'medium',
    id: 'remove-nth-node-from-end-of-list',
    link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
    name: 'Remove Nth Node From End of List',
    subject: 'linked-lists',
    tags: [TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS]
  },
  {
    code: `const copyRandomList = (head) => {
  const OldToCopy = new Map([[null, null]]);

  let cur = head;

  while (cur) {
    const copy = new Node(cur.val);
    OldToCopy.set(cur, copy);
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const copy = OldToCopy.get(cur);
    copy.next = OldToCopy.get(cur.next);
    copy.random = OldToCopy.get(cur.random);
    cur = cur.next;
  }

  return OldToCopy.get(head);
};

const node1list1 = { val: 7, next: null, random: null };
const node2list1 = { val: 13, next: null, random: node1list1 };
const node3list1 = { val: 11, next: null, random: null };
const node4list1 = { val: 10, next: null, random: node3list1 };
const node5list1 = { val: 7, next: null, random: node1list1 };
node3list1.random = node5list1;
node1list1.next = node2list1;
node2list1.next = node3list1;
node3list1.next = node4list1;
node4list1.next = node5list1;

console.log(copyRandomList(node1list1));

const node1list2 = { val: 1, next: null, random: null };
const node2list2 = { val: 2, next: null, random: null };
node1list2.next = node2list2;
node1list2.random = node2list2;
node2list2.random = node2list2;

console.log(copyRandomList(node1list2));

const node1list3 = { val: 3, next: null, random: null };
const node2list3 = { val: 3, next: null, random: node1list3 };
const node3list3 = { val: 3, next: null, random: null };
node1list3.next = node2list3;
node2list3.next = node3list3;

console.log(copyRandomList(node1list3));`,
    difficulty: 'medium',
    id: 'copy-list-with-random-pointer',
    link: 'https://leetcode.com/problems/copy-list-with-random-pointer/',
    name: 'Copy List with Random Pointer',
    subject: 'linked-lists',
    tags: [TaskTag.HASH_TABLE, TaskTag.LINKED_LIST]
  },
  {
    code: `const fib = (n) => {
  if (n <= 1) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
};

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3`,
    difficulty: 'easy',
    id: 'fibonacci-number',
    link: 'https://leetcode.com/problems/fibonacci-number/',
    name: 'Fibonacci Number',
    subject: 'two-branch-recursion',
    tags: [
      TaskTag.MATH,
      TaskTag.DYNAMIC_PROGRAMMING,
      TaskTag.RECURSION,
      TaskTag.MEMOIZATION
    ]
  },
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
  },
  {
    code: `const searchBST = (root, val) => {
  if (!root) {
    return null;
  }

  if (root.val > val) {
    return searchBST(root.left, val);
  }
  
  if (root.val < val) {
    return searchBST(root.right, val);
  }

  return root;
};

console.log(searchBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 2)); // { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }
console.log(searchBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 5)); // null`,
    difficulty: 'easy',
    id: 'search-in-a-binary-search-tree',
    link: 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
    name: 'Search in a Binary Search Tree',
    subject: 'binary-search-tree',
    tags: [TaskTag.TREE, TaskTag.BINARY_SEARCH_TREE, TaskTag.BINARY_TREE]
  },
  {
    code: `const insertIntoBST = (root, val) => {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }

  return root;
};

console.log(insertIntoBST({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: null,
    right: null
  }
}, 5)); // { val: 4, left: { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }, right: { val: 7, left: { val: 5, left: null, right: null }, right: null } }
console.log(insertIntoBST({
  val: 40,
  left: {
    val: 20,
    left: {
      val: 10,
      left: null,
      right: null
    },
    right: {
      val: 30,
      left: null,
      right: null
    }
  },
  right: {
    val: 60,
    left: {
      val: 50,
      left: null,
      right: null
    },
    right: {
      val: 70,
      left: null,
      right: null
    }
  }
}, 25)); // { val: 40, left: { val: 20, left: { val: 10, left: null, right: null }, right: { val: 30, left: { val: 25, left: null, right: null }, right: null } }, right: { val: 60, left: { val: 50, left: null, right: null }, right: { val: 70, left: null, right: null } } }`,
    difficulty: 'medium',
    id: 'insert-into-a-binary-search-tree',
    link: 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
    name: 'Insert into a Binary Search Tree',
    subject: 'bst-insert-and-remove',
    tags: [TaskTag.TREE, TaskTag.BINARY_SEARCH_TREE, TaskTag.BINARY_TREE]
  },
  {
    code: `const deleteNode = (root, key) => {
  if (!root) {
    return null;
  }

  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    }

    let cur = root.right;

    while (cur && cur.left) {
      cur = cur.left;
    }

    root.val = cur.val;
    root.right = deleteNode(root.right, root.val);
  }

  return root;
};

console.log(deleteNode({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}, 3)); // { val: 5, left: { val: 4, left: { val: 2, left: null, right: null }, right: null }, right: { val: 6, left: null, right: { val: 7, left: null, right: null } } }
console.log(deleteNode({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}, 0)); // { val: 5, left: { val: 3, left: { val: 2, left: null, right: null }, right: { val: 4, left: null, right: null } }, right: { val: 6, left: null, right: { val: 7, left: null, right: null } } }`,
    difficulty: 'medium',
    id: 'delete-node-in-a-bst',
    link: 'https://leetcode.com/problems/delete-node-in-a-bst/',
    name: 'Delete Node in a BST',
    subject: 'bst-insert-and-remove',
    tags: [TaskTag.TREE, TaskTag.BINARY_SEARCH_TREE, TaskTag.BINARY_TREE]
  },
  {
    code: `const inorderTraversal = (root) => {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
};

console.log(inorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [1, 3, 2]
console.log(inorderTraversal(null)); // []
console.log(inorderTraversal({ val: 1, left: null, right: null })); // [1]`,
    difficulty: 'easy',
    id: 'binary-tree-inorder-traversal',
    link: 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
    name: 'Binary Tree Inorder Traversal',
    subject: 'depth-first-search',
    tags: [TaskTag.STACK, TaskTag.TREE, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `const kthSmallest = (root, k) => {
  const stack = [];
  let n = 0;
  let cur = root;

  while (cur || stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    n++;
    
    if (n === k) {
      return cur.val;
    }

    cur = cur.right;
  }
};

console.log(kthSmallest({
  val: 3,
  left: {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 4,
    left: null,
    right: null
  }
}, 1)); // 1
console.log(kthSmallest({
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2,
      left: {
        val: 1,
        left: null,
        right: null
      },
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: null
    }
  },
  right: {
    val: 6,
    left: null,
    right: null
  }
}, 3)); // 3`,
    difficulty: 'medium',
    id: 'kth-smallest-element-in-a-bst',
    link: 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
    name: 'Kth Smallest Element in a BST',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BINARY_SEARCH_TREE,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }

  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);

  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  
  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
/*
{
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
*/
console.log(buildTree([-1], [-1])); // { val: -1, left: null, right: null }`,
    difficulty: 'medium',
    id: 'construct-binary-tree-from-preorder-and-inorder-traversal',
    link: 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
    name: 'Construct Binary Tree from Preorder and Inorder Traversal',
    subject: 'depth-first-search',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.DIVIDE_AND_CONQUER,
      TaskTag.TREE,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `class BSTIterator {
  constructor(root) {
    this.stack = [];

    while (root) {
      this.stack.push(root);
      root = root.left;
    }
  }

  next() {
    const node = this.stack.pop();
    let cur = node.right;

    while (cur) {
      this.stack.push(cur);
      cur = cur.left;
    }

    return node.val;
  };

  hasNext() {
    return this.stack.length > 0;
  };
};

const bSTIterator = new BSTIterator({
  val: 7,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 15,
    left: {
      val: 9,
      left: null,
      right: null
    },
    right: {
      val: 20,
      left: null,
      right: null
    }
  }
});

console.log(bSTIterator.next()); // 3
console.log(bSTIterator.next()); // 7
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 9
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 15
console.log(bSTIterator.hasNext()); // true
console.log(bSTIterator.next()); // 20
console.log(bSTIterator.hasNext()); // false`,
    difficulty: 'medium',
    id: 'binary-search-tree-iterator',
    link: 'https://leetcode.com/problems/binary-search-tree-iterator/',
    name: 'Binary Search Tree Iterator',
    subject: 'depth-first-search',
    tags: [
      TaskTag.STACK,
      TaskTag.TREE,
      TaskTag.DESIGN,
      TaskTag.BINARY_SEARCH_TREE,
      TaskTag.BINARY_TREE,
      TaskTag.ITERATOR
    ]
  },
  {
    code: `const preorderTraversal = (root) => {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur || stack.length) {
    if (cur) {
      result.push(cur.val);
      stack.push(cur.right);
      cur = cur.left;
    } else {
      cur = stack.pop();
    }
  }

  return result;
};

console.log(preorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [1, 2, 3]
console.log(preorderTraversal(null)); // []
console.log(preorderTraversal({ val: 1, left: null, right: null })); // [1]`,
    difficulty: 'easy',
    id: 'binary-tree-preorder-traversal',
    link: 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
    name: 'Binary Tree Preorder Traversal',
    subject: 'iterative-depth-first-search',
    tags: [TaskTag.STACK, TaskTag.TREE, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `const postorderTraversal = (root) => {
  const result = [];
  const stack = [{ node: root, visited: false }];

  while (stack.length) {
    const { node, visited } = stack.pop();
  
    if (node) {
      if (visited) {
        result.push(node.val);
      } else {
        stack.push({ node: node, visited: true });
        stack.push({ node: node.right, visited: false });
        stack.push({ node: node.left, visited: false });
      }
    }
  }

  return result;
};

console.log(postorderTraversal({
  val: 1,
  left: null,
  right: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  }
})); // [3, 2, 1]
console.log(postorderTraversal(null)); // []
console.log(postorderTraversal({ val: 1, left: null, right: null })); // [1]`,
    difficulty: 'easy',
    id: 'binary-tree-postorder-traversal',
    link: 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
    name: 'Binary Tree Postorder Traversal',
    subject: 'iterative-depth-first-search',
    tags: [TaskTag.STACK, TaskTag.TREE, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

const levelOrder = (root) => {
  const result = [];

  const queue = new MyQueue();
  queue.enqueue(root);

  while (queue.size) {
    const queueLength = queue.size;
    const level = [];

    for (let i = 0; i < queueLength; i++) {
      const node = queue.dequeue();
      
      if (node) {
        level.push(node.val);
        queue.enqueue(node.left);
        queue.enqueue(node.right);        
      }
    }
    
    if (level.length) {
      result.push(level);
    }
  }

  return result;
};

console.log(levelOrder({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})); // [[3], [9, 20], [15, 7]]
console.log(levelOrder({ val: 1, left: null, right: null })); // [[1]]
console.log(levelOrder(null)); // []`,
    difficulty: 'medium',
    id: 'binary-tree-level-order-traversal',
    link: 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
    name: 'Binary Tree Level Order Traversal',
    subject: 'breadth-first-search',
    tags: [TaskTag.TREE, TaskTag.BREADTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  size = 0;

  constructor() {
    this.head = new ListNode(null);
    this.tail = new ListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new ListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.size++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.size--;

    return value;
  }
}

const rightSideView = (root) => {
  const result = [];

  const queue = new MyQueue();
  queue.enqueue(root);

  while (queue.size) {
    let rightSide = null;
    const queueLength = queue.size;

    for (let i = 0; i < queueLength; i++) {
      const node = queue.dequeue();
      
      if (node) {
        rightSide = node;
        queue.enqueue(node.left);
        queue.enqueue(node.right);        
      }
    }
    
    if (rightSide) {
      result.push(rightSide.val);
    }
  }

  return result;
};

console.log(rightSideView({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null
    }
  }
})); // [1, 3, 4]
console.log(rightSideView({ val: 1, left: null, right: { val: 3, left: null, right: null } })); // [1, 3]
console.log(rightSideView(null)); // []`,
    difficulty: 'medium',
    id: 'binary-tree-right-side-view',
    link: 'https://leetcode.com/problems/binary-tree-right-side-view/',
    name: 'Binary Tree Right Side View',
    subject: 'breadth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const invertTree = (root) => {
  if (!root) {
    return null;
  }

  [root.left, root.right] = [root.right, root.left];

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

console.log(invertTree({
  val: 4,
  left: {
    val: 2,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 7,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
})); // { val: 4, left: { val: 7, left: { val: 9, left: null, right: null }, right: { val: 6, left: null, right: null } }, right: { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } } }
console.log(invertTree({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // { val: 2, left: { val: 3, left: null, right: null }, right: { val: 1, left: null, right: null } }
console.log(invertTree(null)); // null`,
    difficulty: 'easy',
    id: 'invert-binary-tree',
    link: 'https://leetcode.com/problems/invert-binary-tree/',
    name: 'Invert Binary Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

console.log(maxDepth({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
})); // 3
console.log(maxDepth({ val: 1, left: null, right: { val: 2, left: null, right: null } })); // 2`,
    difficulty: 'easy',
    id: 'maximum-depth-of-binary-tree',
    link: 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
    name: 'Maximum Depth of Binary Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const diameterOfBinaryTree = (root) => {
  let result = 0;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);
    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  };

  dfs(root);

  return result;
};

console.log(diameterOfBinaryTree({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // 3
console.log(diameterOfBinaryTree({ val: 1, left: { val: 2, left: null, right: null }, right: null })); // 1`,
    difficulty: 'easy',
    id: 'diameter-of-binary-tree',
    link: 'https://leetcode.com/problems/diameter-of-binary-tree/',
    name: 'Diameter of Binary Tree',
    subject: 'depth-first-search',
    tags: [TaskTag.TREE, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `const isBalanced = (root) => {
  let result = true;

  const dfs = (root) => {
    if (!root) {
      return 0;
    }

    const left = dfs(root.left);
    const right = dfs(root.right);

    if (Math.abs(left - right) > 1) {
      result = false;
    }

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return result;
};

console.log(isBalanced({
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val:7,
      left: null,
      right: null
    }
  }
})); // true
console.log(isBalanced({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4,
        left: null,
        right: null
      },
      right: {
        val: 4,
        left: null,
        right: null
      }
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false
console.log(isBalanced(null)); // true`,
    difficulty: 'easy',
    id: 'balanced-binary-tree',
    link: 'https://leetcode.com/problems/balanced-binary-tree/',
    name: 'Balanced Binary Tree',
    subject: 'depth-first-search',
    tags: [TaskTag.TREE, TaskTag.DEPTH_FIRST_SEARCH, TaskTag.BINARY_TREE]
  },
  {
    code: `const isSameTree = (p, q) => {
  if (!p && !q) {
    return true;
  }

  if (!p || !q || p.val !== q.val) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
}, {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // true
console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: null
}, {
  val: 1,
  left: null,
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false
console.log(isSameTree({
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null
  },
  right: {
    val: 1,
    left: null,
    right: null
  }
}, {
  val: 1,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false`,
    difficulty: 'easy',
    id: 'same-tree',
    link: 'https://leetcode.com/problems/same-tree/',
    name: 'Same Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const isSameTree = (root, root2) => {
  if (!root && !root2) {
    return true;
  }

  if (root && root2 && root.val === root2.val) {
    return isSameTree(root.left, root2.left) && isSameTree(root.right, root2.right);
  }

  return false;
};

const isSubtree = (root, subRoot) => {
  if (!subRoot) {
    return true;
  }

  if (!root) {
    return false;
  }

  if (isSameTree(root, subRoot)) {
    return true;
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

console.log(isSubtree({
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}, {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // true
console.log(isSubtree({
  val: 3,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 0,
        left: null,
        right: null
      },
      right: null
    }
  },
  right: {
    val: 5,
    left: null,
    right: null
  }
}, {
  val: 4,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
})); // false`,
    difficulty: 'easy',
    id: 'subtree-of-another-tree',
    link: 'https://leetcode.com/problems/subtree-of-another-tree/',
    name: 'Subtree of Another Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.STRING_MATCHING,
      TaskTag.BINARY_TREE,
      TaskTag.HASH_FUNCTION
    ]
  },
  {
    code: `const lowestCommonAncestor = (root, p, q) => {
  let cur = root;

  while (cur) {
    if (p > cur.val && q > cur.val) {
      cur = cur.right;
    } else if (p < cur.val && q < cur.val) {
      cur = cur.left;
    } else {    
      return cur;
    }
  }
};

console.log(lowestCommonAncestor({
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}, 2, 8)); // 6
console.log(lowestCommonAncestor({
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: {
        val: 3,
        left: null,
        right: null
      },
      right: {
        val: 5,
        left: null,
        right: null
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7,
      left: null,
      right: null
    },
    right: {
      val: 9,
      left: null,
      right: null
    }
  }
}, 2, 4)); // 2
console.log(lowestCommonAncestor({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: null
}, 2, 1)); // 2`,
    difficulty: 'medium',
    id: 'lowest-common-ancestor-of-a-binary-search-tree',
    link: 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',
    name: 'Lowest Common Ancestor of a Binary Search Tree',
    subject: 'binary-search-tree',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BINARY_SEARCH_TREE,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const goodNodes = (root) => {
  const dfs = (node, maxVal) => {
    if (!node) {
      return 0;
    }

    let result = node.val >= maxVal ? 1 : 0;
    maxVal = Math.max(maxVal, node.val);
    result += dfs(node.left, maxVal);
    result += dfs(node.right, maxVal);
    return result;
  };

  return dfs(root, root.val);
};

console.log(goodNodes({
  val: 3,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  }
})); // 4
console.log(goodNodes({
  val: 3,
  left: {
    val: 3,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: null
})); // 3
console.log(goodNodes({
  val: 1,
  left: null,
  right: null
})); // 1`,
    difficulty: 'medium',
    id: 'count-good-nodes-in-binary-tree',
    link: 'https://leetcode.com/problems/count-good-nodes-in-binary-tree/',
    name: 'Count Good Nodes in Binary Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const isValidBST = (root) => {
  const valid = (node, left, right) => {
    if (!node) {
      return true;
    }

    if (!(node.val < right && node.val > left)) {
      return false;
    }

    return valid(node.left, left, node.val) && valid(node.right, node.val, right);
  }

  return valid(root, -Infinity, Infinity);
};

console.log(isValidBST({
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
})); // true
console.log(isValidBST({
  val: 5,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 4,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
})); // false`,
    difficulty: 'medium',
    id: 'validate-binary-search-tree',
    link: 'https://leetcode.com/problems/validate-binary-search-tree/',
    name: 'Validate Binary Search Tree',
    subject: 'depth-first-search',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BINARY_SEARCH_TREE,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const hasPathSum = (root, targetSum) => {
  if (!root) {
    return false;
  }

  if (!root.left && !root.right) {
    return targetSum - root.val === 0;
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

console.log(hasPathSum({
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}, 22)); // true
console.log(hasPathSum({ val: 1, left: { val: 2, left: null, right: null }, right: { val: 3, left: null, right: null } }, 0)); // false
console.log(hasPathSum(null, 0)); // false`,
    difficulty: 'easy',
    id: 'path-sum',
    link: 'https://leetcode.com/problems/path-sum/',
    name: 'Path Sum',
    subject: 'backtracking',
    tags: [
      TaskTag.TREE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.BINARY_TREE
    ]
  },
  {
    code: `const generateParenthesis = (n) => {
  const result = [];

  const backtrack = (openN, closedN, path) => {
    if (openN === closedN && openN === n) {
      result.push(path);
      return;
    }

    if (openN < n) {
      backtrack(openN + 1, closedN, path + '(');
    }

    if (closedN < openN) {
      backtrack(openN, closedN + 1, path + ')');
    }
  };

  backtrack(0, 0, '');

  return result;
};

console.log(generateParenthesis(3)); // ['((()))', '(()())', '(())()', '()(())', '()()()']
console.log(generateParenthesis(1)); // ['()']`,
    difficulty: 'medium',
    id: 'generate-parentheses',
    link: 'https://leetcode.com/problems/generate-parentheses/',
    name: 'Generate Parentheses',
    subject: 'backtracking',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.BACKTRACKING]
  },
  {
    code: `const subsets = (nums) => {
  const result = [];
  const subset = [];

  const backtracking = (i) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtracking(i + 1);

    subset.pop();
    backtracking(i + 1);
  };

  backtracking(0);

  return result;
};

console.log(subsets([1, 2, 3])); // [[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]
console.log(subsets([0])); // [[0], []]`,
    difficulty: 'medium',
    id: 'subsets',
    link: 'https://leetcode.com/problems/subsets/',
    name: 'Subsets',
    subject: 'subsets',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING, TaskTag.BIT_MANIPULATION]
  },
  {
    code: `const subsetsWithDup = (nums) => {
  nums.sort();

  const result = [];

  const backtracking = (i, subset) => {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    subset.push(nums[i]);
    backtracking(i + 1, subset);
    subset.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
    }

    backtracking(i + 1, subset);
  };

  backtracking(0, []);

  return result;
};

console.log(subsetsWithDup([1, 2, 2])); // [[1, 2, 2], [1, 2], [1], [2, 2], [2], []]
console.log(subsetsWithDup([0])); // [[0], []]`,
    difficulty: 'medium',
    id: 'subsets-ii',
    link: 'https://leetcode.com/problems/subsets-ii/',
    name: 'Subsets II',
    subject: 'subsets',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING, TaskTag.BIT_MANIPULATION]
  },
  {
    code: `const combine = (n, k) => {
  const result = [];

  const backtrack = (start, combination) => {
    if (combination.length === k) {
      result.push([...combination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      combination.push(i);
      backtrack(i + 1, combination);
      combination.pop();
    }
  };

  backtrack(1, []);

  return result;
};

console.log(combine(4, 2)); // [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
console.log(combine(1, 1)); // [[1]]`,
    difficulty: 'medium',
    id: 'combinations',
    link: 'https://leetcode.com/problems/combinations/',
    name: 'Combinations',
    subject: 'combinations',
    tags: [TaskTag.BACKTRACKING]
  },
  {
    code: `const combinationSum = (candidates, target) => {
  const result = [];

  const backtrack = (i, cur, total) => {
    if (total === target) {
      result.push([...cur]);
      return;
    }

    if (i >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[i]);
    backtrack(i, cur, total + candidates[i]);
    cur.pop();
    backtrack(i + 1, cur, total);
  };

  backtrack(0, [], 0);

  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7)); // [[2, 2, 3], [7]]
console.log(combinationSum([2, 3, 5], 8)); // [[2, 2, 2, 2], [2, 3, 3], [3, 5]]
console.log(combinationSum([2], 1)); // []`,
    difficulty: 'medium',
    id: 'combination-sum',
    link: 'https://leetcode.com/problems/combination-sum/',
    name: 'Combination Sum',
    subject: 'combinations',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING]
  },
  {
    code: `const DigitToChar = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
}

const letterCombinations = (digits) => {
  const result = [];

  const backtrack = (i, curStr) => {
    if (curStr.length === digits.length) {
      result.push(curStr);
      return;
    }

    for (let char of DigitToChar[digits[i]]) {
      backtrack(i + 1, curStr + char);
    }
  };

  if (digits) {
    backtrack(0, '');
  }

  return result;
};

console.log(letterCombinations('23')); // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ['a', 'b', 'c']`,
    difficulty: 'medium',
    id: 'letter-combinations-of-a-phone-number',
    link: 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
    name: 'Letter Combinations of a Phone Number',
    subject: 'combinations',
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.BACKTRACKING]
  },
  {
    code: `const permute = (nums) => {
  const result = [];

  const backtrack = (i) => {
    if (i >= nums.length) {
      result.push([...nums]);
    }

    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      backtrack(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  backtrack(0);

  return result;
};

console.log(permute([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]]
console.log(permute([0, 1])); // [[0, 1], [1, 0]]
console.log(permute([1])); // [[1]]`,
    difficulty: 'medium',
    id: 'permutations',
    link: 'https://leetcode.com/problems/permutations/',
    name: 'Permutations',
    subject: 'permutations',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING]
  },
  {
    code: `const permuteUnique = (nums) => {
  const result = [];
  const permutation = [];
  const count = {};

  nums.forEach((num) => {
    count[num] = 1 + (count[num] ?? 0);
  });

  const backtrack = () => {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }

    Object.keys(count).forEach((num) => {
      if (count[num] > 0) {
        permutation.push(num);
        count[num]--;

        backtrack();

        permutation.pop();
        count[num]++;
      }
    });
  }

  backtrack(0);

  return result;
};

console.log(permuteUnique([1, 1, 2])); // [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
console.log(permuteUnique([1, 2, 3])); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]`,
    difficulty: 'medium',
    id: 'permutations-ii',
    link: 'https://leetcode.com/problems/permutations-ii/',
    name: 'Permutations II',
    subject: 'permutations',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING]
  },
  {
    code: `const combinationSum2 = (candidates, target) => {
  candidates.sort((a, b) => a - b);

  const result = [];

  const backtrack = (cur, position, target) => {
    if (target === 0) {
      result.push([...cur]);
    }

    if (target <= 0) {
      return;
    }

    let prev = -1;

    for (let i = position; i < candidates.length; i++) {
      if (candidates[i] === prev) {
        continue;
      }

      cur.push(candidates[i]);
      backtrack(cur, i + 1, target - candidates[i]);
      cur.pop();
      prev = candidates[i];
    }
  };

  backtrack([], 0, target);

  return result;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); // [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [[1, 2, 2], [5]]`,
    difficulty: 'medium',
    id: 'combination-sum-ii',
    link: 'https://leetcode.com/problems/combination-sum-ii/',
    name: 'Combination Sum II',
    subject: 'combinations',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING]
  },
  {
    code: `const exist = (board, word) => {
  const rowsCount = board.length;
  const columnsCount = board[0].length;

  const backtrack = (row, col, i) => {
    if (i === word.length) {
      return true;
    }

    if (row < 0
      || col < 0
      || row >= rowsCount
      || col >= columnsCount
      || word[i] !== board[row][col]
    ) {
      return false;
    }

    board[row][col] = '.';

    const result = backtrack(row + 1, col, i + 1)
      || backtrack(row - 1, col, i + 1)
      || backtrack(row, col + 1, i + 1)
      || backtrack(row, col - 1, i + 1);

    board[row][col] = word[i];

    return result;
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (backtrack(row, col, 0)) {
        return true;
      }
    }
  }

  return false;
};

console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED')); // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE')); // true
console.log(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB')); // false`,
    difficulty: 'medium',
    id: 'word-search',
    link: 'https://leetcode.com/problems/word-search/',
    name: 'Word Search',
    subject: 'backtracking',
    tags: [TaskTag.ARRAY, TaskTag.BACKTRACKING, TaskTag.MATRIX]
  },
  {
    code: `const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const partition = (s) => {
  const result = [];
  const part = [];

  const backtrack = (i) => {
    if (i >= s.length) {
      result.push([...part]);
      return;
    }

    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        part.push(s.slice(i, j + 1));
        backtrack(j + 1);
        part.pop();
      }
    }
  };

  backtrack(0);

  return result;
};

console.log(partition('aab', [['a', 'a', 'b'], ['aa', 'b']])); // true
console.log(partition('a', [['a']])); // false`,
    difficulty: 'medium',
    id: 'palindrome-partitioning',
    link: 'https://leetcode.com/problems/palindrome-partitioning/',
    name: 'Palindrome Partitioning',
    subject: 'backtracking',
    tags: [TaskTag.STRING, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.BACKTRACKING]
  },
  {
    code: `const numIslands = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  let result = 0;

  const dfs = (row, col) => {
    if (row < 0
      || row >= rowsCount
      || col < 0
      || col >= columnsCount
      || grid[row][col] === '0'
    ) {
      return;
    }

    grid[row][col] = '0';

    dfs(row + 1, col);    
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (grid[row][col] === '1') {
        result++;
        dfs(row, col);
      }
    }
  }

  return result;
};

console.log(numIslands([
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
])); // 1
console.log(numIslands([
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1']
])); // 3`,
    difficulty: 'medium',
    id: 'number-of-islands',
    link: 'https://leetcode.com/problems/number-of-islands/',
    name: 'Number of Islands',
    subject: 'matrix-depth-first-search',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.UNION_FIND,
      TaskTag.MATRIX
    ]
  },
  {
    code: `const maxAreaOfIsland = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  const visited = new Set();
  let result = 0;

  const dfs = (row, col) => {
    if (row < 0
      || row >= rowsCount
      || col < 0
      || col >= columnsCount
      || grid[row][col] === 0
      || visited.has(\`\${row}-\${col}\`)
    ) {
      return 0;
    }

    visited.add(\`\${row}-\${col}\`);

    return 1
      + dfs(row + 1, col)
      + dfs(row - 1, col)
      + dfs(row, col + 1)
      + dfs(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      result = Math.max(result, dfs(row, col));
    }
  }

  return result;
};

console.log(maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
])); // 6
console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]])); // 0`,
    difficulty: 'medium',
    id: 'max-area-of-island',
    link: 'https://leetcode.com/problems/max-area-of-island/',
    name: 'Max Area of Island',
    subject: 'matrix-depth-first-search',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.UNION_FIND,
      TaskTag.MATRIX
    ]
  },
  {
    code: `const pacificAtlantic = (heights) => {
  const rowsCount = heights.length;
  const columnsCount = heights[0].length;
  const pacific = new Set();
  const atlantic = new Set();
  const result = [];

  const dfs = (row, col, ocean, prevHeight) => {
    if (ocean.has(\`\${row},\${col}\`)
      || Math.min(row, col) < 0
      || row >= rowsCount
      || col >= columnsCount
      || heights[row][col] < prevHeight
    ) {
      return;
    }

    ocean.add(\`\${row},\${col}\`);

    dfs(row + 1, col, ocean, heights[row][col]);
    dfs(row - 1, col, ocean, heights[row][col]);
    dfs(row, col + 1, ocean, heights[row][col]);
    dfs(row, col - 1, ocean, heights[row][col]);
  };

  for (let col = 0; col < columnsCount; col++) {
    dfs(0, col, pacific, 0);
    dfs(rowsCount - 1, col, atlantic, 0);
  }

  for (let row = 0; row < rowsCount; row++) {
    dfs(row, 0, pacific, 0);
    dfs(row, columnsCount - 1, atlantic, 0);
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (pacific.has(\`\${row},\${col}\`) && atlantic.has(\`\${row},\${col}\`)) {
        result.push([row, col]);
      }
    }
  }

  return result;
};

console.log(pacificAtlantic([
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4 ,5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4]
])); // [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]]
console.log(pacificAtlantic([[1]])); // [[0, 0]]`,
    difficulty: 'medium',
    id: 'pacific-atlantic-water-flow',
    link: 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
    name: 'Pacific Atlantic Water Flow',
    subject: 'matrix-depth-first-search',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.MATRIX
    ]
  },
  {
    code: `const solve = (board) => {
  const rowsCount = board.length;
  const columnsCount = board[0].length;

  const capture = (row, col) => {
    if (Math.min(row, col) < 0
      || row >= rowsCount
      || col >= columnsCount
      || board[row][col] !== 'O'
    ) {
      return;
    }

    board[row][col] = 'T';

    capture(row + 1, col);
    capture(row - 1, col);
    capture(row, col + 1);
    capture(row, col - 1);
  };

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (board[row][col] === 'O'
        && ([0, rowsCount - 1].includes(row) || [0, columnsCount - 1].includes(col))) {
          capture(row, col);
        }
    }
  }

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (board[row][col] === 'O') {
        board[row][col] = 'X';
      }

      if (board[row][col] === 'T') {
        board[row][col] = 'O';
      }
    }
  }
};

const board1 = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X']
];
solve(board1);
console.log(board1);
/*
  [
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X']
  ]
*/

const board2 = [['X']];
solve(board2);
console.log(board2); // [['X']]`,
    difficulty: 'medium',
    id: 'surrounded-regions',
    link: 'https://leetcode.com/problems/surrounded-regions/',
    name: 'Surrounded Regions',
    subject: 'matrix-depth-first-search',
    tags: [
      TaskTag.ARRAY,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.UNION_FIND,
      TaskTag.MATRIX
    ]
  },
  {
    code: `const DIRECTIONS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

class MyListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  length = 0;

  constructor() {
    this.head = new MyListNode(null);
    this.tail = new MyListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new MyListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.length++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.length--;

    return value;
  }
}

const shortestPathBinaryMatrix = (grid) => {
  const n = grid.length;
  const queue = new MyQueue();
  const visited = new Set(\`\${0},\${0}\`);
  queue.enqueue([0, 0, 1]);

  while (queue.length) {
    const [row, col, length] = queue.dequeue();
    
    if (Math.min(row, col) < 0
      || Math.max(row, col) >= n
      || grid[row][col]
    ) {
      continue;
    }

    if (row === n - 1 && col === n - 1) {
      return length;
    }
    
    for (const [dr, dc] of DIRECTIONS) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (!visited.has(\`\${newRow},\${newCol}\`)) {
        queue.enqueue([newRow, newCol, length + 1]);
        visited.add(\`\${newRow},\${newCol}\`);
      }
    }
  }

  return -1;
};

console.log(shortestPathBinaryMatrix([
  [0, 1],
  [1, 0]
])); // 2
console.log(shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
])); // 4`,
    difficulty: 'medium',
    id: 'shortest-path-in-binary-matrix',
    link: 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
    name: 'Shortest Path in Binary Matrix',
    subject: 'matrix-breadth-first-search',
    tags: [TaskTag.ARRAY, TaskTag.BREADTH_FIRST_SEARCH, TaskTag.MATRIX]
  },
  {
    code: `const DIRECTIONS = [[0, 1], [0, -1], [1, 0], [-1, 0]];

class MyListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class MyQueue {
  length = 0;

  constructor() {
    this.head = new MyListNode(null);
    this.tail = new MyListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  enqueue(value) {
    const node = new MyListNode(value, this.tail.prev, this.tail);
    node.prev.next = node;
    node.next.prev = node;

    this.length++;
  }

  dequeue() {
    const { value } = this.head.next;

    this.head.next = this.head.next.next;
    this.head.next.prev = this.head;

    this.length--;

    return value;
  }
}

const orangesRotting = (grid) => {
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  const queue = new MyQueue();
  let time = 0;
  let freshCount = 0;

  for (let row = 0; row < rowsCount; row++) {
    for (let col = 0; col < columnsCount; col++) {
      if (grid[row][col] === 1) {
        freshCount++;
      }
      
      if (grid[row][col] === 2) {
        queue.enqueue([row, col]);
      }
    }
  }

  while (queue.length && freshCount) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const [row, col] = queue.dequeue();

      for (const [dr, dc] of DIRECTIONS) {
        const newRow = row + dr;
        const newCol = col + dc;

        if (Math.min(newRow, newCol) < 0
          || newRow >= rowsCount
          || newCol >= columnsCount
          || grid[newRow][newCol] !== 1
        ) {
          continue;
        }

        grid[newRow][newCol] = 2;
        queue.enqueue([newRow, newCol]);
        freshCount--;
      }
    }

    time++;
  }

  return freshCount ? -1 : time;
};

console.log(orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
])); // 4
console.log(orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
])); // -1
console.log(orangesRotting([
  [0, 2]
])); // 0`,
    difficulty: 'medium',
    id: 'rotting-oranges',
    link: 'https://leetcode.com/problems/rotting-oranges/',
    name: 'Rotting Oranges',
    subject: 'matrix-breadth-first-search',
    tags: [TaskTag.ARRAY, TaskTag.BREADTH_FIRST_SEARCH, TaskTag.MATRIX]
  },
  {
    code: `const cloneGraph = (node) => {
  const OldToNew = new Map();

  const dfs = (node) => {
    if (OldToNew.has(node)) {
      return OldToNew.get(node);
    }

    const copy = new Node(node.val);
    OldToNew.set(node, copy);

    for (const neighbor of node.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }

    return copy;
  };

  return node ? dfs(node) : node;
};

const node1 = { val: 1, neighbors: [] };
const node2 = { val: 2, neighbors: [] };
const node3 = { val: 3, neighbors: [] };
const node4 = { val: 4, neighbors: [] };

node1.neighbors.push(node2, node4);
node2.neighbors.push(node1, node3);
node3.neighbors.push(node2, node4);
node4.neighbors.push(node1, node3);

console.log(cloneGraph(node1));
console.log(cloneGraph({ val: 1, neighbors: [] })); // { val: 1, neighbors: [] }
console.log(cloneGraph(null)); // null`,
    difficulty: 'medium',
    id: 'clone-graph',
    link: 'https://leetcode.com/problems/clone-graph/',
    name: 'Clone Graph',
    subject: 'adjacency-list',
    tags: [
      TaskTag.HASH_TABLE,
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.GRAPH
    ]
  },
  {
    code: `const canFinish = (numCourses, prerequisites) => {
  const preMap = new Map();

  for (let course = 0; course < numCourses; course++) {
    preMap.set(course, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    preMap.get(course).push(prerequisite);
  }

  const visited = new Set();

  const dfs = (course) => {
    if (visited.has(course)) {
      return false;
    }

    if (preMap.get(course).length === 0) {
      return true;
    }

    visited.add(course);

    for (const prerequisite of preMap.get(course)) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }

    visited.delete(course);
    preMap.set(course, []);

    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return false;
    }
  }

  return true;
};

console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false`,
    difficulty: 'medium',
    id: 'course-schedule',
    link: 'https://leetcode.com/problems/course-schedule/',
    name: 'Course Schedule',
    subject: 'adjacency-list',
    tags: [
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.GRAPH,
      TaskTag.TOPOLOGICAL_SORT
    ]
  },
  {
    code: `const findOrder = (numCourses, prerequisites) => {
  const preMap = new Map();

  for (let course = 0; course < numCourses; course++) {
    preMap.set(course, []);
  }

  for (const [course, prerequisite] of prerequisites) {
    preMap.get(course).push(prerequisite);
  }

  const visited = new Set();
  const cycle = new Set();
  const result = [];

  const dfs = (course) => {
    if (cycle.has(course)) {
      return false;
    }

    if (visited.has(course)) {
      return true;
    }

    cycle.add(course);

    for (const prerequisite of preMap.get(course)) {
      if (!dfs(prerequisite)) {
        return false;
      }
    }

    cycle.delete(course);
    visited.add(course);
    result.push(course);

    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return [];
    }
  }

  return result;
};

console.log(findOrder(2, [[1, 0]])); // [0, 1]
console.log(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])); // [0, 1, 2, 3]
console.log(findOrder(1, [])); // [0]`,
    difficulty: 'medium',
    id: 'course-schedule-ii',
    link: 'https://leetcode.com/problems/course-schedule-ii/',
    name: 'Course Schedule II',
    subject: 'adjacency-list',
    tags: [
      TaskTag.DEPTH_FIRST_SEARCH,
      TaskTag.BREADTH_FIRST_SEARCH,
      TaskTag.GRAPH,
      TaskTag.TOPOLOGICAL_SORT
    ]
  }
];
