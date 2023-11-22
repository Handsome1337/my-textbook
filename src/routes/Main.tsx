import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Main(): ReactElement {
  return (
    <section>
      <ul className="list-disc">
        <li>
          <Link
            to="subjects"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Список тем
          </Link>
        </li>
        <li>
          <Link
            to="tasks"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Список задач
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Main;
