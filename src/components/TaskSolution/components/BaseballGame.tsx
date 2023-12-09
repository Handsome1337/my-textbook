import type { ReactElement } from 'react';

function BaseballGame(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи удобно использовать стек, так как нам необходимо
        взаимодействовать только с последней либо предпоследней операцией.
      </p>
      <p className="mb-2">
        Пройдём циклом по операциям, добавив нужное значение в <code>record</code>, либо
        удалив последнее значение в случае операции <code>&apos;C&apos;</code>. После
        этого вернём сумму элементов <code>record</code>.
      </p>
    </>
  );
}

export default BaseballGame;
