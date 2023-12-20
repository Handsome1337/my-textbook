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
    case 'hash': {
      return <Hash />;
    }
    case 'prefix': {
      return <PrefixSums />;
    }
    case 'stack': {
      return <Stack />;
    }
    case 'pointers': {
      return <TwoPointers />;
    }
    case 'sliding': {
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
