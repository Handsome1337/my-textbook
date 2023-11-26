import type { ReactElement } from 'react';

type Props = {
  type: 'easy' | 'medium' | 'hard';
};

function Badge({ type }: Props): ReactElement {
  switch (type) {
    case 'easy': {
      return (
        <span className="bg-green-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-green-600/20 rounded-md text-xs text-green-700">
          Easy
        </span>
      );
    }
    case 'medium': {
      return (
        <span className="bg-yellow-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-yellow-600/20 rounded-md text-xs text-yellow-800">
          Medium
        </span>
      );
    }
    default: {
      return (
        <span className="bg-red-50 font-medium inline-flex items-center px-2 py-1 ring-1 ring-inset ring-red-600/10 rounded-md text-xs text-red-700">
          Hard
        </span>
      );
    }
  }
}

export default Badge;
