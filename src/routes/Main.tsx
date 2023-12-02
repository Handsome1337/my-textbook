import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Main(): ReactElement {
  return (
    <ul className="list-disc">
      <li>
        <Link
          to="subjects"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          Список тем
        </Link>
      </li>
      <li>
        <Link
          to="tasks"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          Список задач
        </Link>
      </li>
    </ul>
  );
}

export default Main;
