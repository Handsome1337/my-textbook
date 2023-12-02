import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import { Arrays, Hash, Objects, PrefixSums } from './components';

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
    default: {
      return null;
    }
  }
}

export default SubjectContent;
