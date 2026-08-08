import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Main(): ReactElement {
  return (
    <ul className="list-disc">
      <li>
        <Link
          to="subjects"
          className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
        >
          Список тем
        </Link>
      </li>
      <li>
        <Link
          to="tasks"
          className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
        >
          Список задач
        </Link>
      </li>
    </ul>
  );
}

export default Main;
