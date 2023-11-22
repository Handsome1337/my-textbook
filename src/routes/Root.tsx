import { Outlet } from 'react-router-dom';
import type { ReactElement } from 'react';

function Root(): ReactElement {
  return (
    <>
      <header>It&apos;s a header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
