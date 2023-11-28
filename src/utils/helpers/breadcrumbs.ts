import { SubjectName, TASKS } from 'utils/constants';
import type { PathMatch } from 'react-router-dom';
import { getIsSubjectIdCorrect } from './typeguards';

export function getBreadcrumbs({
  subjectId,
  subjectsMatch,
  taskId,
  tasksMatch
}: {
  subjectId: string | undefined;
  subjectsMatch: PathMatch | null;
  taskId: string | undefined;
  tasksMatch: PathMatch | null;
}): { title: string; to: string }[] {
  const crumbs = [{ title: 'Главная', to: '/' }];

  if (subjectsMatch || subjectId) {
    crumbs.push({ title: 'Список тем', to: '/subjects' });
  }

  if (getIsSubjectIdCorrect(subjectId)) {
    crumbs.push({ title: SubjectName[subjectId], to: `/subjects/${subjectId}` });
  }

  if (tasksMatch || taskId) {
    crumbs.push({ title: 'Список задач', to: '/tasks' });
  }

  if (taskId) {
    const currentTask = TASKS.find((task) => task.id === taskId);

    if (currentTask?.name) {
      crumbs.push({
        title: currentTask.name,
        to: `/tasks/${taskId}`
      });
    }
  }

  return crumbs;
}
