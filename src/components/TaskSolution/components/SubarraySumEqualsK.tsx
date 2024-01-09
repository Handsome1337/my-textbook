import type { ReactElement } from 'react';

function SubarraySumEqualsK(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать <code>Map</code>, в которой ключами
        будут префиксные суммы, а значениями — то, сколько раз встречается префиксная
        сумма в переданном массиве <code>nums</code>. Для базового случая сразу добавим
        пару <code>[0, 1]</code> (префиксная сумма для первого элемента в массиве равна{' '}
        <code>0</code>).
      </p>
      <p className="mb-2">
        Создадим переменные <code>prefixSum</code> (<code>Map</code>, о котором сказано
        выше), <code>result</code>, который мы будем возвращать из функции, и{' '}
        <code>currentSum</code>, в которой будет храниться префиксная сумма.
      </p>
      <p className="mb-2">
        Пройдём циклом по <code>nums</code>. На каждой итерации добавляем текущий элемент
        к префиксной сумме и вычисляем разницу между ней и <code>k</code>. Если такая
        префиксная сумма ранее не встречалась в <code>Map</code>, то добавляем{' '}
        <code>0</code>. Иначе добавляем к результату значение этой префиксной суммы из{' '}
        <code>Map</code> (значение равно количеству модмассивов, сумма которых равна{' '}
        <code>k</code>. Попробуйте нарисовать решение, либо расставить логи, чтобы лучше
        понять работу функции). Затем инкрементируем значение этой префиксной суммы в{' '}
        <code>Map</code>, либо задаём значение 1, если такого ключа не было.
      </p>
    </>
  );
}

export default SubarraySumEqualsK;