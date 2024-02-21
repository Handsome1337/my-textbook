import type { ReactElement } from 'react';

function PacificAtlanticWaterFlow(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>rowsCount</code> и <code>columnsCount</code>, в которых
        будут записаны размеры матрицы, два <code>Set</code>, представляющих океаны{' '}
        <code>pacific</code> и <code>atlantic</code>, в которых будем хранить ячейки, вода
        с которых может достичь этих океанов, и <code>result</code>, который будем
        возвращать из функции.
      </p>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>dfs</code>, которая будет
        принимать в себя координаты ячейки <code>row</code> и <code>col</code>,{' '}
        <code>Set</code> океана <code>ocean</code> и высоту предыдущей ячейки{' '}
        <code>prevHeight</code>. Базовым случаем будет, когда ячейка находится за
        пределами матрицы, либо она меньше <code>prevHeight</code>, либо мы её уже
        посещали (то есть она находится в <code>ocean</code>). Во всех этих случаях
        возвращаемся из функции. Иначе вода с ячейки может достичь океана. Добавим ячейку
        в <code>ocean</code>, и вызовем <code>dfs</code> для всех соседей этой ячейки.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по каждой колонке, на каждой итерации будем
        вызывать <code>dfs</code> для первой и последней строки. Так мы получим в{' '}
        <code>pacific</code> и <code>atlantic</code> координаты ячеек, вода с которых
        может достигнуть океана сверху или снизу. Пройдём циклом <code>for</code> по
        каждой строке и сделаем то же самое для океана слева и справа.
      </p>
      <p className="mb-2">
        Наконец, пройдём циклом по всем ячейкам матрицы. Если координаты ячейки есть и в{' '}
        <code>pacific</code>, и в <code>atlantic</code>, то добавляем эти координаты в{' '}
        <code>result</code>. После завершения всех циклов вернём <code>result</code> из
        функции.
      </p>
    </>
  );
}

export default PacificAtlanticWaterFlow;
