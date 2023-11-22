import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Subjects(): ReactElement {
  return (
    <section>
      <ul className="list-disc">
        <li>
          <Link
            to="subject1"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Тема 1
          </Link>
        </li>
        <li>
          <Link
            to="subject2"
            className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
          >
            Тема 2
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Subjects;
