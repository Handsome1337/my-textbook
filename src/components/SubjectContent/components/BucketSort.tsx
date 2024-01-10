import bucketSort from 'assets/bucketSort.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BUCKET_SORT = `function bucketSort(array) {
  // предполагается, что array содержит только 0, 1 или 2
  const counts = [0, 0, 0];

  for (let i = 0; i < array.length; i++) {
      counts[array[i]]++;
  }

  let i = 0;
  for (let n = 0; n < counts.length; n++) {
      for (let j = 0; j < counts[n]; j++) {
          array[i] = n;
          i++;
      }
  }

  return array;
}`;

const BUCKET_SORT_FILLING = `let i = 0;
for (let n = 0; n < counts.length; n++) {
  for (let j = 0; j < counts[n]; j++) {
    array[i] = n;
    i++;
  }
}`;

function BucketSort(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Это последний алгоритм сортировки, который мы рассмотрим, и он довольно важен. Он
        не так популярен и не так широко используется, как предыдущие алгоритмы, которые
        мы рассмотрели. Блочная (карманная, корзинная) сортировка работает отлично, когда
        сортируемый набор данных имеет значения <strong>в определённом диапазоне</strong>.
      </p>
      <h2 className="font-bold my-2">Концепция</h2>
      <p className="mb-2">
        Представьте, что у нас есть массив из <code>6</code> элементов, который содержит
        значения диапазона <code>0 — 2</code>. Идея блочной сортировки состоит в том,
        чтобы создать «блок» для каждого числа и сопоставить числа с соответствующими
        блоками.
      </p>
      <p className="mb-2">
        У нас будут блоки для <code>0</code>, <code>1</code> и <code>2</code>. Эти блоки,
        которые представляют собой просто позицию в нашем массиве, будет содержать частоту
        каждого из значений в пределах диапазона. В этом примере у нас есть только три
        значения и, соответственно, у нас будет три блока.
      </p>
      <p className="mb-2">
        <strong>
          Термин «блок» на самом деле просто обозначет позицию в массиве, где мы будем
          отображать эту частоту.
        </strong>
      </p>
      <p className="mb-2">
        Как только каждый блок будет заполнен частотой каждого из значений, мы перезапишем
        все значения в исходном массиве так, чтобы они оказались в отсортированном
        порядке. Это имеет больше смысла, если посмотреть на псевдокод ниже:
      </p>
      <Code value={BUCKET_SORT} />
      <p className="mb-2">
        Первая часть псевдокода, прямо перед тем, как мы делаем <code>i = 0</code>,
        относится к заполнению каждого из блоков. Давайте рассмотрим вторую часть немного
        подробнее.
      </p>
      <Code value={BUCKET_SORT_FILLING} />
      <ul className="list-disc list-inside mb-2">
        <li>
          Указатель <code>i</code> будет отслеживать следующую позицию вставки для нашего
          исходного массива <code>array</code>.
        </li>
        <li>
          Указатель <code>n</code> отслеживает текущую позицию массива <code>counts</code>
          .
        </li>
        <li>
          Указатель <code>j</code> отслеживает количество раз, когда в <code>array</code>{' '}
          появлялся <code>counts[n]</code>.
        </li>
      </ul>
      <p className="mb-2">
        Итак, зная это, у нас есть массив <code>counts = [2, 1, 3]</code>. И наш исходный
        массив <code>[2, 1, 2, 0, 0, 2]</code>.
      </p>
      <p className="mb-2">
        На первой итерации <code>n = 0</code>, что соответствует <code>2</code> в{' '}
        <code>counts</code>. Наш внутренний цикл выполнится два раза, перезаписав{' '}
        <code>array[0]</code> и <code>array[1]</code> на <code>0</code>. Это имеет смысл,
        поскольку у нас было два нуля, и размещение их в <code>array</code> рядом друг с
        другом приведёт к их сортировке. Этот процесс будет продолжаться для каждого
        числа, и конечным состоянием <code>array</code> будет{' '}
        <code>[0, 0, 1, 2, 2, 2]</code>, что и является конечной целью.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Блочная сортировка"
          className="mx-auto"
          height="560"
          src={bucketSort}
          width="1170"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Вы можете посмотреть на вложенный цикл <code>for</code> и сразу же подумать, что
        это <i>O</i>(<i>n</i>
        <sup>2</sup>). Это не совсем правильно. Давайте проведём некоторый анализ. Мы
        знаем, что для первого цикла <code>for</code> мы выполним <i>n</i> шагов,
        поскольку мы проходим через все элементы и подсчитываем частоту.
      </p>
      <p className="mb-2">
        Второй цикл <code>for</code> совершит <i>n</i> итераций, где <i>n</i> — длина
        массива <code>counts</code>. Однако внутренний цикл выполнит только{' '}
        <code>counts[n]</code> итераций, количество которых каждый раз разное. В первый
        раз их количество будет <code>2</code>, затем <code>1</code>, и затем{' '}
        <code>3</code>. Следовательно, сложность по времени нашего алгоритма составит{' '}
        <i>O</i>(<i>n</i>).
      </p>
      <p className="mb-2">
        <strong>
          Следует отметить, что вложенные циклы <code>for</code> не всегда означают
          сложность по времени <i>O</i>(<i>n</i>
          <sup>2</sup>). Как мы видели выше, важно проанализировать, сколько раз
          внутренний цикл <code>for</code> выполняется на каждой итерации внешнего цикла{' '}
          <code>for</code>.
        </strong>
      </p>
      <h2 className="font-bold my-2">Устойчивость</h2>
      <p className="mb-2">
        Поскольку мы перезаписываем исходный массив, сохранить относительный порядок
        значений невозможно. Никакой перестановки тоже не происходит. Следовательно,
        блочная сортировка является неустойчивой.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Таким образом, хотя сложность по времени алгоритма блочной сортировки составляет{' '}
        <i>O</i>(<i>n</i>), мы должны помнить, что он будет работать только в том случае,
        если набор данных находится в пределах определённого диапазона. Как правило, при
        решении алгоритмических задач самым надёжным вариантом является использование
        сортировки слиянием, быстрой сортировки или сортировки вставками (для небольших и
        почти отсортированных наборов данных), что используется встроенными методами
        сортировки в языках программирования, а иногда и гибрид всех трёх.
      </p>
      <p className="mb-2">
        Теперь, когда мы рассмотрели все алгоритмы сортировки, ниже подведём итоги времени
        выполнения:
      </p>
      <table className="border-collapse mb-2 table-auto w-full">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Алгоритм
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Сложность по времени
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Примечания
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Сортировка вставками
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>
              <sup>2</sup>)*
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Если полностью или почти отсортированно — <i>O</i>(<i>n</i>)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Сортировка слиянием
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n log n</i>)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">—</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Быстрая сортировка
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n log n</i>)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Выбор наибольшего или наименьшего элемента в качестве опорного, например,
              обратная сортировка — <i>O</i>(<i>n</i>
              <sup>2</sup>)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Блочная сортировка
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)*
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Предполагается, что у вас есть значения в указанном диапазоне
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default BucketSort;
