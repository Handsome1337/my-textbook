import type { ReactElement } from 'react';

function RotateImage(): ReactElement {
  return (
    <p className="mb-2">
      Создадим четыре указателя <code>left</code>, <code>top</code>, <code>right</code> и{' '}
      <code>bottom</code>, которые будут указывать на углы матрицы. Запустим цикл{' '}
      <code>while</code>, который будет исполняться, пока указатели <code>left</code> и{' '}
      <code>right</code> не пересекутся. На каждой итерации будем запускать вложенный цикл{' '}
      <code>for</code>, который будет проходить по всем ячейкам на текущем уровне (их
      количество равно <code>right - left</code>). Сохраним значение левой верхней ячейки
      в переменную <code>topLeft</code>, после чего произведём перенос значений. После
      этого переместим наши указатели.
    </p>
  );
}

export default RotateImage;
