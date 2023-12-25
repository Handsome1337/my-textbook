import type { ReactElement } from 'react';

function RemoveElement(): ReactElement {
  return (
    <>
      <p>
        Создадим переменную <code>index</code>, в которой будет храниться индекс, по
        которому мы будем вставлять элементы, которые не равны <code>val</code>. Затем в
        цикле сравним каждый элемент с <code>val</code>, и если условие верно, добавляем
        элемент по сохранённому индексу, после чего инкрементируем индекс.
      </p>
      <p>
        Так как мы каждый раз инкрементируем индекс после вставки элемента, его значение
        будет равно количеству элементов, которые не равны <code>val</code>.
      </p>
    </>
  );
}

export default RemoveElement;