import depthFirstSearchIterativeInorder from 'assets/depth-first-search-iterative-inorder.png?url';
import depthFirstSearchIterativePreorder from 'assets/depth-first-search-iterative-preorder.png?url';
import depthFirstSearchIterativePostorder from 'assets/depth-first-search-iterative-postorder.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const INORDER = `function inorder(root) {
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
}`;

const PREORDER = `function preorder(root) {
  const stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      console.log(curr.val);

      if (curr.right) {
        stack.push(curr.right);
      }

      curr = curr.left;
    } else {
      curr = stack.pop();
    }
  }
}`;

const POSTORDER = `function postorder(root) {
  const stack = [root];
  const visit = [false];

  while (stack.length > 0) {
    const curr = stack.pop();
    const visited = visit.pop();

    if (curr) {
      if (visited) {
        console.log(curr.val);
      } else {
        stack.push(curr);
        visit.push(true);
        stack.push(curr.right);
        visit.push(false);
        stack.push(curr.left);
        visit.push(false);
      }
    }
  }
}`;

function IterativeDepthFirstSearch(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Рекурсивный подход к выполнению поиска в глубину тривиален. Иногда вас могут
        попросить написать итеративное решение, что может быть намного сложнее. Поэтому
        его полезно знать в таких ситуациях.
      </p>
      <p className="mb-2">
        Рекурсия использует стек под капотом. В итеративной версии мы объявим собственный
        стек для выполнения тех же операций.
      </p>
      <h2 className="font-bold my-2">Реализация</h2>
      <p className="mb-2">
        Если мы объявим наши собственные стеки, мы можем осмысленно добавлять в стек наши
        узлы, принимая во внимание порядок, в котором нам нужно выводить в консоль /
        извлекать их. Напомним, что существуют три способа обхода дерева.
      </p>
      <ul>
        <li className="mb-2">
          <strong>Inorder (центрированный)</strong>
          <p className="mb-2">
            Напомним, что inorder обход предполагает сначала посещение левого дочернего
            узла (включая всё его поддерево), затем посещение узла и, наконец, посещение
            правого дочернего узла (включая всё его поддерево). Мы объявим указатель{' '}
            <code>curr</code>, который будет указывать на текущий узел, который мы
            обрабатываем. Как только наш указатель <code>curr</code> укажет на узел, мы
            добавим его в стек. После этого мы обновим указатель <code>curr</code> на{' '}
            <code>curr.left</code>. Если наш <code>curr</code> указывает на{' '}
            <code>null</code>, мы можем извлечь последний узел из стека, вывести в консоль
            его значение и перейти к правому поддереву.
          </p>
          <Code value={INORDER} />
          <figure className="bg-white">
            <img
              alt="Центрированный обход в глубину"
              className="mx-auto"
              height="800"
              src={depthFirstSearchIterativeInorder}
              width="1240"
            />
          </figure>
        </li>
        <li>
          <strong>Preorder (прямой)</strong>
          <p className="mb-2">
            Preorder обход немного сложнее, чем inorder обход. Напомним, что при preorder
            обходе мы переходим от корня к левому поддереву, а затем к правому поддереву.
          </p>
          <p className="mb-2">
            В приведённом ниже коде цикл <code>while</code> проверяет, что{' '}
            <code>curr</code> ещё указывает на узел или в нашем стеке всё ещё есть
            элементы. Когда наш <code>curr</code> достигает <code>null</code>, это
            означает, что узла не существует. Однако внутри нашего стека всё ещё могут
            быть элементы, а это значит, что мы их извлекаем и выводим в консоль.
          </p>
          <Code value={PREORDER} />
          <figure className="bg-white">
            <img
              alt="Прямой обход в глубину"
              className="mx-auto"
              height="580"
              src={depthFirstSearchIterativePreorder}
              width="1240"
            />
          </figure>
        </li>
        <li>
          <strong>Postorder (обратный)</strong>
          <p className="mb-2">
            Postorder обход предполагает обход левого дочернего элемента, правого
            дочернего элемента и затем корня. Этот вариант сложнее двух предыдущих.
          </p>
          <p className="mb-2">
            Мы будем использовать два стека. В этом случае у нас будет стек{' '}
            <code>visit</code> и ещё один стек <code>stack</code>. Стек <code>visit</code>{' '}
            всегда будет того же размера, что и стек <code>stack</code>. Сначала мы
            поместим наш корневой узел на вершину <code>stack</code>. Затем мы отметим
            этот узел в <code>visit</code> как <code>false</code>.
          </p>
          <p className="mb-2">
            Затем мы можем запустить цикл <code>while</code>, который будет выполняться,{' '}
            <strong>
              пока <code>stack</code> не пуст
            </strong>{' '}
            (поскольку наши <code>visit</code> и <code>stack</code> имеют одинаковый
            размер). Используя это, мы извлечём <code>curr</code> и <code>visited</code>.
            Если наш <code>curr</code> не равен <code>null</code>, мы проверяем, посетили
            ли мы этот узел ранее.
          </p>
          <Code value={POSTORDER} />
          <img
            alt="Обратный обход в глубину"
            className="mx-auto"
            height="800"
            src={depthFirstSearchIterativePostorder}
            width="1560"
          />
        </li>
      </ul>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Если <i>n</i> — количество узлов, и мы выполняем <i>O</i>(1) работу с каждым
        узлом, то сложность по времени равна <i>O</i>(<i>n</i>). Также можно сказать, что
        сложность составляет <i>O</i>(<i>h</i>), где <i>h</i> — высота дерева. Сложность
        по памяти равна <i>O</i>(<i>n</i>), где в худшем случае в стеке находятся все
        узлы.
      </p>
    </>
  );
}

export default IterativeDepthFirstSearch;
