import binarySearchTree from 'assets/binary-search-tree.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BTS_SEARCH = `function search(root, target) {
  if (root === null) {
    return false;
  }

  if (target > root.value) {
    return search(root.right, target);
  } else if (target < root.value) {
    return search(root.left, target);
  } else {
    return true;
  }    
}`;

function BinarySearchTree(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">
        Разница между бинарными деревьями и бинарными деревьями поиска
      </h2>
      <p className="mb-2">
        Бинарные деревья поиска (binary search tree — BST) — это разновидность бинарных
        деревьев, элементы в которых отсортированы по определённым правилам. Правила
        заключаются в том, что каждый левый дочерний элемент должен быть меньше своего
        родителя, а каждый правый дочерний элемент должен быть больше своего родителя.
        Бинарные деревья поиска не допускают дубликатов.
      </p>
      <p className="mb-2">
        <strong>
          Следует отметить, что правила BST применимы и к поддеревьям. Таким образом, хотя
          узел, значение которого меньше корня, будет находиться в левом поддереве, важно
          определить, где именно в левом поддереве будет находиться это значение.
        </strong>
      </p>
      <h2 className="font-bold my-2">Мотивация</h2>
      <p className="mb-2">
        Зачем беспокоиться о BST, если у нас есть отсортированные массивы? С помощью
        бинарного поиска мы можем искать в них значения за <i>O</i>(<i>log n</i>) по
        времени, и если BST предлагает ту же функциональность, не можем ли мы просто
        использовать массив? Всё так и есть. Однако BST блистает, когда мы пытаемся
        вставить или удалить значение. Обе эти операции выполняются за <i>O</i>(
        <i>log n</i>) по времени для BST, но за <i>O</i>(<i>n</i>) по времени для массива.
      </p>
      <p className="mb-2">
        Таким образом, хотя BST и не имеют преимуществ перед отсортированными массивами
        при поиске, они лучше подходят для вставки и удаления. В этой статье мы
        сосредоточимся конкретно на операции поиска.
      </p>
      <h2 className="font-bold my-2">Поиск в BST</h2>
      <p className="mb-2">
        Деревья лучше всего обходить с помощью рекурсии. Хотя вы можете перемещаться по
        дереву итеративно, для этого потребуется поддерживать стек, что намного сложнее.
        Для рекурсии, как обсуждалось ранее, нам нужен базовый случай и вызывающая саму
        себя функция.
      </p>
      <p className="mb-2">
        Возьмём для примера дерево <code>[2, 1, 3, null, null, null, 4]</code> и найдём{' '}
        <code>target = 3</code>.
      </p>
      <p className="mb-2">
        При бинарном поиске, если текущий элемент больше искомого, мы шли влево, а если
        текущий элемент меньше искомого, мы шли вправо. Аналогичный подход можно применить
        и здесь. Мы знаем, что все узлы слева меньше нашего текущего узла, а все узлы
        справа больше нашего текущего узла. Зная это, мы можем пойти направо, если наш
        текущий узел меньше искомого, и пойти налево, если текущий узел больше искомого.
      </p>
      <p className="mb-2">
        Если искомое значение есть в дереве, мы вернём <code>true</code>. В противном
        случае мы возвращаем <code>false</code>.
      </p>
      <p className="mb-2">
        В данном примере мы сначала начинаем со сравнения корневого значения с{' '}
        <code>target</code>. <code>2</code> слишком мало, поэтому наша цель должна
        находиться справа, то есть мы можем исключить левое поддерево. Когда мы идём
        направо, первый узел равен <code>3</code>, что соответствует <code>target</code>,
        поэтому мы возвращаем <code>true</code> из рекурсивного вызова, что означает, что
        наша цель действительно существует в дереве.
      </p>
      <p className="mb-2">Это продеманстрировано в псевдокоде и на изображении ниже.</p>
      <figure className="bg-white mb-2">
        <img
          alt="Бинарное дерево поиска"
          className="mx-auto"
          height="440"
          src={binarySearchTree}
          width="1160"
        />
      </figure>
      <Code value={BTS_SEARCH} />
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Если у нас сбалансированное бинарное дерево, наш алгоритм поиска будет работать за{' '}
        <i>O</i>(<i>log n</i>) по времени. Сбалансированное бинарное дерево означает, что
        высота левого поддерева равна высоте правого поддерева, или разница между этими
        высотами равна <code>1</code>. В сбалансированном дереве мы можем каждый раз
        исключать половину узлов, в результате чего получается <i>O</i>(<i>log n</i>).
        Если дерево не сбалансировано, то это приводит к сложности по времени <i>O</i>(
        <i>n</i>). Это является худшим случаем.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Основное преимущество бинарных деревьев поиска по сравнению с отсортированными
        массивами заключается в том, что мы можем вставлять, удалять и выполнять поиск за{' '}
        <i>O</i>(<i>log n</i>) по времени.
      </p>
    </>
  );
}

export default BinarySearchTree;
