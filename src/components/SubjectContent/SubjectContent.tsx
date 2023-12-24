import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import {
  Arrays,
  BinarySearch,
  Hash,
  Objects,
  PrefixSums,
  SlidingWindow,
  Stack,
  TwoPointers
} from './components';

type Props = {
  subjectId: keyof typeof SubjectName;
};

function SubjectContent({ subjectId }: Props): ReactElement | null {
  switch (subjectId) {
    case 'arrays': {
      return <Arrays />;
    }
    case 'objects': {
      return <Objects />;
    }
    case 'hash-implementation': {
      return <Hash />;
    }
    case 'prefix-sums': {
      return <PrefixSums />;
    }
    case 'stack': {
      return <Stack />;
    }
    case 'two-pointers': {
      return <TwoPointers />;
    }
    case 'sliding-window': {
      return <SlidingWindow />;
    }
    case 'binary': {
      return <BinarySearch />;
    }
    default: {
      return null;
    }
  }
}

export default SubjectContent;
