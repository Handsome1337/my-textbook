import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const GRAPHS_TASKS: TaskConfig[] = [
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
