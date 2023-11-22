import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Tasks(): ReactElement {
  return (
    <section>
      <ul className="list-decimal">
        <li>
          <Link
            to="task1"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Задача 1
          </Link>
        </li>
        <li>
          <Link
            to="task2"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Задача 2
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Tasks;
