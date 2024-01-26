import distinctElementsSubsets from 'assets/distinct-elements-subsets.png?url';
import distinctElementsSubsetsImplementation from 'assets/distinct-elements-subsets-implementation.png?url';
import distinctElementsSubsetsDifficulty from 'assets/distinct-elements-subsets-difficulty.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const SUBSETS_WITHOUT_DUPLICATES = `function subsetsWithoutDuplicates(nums) {
  const subsets = [];
  const currSet = [];

  helper(0, nums, currSet, subsets);

  return subsets;
}`;

const HELPER = `function helper(i, nums, currSet, subsets) {
  if (i >= nums.length) {
    subsets.push([...currSet]);
    return;
  }

  // путь, по которому мы включаем nums[i]
  currSet.push(nums[i]);
  helper(i + 1, nums, currSet, subsets);
  currSet.pop();

  // путь, по которому мы НЕ включаем nums[i]
  helper(i + 1, nums, currSet, subsets);
}`;

const SUBSETS_WITHOUT_DUPLICATES2 = `function subsetsWithoutDuplicates2(nums) {
  nums.sort();

  const subsets = [];
  const currSet = [];

  helper2(0, nums, currSet, subsets);

  return subsets;
}`;

const HELPER2 = `function helper2(i, nums, currSet, subsets) {
  if (i >= nums.length) {
    subsets.push([...currSet]);
    return;
  }

  // путь, по которому мы включаем nums[i]
  currSet.push(nums[i]);
  helper2(i + 1, nums, currSet, subsets);
  currSet.pop();

  // путь, по которому мы НЕ включаем nums[i]
  while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
    i++;
  }
  
  helper2(i + 1, nums, currSet, subsets);
}`;

function Subsets(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Подмножества — это тема, принадлежащая «комбинаторике», разделу математики,
        изучающему перестановки, подмножества и сочетания.
      </p>
      <h2 className="font-bold my-2">Понятие подмножества</h2>
      <p className="mb-2">
        Формально в математике, если у нас есть два множества, множество A и множество B,
        множество A является подмножеством множества B, если все его элементы находятся в
        множестве B. Кроме того, любое множество является подмножеством самого себя, а
        пустое множество является подмножеством каждого множества. Порядок не важен в
        подмножествах, пока мы не доберёмся до перестановок. Однако элементы должны быть
        разными.
      </p>
      <p className="mb-2">
        Прежде чем перейти к задачам, приведём несколько примеров множеств и подмножеств.
        Учитывая множество <code>A = &#123;1, 2, 3, 4, 5&#125;</code> и множество{' '}
        <code>B = &#123;5, 2, 1&#125;</code>, множество <code>B</code> является
        подмножеством множества <code>A</code>, поскольку оно содержит все элементы
        множества <code>A</code>. Изменённый порядок множества <code>B</code> на{' '}
        <code>&#123;2, 5, 1&#125;</code> по-прежнему считается тем же подмножеством.
      </p>
      <p className="mb-2">
        Учитывая множество <code>C = &#123;9, 10, 11, 12&#125;</code> и множество{' '}
        <code>D = &#123;6, 9, 10&#125;</code>, множество <code>D</code> не является
        подмножеством множества <code>С</code>, поскольку оно содержит <code>6</code>,
        которой нет в множестве <code>С</code>.
      </p>
      <h2 className="font-bold my-2">Примеры использования подмножеств</h2>
      <ul>
        <li className="mb-2">
          <strong className="block">Подмножества - уникальные элементы</strong>
          <strong>
            Дан список уникальных чисел, верните все возможные уникальные подмножества.
          </strong>
          <p className="mb-2">
            Вспомните из статьи про бэктрекинг, что когда мы делаем выбор пойти по пути
            назад, мы возвращаемся и исследуем другие варианты. Применение этой концепции
            к подмножествам означало бы, что для каждого элемента мы исследуем все
            подмножества, включающие этот элемент. Затем мы возвращаемся назад, чтобы
            изучить все подмножества, которые не включают этот элемент. Мы делаем это до
            тех пор, пока не исчерпаем все элементы и к концу у нас не будет всех
            возможных различных подмножеств.
          </p>
          <strong>
            Следующее изображение демонстрирует все возможные уникальные подмножества для{' '}
            <code>nums = &#123;1, 2, 3&#125;</code>.
          </strong>
          <figure className="bg-white mb-2">
            <img
              alt="Все возможные подмножества"
              className="mx-auto"
              height="320"
              src={distinctElementsSubsets}
              width="1000"
            />
          </figure>
          <strong className="block mb-2">Реализация</strong>
          <p className="mb-2">
            В реализации у нас есть две функции:{' '}
            <strong>
              <code>subsetsWithoutDuplicates</code>
            </strong>{' '}
            и{' '}
            <strong>
              <code>helper</code>
            </strong>
            .
          </p>
          <ul>
            <li className="mb-2">
              <strong>
                <code>subsetsWithoutDuplicates</code>
              </strong>
              <p className="mb-2">
                Если предоставленный нам список не содержит дубликатов, мы реализуем
                функцию <code>subsetsWithoutDuplicates</code>. В этой функции мы объявим
                список списков подмножеств <code>subsets</code> и ещё один список{' '}
                <code>currSet</code>. Как только мы создадим каждый <code>currSet</code>,
                мы добавим его в <code>subsets</code>.
              </p>
              <p className="mb-2">
                Для создания каждого <code>currSet</code> нам понадобится функция{' '}
                <code>helper</code>.
              </p>
              <Code value={SUBSETS_WITHOUT_DUPLICATES} />
            </li>
            <li className="mb-2">
              <strong>
                <code>helper</code>
              </strong>
              <p className="mb-2">
                Мы передадим начальный индекс <code>i</code>, <code>nums</code>, который
                представляет собой наш список, <code>currSet</code> и <code>subsets</code>{' '}
                нашей функции <code>helper</code>. Затем мы пройдёмся по всему списку,
                добавим текущее число в <code>nums</code> и применим наш стандартный
                алгоритм бэктрекинга, т. е. будем выполнять рекурсию до тех пор, пока не
                достигнем базового случая, а затем извлечём текущее число из{' '}
                <code>currSet</code>, чтобы мы могли пойти по пути, по которому мы решаем
                не включать текущий элемент.
              </p>
              <Code value={HELPER} />
              <p>
                <strong>
                  На изображении ниже показана полная пошаговая реализация получения
                  подмножеств из списка <code>[1, 2, 3]</code>. Массив под каждым шагом
                  представляет <code>subsets</code>. Синие массивы в дереве решений
                  представляют текущее обрабатываемое подмножество, <code>currSet</code>.
                </strong>
              </p>
            </li>
          </ul>
          <img
            alt="Пошаговая реализация получения подмножеств"
            height="1701"
            src={distinctElementsSubsetsImplementation}
            width="1801"
          />
        </li>
        <li className="mb-2">
          <strong className="block">Подмножества - неуникальные элементы</strong>
          <strong>
            Дан список чисел, которые не обязательно уникальны, верните все возможные
            уникальные подмножества.
          </strong>
          <p className="mb-2">
            В этой задаче нам даны <code>nums</code>, содержащие дубликаты. Чтобы создать
            конкретные подмножества, мы сначала сортируем массив так, чтобы все дубликаты
            находились рядом друг с другом. Затем мы можем запустить цикл{' '}
            <code>while</code>, чтобы пропустить дубликаты. Это отличается от предыдущей
            задачи, поскольку в этом случае, когда мы возвращаемся назад, то есть
            извлекаем число из <code>currSet</code>, мы запускаем цикл <code>while</code>,
            чтобы пропустить дубликаты перед повторным вызовом <code>helper2</code>. Мы
            также следим за тем, чтобы наш указатель <code>i</code> не выходил за пределы.
          </p>
          <p className="mb-2">
            В этом разница между <code>helper</code> и <code>helper2</code>.
          </p>
          <p className="mb-2">Ниже приведена реализация.</p>
          <Code value={SUBSETS_WITHOUT_DUPLICATES2} />
          <Code value={HELPER2} />
        </li>
      </ul>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Сложность по времени будет равна <i>O</i>(2
        <sup>
          <i>n</i>
        </sup>
        ), поскольку для каждого отдельного элемента мы можем либо включить, либо не
        включать этот конкретный элемент. Если нам дан список <code>[1, 2, 3]</code> для
        расчёта всех подмножеств, мы можем принять только два решения для любого данного
        элемента и записать всё это в дерево решений, а <i>n</i> — количество элементов в
        множестве, вполне логично, что наш алгоритм работает за <i>O</i>(<i>n</i> ⋅ 2
        <sup>
          <i>n</i>
        </sup>
        ).
      </p>
      <p className="mb-2">
        Сложность по памяти следует считать такой же, но иногда вводные данные не
        считаются частью сложности по времени. Это доводит сложность по памяти до <i>O</i>
        (2
        <sup>
          <i>n</i>
        </sup>
        ), если <i>n</i> не учитывается.
      </p>
      <p className="mb-2">Глядя на изображение ниже, это становится очевидным.</p>
      <img
        alt="Сложность поиска всех возможных подмножеств"
        height="160"
        src={distinctElementsSubsetsDifficulty}
        width="380"
      />
    </>
  );
}

export default Subsets;
