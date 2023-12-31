import insertionSort from 'assets/insertion-sort.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const INSERTION_SORT = `function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    
    while (j >= 0 && array[j + 1] < array[j]) {
      const temp = array[j + 1];
      array[j + 1] = array[j];
      array[j] = temp;
      j--;
    }
  }

  return array;
}`;

function InsertionSort(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Сортировка вставками — это один из алгоритмов сортировки, используемый для
        сортировки данных в различных структурах данных. Это один из простейших алгоритмов
        сортировки, который лучше всего работает при небольшом размере данных (скоро мы
        обсудим, почему это так).
      </p>
      <h2 className="font-bold my-2">Концепция</h2>
      <p className="mb-2">
        Допустим, у нас есть массив из 5 элементов, заполненный значениями:{' '}
        <code>[2, 3, 4, 1, 6]</code>. Наша цель — отсортировать массив так, чтобы в итоге
        мы получили <code>[1, 2, 3, 4, 6]</code>. Сортировка вставками предполагает
        разбиение массивов на подмассивы и сортировку их по отдельности, в результате чего
        получается отсортированный массив. Если бы у нас был массив из 1 элемента, он уже
        был бы отсортирован, поскольку нет другого элемента для сравнения. Таким образом,
        мы предполагаем, что первый элемент отсортирован, поскольку мы рассматриваем его
        как отдельный подмассив.
      </p>
      <p className="mb-2">
        Следующий подмассив будет состоять из 2 элементов, <code>[2, 3]</code>. Чтобы
        выполнить сортировку, необходимо сравнить два элемента. Для массива из двух
        элементов это тривиально. Однако когда мы доберёмся до полного массива из 5
        элементов, невозможно отслеживать, где находится каждый элемент, без использования
        указателей. Так что создадим два указателя <code>i</code> и <code>j</code>.
      </p>
      <ul className="list-disc list-inside">
        <li>
          <code>j</code> всегда будет позади <code>i</code> и никогда не пересечёт{' '}
          <code>i</code>
        </li>
        <li>
          указатель <code>i</code> указывает на индекс{' '}
          <code>
            <i>n</i> - 1
          </code>
          , где{' '}
          <code>
            <i>n</i>
          </code>{' '}
          — размер текущего подмассива
        </li>
        <li>
          указатель <code>j</code> начинается на один индекс позади <code>i</code>, и до
          тех пор, пока <code>j</code> не выйдет за пределы массива, то есть не будет
          указывать на отрицательный индекс, а элемент по индексу <code>j + 1</code>{' '}
          меньше, чем элемент <code>j</code>, мы продолжаем уменьшать <code>j</code>. Это
          гарантирует, что мы отсортировали все элементы до индекса <code>i</code>, прежде
          чем перейти к следующему подмассиву (итерации). Это продемонстрировано в
          псевдокоде ниже.
        </li>
      </ul>
      <Code value={INSERTION_SORT} />
      <p className="mb-2">
        Шаги выполнения кода с приведённым выше примером будут выглядеть следующим
        образом.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Сортировка вставками"
          className="mx-auto"
          height="940"
          src={insertionSort}
          width="1440"
        />
      </figure>
      <p className="mb-2">
        <strong>
          Вы можете подумать, будет ли сортировка вставками работать с другими типами
          данных, кроме чисел? Будет. Пока существует способ сравнить два значения, этот
          алгоритм будет работать с любым типом данных.
        </strong>
      </p>
      <h2 className="font-bold my-2">Устойчивость</h2>
      <p className="mb-2">
        Устойчивость алгоритма сортировки заключается в относительном порядке элементов
        после завершения сортировки. Возьмём <code>[7, 3, 7]</code> для примера. Есть две
        семёрки, одна находится по индексу <code>0</code>, другая по индексу{' '}
        <code>2</code>. Мы знаем, что относительный порядок этих двух семёрок останется
        прежним, поскольку 3 поменяется местами с 7 в индексе <code>0</code>, после чего
        цикл <code>while</code> никогда не будет запущен.
      </p>
      <p className="mb-2">
        Это называется <strong>устойчивым</strong> алгоритмом сортировки. Сортировка
        вставками является устойчивой, то есть гарантировано, что относительный порядок
        останется прежним. В неустойчивом алгоритме сортировки это не гарантировано.
      </p>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Сортировка вставками любого набора входных данных размера <i>n</i>, в лучшем
        случае, если массив уже отсортирован, будет стоить <i>O</i>(<i>n</i>). Это связано
        с тем, что нам всё равно придётся пройти через каждый элемент массива, но наш цикл{' '}
        <code>while</code> никогда не будет вызван. В худшем случае все элементы
        сортируются в обратном порядке, что означает, что цикл <code>while</code> будет
        выполняться <i>n</i> раз внутри цикла <code>for</code>. Это приводит к сложности
        по времени <i>O</i>(<i>n</i>
        <sup>2</sup>
        ).
      </p>
      <h2 className="font-bold my-2">
        Более глубокое погружение - почему <i>O</i>(<i>n</i>
        <sup>2</sup>
        )?
      </h2>
      <p className="mb-2">
        В худшем случае сортировка вставками выполняет <i>n</i>
        <sup>2</sup> операций, где <i>n</i> — размер массива. На первой итерации цикла{' '}
        <code>for</code> мы сортируем первые два элемента, затем 3, 4 и, наконец, 5. Что
        ж, если все элементы расположены в обратном порядке, нам не только придётся пройти
        через весь массив — цикл <code>for</code>, но также выполнить перестановку на
        каждом шаге, что в общей сложности будет равно <i>n</i>. Следовательно, можно
        сделать вывод, что это <i>n</i>
        <sup>2</sup>. Конечно, существует очень четкое математическое доказательство, но
        для целей данной статьи этого объяснения достаточно.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Сортировка вставками — отличный алгоритм, когда размер входных данных мал, но он
        терпит неудачу, когда <i>n</i> очень велико из-за его сложности <i>O</i>(<i>n</i>
        <sup>2</sup>
        ). Тем не менее, полезно знать его плюсы и минусы.
      </p>
    </>
  );
}

export default InsertionSort;
