import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function RottingOranges(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи нам отлично подходит алгоритм поиска в ширину. Он
        реализуется с помощью структуры данных «очередь», которой нет в языке JavaScript.
        Напишем реализацию сами, но не будем заострять на ней внимание. Подробнее про
        очереди можно почитать{' '}
        <Link
          to="/subjects/queues"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          тут
        </Link>
        . Создадим также массив <code>DIRECTIONS</code>, который содержит в себе все
        направления, в которых мы можем двигаться из ячейки.
      </p>
      <p className="mb-2">
        Запишем размеры матрицы в <code>rowsCount</code> и <code>columnsCount</code>.
        Создадим очередь <code>queue</code>, в которую будем помещать координаты гнилых
        апельсинов, переменные <code>time</code>, которую будем возвращать из функции, и{' '}
        <code>freshCount</code>, которая будет хранить количество свежих апельсинов.
      </p>
      <p className="mb-2">
        Пройдём по всем ячейкам сетки. Если в ячейке находится свежий апельсин, увеличим{' '}
        <code>freshCount</code>, а если в ней находится гнилой апельсин, то добавим его
        координаты в очередь.
      </p>
      <p className="mb-2">
        Запустим цикл <code>while</code> до тех пор, пока в очереди есть гнилые апельсины,
        либо существуют свежие апельсины. На каждой итерации будем доставать координаты
        ячейки с гнилым апельсином из очереди. Пройдём по всем возможным направлениям для
        нашей ячейки, и, если координаты новой ячейки вышли за пределы сетки, либо по этим
        координатам в сетке не хранится свежий апельсин, то переходим к следующей
        итерации. В противном случае в ячейке находится свежий апельсин, который
        превращается в гнилой апельсин. Изменим значение в этой ячейке на <code>2</code> и
        добавим её координаты в очередь, после чего уменьшим количество свежих апельсинов.
      </p>
      <p className="mb-2">
        В конце каждой итерации цикла <code>while</code> увеличим <code>time</code> на
        единицу.
      </p>
      <p className="mb-2">
        После завершения работы цикла <code>while</code>, если в сетке остались свежие
        апельсины, до возратим <code>-1</code>, иначе возратим <code>time</code>.
      </p>
    </>
  );
}

export default RottingOranges;
