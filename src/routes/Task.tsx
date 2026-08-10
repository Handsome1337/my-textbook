import { Link, useParams } from 'react-router-dom';
import { Badge, Code, TaskSolution } from 'components';
import { TASKS } from 'utils/constants';
import type { ReactElement } from 'react';
import type { TaskConfig } from 'types';

const WRONG_TASK_ID_TITLE = 'Такой задачи нет!';

function Task(): ReactElement {
  const { taskId } = useParams();

  const taskIndex = TASKS.findIndex(({ id, code }) => id === taskId && code);
  const task = taskIndex === -1 ? null : (TASKS[taskIndex] as Required<TaskConfig>);
  const prevTask =
    taskIndex === -1
      ? null
      : TASKS.slice(0, taskIndex)
          .reverse()
          .find(({ code }) => code);
  const nextTask =
    taskIndex === -1 ? null : TASKS.slice(taskIndex + 1).find(({ code }) => code);

  return (
    <>
      <article>
        <h1 className="font-bold">
          {task?.name ? (
            <>
              <a
                className="hover:text-blue-500 focus-visible:text-blue-500 focus-visible:outline-0"
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
        {task ? (
          <>
            <p className="mb-2">
              Кликните по заголовку, чтобы перейти к задаче. Попробуйте решить задачу
              самостоятельно, затем можете сравнить с решением.
            </p>
            <details>
              <summary>Решение</summary>
              <TaskSolution taskId={task.id} />
              <Code value={task.code} />
            </details>
          </>
        ) : (
          <Link
            to="/tasks"
            className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
          >
            Перейти к списку задач
          </Link>
        )}
      </article>
      <div className="flex flex-wrap justify-between">
        {prevTask && (
          <Link
            to={`/tasks/${prevTask.id}`}
            className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
          >
            &lt; {prevTask.name}
          </Link>
        )}
        {nextTask && (
          <Link
            to={`/tasks/${nextTask.id}`}
            className={`hover:font-semibold focus-visible:font-semibold focus-visible:outline-0 ${
              taskIndex > 0 ? '' : 'ml-auto'
            } text-blue-500`}
          >
            {nextTask.name} &gt;
          </Link>
        )}
      </div>
    </>
  );
}

export default Task;
