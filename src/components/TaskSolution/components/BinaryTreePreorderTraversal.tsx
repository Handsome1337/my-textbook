import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function BinaryTreePreorderTraversal(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Обход по дереву проще всего выполнять с помощью рекурсии, однако такой обход мы
        уже рассмотрели в нашей{' '}
        <Link
          to="/subjects/depth-first-search"
          className="focus-visible:font-semibold focus-visible:outline-0 hover:font-semibold text-blue-500"
        >
          статье
        </Link>
        . Рассмотрим итеративное решение этой задачи.
      </p>
      <p className="mb-2">
        Для решения задачи нам понадобится стек. Создадим его, массив <code>result</code>,
        который мы будем возвращать из функции, и указатель <code>cur</code>, который
        будет указывать на текущий узел.
      </p>
      <p className="mb-2">
        Создадим цикл <code>while</code>, который будет исполняться, пока в{' '}
        <code>cur</code> есть узел или в стеке есть узлы. На каждой итерации проверяем,
        указывает ли <code>cur</code> на узел (он может указывать на <code>null</code>).
        Если указывает, то добавляем его значение в <code>result</code>, добавляем в стек
        правый дочерний узел и переносим указатель <code>cur</code> на левый дочерний
        узел. Эти действия выполняются для того, чтобы сначала в <code>result</code> мы
        добавили левое поддерево, а затем правое. Если <code>cur</code> не указывает на
        узел, это означает, что мы прошли всё левое поддерево, достаём из стека узел
        правого поддерева и переносим указатель <code>cur</code> на него. Таким образом,
        на следующей итерации мы пройдём те же шаги для правого поддерева текущего узла.
      </p>
      <p className="mb-2">
        В результате порядок обхода узлов получится таким же, как при рекурсивном Preorder
        обходе.
      </p>
    </>
  );
}

export default BinaryTreePreorderTraversal;
