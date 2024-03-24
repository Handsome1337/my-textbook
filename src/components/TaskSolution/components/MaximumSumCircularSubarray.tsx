import type { ReactElement } from 'react';

function MaximumSumCircularSubarray(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>maxSum = -Infinity</code> (максимальная сумма
        подмассива), <code>minSum = Infinity</code> (минимальная сумма подмассива),{' '}
        <code>currentMaxSum</code> (максимальная сумма текущего подмассива),{' '}
        <code>currentMinSum</code> (минимальная сумма текущего подмассива) и{' '}
        <code>total</code> (сумма всех чисел). Пройдём циклом по всем числам.
      </p>
      <p>
        На каждой итерации обновляем значения всех наших переменных. После прохождения
        цикла, если <code>maxSum &gt; 0</code>, то это означает, что в массиве есть как
        минимум одно положительное число, и нам необходимо вернуть из функции мамсимум из
        максимальной суммы подмассива и разностью суммы всех чисел и минимальной суммы
        подмассива. Иначе вернём <code>maxSum</code>.
      </p>
    </>
  );
}

export default MaximumSumCircularSubarray;
