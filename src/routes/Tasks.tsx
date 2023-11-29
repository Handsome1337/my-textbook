import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TASKS, TaskTag } from 'utils/constants';
import { Badge } from 'components';
import type { TaskConfig } from 'utils/constants';
import type { ReactElement, ChangeEvent } from 'react';

const SELECT_DIFFICULTY_ID = 'difficulty';
const SELECT_TAG_ID = 'tag';

function Tasks(): ReactElement {
  const [tasks, setTasks] = useState<TaskConfig[]>(TASKS);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');

  useEffect(() => {
    setTasks(
      TASKS.filter(
        ({ difficulty, tags }) =>
          (!selectedDifficulty || difficulty === selectedDifficulty) &&
          (!selectedTag || tags.some((tag) => tag === selectedTag))
      )
    );
  }, [selectedDifficulty, selectedTag]);

  const onChangeFilter = ({
    target: { id, value }
  }: ChangeEvent<HTMLSelectElement>): void => {
    if (id === SELECT_DIFFICULTY_ID) {
      setSelectedDifficulty(value);
    } else {
      setSelectedTag(value);
    }
  };

  const onResetFilters = (): void => {
    setSelectedDifficulty('');
    setSelectedTag('');
  };

  return (
    <>
      <form onReset={onResetFilters}>
        <fieldset className="border border-gray-700 border-solid mb-2 p-2 pt-0 rounded w-max">
          <legend className="px-1">Фильтры</legend>
          <div className="flex items-center gap-x-2">
            <label htmlFor={SELECT_DIFFICULTY_ID}>Сложность:</label>
            <select
              className="flex-grow"
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
              className="flex-grow"
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
          <input
            className="bg-white cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-black hover:outline hover:outline-2 hover:outline-black rounded text-sm w-full"
            type="reset"
            value="Очистить"
          />
        </fieldset>
      </form>
      <ol className="list-decimal">
        {tasks.map(({ difficulty, id, name, tags }) => (
          <li key={id}>
            <div>
              <Link
                to={id}
                className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold mr-2 text-blue-500"
              >
                {name}
              </Link>
              <Badge type={difficulty} />
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
