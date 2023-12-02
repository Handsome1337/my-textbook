import type { ReactElement } from 'react';

function RangeSumQueryImmutable(): ReactElement {
  return (
    <p>
      Создадим массив префиксных сумм <code>prefix</code> и заполним его в конструкторе
      нашего класса. В методе <code>sumRange</code> будем брать сумму всех чисел до
      индекса <code>right</code> включительно: <code>this.prefix[right]</code> и вычитать
      сумму всех чисел до индекса <code>left</code>: <code>this.prefix[left - 1]</code>,
      если <code>left</code> больше нуля. Иначе вычитаем 0.
    </p>
  );
}

export default RangeSumQueryImmutable;
