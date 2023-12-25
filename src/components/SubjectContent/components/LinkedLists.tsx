import listNode from 'assets/list-node.png?url';
import listNodes from 'assets/list-nodes.png?url';
import listNodeChaining from 'assets/list-node-chaining.png?url';
import listNodesChaining from 'assets/list-nodes-chaining.png?url';
import linkedListTraversal from 'assets/linked-list-traversal.png?url';
import circularLinkedList from 'assets/circular-linked-list.png?url';
import linkedListAppending1 from 'assets/linked-list-appending1.png?url';
import linkedListAppending2 from 'assets/linked-list-appending2.png?url';
import linkedListAppending3 from 'assets/linked-list-appending3.png?url';
import linkedListDeleting1 from 'assets/linked-list-deleting1.png?url';
import linkedListDeleting2 from 'assets/linked-list-deleting2.png?url';
import linkedListDeleting3 from 'assets/linked-list-deleting3.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const LIST_NODE = `class ListNode {
  constructor (value, next = null) {
    this.value = value; // установка желаемого значения, например, числа, символа и т. д.
    this.next = next; // установка указателя на следующий узел, по умолчанию null
  }
}`;

const LIST_NODE_NEXT = `ListNode1.next = ListNode2;`;

const LIST_NODES_NEXT = `ListNode2.next = ListNode3;
ListNode3.next = null`;

const LINKED_LIST_TRAVERSAL = `let cur = ListNode1;

while (cur) {
  cur = cur.next;
}`;

const LIST_NODE_APPENDING_FIRST_STEP = `tail.next = ListNode4`;

const LIST_NODE_APPENDING_SECOND_STEP = `tail = ListNode4`;

const LIST_NODE_DELETING = `head.next = head.next.next`;

function LinkedLists(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Связный список — это ещё одна структура данных, похожая на массив, в том смысле,
        что элементы хранятся в упорядоченной последовательности. Но есть и различия.
      </p>
      <p className="mb-2">
        Первое отличие состоит в том, что связные списки состоят из объектов, называемых{' '}
        <strong>узлами списка</strong>. Эти объекы содержат два атрибута:
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>
          <code>value</code> — здесь хранится значение узла. Значение может быть любым -
          символом, числом и т. д.
        </li>
        <li>
          <code>next</code> — ссылка на следующий узел в связном списке. Рисунок ниже
          демонстрирует объект узла списка.
        </li>
      </ol>
      <figure className="bg-white mb-2">
        <img
          alt="Узел списка"
          className="mx-auto"
          height="400"
          src={listNode}
          width="1440"
        />
      </figure>
      <h2 className="font-bold my-2">Создание связного списка с нуля</h2>
      <p className="mb-2">
        Объединение этих <strong>узлов списка</strong> вместе в цепочку приводит к
        созданию связного списка. Создание вашего класса <code>ListNode</code> в
        псевдокоде будет выглядеть следующим образом:
      </p>
      <Code value={LIST_NODE} />
      <p className="mb-2">
        Посмотрим на пример того, как эти объекты <code>ListNode</code> можно объединить в
        цепочку для создания желаемого связного списка. Предположим, что у нас есть 3
        объекта <code>ListNode</code>: <code>ListNode1</code>, <code>ListNode2</code>,{' '}
        <code>ListNode3</code>, и мы создаём их экземпляры со следующими значениями, как
        показано на рисунке ниже.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Узлы списка"
          className="mx-auto"
          height="320"
          src={listNodes}
          width="1440"
        />
      </figure>
      <p className="mb-2">
        В данном случае наш атрибут <code>value</code> представляет собой строку -
        красный, синий, зелёный. При создании экземпляров узлы будут храниться в памяти в
        произвольном порядке.
      </p>
      <p className="mb-2">
        Далее нам нужно убедиться, что наши указатели <code>next</code> указывают на
        другой <code>ListNode</code>, а не <code>null</code>.
      </p>
      <Code value={LIST_NODE_NEXT} />
      <figure className="bg-white mb-2">
        <img
          alt="Цепочка из двух узлов"
          className="mx-auto"
          height="320"
          src={listNodeChaining}
          width="1440"
        />
      </figure>
      <p className="mb-2">
        Указатель <code>next</code> узла <code>ListNode1</code> указывает на{' '}
        <code>ListNode2</code> — <code>ListNode2</code> идёт после <code>ListNode1</code>{' '}
        в связном списке. Установим указатели <code>next</code> для <code>ListNode2</code>{' '}
        и <code>ListNode3</code>.
      </p>
      <Code value={LIST_NODES_NEXT} />
      <figure className="bg-white mb-2">
        <img
          alt="Цепочка из нескольких узлов"
          className="mx-auto"
          height="320"
          src={listNodesChaining}
          width="1440"
        />
      </figure>
      <p className="mb-2">
        <strong>
          Поскольку <code>ListNode3</code> является последним узлом в связном списке, его
          указатель <code>next</code> будет указывать на <code>null</code>.
        </strong>
      </p>
      <h2 className="font-bold my-2">Обход</h2>
      <p className="mb-2">
        Чтобы пройти по связному списку от начала до конца, мы можем использовать простой
        цикл <code>while</code>.
      </p>
      <Code value={LINKED_LIST_TRAVERSAL} />
      <p className="mb-2">
        Мы начинаем обход с самого начала, <code>ListNode1</code>, и присваиваем его
        переменной <code>cur</code>, обозначающей текущий узел, в котором мы находимся.
        Продолжаем выполнять цикл <code>while</code> и обновлять переменную{' '}
        <code>cur</code>, записывая в неё следующий узел, пока не встретим узел, который
        равен <code>null</code> — это означает, что мы находимся в конце связного списка и
        обход завершён. Сложность обхода по времени составляет <i>O</i>(<i>n</i>).
      </p>
      <img
        alt="Обход связного списка"
        height="1260"
        src={linkedListTraversal}
        width="1600"
      />
      <h2 className="font-bold my-2">Круговой связный список</h2>
      <p className="mb-2">
        Интересный сценарий возникает, если указатель <code>next</code> узла{' '}
        <code>ListNode3</code> указывает на <code>ListNode1</code>, а не <code>null</code>
        . Это создаст бесконечный цикл <code>while</code> и программа выйдет из строя. Это
        произойдёт потому, что мы никогда не достигнем конца связного списка. После{' '}
        <code>ListNode3</code>, <code>ListNode3.next</code> будет указывать на{' '}
        <code>ListNode1</code>, который указывает на <code>ListNode2</code>, который
        указывает на <code>ListNode3</code>, и обратно на <code>ListNode1</code>, создавая
        бесконечный цикл.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Круговой связный список"
          className="mx-auto"
          height="360"
          src={circularLinkedList}
          width="1480"
        />
      </figure>
      <h2 className="font-bold my-2">Операции связного списка</h2>
      <p className="mb-2">
        Связные списки имеют указатели <code>head</code> и <code>tail</code>. Указатель{' '}
        <code>head</code> указывает на самый первый узел связного списка,{' '}
        <code>ListNode1</code>, а указатель <code>tail</code> указывает на самый последний
        узел — <code>ListNode3</code>. Если в связном списке только один узел,{' '}
        <code>head</code> и <code>tail</code> указывают на один и тот же узел.
      </p>
      <ul>
        <li>
          <strong>Вставка</strong>
          <p className="mb-2">
            Преимущество связных списков перед массивами состоит в том, что добавление
            нового элемента может быть выполнено за <i>O</i>(1) по времени. После
            добавления ещё одного узла не требуется сдвиг элементов, и у нас уже есть
            ссылки на <code>head</code> и <code>tail</code>. Если взять наш пример выше,
            если бы мы хотели добавить <code>ListNode4</code> в конец списка, мы бы
            добавили его в <code>tail</code>. После добавления <code>ListNode4</code> мы
            обновляем наш указатель <code>tail</code>, чтобы он указывал на{' '}
            <code>ListNode4</code>. Эта операция будет выполнена за <i>O</i>(1) по времени
            так как это всего лишь одна операция. Процесс будет выгледеть следующим
            образом:
          </p>
          <img
            alt="Добавление нового узла"
            height="520"
            src={linkedListAppending1}
            width="1639"
          />
          <Code value={LIST_NODE_APPENDING_FIRST_STEP} />
          <img
            alt="Добавление нового узла в цепочку"
            height="360"
            src={linkedListAppending2}
            width="1639"
          />
          <Code value={LIST_NODE_APPENDING_SECOND_STEP} />
          <img
            alt="Перенос указателя tail"
            className="mb-2"
            height="360"
            src={linkedListAppending3}
            width="1639"
          />
          <p className="mb-2">
            <strong>
              Хотя операция вставки занимает <i>O</i>(1) по времени, поскольку никакого
              сдвига узлов не требуется, нам всё равно придётся пройти по списку, чтобы
              добраться до точки вставки, если у нас нет ссылки на позицию вставки.
            </strong>
          </p>
        </li>
        <li>
          <strong>Удаление</strong>
          <p className="mb-2">
            Удаление из начала связного списка составляет <i>O</i>(1) по времени,
            поскольку оно представляет собой одну операцию и у нас есть указатель{' '}
            <code>head</code>. Опять же, сам обход списка займёт <i>n</i> шагов, если у
            вас нет ссылки на узел. Чтобы удалить определённый узел, скажем{' '}
            <strong>y</strong>, необходимо пропустить его и обновить указатель{' '}
            <code>next</code> предыдущего узла на узел, который идёт после{' '}
            <strong>y</strong>.
          </p>
          <p className="mb-2">
            Будет проще представить это в коде. Предположим, что мы хотим удалить{' '}
            <code>ListNode2</code> из предыдущего примера. Сейчас наш <code>head</code>{' '}
            указывает на <code>ListNode1</code>, а <code>head.next</code> — на{' '}
            <code>ListNode2</code>. Поскольку <code>ListNode2</code> будет удалён, нам
            нужно обновить наш указатель <code>head.next</code> на <code>ListNode3</code>,
            доступ к которому можно получить по цепочке указателей <code>next</code>:{' '}
            <code>head.next.next</code>. Это имеет смысл, поскольку <code>head.next</code>{' '}
            — это <code>ListNode2</code>, и логично, что <code>head.next.next</code> будет
            указывать на <code>ListNode3</code>.
          </p>
          <img
            alt="Связный список перед удалением"
            height="400"
            src={linkedListDeleting1}
            width="1639"
          />
          <Code value={LIST_NODE_DELETING} />
          <img
            alt="Удаление узла"
            className="mb-2"
            height="403"
            src={linkedListDeleting2}
            width="1639"
          />
          <p className="mb-2">
            Обновлённый связный список после удаления <code>ListNode2</code>. Обратите
            внимание, что теперь указатель <code>next</code> узла <code>ListNode1</code>{' '}
            указывает на <code>ListNode3</code> вместо <code>ListNode2</code>.
          </p>
          <figure className="bg-white mb-2">
            <img
              alt="Связный список после удаления"
              className="mx-auto"
              height="400"
              src={linkedListDeleting3}
              width="1440"
            />
          </figure>
          <p className="mb-2">
            <strong>
              Предполагается, что <code>ListNode2</code> будет удалён из памяти, поскольку
              в большинстве языков есть сборщики мусора.
            </strong>
          </p>
        </li>
      </ul>
      <h2 className="font-bold my-2">Итоги:</h2>
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
    </>
  );
}

export default LinkedLists;
