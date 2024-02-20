import type { ReactElement } from 'react';

function NumberOfIslands(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>rowsCount</code> и <code>columnsCount</code>, в которых
        будут записаны размеры матрицы, и <code>result</code>, который будем возвращать из
        функции.
      </p>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>dfs</code>, которая будет
        принимать в себя координаты ячейки <code>row</code> и <code>col</code>. Базовым
        случаем будет, когда ячейка находится за пределами матрицы, либо она равна нулю.
        Во всех этих случаях прекращаем выполнение функции. Иначе ячейка является частью
        острова. Заменим её значение на <code>&apos;0&apos;</code>, чтобы мы не могли её
        использовать в расчётах других вызовов <code>dfs</code>, после чего вызовем{' '}
        <code>dfs</code> для всех соседних ячеек.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по всем ячейкам матрицы. На каждой итерации будем
        проверять, является ли ячейка частью острова. Если является, то увеличим{' '}
        <code>result</code> и вызовем для неё <code>dfs</code>. Так как <code>dfs</code>{' '}
        перезапишет на <code>&apos;0&apos;</code> все ячейки, которые также являются
        частью текущего острова, на следующих итерациях они не вызовут увеличения{' '}
        <code>result</code>. После прохождения цикла вернём <code>result</code> из
        функции.
      </p>
    </>
  );
}

export default NumberOfIslands;