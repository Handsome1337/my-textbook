import type { ReactElement } from 'react';

function SubtreeOfAnotherTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        <code>subRoot</code> является поддеревом <code>root</code>, если какое-либо
        поддерево <code>root</code> равно <code>subRoot</code>. Напишем вспомогательную
        рекурсивную функцию <code>isSameTree</code>, которая будет сравнивать два дерева и
        возвращать <code>true</code>, если они равны, и <code>false</code>, если они не
        равны. У нас будет 2 базовых случая: если узел в обоих деревьях равен{' '}
        <code>null</code>, то эти узлы равны, вернём <code>true</code>; если один из узлов
        равен <code>null</code>, либо их значения не равны, вернём <code>false</code>.
        Если ни один из базовых случаев не выполнился, это означает, что узлы равны.
        Необходимо сравнить их дочерние узлы. Возвращаем из функции{' '}
        <code>
          isSameTree(root.left, root2.left) && isSameTree(root.right, root2.right)
        </code>
        .
      </p>
      <p className="mb-2">
        Функция <code>isSubtree</code> также будет рекурсивной. У неё также будет 2
        базовых случая: если <code>subRoot</code> равен <code>null</code>, то он является
        поддеревом <code>root</code>, вернём <code>true</code>; если <code>root</code>{' '}
        равен <code>null</code>, то это означает, что <code>subRoot</code> (который точно
        не равен <code>null</code>, раз первый случай не сработал) не является поддеревом,
        вернём <code>false</code>. Если ни один из случаев не сработал, сравним{' '}
        <code>root</code> и <code>subRoot</code>, и если они равны, вернём{' '}
        <code>true</code>. Иначе сравним <code>subRoot</code> с левым и правым поддеревом{' '}
        <code>root</code>. Если какое-либо из поддеревьев будет равно <code>subRoot</code>
        , то вернём <code>true</code>, иначе <code>false</code>.
      </p>
    </>
  );
}

export default SubtreeOfAnotherTree;
