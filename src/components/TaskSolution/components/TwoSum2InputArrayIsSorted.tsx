import type { ReactElement } from 'react';

function TwoSum2InputArrayIsSorted(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим два указателя, которые будут указывать на начало и конец массива.
        Используя цикл <code>while</code>, будем перемещать указатели, пока они не
        пересекутся. На каждой итерации проверяем сумму элементов, на которые указывают
        указатели. Если сумма больше, чем <code>target</code>, тогда перемещаем{' '}
        <code>r</code> влево, если меньше — перемещаем <code>l</code> вправо. Причина, по
        которой мы можем уменьшить <code>r</code>, чтобы сделать сумму меньше, заключается
        в том, что каждое число слева от <code>numbers[r]</code> меньше, чем{' '}
        <code>numbers[r]</code>, так как массив отсортирован. Аналогично каждое число
        справа от <code>numbers[l]</code> больше, чем <code>numbers[l]</code>.
      </p>
      <p className="mb-2">
        Если сумма равна <code>target</code>, то возвращаем индексы указателей,
        увеличенные на 1.
      </p>
    </>
  );
}

export default TwoSum2InputArrayIsSorted;
