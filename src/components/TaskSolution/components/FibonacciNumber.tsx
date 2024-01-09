import type { ReactElement } from 'react';

function FibonacciNumber(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать рекурсию. Мы знаем, что первые два
        числа Фибоначчи это <code>0</code> и <code>1</code>. Будем использовать это в
        нашем базовом случае <code>if (n &lt;= 1)</code>.
      </p>
      <p className="mb-2">
        Любое число Фибоначчи можно получить, сложив два предыдущих числа. Поэтому будем
        возвращать из функции <code>fib(n - 1) + fib(n - 2)</code>, что будет являться
        рекурсивным случаем. Например, если нам надо найти <code>fib(4)</code>, то мы
        будем рассчитывать сумму <code>fib(3)</code> и <code>fib(2)</code>. Мы сможем
        получить <code>fib(2)</code>, рассчитав <code>fib(1) + fib(0)</code>. Мы знаем{' '}
        <code>fib(1)</code> и <code>fib(0)</code>, потому что это базовые случаи. Получив{' '}
        <code>fib(2)</code>, мы сможем вычислить <code>fib(3)</code> и так далее.
      </p>
    </>
  );
}

export default FibonacciNumber;
