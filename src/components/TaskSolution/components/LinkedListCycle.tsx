import type { ReactElement } from 'react';

function LinkedListCycle(): ReactElement {
  return (
    <p className="mb-2">
      Создадим два указателя: медленный <code>slow</code> и быстрый <code>fast</code>,
      которые будут указывать на первый узел в списке. Пройдём циклом <code>while</code>{' '}
      по списку, передвигая указатели на каждой итерации. Быстрый будет двигаться в 2 раза
      быстрее, чем медленный. Таким образом, если в списке есть цикл, то наши указатели
      пересекутся, вернём <code>true</code>. Если цикл <code>while</code> закончится, то
      это будет означать, что цикла нет (потому что указатель <code>fast</code> вышел за
      пределы списка), вернём <code>false</code>.
    </p>
  );
}

export default LinkedListCycle;
