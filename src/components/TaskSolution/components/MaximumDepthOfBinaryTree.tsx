import type { ReactElement } from 'react';

function MaximumDepthOfBinaryTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Эту задачу можно решить разными способами, но самый простой способ будет связан с
        использованием рекурсии.
      </p>
      <p className="mb-2">
        Базовым случаем будет, когда переданный корень будет равен <code>null</code>. В
        таком случае глубина дерева равна <code>0</code>.
      </p>
      <p className="mb-2">
        Чтобы посчитать глубину дерева, нам необходимо к <code>1</code> (глубина дерева из
        одного узла) добавить максимальную глубину между глубиной левого поддерева и
        глубиной правого поддерева.
      </p>
    </>
  );
}

export default MaximumDepthOfBinaryTree;
