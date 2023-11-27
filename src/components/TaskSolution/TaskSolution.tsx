import type { ReactElement } from 'react';
import {
  ConcatenationOfArray,
  ContainsDuplicate,
  RemoveDuplicatesFromSortedArray,
  RemoveElement,
  TwoSum
} from './components';

type Props = {
  taskId: string;
};

function TaskSolution({ taskId }: Props): ReactElement | null {
  switch (taskId) {
    case 'remove-element': {
      return <RemoveElement />;
    }
    case 'remove-duplicates-from-sorted-array': {
      return <RemoveDuplicatesFromSortedArray />;
    }
    case 'concatenation-of-array': {
      return <ConcatenationOfArray />;
    }
    case 'contains-duplicate': {
      return <ContainsDuplicate />;
    }
    case 'two-sum': {
      return <TwoSum />;
    }
    default: {
      return null;
    }
  }
}

export default TaskSolution;
