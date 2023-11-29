import { Link, useParams } from 'react-router-dom';
import { Badge, Code, TaskSolution } from 'components';
import { TASKS } from 'utils/constants';
import type { ReactElement } from 'react';

const WRONG_TASK_ID_TITLE = 'Такой задачи нет!';

function Task(): ReactElement {
  const { taskId } = useParams();

  const task = TASKS.find(({ id }) => id === taskId);

  return (
    <article>
      <h1 className="font-bold">
        {task?.name ? (
          <>
            <a
              className="focus-visible:text-blue-500 focus-visible:outline-0 hover:text-blue-500 mr-2"
              href={task.link}
              rel="noreferrer"
              target="_blank"
            >
              {task.name}
            </a>
            <Badge type={task.difficulty} />
          </>
        ) : (
          WRONG_TASK_ID_TITLE
        )}
      </h1>
      {task && taskId ? (
        <>
          <p className="mb-2">
            Кликните по заголовку, чтобы перейти к задаче. Попробуйте решить задачу
            самостоятельно, затем можете сравнить с решением.
          </p>
          <details>
            <summary>Решение</summary>
            <TaskSolution taskId={taskId} />
            <Code value={task.code} />
          </details>
        </>
      ) : (
        <Link
          to="/tasks"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          Перейти к списку задач
        </Link>
      )}
    </article>
  );
}

export default Task;
