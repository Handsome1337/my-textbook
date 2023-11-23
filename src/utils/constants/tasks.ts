import type { SubjectName } from 'utils/constants/subject';

type TaskConfig = {
  code: string;
  id: string;
  link: string;
  messages: string[];
  name: string;
  subject: keyof typeof SubjectName;
};

export const TASKS: TaskConfig[] = [
  {
    code: "console.log('hello');",
    id: 'remove-element',
    link: 'https://leetcode.com/problems/remove-element/',
    messages: [],
    name: 'Remove Element',
    subject: 'arrays'
  },
  {
    code: "console.log('hello');",
    id: 'remove-duplicates-from-sorted-array',
    link: 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
    messages: [],
    name: 'Remove Duplicates from Sorted Array',
    subject: 'arrays'
  },
  {
    code: "console.log('hello');",
    id: 'concatenation-of-array',
    link: 'https://leetcode.com/problems/concatenation-of-array/',
    messages: [],
    name: 'Concatenation of Array',
    subject: 'arrays'
  }
];