import type { ReactElement } from 'react';

function WordSearch(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения многих проблем с матрицами удобно вынести в переменные размеры
        матрицы. Создадим для этого переменные <code>rowsCount</code> и{' '}
        <code>columnsCount</code>.
      </p>
      <p className="mb-2">
        Напишем вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя строку <code>row</code>, столбец <code>col</code> и индекс{' '}
        <code>i</code>, который будет указывать на то, какую букву в <code>word</code> мы
        сейчас ищем.
      </p>
      <p className="mb-2">
        Первым базовым случаем будет, если <code>i</code> равно длине <code>word</code>.
        Это означает, что мы прошли по всем индексам в <code>word</code> и нашли это слово
        в матрице, вернём <code>true</code>. Если мы вышли за пределы строк или столбцов,
        либо текущая буква в <code>word</code> не равна текущей букве в матрице, то это
        будет вторым базовым случаем, возвращаем <code>false</code>.
      </p>
      <p className="mb-2">
        Если ни один из базовых случаев не сработал, это означает, что текущая буква в
        матрице сходится с буквой в <code>word</code>, теперь мы можем искать следующую
        букву в соседних ячейках. Но перед этим затрём текущую букву, записав в матрицу
        вместо неё <code>&apos;.&apos;</code>, потому что мы не можем использовать эту
        букву второй раз. Вызовем функцию <code>backtrack</code> для каждой соседней
        клетки, записав результат вызова в <code>result</code>, после чего запишем
        удалённую букву обратно в матрицу и вернём <code>result</code>.
      </p>
      <p className="mb-2">
        Пройдём циклами <code>for</code> по матрице. На каждой итерации будем вызывать
        функцию <code>backtrack</code> с текущей строкой, столбцом и нулевым индексом.
        Если эта функция вернёт <code>true</code>, то это означает, что мы нашли искомое
        слово в матрице, вернём <code>true</code>.
      </p>
      <p className="mb-2">
        Если цикл завершил свою работу, то это означает, что в матрице нет слова{' '}
        <code>word</code>, вернём <code>false</code>.
      </p>
    </>
  );
}

export default WordSearch;