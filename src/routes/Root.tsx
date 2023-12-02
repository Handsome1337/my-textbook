import { Outlet, useMatch } from 'react-router-dom';
import { Breadcrumbs } from 'components';
import type { ReactElement } from 'react';

function Root(): ReactElement {
  const indexMatch = useMatch('/');

  return (
    <>
      <header className="bg-gray-700 text-gray-50">
        <div className="container mx-auto p-2">
          {indexMatch ? (
            <h1>Добро пожаловать в мой скромный справочник по алгоритмам</h1>
          ) : (
            <Breadcrumbs />
          )}
        </div>
      </header>
      <main className="container mx-auto px-2 py-4">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
