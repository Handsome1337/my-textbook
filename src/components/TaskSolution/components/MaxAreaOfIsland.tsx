import type { ReactElement } from 'react';

function MaxAreaOfIsland(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>rowsCount</code> и <code>columnsCount</code>, в которых
        будут записаны размеры матрицы, <code>Set</code> <code>visited</code>, в котором
        будем отмечать ячейки, которые мы уже рассмотрели, и <code>result</code>, который
        будем возвращать из функции.
      </p>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>dfs</code>, которая будет
        принимать в себя координаты ячейки <code>row</code> и <code>col</code>. Базовым
        случаем будет, когда ячейка находится за пределами матрицы, либо она равна нулю,
        либо мы её уже посещали. Во всех этих случаях возвращаем <code>0</code>. Иначе
        ячейка является частью острова. Добавим её в <code>Set</code> ячеек, которые мы
        уже посетили, и прибавим к единице (площадь этой ячейки) результат{' '}
        <code>dfs</code> для всех её соседей.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по всем ячейкам матрицы, на каждой итерации будем
        вызывать <code>dfs</code> и перезаписывать <code>result</code>, если результат
        вызова больше текущего значения <code>result</code>. После прохождения цикла
        вернём <code>result</code> из функции.
      </p>
    </>
  );
}

export default MaxAreaOfIsland;
