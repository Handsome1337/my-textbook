import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const TREES_TASKS: TaskConfig[] = [
  {
    code: `// Время O(h), память O(h), h - высота дерева
const searchBST = (root, val) => {
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
    code: `// Время O(h), память O(h), h - высота дерева
const insertIntoBST = (root, val) => {
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
    code: `// Время O(h), память O(h), h - высота дерева
const deleteNode = (root, key) => {
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
    code: `// Время O(n), память O(n)
const inorderTraversal = (root) => {
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
    code: `// Время O(n), память O(n)
const kthSmallest = (root, k) => {
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
    code: `// Время O(n^2), память O(h), h - высота дерева
const buildTree = (preorder, inorder) => {
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
    code: `// Время O(n), память O(n)
const preorderTraversal = (root) => {
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
    code: `// Время O(n), память O(n)
const postorderTraversal = (root) => {
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
    code: `// Время O(n), память O(n)
class ListNode {
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
    code: `// Время O(n), память O(w), w - максимальная ширина дерева
class ListNode {
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
    code: `// Время O(n), память O(n)
const invertTree = (root) => {
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
    code: `// Время O(n), память O(n)
const maxDepth = (root) => {
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
    code: `// Время O(n), память O(n)
const diameterOfBinaryTree = (root) => {
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
    code: `// Время O(n), память O(n)
const isBalanced = (root) => {
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
    code: `// Время O(min(p, q)), память O(min(p, q))
const isSameTree = (p, q) => {
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
    code: `// Время O(n ∗ m), память O(n), m - количество узлов в поддереве
const isSameTree = (root, root2) => {
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
    code: `// Время O(n), память O(1)
const lowestCommonAncestor = (root, p, q) => {
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
    code: `// Время O(n), память O(n)
const goodNodes = (root) => {
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
    code: `// Время O(n), память O(n)
const isValidBST = (root) => {
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
  }
];
