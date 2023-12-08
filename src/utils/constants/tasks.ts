import type { SubjectName } from 'utils/constants/subject';

export enum TaskTag {
  ARRAY = 'Array',
  DESIGN = 'Design',
  DOUBLY_LINKED_LIST = 'Doubly-Linked List',
  HASH_FUNCTION = 'Hash Function',
  HASH_TABLE = 'Hash Table',
  LINKED_LIST = 'Linked List',
  MATRIX = 'Matrix',
  PREFIX_SUM = 'Prefix Sum',
  SIMULATION = 'Simulation',
  SORTING = 'Sorting',
  STACK = 'Stack',
  STRING = 'String',
  TWO_POINTERS = 'Two Pointers'
}

export type TaskConfig = {
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  id: string;
  link: string;
  name: string;
  subject?: keyof typeof SubjectName;
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
    subject: 'hash',
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
    subject: 'hash',
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
console.log(myNumArray.sumRange(0 , 2)); // 1
console.log(myNumArray.sumRange(2, 5)); // -1
console.log(myNumArray.sumRange(0, 5)); // -3`,
    difficulty: 'easy',
    id: 'range-sum-query-immutable',
    link: 'https://leetcode.com/problems/range-sum-query-immutable/',
    name: 'Range Sum Query - Immutable',
    subject: 'prefix',
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
    subject: 'prefix',
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
    subject: 'prefix',
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
    subject: 'prefix',
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
    subject: 'prefix',
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
    tags: [TaskTag.HASH_TABLE, TaskTag.STRING, TaskTag.SORTING]
  },
  {
    code: `const calPoints = (operations) => {
  const record = [];

  operations.forEach((operation) => {
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
  });

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
  }
];
