import type { ReactElement } from 'react';

function InvertBinaryTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи удобно использовать рекурсию. Алгоритм похож на поиск в
        глубину.
      </p>
      <p className="mb-2">
        Для того, чтобы обратить дерево, нам необходимо поменять местами левое и правое
        поддеревья, и рекурсивно сделать то же самое для более глубоких поддеревьев.
        Базовым случаем будет, когда переданный корень будет равен <code>null</code>. В
        таком случае нам нечего менять местами — возвращаем <code>null</code>.
      </p>
    </>
  );
}

export default InvertBinaryTree;
