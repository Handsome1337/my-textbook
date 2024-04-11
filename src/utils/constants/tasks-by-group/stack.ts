import { TaskTag } from 'types';
import type { TaskConfig } from 'types';

export const STACK_TASKS: TaskConfig[] = [
  {
    code: `// Время O(n), память O(n)
const calPoints = (operations) => {
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
    code: `// Время O(n), память O(n)
const CloseToOpenBracket = {
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
    code: `// Время O(n), память O(n)
const evalRPN = (tokens) => {
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
    code: `// Время O(n), память O(n)
const dailyTemperatures = (temperatures) => {
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
    code: `// Время O(n ∗ log n), память O(n)
const carFleet = (target, position, speed) => {
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
  }
];
