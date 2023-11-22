import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function ErrorPage(): ReactElement {
  return (
    <main className="container mx-auto py-4">
      <h1 className="font-bold text-red-900">Такой страницы нет!</h1>
      <Link
        to="/"
        className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
      >
        Перейти на главную
      </Link>
    </main>
  );
}

export default ErrorPage;
