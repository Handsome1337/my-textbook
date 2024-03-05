import type { ReactElement } from 'react';

function HouseRobber(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменные <code>rob1</code> и <code>rob2</code>, которые будут указывать
        на максимальное количество денег, которое можно украсть из домов по индексам{' '}
        <i>n</i> - 2 и <i>n</i> - 1 соответственно (можно представить, что дома идут так:{' '}
        <code>rob1</code>, <code>rob2</code>, <i>n</i>, <i>n</i> + 1, ...).
      </p>
      <p className="mb-2">
        Пройдём циклом по домам. На каждой итерации будем обновлять <code>rob1</code> и{' '}
        <code>rob2</code>. В <code>rob1</code> запишем <code>rob2</code>, а в{' '}
        <code>rob2</code> — большее из суммы <code>rob1</code> с текущим числом и{' '}
        <code>rob2</code>. После того, как цикл пройдёт полностью, в <code>rob2</code>{' '}
        будет лежать максимальное количество денег, которое мы можем украсть, вернём{' '}
        <code>rob2</code> из функции.
      </p>
    </>
  );
}

export default HouseRobber;
