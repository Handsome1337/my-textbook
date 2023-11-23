import { Link } from 'react-router-dom';
import { TASKS } from 'utils/constants';
import type { ReactElement } from 'react';

function Tasks(): ReactElement {
  return (
    <div>
      <ol className="list-decimal">
        {TASKS.map(({ id, name }) => (
          <li key={id}>
            <Link
              to={id}
              className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
            >
              {name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tasks;
