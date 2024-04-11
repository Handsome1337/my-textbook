import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const BACKTRACKING_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(n)
const hasPathSum = (root, targetSum) => {
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
    code: `// Время O(n ∗ 2^n), память O(n ∗ 2^n)
const subsets = (nums) => {
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
    code: `// Время O(n ∗ 2^n), память O(n ∗ 2^n)
const subsetsWithDup = (nums) => {
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
    code: `// Время O(k ∗ n^k), память O(k)
const combine = (n, k) => {
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
    code: `// Время O(2 ^ target), память O(k), k - длина самого длинного сочетания
const combinationSum = (candidates, target) => {
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
    code: `// Время O(n ∗ 4^n), память O(n)
const DigitToChar = {
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
    code: `// Время O(n^2 ∗ n!), память O(n!)
const permute = (nums) => {
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
    code: `// Время O(n ∗ n!), память O(n)
const permuteUnique = (nums) => {
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
    code: `// Время O(2 ^ n), память O(n)
const combinationSum2 = (candidates, target) => {
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
    code: `// Время O(n ∗ m ∗ 4^l), память O(l), n и m - размеры матрицы, l - длина word
const exist = (board, word) => {
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
    code: `// Время O(n ∗ 2^n), память O(n)
const isPalindrome = (str, left, right) => {
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
  }
];
