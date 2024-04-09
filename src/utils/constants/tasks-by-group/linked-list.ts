import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const LINKED_LIST_TASKS: TaskConfig[] = [
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
  }
];
