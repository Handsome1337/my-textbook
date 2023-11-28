import { Link } from 'react-router-dom';
import { TASKS } from 'utils/constants';
import { Badge } from 'components';
import type { ReactElement } from 'react';

function Tasks(): ReactElement {
  return (
    <div>
      <ol className="list-decimal">
        {TASKS.map(({ difficulty, id, name, tags }) => (
          <li key={id}>
            <div>
              <Link
                to={id}
                className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold mr-2 text-blue-500"
              >
                {name}
              </Link>
              <Badge type={difficulty} />
            </div>
            {tags.map((tag) => (
              <Badge key={tag} type={tag} />
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Tasks;
