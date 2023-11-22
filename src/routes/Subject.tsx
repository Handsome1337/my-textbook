import type { ReactElement } from 'react';

function Subject(): ReactElement {
  return (
    <article>
      <ul>
        <li>
          <h3>Задача 1</h3>
          <details>
            <summary>Решение</summary>
            <p>Код</p>
          </details>
        </li>
        <li>
          <h3>Задача 2</h3>
          <details>
            <summary>Решение</summary>
            <p>Код</p>
          </details>
        </li>
      </ul>
    </article>
  );
}

export default Subject;
