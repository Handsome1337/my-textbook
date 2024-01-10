import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function SortAnArray(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать алгоритм быстрой сортировки со
        случайным опорным элементом. Функция быстрой сортировки должна принимать в себя
        индексы <code>start</code> и <code>end</code>, чтобы сортировать нужную часть
        массива, поэтому создадим функцию <code>quickSort</code> с этими дополнительными
        аргументами. Из функции <code>sortArray</code> будем возвращать{' '}
        <code>quickSort(nums, 0, nums.length - 1)</code>.
      </p>
      <p className="mb-2">
        Добавим базовый случай: если длина массива меньше либо равна <code>1</code>, тогда
        вернём <code>nums</code> - нечего сортировать. Затем выберем случайный опорный
        элемент <code>pivot</code> и создадим два указателя <code>left</code> и{' '}
        <code>right</code> с изначальными значениями <code>start</code> и <code>end</code>{' '}
        соответственно. Будем сдвигать их в цикле <code>while</code>, пока они не
        пересекутся.
      </p>
      <p className="mb-2">
        На каждой итерации цикла во внутреннем цикле <code>while</code> будем проверять,
        является ли элемент, на который указывает указать <code>left</code>, меньшим, чем
        опорный элемент. Если является, то сдвигаем указатель <code>left</code>.
        Аналогичным образом проверяем во внутреннем цикле <code>while</code>, является ли
        элемент, на который указывает <code>right</code> большим, чем опорный элемент.
      </p>
      <p className="mb-2">
        Когда оба внутренних цикла завершились, это означает, что <code>nums[left]</code>{' '}
        больше опорного элемента, а <code>nums[right]</code> — меньше. Нам необходимо
        сделать так, чтобы слева от опорного элемента были элементы, которые меньше, чем
        опорный, а справа — те, которые больше. Поэтому теперь, если <code>left</code> до
        сих пор не пересёкся с <code>right</code>, мы можем поменять местами элементы{' '}
        <code>nums[left]</code> и <code>nums[right]</code> и переместить указатели.
      </p>
      <p className="mb-2">
        Когда указатели <code>left</code> и <code>right</code> пересекутся, рекурсивно
        вызовим функцию сортировки <code>quickSort</code> для правой и левой половины
        массива. Когда все вызовы функции закончат свою работу, мы получим отсортированный
        массив. Подробнее о быстрой сортировке можно почитать{' '}
        <Link
          to="/subjects/quick-sort"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          тут
        </Link>
        .
      </p>
    </>
  );
}

export default SortAnArray;
