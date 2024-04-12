import type { ReactElement } from 'react';

function HappyNumber(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим вспомогательную функцию <code>sumOfSquares</code>, которая будет
        высчитывать сумму квадратов цифр числа. Создадим в ней переменную{' '}
        <code>result</code> и запустим цикл <code>while</code>, который будет исполняться,
        пока <code>n</code> не станет равно нулю. На каждой итерации цикла{' '}
        <code>while</code> будем брать остаток от <code>n / 10</code> и записывать его в
        переменную <code>digit</code>, после чего возведём <code>digit</code> в квадрат.
        Это значение добавим к <code>result</code>, а <code>n</code> присвоим{' '}
        <code>n / 10</code> без остатка. Когда <code>n</code> станет равно нулю, вернём{' '}
        <code>result</code> из функции.
      </p>
      <p className="mb-2">
        Перейдём к функции <code>isHappy</code>. Создадим <code>Set</code>{' '}
        <code>visited</code>, в котором будем хранить числа. Запустим цикл{' '}
        <code>while</code>, который будет исполняться до тех пор, пока <code>n</code> не
        находится в <code>visited</code>. На каждой итерации будем добавлять{' '}
        <code>n</code> в <code>Set</code>, после чего будем присваивать{' '}
        <code>n = sumOfSquares(n)</code>. Если теперь <code>n</code> равно единице, то мы
        можем вернуть <code>true</code> из функции.
      </p>
      <p>
        Цикл <code>while</code> закончит свою работу, когда в <code>visited</code> уже
        будет вновь высчитанное <code>n</code>. Это означает, что у нас есть цикл, мы
        всегда будем возвращаться к этому <code>n</code> и никогда не достигнем единицы.
        Вернём из функции <code>false</code>.
      </p>
    </>
  );
}

export default HappyNumber;
