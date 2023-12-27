import listNode2 from 'assets/list-node2.png?url';
import doublyLinkedListAppending1 from 'assets/doubly-linked-list-appending1.png?url';
import doublyLinkedListAppending2 from 'assets/doubly-linked-list-appending2.png?url';
import doublyLinkedListDeletion from 'assets/doubly-linked-list-deletion.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const INSERTION = `tail.next = ListNode4;
ListNode4.prev = tail;
tail = tail.next;`;

const DELETION = `ListNode2.next = null;
tail = ListNode2;`;

function DoublyLinkedLists(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Рассмотрев связные списки, давайте теперь узнаем об их разновидности — двусвязных
        списках. Как следует из названия, они называются двусвязными, поскольку каждый
        узел теперь имеет два указателя. В дополнение к указателю <code>next</code> у нас
        есть указатель <code>prev</code>, который указывает на предыдущий узел. Если
        указатель <code>prev</code> указывает на <code>null</code>, то это означает, что
        мы находимся в начале связного списка.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Узел списка"
          className="mx-auto"
          height="320"
          src={listNode2}
          width="1200"
        />
      </figure>
      <h2 className="font-bold my-2">Операции двусвязного списка</h2>
      <ul>
        <li>
          <strong>Вставка</strong>
          <p className="mb-2">
            Как и в случае со связным списком, добавление узла в двусвязный список будет
            выполняться за <i>O</i>(1) по времени. Только на этот раз нам также нужно
            обновить указатель <code>prev</code>.
          </p>
          <p className="mb-2">
            Например, если посмотреть на картинку ниже, в нашем связном списке есть три
            узла: <code>ListNode1</code>, <code>ListNode2</code> и <code>ListNode3</code>.
            Также у нас есть ещё один узел <code>ListNode4</code>, который мы ходим
            вставить в список. Мы знаем, что нам придётся обновить указатель{' '}
            <code>next</code> узла <code>ListNode3</code> и указатель <code>prev</code>{' '}
            узла <code>ListNode4</code>. Псевдокод ниже демонстрирует это вместе с
            пошаговым визуальным представлением:
          </p>
          <Code value={INSERTION} />
          <img
            alt="Добавление нового узла"
            className="mb-2"
            height="400"
            src={doublyLinkedListAppending1}
            width="1839"
          />
          <img
            alt="Добавление нового узла в цепочку"
            height="1080"
            src={doublyLinkedListAppending2}
            width="1839"
          />
        </li>
        <li>
          <strong>Удаление</strong>
          <p className="mb-2">
            Возвращаясь к примеру с тремя узлами, удаление также выполняется за <i>O</i>
            (1) по времени. Никакого сдвига или перемещения не требуется. Вместо этого, в
            этом случае требуется корректировка указателя <code>prev</code>. Псевдокод
            ниже демонстрирует это вместе с визуальным представлением:
          </p>
          <Code value={DELETION} />
          <figure className="bg-white mb-2">
            <img
              alt="Удаление узла"
              className="mx-auto"
              height="1160"
              src={doublyLinkedListDeletion}
              width="1320"
            />
          </figure>
          <p className="mb-2">
            <strong>
              Возможно, вы догадались, что обе операции добавления и удаления из конца
              связных списков выполняются за <i>O</i>(1), что похоже на операции{' '}
              <code>push</code> и <code>pop</code> в стеке. Стек — это всего лишь
              абстрактный интерфейс, который также можно реализовать с помощью связных
              списков.
            </strong>
          </p>
          <p className="mb-2">
            <strong>
              Если на желаемый узел не указывают <code>head</code> или <code>tail</code>,
              то необходимо добраться до узла перед удалением, что займёт <i>O</i>(
              <i>n</i>) по времени.
            </strong>
          </p>
        </li>
        <li>
          <strong>Доступ</strong>
          <p className="mb-2">
            Подобно связным списком, мы не можем получить произвольный узел. Так что в
            худшем случае нам придётся обойти <i>n</i> узлов до достижения желаемого узла.
            Эта операция занимает <i>O</i>(<i>n</i>) по времени.
          </p>
        </li>
      </ul>
      <h2 className="font-bold my-2">Итоги:</h2>
      <p className="mb-2">
        Эта статья может показаться более знакомой, чем ожидалось, но это потому, что
        единственное существенное различие между связными и двусвязными списками
        заключается в том, что двусвязный список имеет указатель <code>prev</code>, что
        требует больше операций при вставке и удалении узлов.
      </p>
      <table className="border-collapse mb-2 table-auto w-full">
        <thead>
          <tr>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Операция
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Сложность по времени
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Примечания
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Доступ</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">—</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Поиск</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">—</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Вставка</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Предполагая, что у вас есть ссылка на узел в желаемой позиции
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Удаление</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Предполагая, что у вас есть ссылка на узел в желаемой позиции
            </td>
          </tr>
        </tbody>
      </table>
      <p className="mb-2">
        <strong>
          По сравнению с массивами связные списки менее эффективны при доступе к
          случайному элементу из-за отсутствия встроенного индекса. Таким образом, массивы
          будут иметь доступ за <i>O</i>(1) по времени во всех случаях, а связные списки —
          за <i>O</i>(<i>n</i>), если только вы не хотите получить доступ к узлу{' '}
          <code>head</code> или <code>tail</code>.
        </strong>
      </p>
    </>
  );
}

export default DoublyLinkedLists;
