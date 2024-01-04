import enqueue from 'assets/enqueue.png?url';
import dequeue from 'assets/dequeue.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const ENQUEUE_OPERATION = `enqueue(val) {
  const newNode = new ListNode(value);

  if (this.tail !== null) {
  // очередь не пуста
    this.tail.next = newNode;
    this.tail = this.tail.next;
  } else {
  // очередь пуста
    this.head = newNode;
    this.tail = newNode;
  }
}`;

const DEQUEUE_OPERATION = `dequeue() {
  if (this.head === null) {
  // очередь пуста
    return;
  }

  // удаляет первый узел и возвращает его значение
  const value = this.head.value;

  this.head = this.head.next;

  if (!this.head) {
    this.tail = null;
  }

  return value;
}`;

function Queues(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Очереди похожи на стеки, за исключением того, что они следуют так называемому
        принципу FIFO (First in First Out). Примером из реального мира может служить
        очередь в банке. Первый человек, который встанет в очередь, будет первым, кого
        обслужат. Примером из мира программного обеспечения может служить работа принтера.
        Например, если несколько человек пытаются распечатать документы, документы будут
        распечатаны в порядке поступления команд.
      </p>
      <h2 className="font-bold my-2">Реализация и операции</h2>
      <p className="mb-2">
        Чаще всего очереди реализуют с использованием связного списка.
      </p>
      <p className="mb-2">
        Очереди поддерживают две операции: <code>enqueue</code> (постановка в очередь) и{' '}
        <code>dequeue</code> (удаление из очереди).
      </p>
      <p className="mb-2">
        <strong>
          Очередь — это просто абстрактный интерфейс (как и стек), который может быть
          реализован несколькими структурами данных при условии, что они выполняют
          контракт реазилации операций постановки в очередь и удаления из очереди.
        </strong>
      </p>
      <ul>
        <li>
          <strong>Постановка в очередь</strong>
          <p className="mb-2">
            Операция постановки в очередь добавляет элементы в конец очереди до тех пор,
            пока не будет достигнут размер очереди. Поскольку добавление в конец очереди
            не требует смещения элементов, эта операция выполняется за <i>O</i>(1).
            Следующий псевдокод и изображение демонстрируют это.
          </p>
          <Code value={ENQUEUE_OPERATION} />
          <figure className="bg-white mb-2">
            <img
              alt="Постановка в очередь"
              className="mx-auto"
              height="200"
              src={enqueue}
              width="1040"
            />
          </figure>
        </li>
        <li>
          <strong>Удаление из очереди</strong>
          <p className="mb-2">
            Операция удаления из очереди удаляет элемент из начала очереди и возвращает
            этот элемент. Следующий псевдокод и изображение демонстрируют это.
          </p>
          <Code value={DEQUEUE_OPERATION} />
          <figure className="bg-white mb-2">
            <img
              alt="Удаление из очереди"
              className="mx-auto"
              height="200"
              src={dequeue}
              width="800"
            />
          </figure>
        </li>
      </ul>
      <p className="mb-2">
        Очереди также можно реализовать с помощью массивов, однако это становится немного
        сложнее, если вы хотите поддерживать эффективность операций <code>enqueue</code> и{' '}
        <code>dequeue</code>. При реализации с помощью массива сложность{' '}
        <code>dequeue</code> составит <i>O</i>(<i>n</i>) по времени из-за сдвига
        элементов.
      </p>
      <p className="mb-2">
        <strong>
          Существует также разновидность очереди, которая называется двусторонней очередью
          (<code>deque</code>). Двусторонняя очередь позволяет добавлять и удалять
          элементы как и сначала, так и с конца очереди.
        </strong>
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <table className="border-collapse mb-2 table-auto w-full">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Операция
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Сложность по времени
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Постановка в очередь
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Удаление из очереди
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mb-2">
        Одним из наиболее важных вариантов использования очереди является поиск в ширину
        для деревьев и графов, который мы рассмотрим в будущей статье.
      </p>
    </>
  );
}

export default Queues;
