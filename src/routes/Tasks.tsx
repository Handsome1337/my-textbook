import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Tasks(): ReactElement {
  return (
    <section>
      <ul>
        <li>
          <Link to="task1">Задача 1</Link>
        </li>
        <li>
          <Link to="task2">Задача 2</Link>
        </li>
      </ul>
    </section>
  );
}

export default Tasks;
