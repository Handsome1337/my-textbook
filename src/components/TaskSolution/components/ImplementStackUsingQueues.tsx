import type { ReactElement } from 'react';

function ImplementStackUsingQueues(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим класс очереди <code>MyQueue</code>, который будет поддерживать операции,
        указанные в задаче: <code>enqueue</code> (push to back), <code>peek</code> (peek
        from front), <code>dequeue</code> (pop from front), <code>size</code> и{' '}
        <code>isEmpty</code>. Очередь будет реализована с помощью двусвязного списка и
        двух фиктивных узлов для <code>this.head</code> и <code>this.tail</code>.
        Учитывая, что согласно задаче все вызовы будут валидными, не будем добавлять
        никаких проверок в <code>dequeue()</code>.
      </p>
      <p className="mb-2">
        Приступим к реализации стека <code>MyStack</code>. Сохраним в{' '}
        <code>this.queue</code> нашу очередь. Для того, чтобы мы могли использовать
        очередь как стек, необходимо, чтобы все новые элементы добавлялись в начало
        очереди, а не в конец. Поэтому в методе <code>push</code>, после добавления в
        очередь нового элемента, мы пройдём циклом <code>for</code> по очереди до этого
        элемента (<code>this.queue.size - 1</code>), и на каждой итерации будем удалять
        элемент из очереди и добавлять его же в конец очереди. Таким образом переданный в{' '}
        <code>push</code> элемент станет первым, и все последующие элементы будут идти в
        порядке добавления от самого недавнего к самому первому. Благодаря этому мы можем
        легко реализовать методы <code>pop</code> и <code>top</code>, потому что очередь
        поддерживает эти операции для первого элемента.
      </p>
    </>
  );
}

export default ImplementStackUsingQueues;
