import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function ErrorPage(): ReactElement {
  return (
    <main>
      <h1>Такой страницы нет!</h1>
      <Link to="/">Перейти на главную</Link>
    </main>
  );
}

export default ErrorPage;
