import type { ReactElement } from 'react';

function RemoveNthNodeFromEndOfList(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим фиктивный узел <code>dummyNode</code> и поместим его в начало списка,
        чтобы не писать дополнительные условия для случая, когда необходимо удалить первый
        элемент в списке. Также создадим два указателя: <code>left</code>, указывающий на
        фиктивный узел, и <code>right</code>, указывающий на настоящее начало списка.
      </p>
      <p className="mb-2">
        Если наши указатели будут находиться на расстоянии <code>n + 1</code> друг от
        друга, и правый будет указывать на <code>null</code>, то это будет означать, что
        узел, который нам необходимо удалить, находится в <code>left.next</code>. Поэтому
        в цикле <code>while</code> передвинем указатель <code>right</code> на{' '}
        <code>n + 1</code> от указателя <code>left</code>.
      </p>
      <p className="mb-2">
        Теперь, когда наши указатели находятся на нужном нам расстоянии друг от друга, в
        цикле <code>while</code> будем передвигать их, пока <code>right</code> не выйдет
        за пределы списка. После этого удалим <code>left.next</code> и вернём из функции{' '}
        <code>dummyNode.next</code>, чтобы фиктивный узел не попал в ответ.
      </p>
    </>
  );
}

export default RemoveNthNodeFromEndOfList;
