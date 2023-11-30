import type { SubjectName } from 'utils/constants/subject';

export enum TaskTag {
  ARRAY = 'Array',
  DESIGN = 'Design',
  DOUBLY_LINKED_LIST = 'Doubly-Linked List',
  HASH_FUNCTION = 'Hash Function',
  HASH_TABLE = 'Hash Table',
  LINKED_LIST = 'Linked List',
  SORTING = 'Sorting',
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
    subject: 'hash',
    tags: [
      TaskTag.ARRAY,
      TaskTag.HASH_TABLE,
      TaskTag.LINKED_LIST,
      TaskTag.DESIGN,
      TaskTag.HASH_FUNCTION
    ]
  }
];
