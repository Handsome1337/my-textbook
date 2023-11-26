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
      <h1 className="font-bold mb-2">
        {task?.name ? (
          <>
            <a
              className="focus-visible:text-blue-500 hover:text-blue-500 focus-visible:outline-0 mr-2"
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
        <details>
          <summary>Решение</summary>
          <TaskSolution taskId={taskId} />
          <Code value={task.code} />
        </details>
      ) : (
        <Link
          to="/tasks"
          className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
        >
          Перейти к списку задач
        </Link>
      )}
    </article>
  );
}

export default Task;
