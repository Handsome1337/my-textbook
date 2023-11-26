import type { ReactElement } from 'react';

function ConcatenationOfArray(): ReactElement {
  return (
    <p>
      Создадим переменную <code>ans</code>, которая будет хранить результат вызова
      функции. Пройдём циклом по входному массиву, на каждой итерации дважды добавляя в{' '}
      <code>ans</code> каждый элемент: по индексам <code>i</code> и{' '}
      <code>i + nums.length</code>. Вернём <code>ans</code>.
    </p>
  );
}

export default ConcatenationOfArray;
