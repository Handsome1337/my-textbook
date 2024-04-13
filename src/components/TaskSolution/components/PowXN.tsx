import type { ReactElement } from 'react';

function PowXN(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>helper</code>, которая будет
        возводить число <code>x</code> в степень <code>n</code>. В ней будет два базовых
        случая. Если <code>x === 0</code>, то мы можем вернуть <code>0</code>, потому что{' '}
        <code>0</code> в любой степени равно <code>0</code>. Если <code>n === 0</code>, то
        мы можем вернуть <code>1</code>, потому что любое число в степени <code>0</code>{' '}
        равно <code>1</code>. Создадим переменную <code>result</code>, в которую сохраним{' '}
        <code>helper(x * x, Math.floor(n / 2))</code>. Допустим, <code>x = 2</code>, а{' '}
        <code>n = 4</code>. Это работает, потому что{' '}
        <code>
          2<sup>4</sup> === (2 * 2)<sup>2</sup>
        </code>
        . Если степень нечётная, то вернём из функции <code>x * result</code>, иначе
        просто вернём <code>result</code>.
      </p>
      <p>
        В основной функции <code>myPow</code> создадим переменную{' '}
        <code>result = helper(x, Math.abs(n))</code>. Если степень была отрицательной,
        вернём из функции <code>1 / result</code>, иначе вернём <code>result</code>.
      </p>
    </>
  );
}

export default PowXN;
