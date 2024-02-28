import binaryHeapPush from 'assets/binary-heap-push.png?url';
import binaryHeapPop from 'assets/binary-heap-pop.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const PUSH = `push(value) {
  this.heap.push(value);
  let i = this.heap.length - 1;

  // поднимает вверх
  while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
    [this.heap[i], this.heap[Math.floor(i / 2)]] = [this.heap[Math.floor(i / 2)], this.heap[i]];
    i = Math.floor(i / 2);
  }
}`;

const POP = `pop() {
  if (this.heap.length === 1) {
    // Обычно мы бы выкинули исключение, если куча пуста.
    return -1;
  }

  if (this.heap.length === 2) {
    return this.heap.pop();
  }

  const result = this.heap[1];

  // перемещает последнее значение в корень
  this.heap[1] = this.heap.pop();

  let i = 1;

  // спускает вниз
  while(2 * i < this.heap.length) {
    if (2 * i + 1 < heap.length
      && this.heap[2 * i + 1] < this.heap[2 * i]
      && this.heap[i] > this.heap[2 * i + 1]
    ) {
      // меняет с правым дочерним элементом
      [this.heap[i], this.heap[2 * i + 1]] = [this.heap[2 * i + 1], this.heap[i]];
      i = 2 * i + 1;
    } else if (this.heap[i] > this.heap[2 * i]) {
      // меняет с левым дочерним элементом      
      [this.heap[i], this.heap[2 * i]] = [this.heap[2 * i], this.heap[i]];
      i = 2 * i;
    } else {
      break;
    }
  }

  return result;
}`;

function HeapPushAndPop(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">Добавление (push)</h2>
      <p className="mb-2">
        Возьмём ту же бинарную кучу, что и ранее:{' '}
        <code>
          [14, 19, 16, 21, 26, 19, 68, 65, 30, null, null, null, null, null, null]
        </code>
        , допустим, мы хотим добавить в неё <code>17</code>. Нам нужно убедиться, что мы
        добавляем <code>17</code> так, что свойства структуры и порядка сохраняются.
      </p>
      <p className="mb-2">
        Поскольку бинарная куча представляет собой полное бинарное дерево, и нам
        необходимо заполнять узлы последовательным образом, добавление <code>17</code>{' '}
        должно произойти в <code>10</code>-м индексе. Однако это может нарушить свойство
        min heap, а это значит, что нам придётся перемещать <code>17</code> вверх по
        дереву, пока не найдём его правильное положение.
      </p>
      <p className="mb-2">
        В этом случае, поскольку <code>17</code> меньше, чем его родительский элемент,{' '}
        <code>26</code>, ему необходимо подниматься вверх до тех пор, пока он не
        перестанет быть меньше своего родительского элемента. Итак, мы меняем{' '}
        <code>17</code> на <code>26</code>, и теперь родительским элементом{' '}
        <code>17</code> является <code>19</code>, что снова нарушает свойство min heap.
        Производим ещё один обмен. После этого <code>17</code> теперь больше своего нового
        родителя, равного <code>14</code>. Число <code>17</code> также меньше всех своих
        потомков, поскольку <code>19</code> уже было меньше всех своих потомков.
        Результирующая min heap будет выглядеть следующим образом.
      </p>
      <img
        alt="Добавление в кучу"
        className="mb-2"
        height="640"
        src={binaryHeapPush}
        width="1720"
      />
      <Code value={PUSH} />
      <p className="mb-2">
        Поскольку мы знаем, что дерево всегда будет сбалансировано, сложность по времени
        операции push равна <i>O</i>(<i>log n</i>).
      </p>
      <h2 className="font-bold my-2">Удаление (pop)</h2>
      <p className="mb-2">
        <strong>Очевидный способ</strong>
      </p>
      <p className="mb-2">
        Удаление из кучи сложнее, чем операция push. Один из способов, о котором вы,
        возможно, уже подумали, — это извлечь корневой узел и заменить его на{' '}
        <code>min(leftChild, rightChild)</code>. Проблема здесь в том, что, хотя свойство
        порядка не нарушено, мы нарушили свойство структуры. Если взять предыдущее дерево,
        удалить <code>14</code> и заменить его на <code>16</code> -{' '}
        <code>min(leftChild, rightChild)</code>, то для замены <code>16</code> потребуется{' '}
        <code>19</code>. Теперь в уровне <code>2</code> отсутствует узел, т.е. у{' '}
        <code>19</code> отсутствует левый дочерний элемент.
      </p>
      <p className="mb-2">
        <strong>Правильный способ</strong>
      </p>
      <p className="mb-2">
        Правильный способ — взять самый правый узел последнего уровня и поменять его
        местами с корневым узлом. Теперь мы сохранили свойство структуры. Однако свойство
        порядка нарушается. Чтобы исправить свойство порядка, мы должны убедиться, что{' '}
        <code>30</code> находится на своём месте. Для этого мы запустим цикл и поменяем
        местами <code>30</code> на <code>min(leftChild, rightChild)</code>. Меняем местами{' '}
        <code>30</code> на <code>16</code>, затем <code>19</code> на <code>30</code>.
        Полученное дерево будет выглядеть следующим образом.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Удаление из кучи"
          className="mx-auto"
          height="420"
          src={binaryHeapPop}
          width="960"
        />
      </figure>
      <Code value={POP} />
      <p className="mb-2">
        Псевдокод, показанный выше, на первый взгляд может показаться устрашающим, поэтому
        давайте рассмотрим его. Если наша куча <code>heap</code> пуста, удалять нечего,
        следовательно, <code>return -1</code>. Наша куча также может иметь только один
        узел, и в этом случае мы просто удалим этот узел и не будем вносить никаких
        изменений. Если два приведённых выше условия не выполнились, значит, у нас есть
        дочерние элементы, а это означает, что нам нужно выполнить замену.
      </p>
      <p className="mb-2">
        Мы сохраняем наше значение <code>14</code> в переменную с именем{' '}
        <code>result</code>, чтобы не потерять его. Затем мы можем удалить из нашей кучи{' '}
        <code>30</code> и поместить <code>30</code> в корневой узел.
      </p>
      <p className="mb-2">
        Наш цикл <code>while</code> выполняется до тех пор, пока у нас есть левый дочерний
        элемент, и мы определяем это, проверяя, что <code>2 * i</code> не выходит за
        пределы массива. Далее нас интересуют три случая:
      </p>
      <ol className="list-decimal list-inside mb-2">
        <li>Узел не имеет дочерних элементов</li>
        <li>
          У узла есть <strong>только</strong> левый дочерний элемент
        </li>
        <li>Узел имеет два дочерних элемента</li>
      </ol>
      <p className="mb-2">
        <strong>
          При рассмотрении бинарной кучи невозможно иметь только правый дочерний элемент,
          поскольку тогда она больше не является полным бинарным деревом и нарушает
          свойство структуры.
        </strong>
      </p>
      <p className="mb-2">
        Поскольку наличие левого дочернего узла в цикле <code>while</code> гарантировано,
        нам нужно теперь проверить, есть ли у узла правый дочерний узел, что мы проверяем
        с помощью <code>2 * i + 1</code>. Мы также следим за тем, чтобы текущий узел был
        больше, чем его дочерние элементы, чтобы поддерживать свойство порядка. Мы
        заменяем узел на минимум из двух его дочерних элементов.
      </p>
      <p className="mb-2">
        Если правого дочернего узла не существует и значение текущего узла больше, чем его
        левого дочернего элемента, мы меняем его местами с левым дочерним элементом.
      </p>
      <p className="mb-2">
        Если ни один из вышеперечисленных случаев не выполняется, тогда наш узел уже
        находится в правильном положении, удовлетворяя как свойству порядка, так и
        свойству структуры.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Сложность по времени операций, обсуждавшихся до сих пор, можно резюмировать в
        следующей таблице.
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">
              Получить Min/Max
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Добавление</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>log n</i>)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Удаление</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>log n</i>)
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default HeapPushAndPop;
