import depthFirstSearchInorder from 'assets/depth-first-search-inorder.png?url';
import depthFirstSearchPreorder from 'assets/depth-first-search-preorder.png?url';
import depthFirstSearchPostorder from 'assets/depth-first-search-postorder.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const INORDER = `function inorder(root) {
  if (root === null) {
    return;
  }

  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
}`;

const PREORDER = `function preorder(root) {
  if (root === null) {
    return;
  }

  console.log(root.val);
  preorder(root.left);
  preorder(root.right);
}`;

const POSTORDER = `function preorder(root) {
  if (root === null) {
    return;
  }

  preorder(root.left);
  preorder(root.right);
  console.log(root.val);
}`;

function DepthFirstSearch(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Поиск в глубину (Depth-first Search — DFS) — это способ обхода бинарных деревьев
        поиска, в котором приоритет отдаётся глубине, а не ширине.
      </p>
      <p className="mb-2">
        Идея состоит в том, чтобы продолжать перемещаться либо по левому поддереву, либо
        по правому поддереву до тех пор, пока не останется больше узлов. Существуют
        различные методы, с помощью которых выполняется поиск в глубину. Эти методы
        посещают узлы <code>root</code>, <code>left</code> и <code>right</code> в разном
        порядке. Эти три метода:
      </p>
      <ul className="list-disc list-inside">
        <li>Inorder (центрированный)</li>
        <li>Preorder (прямой)</li>
        <li>Postorder (обратный)</li>
      </ul>
      <p className="mb-2">
        Поиск в глубину лучше всего реализовать с помощью рекурсии. Опять же, вы можете
        использовать стек и делать это итеративно, но это намного сложнее.
      </p>
      <p className="mb-2">
        Возьмём дерево с узлами <code>[4, 3, 6, 2, null, 5, 7]</code>, идущими слева
        направо.
      </p>
      <h2 className="font-bold my-2">Центрированный обход</h2>
      <p className="mb-2">
        Центрированный обход с приоритетом левого поддерева над правым сначала посещает
        дочерний узел <code>left</code>, затем родительский узел, а затем дочерний узел{' '}
        <code>right</code>. Центрированный обход приведёт к посещению узлов в
        отсортированном порядке.
      </p>
      <Code value={INORDER} />
      <p className="mb-2">
        Порядок посещения этих узлов — <code>[2, 3, 4, 5, 6, 7]</code>, он является
        отсортированным. Важно отметить, что это работает только тогда, когда левое
        поддерево имеет приоритет над правым. Если правое будет иметь приоритет над левым,
        мы получим массив, отсортированный в обратном порядке.
      </p>
      <p className="mb-2">
        <strong>
          Причина, по которой узлы будут выводиться в отсортированном виде, связана со
          свойством BST. Поскольку мы знаем, что все значения слева от узла меньше, это
          означает, что мы не достигнем базового случая, пока не достигнем самого левого
          узла, который также является самым маленьким узлом. После посещения самого
          левого узла мы пройдём вверх, посетим родителя, а затем посетим правое
          поддерево. На изображении ниже показан этот процесс.
        </strong>
      </p>
      <p className="mb-2">
        Порядок посещения узлов представлен цифрами синего цвета рядом с узлом.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Центрированный обход в глубину"
          className="mx-auto"
          height="480"
          src={depthFirstSearchInorder}
          width="400"
        />
      </figure>
      <h2 className="font-bold my-2">Прямой обход</h2>
      <p className="mb-2">
        Прямой обход с приоритетом левого поддерева над правым посещает родителя, дочерний
        узел <code>left</code>, а затем дочерний узел <code>right</code>.
      </p>
      <Code value={PREORDER} />
      <p className="mb-2">
        Узлы посещаются в следующем порядке: <code>[4, 3, 2, 6, 5, 7]</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Прямой обход в глубину"
          className="mx-auto"
          height="480"
          src={depthFirstSearchPreorder}
          width="400"
        />
      </figure>
      <h2 className="font-bold my-2">Обратный обход</h2>
      <p className="mb-2">
        Обратный обход с приоритетом левого поддерева над правым посещает дочерний узел{' '}
        <code>left</code>, дочерний узел <code>right</code>, а затем родителя.
      </p>
      <Code value={POSTORDER} />
      <p className="mb-2">
        Узлы посещаются в следующем порядке: <code>[2, 3, 5, 7, 6, 4]</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Обратный обход в глубину"
          className="mx-auto"
          height="480"
          src={depthFirstSearchPostorder}
          width="400"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Мы знаем, что нам нужно посетить каждый узел дерева, и если в дереве <i>n</i>{' '}
        узлов, алгоритм будет работать за <i>O</i>(<i>n</i>).
      </p>
      <p className="mb-2">
        Ещё один интересный момент заключается в том, что мы могли бы отсортировать
        массив, используя бинарное дерево. Сначала нам нужно будет построить дерево и
        вставить каждое значение. Мы знаем, что существует <i>n</i> значений, и вставка
        значения в бинарное дерево занимает <i>log n</i> времени. Следовательно, весь
        процесс построения дерева составит <i>O</i>(<i>n log n</i>). Обход дерева займёт
        всего <i>n</i> шагов, поэтому в общей сложности это будет <i>O</i>(<i>n</i> +{' '}
        <i>n log n</i>).
      </p>
      <p className="mb-2">
        Константы не принимаются во внимание. Мы также знаем, что <i>O</i>(<i>n log n</i>)
        будет расти быстрее, чем <i>O</i>(<i>n</i>), поэтому мы можем установить верхнюю
        границу на уровне <i>O</i>(<i>n log n</i>).
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Теперь, когда мы увидели, как дерево проходится в глубину, давайте посмотрим, как
        оно проходится, когда мы в первую очередь расставляем приоритеты по ширине.
      </p>
    </>
  );
}

export default DepthFirstSearch;
