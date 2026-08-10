import { Link, useParams } from 'react-router-dom';
import { PrevAndNextSubject, SubjectName, TASKS } from 'utils/constants';
import { getIsSubjectIdCorrect } from 'utils/helpers';
import { Badge, Code, SubjectContent, TaskSolution } from 'components';
import type { ReactElement } from 'react';
import type { TaskConfig } from 'types';

const WRONG_SUBJECT_ID_TITLE = 'Такой темы нет!';

function Subject(): ReactElement {
  const { subjectId } = useParams();

  const isSubjectIdCorrect = getIsSubjectIdCorrect(subjectId);
  const title = isSubjectIdCorrect ? SubjectName[subjectId] : WRONG_SUBJECT_ID_TITLE;
  const { tasks, additionalTasks } = TASKS.reduce<{
    tasks: Required<TaskConfig>[];
    additionalTasks: TaskConfig[];
  }>(
    (result, task) => {
      if (task.subject === subjectId) {
        (task.code ? result.tasks : result.additionalTasks).push(task);
      }

      return result;
    },
    {
      tasks: [],
      additionalTasks: []
    }
  );
  const prevSubjectId = isSubjectIdCorrect
    ? PrevAndNextSubject[subjectId].prev
    : undefined;
  const nextSubjectId = isSubjectIdCorrect
    ? PrevAndNextSubject[subjectId].next
    : undefined;

  return (
    <article>
      <h1 className="mb-2 font-bold">{title}</h1>
      {isSubjectIdCorrect ? (
        <>
          <SubjectContent subjectId={subjectId} />
          {tasks.length > 0 && (
            <>
              <hr className="mt-8 h-px border-0 bg-gray-300" />
              <p className="mt-2">
                Кликните по заголовку, чтобы перейти к задаче. Попробуйте решить задачу
                самостоятельно, затем можете сравнить с решением.
              </p>
              <h2 className="mb-2">Задачи по теме:</h2>
              <ul>
                {tasks.map(({ code, difficulty, id, name, link }) => (
                  <li key={id}>
                    <h3 className="font-bold">
                      <a
                        className="hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-0"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {name}
                      </a>
                      <Badge type={difficulty} />
                    </h3>
                    <details className="px-2.5">
                      <summary>Решение</summary>
                      <TaskSolution taskId={id} />
                      <Code value={code} />
                    </details>
                  </li>
                ))}
              </ul>
            </>
          )}
          {additionalTasks.length > 0 && (
            <>
              <hr className="mt-1 h-px border-0 bg-gray-300" />
              <h2 className="my-2">Дополнительные задачи по теме:</h2>
              <ul className="list-disc pl-3.5">
                {additionalTasks.map(({ difficulty, id, name, link }) => (
                  <li key={id}>
                    <h3 className="font-bold">
                      <a
                        className="hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-0"
                        href={link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {name}
                      </a>
                      <Badge type={difficulty} />
                    </h3>
                  </li>
                ))}
              </ul>
            </>
          )}
          <div className="flex flex-wrap justify-between">
            {prevSubjectId && (
              <Link
                to={`/subjects/${prevSubjectId}`}
                className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
              >
                &lt; {SubjectName[prevSubjectId]}
              </Link>
            )}
            {nextSubjectId && (
              <Link
                to={`/subjects/${nextSubjectId}`}
                className={`hover:font-semibold focus-visible:font-semibold focus-visible:outline-0 ${
                  prevSubjectId ? '' : 'ml-auto'
                } text-blue-500`}
              >
                {SubjectName[nextSubjectId]} &gt;
              </Link>
            )}
          </div>
        </>
      ) : (
        <Link
          to="/subjects"
          className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
        >
          Перейти к списку тем
        </Link>
      )}
    </article>
  );
}

export default Subject;
