import { NavLink, useMatch, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import { getBreadcrumbs } from 'utils/helpers';
import type { ReactElement } from 'react';

function Breadcrumbs(): ReactElement {
  const { taskId, subjectId } = useParams();
  const subjectsMatch = useMatch('/subjects');
  const tasksMatch = useMatch('/tasks');

  return (
    <nav>
      <ul className="flex flex-wrap gap-x-2">
        {getBreadcrumbs({ subjectId, subjectsMatch, taskId, tasksMatch }).map(
          ({ title, to }, index, array) => (
            <Fragment key={title}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'pointer-events-none focus-visible:outline-0'
                      : 'hover:underline focus-visible:underline focus-visible:outline-0'
                  }
                  end
                  to={to}
                >
                  {title}
                </NavLink>
              </li>
              {index < array.length - 1 && (
                <li>
                  <span>{'>'}</span>
                </li>
              )}
            </Fragment>
          )
        )}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
