import { Link } from 'react-router-dom';
import { SubjectName } from 'utils/constants';
import type { ReactElement } from 'react';

function Subjects(): ReactElement {
  return (
    <div>
      <ul className="list-disc">
        {Object.entries(SubjectName).map(([key, value]) => (
          <li key={key}>
            <Link
              to={key}
              className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subjects;
