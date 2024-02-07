import type { ReactElement } from 'react';

function ValidateBinarySearchTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>valid</code> для обхода дерева,
        которая будет принимать в себя узел <code>node</code>, минимальное значение{' '}
        <code>left</code> и максимальное значение <code>right</code>, между которых должно
        находиться значение узла.
      </p>
      <p className="mb-2">
        Базовым случаем будет, когда <code>node === null</code>. В таком случае будем
        возвращать <code>true</code>. Если значение узла не находится между границами{' '}
        <code>left</code> и <code>right</code>, то будем возвращать <code>false</code>.
        Если оба условия не выполнились, то рекурсивно проверим левое и правое поддерево.
        Если все узлы в дереве будут находиться в переданных границах, вернём{' '}
        <code>true</code>, иначе <code>false</code>.
      </p>
    </>
  );
}

export default ValidateBinarySearchTree;
