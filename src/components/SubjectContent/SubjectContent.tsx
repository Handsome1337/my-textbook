import type { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';
import { Arrays, Objects } from './components';

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
    default: {
      return null;
    }
  }
}

export default SubjectContent;
