import type { ReactElement } from 'react';

function KthSmallestElementInABST(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Проще всего эту задачу решить с помощью рекурсии. Мы можем создать массив{' '}
        <code>array</code> и наполнить его значениями, выполнив Inorder обход дерева в
        глубину, в результате чего массив будет отсортирован, и мы сможем вернуть{' '}
        <code>array[k - 1]</code>. Рассмотрим более сложное итеративное решение.
      </p>
      <p className="mb-2">
        Для решения задачи нам понадобится стек. Создадим его, переменную{' '}
        <code>
          <i>n</i>
        </code>
        , которая будет хранить значение, сколько раз мы доставали элементы из стека, и
        указатель <code>cur</code>, который будет указывать на текущий узел.
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
        увеличиваем <i>n</i> на <code>1</code>. Когда мы достаём узел из стека и
        увеличиваем <i>n</i>, это означает, что мы достали <i>n</i>-ый самый маленький
        узел BST. Сравним <i>n</i> и <i>k</i>, если они равны, то возвращаем из функции
        значение текущего узла. Если не равны, переносим указатель <code>cur</code> на{' '}
        <code>cur.right</code>. Таким образом, на следующей итерации внешнего цикла мы
        пройдём те же шаги для правого поддерева текущего узла (все значения в нём будут
        больше, чем то, которое мы только что достали из стека, но меньше, чем все
        остальные значения в стеке).
      </p>
      <p className="mb-2">
        В результате порядок обхода узлов получится таким же, как при рекурсивном Inorder
        обходе.
      </p>
    </>
  );
}

export default KthSmallestElementInABST;
