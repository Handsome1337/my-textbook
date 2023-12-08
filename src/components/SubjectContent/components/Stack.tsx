import stackPop from 'assets/stack-pop.png?url';
import stackPush from 'assets/stack-push.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const STACK_PUSH = `push(n) {
  this.stack.push(n);
}`;

const STACK_POP = `pop() {
  return this.stack.pop();
}`;

const STACK_PEEK = `peek() {
  return this.stack.at(-1);
}`;

function Stack(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Стек — это структура данных, содержащая коллекцию элементов, в которой добавлять и
        удалять элементы можно только с конца (называемого вершиной стека). В физическом
        мире стек можно представить себе как стопку тарелок в столовой. Когда вы
        собираетесь взять тарелку, вы можете взять её только сверху, и аналогично, когда
        вы закончите есть, стопку тарелок можно построить только путём складывания их друг
        на друга — это именно то, что представляет собой стек в мире ПО.
      </p>
      <p className="mb-2">
        Стек следует принципу LIFO (Last In First Out). Последний элемент, помещенный
        внутрь, является первым элементом, который выходит наружу. Стек поддерживает три
        операции: <code>push</code> (добавить в стек), <code>pop</code> (удалить из стека)
        и <code>peek</code> (вернуть элемент с вершины стека без удаления).
      </p>
      <h2 className="font-bold my-2">Push</h2>
      <p className="mb-2">
        Оперция <code>push</code> добавляет элемент на вершину стека, что для массива
        будет добавлением элемента в его конец. Это эффективная <i>O</i>(1) операция.
        Можно визуализировать стек как вертикальный массив. Добавим числа от 1 до 4 на
        вершину стека. Указатель на вершину обновляется и указывает на последний
        добавленный элемент. Следующие псевдокод и изображение демонстрируют это.
      </p>
      <Code value={STACK_PUSH} />
      <figure className="bg-white mb-2">
        <img
          alt="Операция push"
          className="mx-auto"
          height="500"
          src={stackPush}
          width="1280"
        />
      </figure>
      <p className="mb-2">
        Поскольку стек удаляет элементы в порядке, обратном их вставке, его можно
        использовать для разворота последовательностей, например, строки, которая
        представляет собой просто последовательность символов.
      </p>
      <h2 className="font-bold my-2">Pop</h2>
      <p className="mb-2">
        Оперция <code>pop</code> удаляет последний элемент из вершины стека, что для
        массива будет удалением его последнего элемента. Это также эффективная <i>O</i>(1)
        операция. Возьмём предыдущий пример, предположим, что мы хотим удалить{' '}
        <code>3</code> и <code>4</code>. Следующие псевдокод и изображение демонстрируют
        это. Опять же, указатель на вершину обновляется и указывает на последний элемент.
      </p>
      <Code value={STACK_POP} />
      <figure className="bg-white mb-2">
        <img
          alt="Операция pop"
          className="mx-auto"
          height="500"
          src={stackPop}
          width="1280"
        />
      </figure>
      <h2 className="font-bold my-2">Peek</h2>
      <p className="mb-2">
        <code>Peek</code> — самая простая операция из трёх. Она просто возвращает верхний
        элемент, не удаляя его.
      </p>
      <Code value={STACK_PEEK} />
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
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Примечания
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Push</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">—</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Pop</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Сначала проверьте, пуст ли стек
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Peek</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              Возвращает без удаления
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Stack;
