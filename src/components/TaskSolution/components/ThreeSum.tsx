import type { ReactElement } from 'react';

function ThreeSum(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим массив <code>result</code>, который мы будем возвращать из функции, и
        отсортируем <code>nums</code>, чтобы избежать дубликатов в <code>result</code>.
        Пройдём циклом по <code>nums</code>.
      </p>
      <p className="mb-2">
        На каждой итерации проверяем, равен ли текущий элемент предыдущему. Если равен, то
        переходим к следующей итерации, чтобы избежать дубликатов.
      </p>
      <p className="mb-2">
        Создадим указатели <code>left</code> и <code>right</code>, которые будут указывать
        на следующий и последний элемент соответственно. Запустим вложенный цикл{' '}
        <code>while</code>, который будет исполняться, пока указатели не пересекутся.
        Рассчитаем сумму <code>sum</code> текущего элемента и элементов, на которые
        указывают указатели. Если сумма больше нуля, то перемещаем правый указатель левее,
        а если меньше, то левый указатель правее.
      </p>
      <p className="mb-2">
        Если сумма равна нулю, то добавляем в <code>result</code> эти три элемента, после
        чего сдвигаем указатель <code>left</code> до тех пор, пока он не станет показывать
        на другое число, либо не пересечётся с <code>right</code>.
      </p>
    </>
  );
}

export default ThreeSum;
