import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function ErrorPage(): ReactElement {
  return (
    <main className="container mx-auto px-2 py-4">
      <h1 className="font-bold text-red-900">Такой страницы нет!</h1>
      <Link
        to="/"
        className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
      >
        Перейти на главную
      </Link>
    </main>
  );
}

export default ErrorPage;
