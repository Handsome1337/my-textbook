import { Link } from 'react-router-dom';
import { useState } from 'react';
import { TASKS } from 'utils/constants';
import { Badge } from 'components';
import { TaskTag } from 'types';
import type { ReactElement, ChangeEvent } from 'react';

const SELECT_DIFFICULTY_ID = 'difficulty';
const SELECT_TAG_ID = 'tag';
const SELECT_SOLUTION_ID = 'solution';

function Tasks(): ReactElement {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedSolution, setSelectedSolution] = useState<string>('');

  const tasks = TASKS.filter(
    ({ difficulty, tags, code }) =>
      (!selectedDifficulty || difficulty === selectedDifficulty) &&
      (!selectedTag || tags.some((tag) => tag === (selectedTag as TaskTag))) &&
      (!selectedSolution || (selectedSolution === 'with' ? code : !code))
  );

  const onChangeFilter = ({
    target: { id, value }
  }: ChangeEvent<HTMLSelectElement>): void => {
    if (id === SELECT_DIFFICULTY_ID) {
      setSelectedDifficulty(value);
    } else if (id === SELECT_TAG_ID) {
      setSelectedTag(value);
    } else {
      setSelectedSolution(value);
    }
  };

  const onResetFilters = (): void => {
    setSelectedDifficulty('');
    setSelectedTag('');
    setSelectedSolution('');
  };

  return (
    <>
      <form onReset={onResetFilters}>
        <fieldset className="mb-2 w-max rounded border border-solid border-gray-700 p-2 pt-0">
          <legend className="px-1">Фильтры</legend>
          <div className="flex items-center gap-x-2">
            <label htmlFor={SELECT_DIFFICULTY_ID}>Сложность:</label>
            <select
              className="grow bg-white"
              id={SELECT_DIFFICULTY_ID}
              onChange={onChangeFilter}
              value={selectedDifficulty}
            >
              <option value="">Любая</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <label htmlFor={SELECT_TAG_ID}>Тема:</label>
            <select
              className="grow bg-white"
              id={SELECT_TAG_ID}
              onChange={onChangeFilter}
              value={selectedTag}
            >
              <option value="">Любая</option>
              {Object.values(TaskTag).map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-x-2">
            <label htmlFor={SELECT_SOLUTION_ID}>Решение:</label>
            <select
              className="grow bg-white"
              id={SELECT_SOLUTION_ID}
              onChange={onChangeFilter}
              value={selectedSolution}
            >
              <option value="">Все</option>
              <option value="with">Есть</option>
              <option value="without">Нет</option>
            </select>
          </div>
          <input
            className="w-full cursor-pointer rounded bg-white text-sm hover:outline-2 hover:outline-black focus-visible:outline-2 focus-visible:outline-black"
            type="reset"
            value="Очистить"
          />
        </fieldset>
      </form>
      <ol className="list-decimal pl-3.5">
        {tasks.map(({ code, difficulty, id, name, tags, link }) => (
          <li key={id}>
            <div>
              {code ? (
                <Link
                  to={id}
                  className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
                >
                  {name}
                </Link>
              ) : (
                <a
                  className="text-blue-500 hover:font-semibold focus-visible:font-semibold focus-visible:outline-0"
                  href={link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {name}
                </a>
              )}
              <Badge type={difficulty} />
              {!code && <span className="text-gray-600">(без решения)</span>}
            </div>
            {tags.map((tag) => (
              <Badge key={tag} type={tag} />
            ))}
          </li>
        ))}
      </ol>
    </>
  );
}

export default Tasks;
