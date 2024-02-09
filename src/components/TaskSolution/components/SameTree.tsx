import type { ReactElement } from 'react';

function SameTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Решим задачу с помощью рекурсии. У нас будет 2 базовых случая: если узел в обоих
        деревьях равен <code>null</code>, то эти узлы равны, вернём <code>true</code>;
        если один из узлов равен <code>null</code>, либо их значения не равны, вернём{' '}
        <code>false</code>.
      </p>
      <p className="mb-2">
        Если ни один из базовых случаев не выполнился, это означает, что узлы равны.
        Необходимо сравнить их дочерние узлы. Возвращаем из функции{' '}
        <code>isSameTree(p.left, q.left) && isSameTree(p.right, q.right)</code>.
      </p>
    </>
  );
}

export default SameTree;
