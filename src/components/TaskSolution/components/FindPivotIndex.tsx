import type { ReactElement } from 'react';

function FindPivotIndex(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Сохраним сумму всех элементов <code>nums</code> в переменную <code>total</code>.
        Создадим переменную <code>leftSum</code>, в которой будем хранить сумму элементов
        слева от индекса. Присвоим ей значение <code>0</code>, так как слева от первого
        элемента массива ничего нет.
      </p>
      <p className="mb-2">
        Пройдем циклом по массиву <code>nums</code>. На каждой итерации рассчитаем сумму
        элементов справа от текущего числа (<code>rightSum</code>) и сравним её с{' '}
        <code>leftSum</code>. Если значения равны, возвращаем текущий индекс. Иначе
        прибавляем в <code>leftSum</code> текущий элемент. Если цикл прошёл по всем
        элементам и сумма элементов слева и справа нигде ни была равна, возвращаем{' '}
        <code>-1</code>.
      </p>
    </>
  );
}

export default FindPivotIndex;
