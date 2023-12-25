import type { ReactElement } from 'react';

function ReverseLinkedList(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для того, чтобы развернуть связный список, нам необходимо переместить указатель{' '}
        <code>next</code> каждого узла со следующего на предыдущий узел. Нам потребуется
        пройти по всему списку, сделаем это в цикле <code>while</code>, предварительно
        создав для указателя <code>prev</code> и <code>cur</code>, которые на каждой
        итерации будут указывать на предыдущий и текущий узел. У первого узла нет
        предыдущего элемента, поэтому присвоим <code>prev</code> значение{' '}
        <code>null</code>.
      </p>
      <p className="mb-2">
        На каждой итерации будем сохранять ссылку на следующий узел в переменную{' '}
        <code>next</code>. Затем переместим указатель <code>next</code> текущего узла на
        предыдущий узел. Осталось только переместить указатели <code>prev</code> и{' '}
        <code>cur</code> на текущий и следующий узел (на него больше не указывает
        указатель <code>cur.next</code>, но мы заранее сохранили ссылку на него в
        переменной <code>next</code>) соответственно.
      </p>
      <p className="mb-2">
        Цикл закончится, когда <code>cur</code> будет указывать на <code>null</code>. Это
        означает, что мы прошли весь список, и в указателе <code>prev</code> теперь
        хранится последний узел переданного списка, который теперь является первым узлом
        возвращаемого списка, поэтому вернём его из функции.
      </p>
    </>
  );
}

export default ReverseLinkedList;
