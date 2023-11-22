import { Outlet } from 'react-router-dom';
import type { ReactElement } from 'react';

function Root(): ReactElement {
  return (
    <>
      <header className="bg-gray-700 py-2 text-gray-50">
        <div className="container mx-auto">It&apos;s a header</div>
      </header>
      <main className="container mx-auto py-4">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
