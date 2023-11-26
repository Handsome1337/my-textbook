import { Link } from 'react-router-dom';
import { TASKS } from 'utils/constants';
import { Badge } from 'components';
import type { ReactElement } from 'react';

function Tasks(): ReactElement {
  return (
    <div>
      <ol className="list-decimal">
        {TASKS.map(({ difficulty, id, name }) => (
          <li key={id}>
            <Link
              to={id}
              className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 mr-2 text-blue-500"
            >
              {name}
            </Link>
            <Badge type={difficulty} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tasks;
