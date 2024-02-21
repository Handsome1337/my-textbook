import type { ReactElement } from 'react';

function SurroundedRegions(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>rowsCount</code> и <code>columnsCount</code>, в которых
        будут записаны размеры матрицы. Также создадим вспомогательную рекурсивную функцию{' '}
        <code>capture</code>, которая будет принимать в себя координаты ячейки{' '}
        <code>row</code> и <code>col</code>. Базовым случаем будет, когда ячейка находится
        за пределами матрицы, либо она не равна <code>&apos;O&apos;</code>. Во всех этих
        случаях возвращаемся из функции. Иначе заменим значение <code>&apos;O&apos;</code>{' '}
        на <code>&apos;T&apos;</code>, и вызовем <code>dfs</code> для всех соседей этой
        ячейки.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по всем ячейкам матрицы. На каждой итерации, если
        ячейка находится в первой строке, последней строке, первом столбце или последнем
        столбце и равна <code>&apos;O&apos;</code>, вызываем для неё <code>capture</code>.
        Таким образом, после прохождения цикла, все <code>&apos;O&apos;</code>, которые не
        окружены со всех сторон <code>&apos;X&apos;</code>, изменятся на{' '}
        <code>&apos;T&apos;</code>.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по всем ячейкам матрицы. На каждой итерации
        проверяем значение ячейки. Если ячейка равна <code>&apos;O&apos;</code>, то
        заменяем её на <code>&apos;X&apos;</code>, а если равна <code>&apos;T&apos;</code>
        , то заменяем её на <code>&apos;O&apos;</code>.
      </p>
    </>
  );
}

export default SurroundedRegions;
