import type { ReactElement } from 'react';

function MinStack(): ReactElement {
  return (
    <>
      <p>Задачу можно решить двумя способами:</p>
      <ol className="list-decimal list-inside mb-2">
        <li>
          Создать один стек. Для каждого элемента в стеке хранить минимальное значение.
          Тогда стек будет хранить объекты типа <code>&#123; value, minValue &#125;</code>
          .
        </li>
        <li>
          Создать два стека. Один будет хранить коллекцию <code>value</code>, второй —{' '}
          коллекцию <code>minValue</code>.
        </li>
      </ol>
      <p className="mb-2">Решим задачу вторым способом.</p>
      <p className="mb-2">
        {' '}
        Создадим два стека: <code>stack</code> для хранения значений и{' '}
        <code>minStack</code> для хранения минимальных значений. Эти стеки всегда будут
        одинакового размера. При добавлении в стек в методе <code>push</code> мы просто
        добавляем значение в <code>this.stack</code>, а в <code>this.minStack</code> мы
        добавляем меньшее число между <code>value</code> и последним значением в{' '}
        <code>this.minStack</code>. Таким образом, в <code>this.minStack</code> всегда
        будет актуальное значение для каждого индекса.
      </p>
      <p className="mb-2">
        В методе <code>pop</code> удаляем последний элемент из каждого стека. В{' '}
        <code>top</code> — возвращаем последнее значение из <code>this.stack</code>, а в{' '}
        <code>getMin</code> — последнее значение из <code>this.minStack</code>.
      </p>
    </>
  );
}

export default MinStack;
