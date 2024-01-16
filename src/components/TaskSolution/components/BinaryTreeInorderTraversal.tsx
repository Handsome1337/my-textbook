import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

function BinaryTreeInorderTraversal(): ReactElement {
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
        <code>cur</code> есть узел или в стеке есть узлы. Запустим внутренний цикл{' '}
        <code>while</code>, который идёт из <code>cur</code> в самую левую часть его
        поддерева, на каждой итерации добавляя в стек текущий узел. Таким образом, когда{' '}
        <code>cur</code> станет указывать на <code>null</code> и внутренний цикл
        прекратится, на вершине стека у нас будет самый маленький узел для поддерева.
      </p>
      <p className="mb-2">
        Достаём этот узел из стека, переносим указатель <code>cur</code> на него и
        добавляем его значение в <code>result</code>, после чего переносим указатель{' '}
        <code>cur</code> на <code>cur.right</code>. Таким образом, на следующей итерации
        внешнего цикла мы пройдём те же шаги для правого поддерева текущего узла (все
        значения в нём будут больше, чем то, которое мы только что достали из стека, но
        меньше, чем все остальные значения в стеке).
      </p>
      <p className="mb-2">
        В результате порядок обхода узлов получится таким же, как при рекурсивном Inorder
        обходе.
      </p>
    </>
  );
}

export default BinaryTreeInorderTraversal;
