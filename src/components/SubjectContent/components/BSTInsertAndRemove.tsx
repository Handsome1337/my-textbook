import bstInsertion from 'assets/bst-insertion.png?url';
import bstRemoval1 from 'assets/bst-removal1.png?url';
import bstRemoval2 from 'assets/bst-removal2.png?url';
import bstRemoval3 from 'assets/bst-removal3.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const INSERTION = `function insert(root, value) {
  if (root === null) {
    return new TreeNode(value);
  }

  if (value > root.value) {
    root.right = insert(root.right, value);
  } else if (value < root.value) {
    root.left = insert(root.left, value);
  }

  return root; 
}`;

const REMOVAL = `function minValueNode(root) {
  let curr = root;
  
  while (curr && cur.left !== null) {
    curr = curr.left;
  }

  return curr;
}

function remove(root, value) {
  if (root === null) {
    return null;
  }

  if (value > root.value) {
    root.right = remove(root.right, value);
  } else if (value < root.value) {
    root.left = remove(root.left, value);
  } else {
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      const minNode = minValueNode(root.right);
      root.value = minNode.value;
      root.right = remove(root.right, minNode.value);
    }
  }

  return root;
}`;

function BSTInsertAndRemove(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Ранее мы упоминали, что основным преимуществом использования бинарных деревьев
        поиска (BST) по сравнению с отсортированными массивами является то, что мы можем
        выполнять удаление и вставку за <i>O</i>(<i>log n</i>) по времени, при условии,
        что дерево сбалансировано. Давайте углубимся в вставку и удаление.
      </p>
      <h2 className="font-bold my-2">Вставка</h2>
      <p className="mb-2">
        Если мы хотим вставить новый узел в BST, нам сначала нужно пройти по BST, чтобы
        найти правильную позицию для вставки, а затем вставить этот узел.
      </p>
      <p className="mb-2">
        Если у нас есть BST <code>[4]</code> и мы хотим вставить <code>6</code>, то мы
        могли бы получить либо <code>[4, null, 6]</code>, либо <code>[6, 4, null]</code>.
        Оба из этих вариантов будут валидными BST. В первом примере мы добавили{' '}
        <code>6</code> в качестве листового узла, что проще, чем добавление <code>6</code>{' '}
        в корень, что показано во втором примере.
      </p>
      <p className="mb-2">
        Давайте добавим <code>5</code> к полученному ранее дереву{' '}
        <code>[4, null, 6]</code>, в результате чего получится{' '}
        <code>[4, null, 6, 5, null]</code>.
      </p>
      <p className="mb-2">Этот процесс продемонстрирован приведённым ниже псевдокодом.</p>
      <Code value={INSERTION} />
      <figure className="bg-white mb-2">
        <img
          alt="Вставка в бинарное дерево поиска"
          className="mx-auto"
          height="380"
          src={bstInsertion}
          width="840"
        />
      </figure>
      <p className="mb-2">
        На изображении выше показано, как выполняется вставка. <code>6</code> больше
        корневого узла, поэтому она попадает в правое поддерево. <code>5</code> больше
        корневого узла, но меньше <code>6</code>, так что она попадает в левое поддерево
        дерева с корнем в <code>6</code>.
      </p>
      <h2 className="font-bold my-2">Удаление</h2>
      <p className="mb-2">
        Прежде чем удалить узел из BST, нам необходимо рассмотреть два случая:
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>Удаляемый узел имеет 0 или 1 дочерний узел</li>
        <li>Удаляемый узел имеет 2 дочерних узла</li>
      </ol>
      <h2 className="font-bold my-2">
        Случай 1 - удаляемый узел имеет один дочерний узел, либо не имеет дочерних узлов
      </h2>
      <p className="mb-2">
        Если мы хотим удалить узел <code>2</code>, у которого нет дочерних узлов, то
        указатель <code>left</code> узла <code>3</code> теперь будет указывать на{' '}
        <code>null</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Удаление узла, у которого нет детей"
          className="mx-auto"
          height="480"
          src={bstRemoval1}
          width="1260"
        />
      </figure>
      <p className="mb-2">
        Если мы хотим удалить узел <code>3</code>, у которого есть один дочерний узел,
        указатель <code>left</code> корневого узла теперь будет указывать на{' '}
        <code>2</code> вместо <code>3</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Удаление узла, у которого один дочерний узел"
          className="mx-auto"
          height="480"
          src={bstRemoval2}
          width="1260"
        />
      </figure>
      <h2 className="font-bold my-2">
        Случай 2 - удаляемый узел имеет два дочерних узла
      </h2>
      <p className="mb-2">
        Если мы хотим удалить узел c двумя дочерними узлами, скажем, <code>6</code>, мы
        заменяем этот узел его <strong>последовательным преемником</strong>.
      </p>
      <p className="mb-2">
        Последовательным преемником является самый левый узел в правом поддереве
        удаляемого узла. По-другому можно сказать, что это наименьший узел среди всех
        узлов, которые больше удаляемого узла. Это гарантирует, что полученное дерево
        по-прежнему будет валидным бинарным деревом поиска.
      </p>
      <p className="mb-2">
        На рисунке ниже показан процесс удаления узлов с двумя дочерними узлами.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Удаление узла, у которого два дочерних узла"
          className="mx-auto"
          height="500"
          src={bstRemoval3}
          width="1360"
        />
      </figure>
      <Code value={REMOVAL} />
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Сложность по времени для этих операций составляет <i>O</i>(<i>log n</i>), если
        дерево является сбалансированным. В противном случае сложность будет составлять{' '}
        <i>O</i>(<i>n</i>).
      </p>
    </>
  );
}

export default BSTInsertAndRemove;
