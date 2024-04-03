import type { ReactElement } from 'react';

function NumberOf1Bits(): ReactElement {
  return (
    <p className="mb-2">
      Создадим переменную <code>result</code>, которую будем возвращать из функции.
      Запустим цикл <code>while</code>, который будет исполняться, пока <code>n</code> не
      равно нулю. На каждой итерации будем проверять, равно ли побитовое И между{' '}
      <code>n</code> и <code>1</code> единице. Если равно, то увеличим <code>result</code>
      . В конце каждой итерации будем выполнять выполнять побитовый сдвиг <code>n</code>{' '}
      вправо на <code>1</code> и присваивать полученный результат в <code>n</code>. Когда
      цикл <code>while</code> закончит свою работу, вернём <code>result</code> из функции.
    </p>
  );
}

export default NumberOf1Bits;
