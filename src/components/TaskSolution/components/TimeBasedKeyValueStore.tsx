import type { ReactElement } from 'react';

function TimeBasedKeyValueStore(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Будем хранить в объекте <code>store</code> по ключу <code>key</code> массив пар{' '}
        <code>[value, timestamp]</code>.
      </p>
      <p className="mb-2">
        В методе <code>set</code>, перед тем, как добавить значение, проверим, содержит ли{' '}
        <code>store</code> переданный ключ. Если не содержит, то создадим в{' '}
        <code>store</code> пустой массив по этому ключу. После чего просто добавляем по
        нашему ключу пару <code>[value, timestamp]</code>.
      </p>
      <p className="mb-2">
        В методе <code>get</code> создадим переменную <code>result = &apos;&apos;</code>,
        ссылку на массив по переданному ключу <code>values</code> и указатели{' '}
        <code>left</code> и <code>right</code>, которые будут указывать на первое и
        последнее значение в массиве <code>values</code> соответственно. Пройдём бинарным
        поиском по массиву.
      </p>
      <p className="mb-2">
        На каждой итерации проверяем, является ли <code>timestamp</code> текущего элемента{' '}
        <code>middle</code> меньше или равным переданному <code>timestamp</code>. Если
        является, то это означает, что текущий элемент теоретически может подойти для
        ответа, так как он был добавлен в это время или ранее. Присваиваем его значение в{' '}
        <code>result</code> и продолжаем поиск для правой части массива. Если не является,
        то это означает, что все элементы в правой части были добавлены позже, поэтому они
        не подходят для ответа, продолжаем поиск в левой части.
      </p>
      <p className="mb-2">
        После того, как указатели пересекутся, возвращаем из метода <code>result</code>.
      </p>
    </>
  );
}

export default TimeBasedKeyValueStore;
