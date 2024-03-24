import type { ReactElement } from 'react';

function MaximumSubarray(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>maxSum</code>, которую будем возвращать из функции, со
        значением <code>-Infinity</code> (так будет удобнее обновлять максимальную сумму),
        и переменную <code>currentSum = 0</code>. Пройдём циклом по всем числам.
      </p>
      <p className="mb-2">
        На каждой итерации записываем в <code>currentSum</code> сумму максимума между{' '}
        <code>0</code> и предыдущей <code>currentSum</code> (если предыдущая сумма меньше
        нуля, нет смысла добавлять её к текущему числу, потому что сумма подмассива, не
        включающего предыдущее числа, всегда будет больше) и текущего числа. После этого
        обновляем <code>maxSum</code>, если <code>currentSum</code> больше максимальной
        суммы.
      </p>
      <p className="mb-2">
        После прохождения цикла вернём <code>maxSum</code> из функции.
      </p>
    </>
  );
}

export default MaximumSubarray;
