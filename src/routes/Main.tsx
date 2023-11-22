import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function Main(): ReactElement {
  return (
    <section>
      <ul>
        <li>
          <Link to="subjects">Список тем</Link>
        </li>
        <li>
          <Link to="tasks">Список задач</Link>
        </li>
      </ul>
    </section>
  );
}

export default Main;
