import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Subjects(): ReactElement {
  return (
    <section>
      <ul>
        <li>
          <Link to="subject1">Тема 1</Link>
        </li>
        <li>
          <Link to="subject2">Тема 2</Link>
        </li>
      </ul>
    </section>
  );
}

export default Subjects;
