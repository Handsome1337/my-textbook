import quickSortPartition from 'assets/quick-sort-partition.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const QUICK_SORT = `function quickSort(array, start, end) {
  if (end - start + 1 <= 1) {
      return array;
  }

  const pivot = array[end];
  let left = start;

  for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
          const tmp = array[left];
          array[left] = array[i];
          array[i] = tmp;
          left++;
      }
  }

  array[end] = array[left];
  array[left] = pivot;

  quickSort(array, start, left - 1);
  quickSort(array, left + 1, end);

  return array;
}`;

function QuickSort(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Идея быстрой сортировки состоит в том, чтобы выбрать индекс, который называется{' '}
        <code>pivot</code> (опорный элемент), и разделить массив так, чтобы каждое
        значение слева было меньше или равно <code>pivot</code>, а каждое значение справа
        было больше, чем опорный элемент.
      </p>
      <h2 className="font-bold my-2">Выбор опорного элемента</h2>
      <p className="mb-2">
        В целом, существует несколько проверенных и опробованных вариантов выбора опорного
        элемента:
      </p>
      <ul className="list-disc list-inside">
        <li>Выбор первого индекса</li>
        <li>Выбор последнего индекса</li>
        <li>Выбор медианы первого, среднего и последнего элементов</li>
        <li>Выбор случайного опорного элемента</li>
      </ul>
      <p className="mb-2">
        Вы можете спросить, какой опорный элемент выбрать? Это зависит от самих данных,
        как от размера, так и от начального порядка. Для упрощения задачи в этой статье мы
        будем использовать последний индекс в качестве опорного элемента.
      </p>
      <h2 className="font-bold my-2">Реализация</h2>
      <p className="mb-2">
        Мы выберем <code>pivot</code>, если мы ещё не достигли базового случая, который
        представляет собой массив из 1 элемента, и выберем указатель <code>left</code>,
        который сначала будет указывать на самый левый элемент текущего подмассива. Затем
        мы пройдёмся по нашему массиву, и если мы найдём элемент, меньший, чем наш элемент{' '}
        <code>pivot</code>, мы будем менять местами текущий элемент с элементом, на
        который указывает указатель <code>left</code>, и увеличивать указатель{' '}
        <code>left</code>.
      </p>
      <p className="mb-2">
        Как только мы пройдёмся по массиву, мы перенесём элемент <code>left</code> в конец
        массива и переместим опорный элемент в позицию <code>left</code>. Это имеет смысл,
        поскольку как только мы пройдём по всем элементам, меньшим, чем элемент{' '}
        <code>pivot</code>, и поместим их слева от опорного элемента, <code>left</code>{' '}
        теперь будет указывать на первый элемент, который больше опорного элемента. Каждый
        элемент после него также будет больше опорного элемента. Вот почему мы перемещаем
        элемент <code>left</code> в конец, а затем перемещаем опорный элемент в позицию{' '}
        <code>left</code>.
      </p>
      <p className="mb-2">
        В результате все элементы, меньшие или равные <code>pivot</code>, оказываются
        слева, а остальные — справа.
      </p>
      <p className="mb-2">
        Возьмём для сортировки массив <code>[6, 2, 4, 1, 3]</code>.
      </p>
      <h2 className="font-bold my-2">Разделение массива</h2>
      <figure className="bg-white mb-2">
        <img
          alt="Сортировка вставками"
          className="mx-auto"
          height="600"
          src={quickSortPartition}
          width="1180"
        />
      </figure>
      <p className="mb-2">
        Как видно выше, мы отсортируем результирующий массив так, чтобы все элементы слева
        были меньше элемента <code>pivot</code>, а остальные находились справа.
      </p>
      <p className="mb-2">
        <strong>
          Мы не будем визуализировать все шаги, но этот процесс будет выполняться
          рекурсивно, пока мы не достигнем базового случая. Важно отметить, что мы не
          выделяем новую память для разделения массивов. Мы просто перемещаем указатели,
          чтобы каждый раз работать с меньшей частью исходного массива, пока не получим
          отсортированный массив.
        </strong>
      </p>
      <p className="mb-2">Псевдокод будет выглядеть следующим образом.</p>
      <Code value={QUICK_SORT} />
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Быстрая сортировка похожа на сортировку слиянием. Сложность по времени также будет
        составлять <i>O</i>(<i>n log n</i>), однако только в лучшем случае. В лучшем
        случае мы выбираем <code>pivot</code> так, чтобы всегда можно было выполнить
        разделение посередине. Если массив каждый раз идеально разделён посередине, а
        опорным элементом является медиана, то возможно получить сложность <i>O</i>(
        <i>n log n</i>) как конечный результат.
      </p>
      <p className="mb-2">
        Выбор опорного элемента, в котором <code>pivot</code> является наименьшим или
        наибольшим элементом, приведёт к худшему результату — <i>O</i>(<i>n</i>
        <sup>2</sup>). Это связано с тем, что в худшем случае выбор наибольшего или
        наименьшего элемента в массиве приведёт к худшему выбору опорного элемента, а
        выбор худшего опорного элемента каждый раз будет означать, что у вас есть <i>n</i>{' '}
        групп для перебора, в результате чего получается сложность <i>O</i>(<i>n</i>
        <sup>2</sup>).
      </p>
      <h2 className="font-bold my-2">Устойчивость</h2>
      <p className="mb-2">
        Быстрая сортировка не является стабильным алгоритмом, поскольку она переставляет
        несмежные элементы.
      </p>
      <p className="mb-2">
        Возьмём массив <code>[7, 3, 7, 4, 5]</code>, где у нас есть две 7-ки, одна по 0-му
        индексу и одна по 2-му индексу. В этом случае, если нашим опорным элементом
        является последний 4-й индекс, мы получим <code>[3, 4, 7, 7, 5]</code>, где 7 из
        0-го индекса будет находиться в 3-м индексе, что означает, что относительный
        порядок 7-к нарушен.
      </p>
    </>
  );
}

export default QuickSort;