import type { SubjectName } from 'utils/constants/subject';

export enum TaskTag {
  ARRAY = 'Array',
  BINARY_SEARCH = 'Binary Search',
  DATA_STREAM = 'Data Stream',
  DESIGN = 'Design',
  DOUBLY_LINKED_LIST = 'Doubly-Linked List',
  DYNAMIC_PROGRAMMING = 'Dynamic Programming',
  HASH_FUNCTION = 'Hash Function',
  HASH_TABLE = 'Hash Table',
  INTERACTIVE = 'Interactive',
  LINKED_LIST = 'Linked List',
  MATH = 'Math',
  MATRIX = 'Matrix',
  MONOTONIC_STACK = 'Monotonic Stack',
  PREFIX_SUM = 'Prefix Sum',
  QUEUE = 'Queue',
  RECURSION = 'Recursion',
  SIMULATION = 'Simulation',
  SLIDING_WINDOW = 'Sliding Window',
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
console.log(myNumArray.sumRange(0 , 2)); // 1
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
console.log(detectCycle({ val: 1, next: null })) // null`,
    difficulty: 'medium',
    id: 'linked-list-cycle-ii',
    link: 'https://leetcode.com/problems/linked-list-cycle-ii/',
    name: 'Linked List Cycle II',
    subject: 'fast-and-slow-pointers',
    tags: [TaskTag.HASH_TABLE, TaskTag.LINKED_LIST, TaskTag.TWO_POINTERS]
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
  }
];
