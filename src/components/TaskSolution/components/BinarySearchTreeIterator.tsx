import type { ReactElement } from 'react';

function BinarySearchTreeIterator(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения задачи нам понадобится стек. Создадим его и заполним его корневым
        узлом и всеми левыми дочерними узлами.
      </p>
      <p className="mb-2">
        В методе <code>next</code> будем доставать последний узел из стека и добавлять
        правый дочерний узел этого узла в стек, после чего добавлять все левые дочерние
        узлы правого дочернего узла. Вернём из метода <code>node.val</code>. В методе{' '}
        <code>hasNext</code> возвращаем <code>true</code>, если в стеке есть узлы, иначе
        возвращаем <code>false</code>.
      </p>
    </>
  );
}

export default BinarySearchTreeIterator;
