import { Link, useParams } from 'react-router-dom';
import { Code } from 'components';
import { TASKS } from 'utils/constants';
import type { ReactElement } from 'react';

const WRONG_TASK_ID_TITLE = 'Такой задачи нет!';

function Task(): ReactElement {
  const { taskId } = useParams();

  const task = TASKS.find(({ id }) => id === taskId);

  return (
    <article>
      <h1 className="font-bold mb-2">{task?.name ?? WRONG_TASK_ID_TITLE}</h1>
      {task ? (
        <Code value="console.log('Hello world!');" />
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
