import { Link, useParams } from 'react-router-dom';
import { SubjectName, TASKS } from 'utils/constants';
import { Code } from 'components';
import type { ReactElement } from 'react';

const WRONG_SUBJECT_ID_TITLE = 'Такой темы нет!';

function Subject(): ReactElement {
  const { subjectId } = useParams();

  const title =
    subjectId && SubjectName[subjectId] ? SubjectName[subjectId] : WRONG_SUBJECT_ID_TITLE;

  return (
    <article>
      <h1 className="font-bold mb-2">{title}</h1>
      {title === WRONG_SUBJECT_ID_TITLE ? (
        <Link
          to="/subjects"
          className="focus-visible:font-semibold hover:font-semibold focus-visible:outline-0 text-blue-500"
        >
          Перейти к списку тем
        </Link>
      ) : (
        <>
          <h2 className="mb-2">Задачи по теме:</h2>
          <ul>
            {TASKS.filter(({ subject }) => subject === subjectId).map(
              ({ code, name, link }) => (
                <li>
                  <h3 className="font-bold">
                    <a
                      className="focus-visible:text-blue-500 hover:text-blue-500 focus-visible:outline-0"
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {name}
                    </a>
                  </h3>
                  <details className="px-2.5">
                    <summary>Решение</summary>
                    <Code value={code} />
                  </details>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </article>
  );
}

export default Subject;
