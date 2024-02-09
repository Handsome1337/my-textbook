import type { ReactElement } from 'react';

function ConstructBinaryTreeFromPreorderAndInorderTraversal(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Задача будет решаться через рекурсию. Добавим базовый случай — когда в функцию
        передан пустой массив <code>preorder</code> или <code>inorder</code>, то
        возвращаем <code>null</code>.
      </p>
      <p className="mb-2">
        При preorder обходе дерева первый узел всегда указывает на корень дерева. Создадим
        этот корневой узел. Найдём индекс корневого узла в <code>inorder</code> и сохраним
        его в <code>mid</code>.
      </p>
      <p className="mb-2">
        Все узлы, относящиеся к левому поддереву, в <code>preorder</code> будут идти с
        первого индекса до индекса <code>mid + 1</code>, а в <code>inorder</code> — с
        нулевого индекса до <code>mid</code>. Зная это, мы можем рекурсивно вызвать
        функцию <code>buildTree</code> для левого и правого поддерева. Вернём из функции
        корень нашего дерева <code>root</code>.
      </p>
    </>
  );
}

export default ConstructBinaryTreeFromPreorderAndInorderTraversal;
