import { SubjectName } from 'utils/constants';

export function getIsSubjectIdCorrect(
  id: string | undefined
): id is keyof typeof SubjectName {
  return !!SubjectName[id as keyof typeof SubjectName];
}
