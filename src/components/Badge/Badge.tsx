import type { ReactElement } from 'react';

type Props = {
  type: 'easy' | 'medium' | 'hard' | string;
};

function Badge({ type }: Props): ReactElement {
  switch (type) {
    case 'easy': {
      return (
        <span className="mx-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">
          Easy
        </span>
      );
    }
    case 'medium': {
      return (
        <span className="mx-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset">
          Medium
        </span>
      );
    }
    case 'hard': {
      return (
        <span className="mx-2 inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset">
          Hard
        </span>
      );
    }
    default: {
      return (
        <span className="mr-1 inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset">
          {type}
        </span>
      );
    }
  }
}

export default Badge;
