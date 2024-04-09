import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const INTERVALS_TASKS: TaskConfig[] = [
  {
    code: `const insert = (intervals, newInterval) => {
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }

    if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
    }
  }

  result.push(newInterval);
  return result;
};

console.log(insert([[1, 3], [6, 9]], [2, 5])); // [[1, 5], [6, 9]]
console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])); // [[1, 2], [3, 10], [12, 16]]`,
    difficulty: 'medium',
    id: 'insert-interval',
    link: 'https://leetcode.com/problems/insert-interval/',
    name: 'Insert Interval',
    subject: 'intervals',
    tags: [TaskTag.ARRAY]
  },
  {
    code: `const merge = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (i = 1; i < intervals.length; i++) {
    const lastEnd = result.at(-1)[1];

    if (lastEnd < intervals[i][0]) {
      result.push(intervals[i]);
    } else {
      result.at(-1)[1] = Math.max(lastEnd, intervals[i][1]);
    }
  }

  return result;
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
console.log(merge([[1, 4], [4, 5]])); // [[1, 5]]`,
    difficulty: 'medium',
    id: 'merge-intervals',
    link: 'https://leetcode.com/problems/merge-intervals/',
    name: 'Merge Intervals',
    subject: 'intervals',
    tags: [TaskTag.ARRAY, TaskTag.SORTING]
  },
  {
    code: `const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]);

  let result = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= prevEnd) {
      prevEnd = intervals[i][1];
    } else {
      result++;
      prevEnd = Math.min(prevEnd, intervals[i][1]);
    }
  }

  return result;
};

console.log(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])); // 1
console.log(eraseOverlapIntervals([[1, 2], [1, 2], [1, 2]])); // 2
console.log(eraseOverlapIntervals([[1, 2], [2, 3]])); // 0`,
    difficulty: 'medium',
    id: 'non-overlapping-intervals',
    link: 'https://leetcode.com/problems/non-overlapping-intervals/',
    name: 'Non-overlapping Intervals',
    subject: 'intervals',
    tags: [TaskTag.ARRAY, TaskTag.DYNAMIC_PROGRAMMING, TaskTag.GREEDY, TaskTag.SORTING]
  }
];
