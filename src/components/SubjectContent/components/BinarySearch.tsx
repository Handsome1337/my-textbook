import binarySearchExist from 'assets/binary-search-exist.png?url';
import binarySearchNotExist from 'assets/binary-search-not-exist.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BINARY_SEARCH = `const arr = [1, 3, 3, 4, 5, 6, 7, 8];

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    
    if (target > arr[mid]) {
      l = mid + 1;
    } else if (target < arr[mid]) {
      r = mid - 1; 
    } else {
      return mid;
    }
  }
  
  return -1;
}`;

function BinarySearch(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Бинарный поиск — это эффективный способ поиска элементов в отсортированном
        массиве. Обычно нам дается массив и элемент <code>target</code>, который нам нужно
        найти.
      </p>
      <p className="mb-2">
        В своей основе бинарный поиск делит массив посередине, называемой <code>mid</code>
        , и сравнивает значение <code>mid</code> со значением <code>target</code>. Если
        значение <code>mid</code> меньше, чем <code>target</code>, он удаляет левую
        половину массива и продолжает поиск справа от <code>mid</code>. Если значение{' '}
        <code>mid</code> больше, чем <code>target</code>, поиск продолжается слева от{' '}
        <code>mid</code>. В итоге мы либо найдём <code>target</code>, либо определим, что{' '}
        <code>target</code> не существует в массиве.
      </p>
      <h2 className="font-bold my-2">Механика бинарного поиска</h2>
      <p className="mb-2">
        Теперь, когда мы знаем общую идею бинарного поиска, мы можем определить, как он
        будет работать логистически. Значение <code>target</code> поступает в качестве
        аргумента, но <code>mid</code> нам необходимо вычислить. Значение <code>mid</code>{' '}
        первоначально рассчитывается путём добавления <b>крайнего левого</b> индекса к{' '}
        <b>крайнему правому</b> индексу, а затем делением результата на <b>2</b>. Это
        позволяет нам иметь две равные части массива. Мы будем иметь следующее:
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>
          <code>L</code> — крайний левый индекс текущего подмассива;
        </li>
        <li>
          <code>R</code> — крайний правый индекс текущего подмассива;
        </li>
        <li>
          <code>mid</code> — <code>(L + R) / 2</code>, индекс, по которому текущий
          подмассив делится на две равные половины.
        </li>
      </ol>
      <p className="mb-2">
        <code>L</code> и <code>R</code> иногда называют <code>low</code> и{' '}
        <code>high</code>.
      </p>
      <p className="mb-2">
        Идея теперь состоит в том, что мы будем продолжать поиск <code>target</code> до
        тех пор, пока либо не найдём <code>target</code>, либо наш указатель{' '}
        <code>L</code> не пересечёт указатель <code>R</code>, что будет означать, что в
        массиве не существует <code>target</code>.
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>
          <strong>
            <code>target</code> существует в массиве
          </strong>
          <p className="mb-2">
            Рассмотрим вышеизложенную концепцию на примере. Возьмём массив{' '}
            <code>[1, 2, 3, 4, 5, 6, 7, 8]</code> и <code>target = 5</code>.
          </p>
          <p className="mb-2">
            Мы знаем, что наш указатель <code>L</code> начинается с 0-го индекса, а{' '}
            <code>R</code> — с 7-го индекса (<code>arr.length - 1</code>). Вычисляем{' '}
            <code>mid</code>: (7 + 0) / 2 = <code>3</code>. Теперь мы можем сравнить
            значение по индексу 3 с <code>target</code>.
          </p>
          <p className="mb-2">
            4 меньше, чем 5, что говорит о том, что нам нужно искать большее число, а
            поскольку массив отсортирован, большие числа располагаются справа.
            Следовательно, нам необходимо переместить <code>L</code> в позицию{' '}
            <code>mid + 1</code>, которая определяет нижнюю границу. Указатель{' '}
            <code>R</code> остаётся на своём месте.
          </p>
          <p className="mb-2">
            На следующей итерации вычисление <code>mid</code> даёт нам <code>5</code>.
            Глядя на 5-й индекс, наш элемент равен <code>6</code>, это больше, чем 5.
            Следовательно, указатель <code>R</code> необходимо переместить в{' '}
            <code>mid - 1</code>, так как нам нужно искать меньший элемент. Теперь оба
            указателя <code>L</code> и <code>R</code> указывают на 4-й индекс. Новое
            значение <code>mid</code> равно 4, и действительно, <code>target</code>{' '}
            находится в массиве по 4-му индексу, поэтому мы можем вернуть <code>mid</code>
            .
          </p>
          <figure className="bg-white mb-2">
            <img
              alt="Бинарный поиск, элемент существует в массиве"
              className="mx-auto"
              height="840"
              src={binarySearchExist}
              width="1440"
            />
          </figure>
          <p className="mb-2">Псевдокод демонстрирует описанный выше процесс:</p>
          <Code value={BINARY_SEARCH} />
          <strong>
            Для рассчёта <code>mid</code> будет лучше использовать формулу{' '}
            <code>L + (R - L) / 2</code>. Эта формула позволяет избежать целочисленного
            переполнения в некоторых ситуациях.
          </strong>
        </li>
        <li>
          <strong>
            <code>target</code> не существует в массиве
          </strong>
          <p className="mb-2">
            Углубимся в то, что произойдёт, если <code>target</code> не существует в
            массиве. Возьмём тот же самый массив{' '}
            <code>arr = [1, 2, 3, 4, 5, 6, 7, 8]</code> и <code>target = 9</code>.
          </p>
          <p className="mb-2">Наш левый указатель пересечёт правый.</p>
          <figure className="bg-white mb-2">
            <img
              alt="Бинарный поиск, элемент не существует в массиве"
              className="mx-auto"
              height="1200"
              src={binarySearchNotExist}
              width="1440"
            />
          </figure>
        </li>
      </ol>
      <p className="mb-2">
        <strong>Сложность по времени</strong> для бинарного поиска составляет <i>O</i>(
        <i>log n</i>).
      </p>
    </>
  );
}

export default BinarySearch;
