import type { ReactElement } from 'react';

function GuessNumberHigherOrLower(): ReactElement {
  return (
    <>
      <p className="mb-2">
        <strong>
          Обратите внимание, что функция отгадывания <code>guess</code> предоставляется
          API, мы не пишем её сами!
        </strong>
      </p>
      <p className="mb-2">
        Используем бинарный поиск в дипазоне значений. В указатель <code>low</code>{' '}
        запишем 1, так как это минимально возможное число по условию задачи, а в{' '}
        <code>high</code> запишем <code>n</code>. На каждой итерации цикла проверяем с
        помощью функции <code>guess</code> число, которое находится посередине диапазона,
        в котором мы проводим поиск, и в зависимости от результата перемещаем указатели,
        либо возвращаем число, если мы его угадали.
      </p>
    </>
  );
}

export default GuessNumberHigherOrLower;
