import type { ReactElement } from 'react';

function CopyListWithRandomPointer(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим <code>Map</code> <code>OldToCopy</code>, в которой ключами будут узлы из
        переданного списка, а значениями — копии этих узлов. Добавим в{' '}
        <code>OldToCopy</code> пару для <code>null</code>. Пройдём в цикле{' '}
        <code>while</code> по списку, на каждой итерации добавляя новую пару в{' '}
        <code>OldToMap</code>.
      </p>
      <p className="mb-2">
        Пройдём по списку ещё раз, чтобы добавить к копиям указатели, которые мы можем
        получить из <code>OldToCopy</code>. После этого вернём из функции копию{' '}
        <code>head</code>.
      </p>
    </>
  );
}

export default CopyListWithRandomPointer;
