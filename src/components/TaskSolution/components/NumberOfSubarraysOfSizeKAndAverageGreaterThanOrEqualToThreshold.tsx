import type { ReactElement } from 'react';

function NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Решим задачу с помощью метода скользящего окна между указателями <code>l</code> и{' '}
        <code>r</code>. Создадим переменные <code>sum</code> и <code>result</code> со
        значением <code>0</code>, в которых будем хранить сумму окна и результат, который
        будем возвращать из функции.
      </p>
      <p className="mb-2">
        Пройдём циклом по массиву. На каждой итерации будем проверять размер окна. Если он
        равен <code>k</code>, то будем удалять из суммы число, на которое указывает{' '}
        <code>l</code>, после чего передвинем левый указатель. Затем добавим к сумме
        текущее число, после чего, если окно имеет размер <code>k</code> (это является
        правдой при <code>r + 1 &gt;= k</code>) и сумма удовлетворяет условию,
        инкрементируем <code>result</code>.
      </p>
      <p className="mb-2">
        После прохождения цикла возвращаем из функции <code>result</code>.
      </p>
    </>
  );
}

export default NumberOfSubarraysOfSizeKAndAverageGreaterThanOrEqualToThreshold;
