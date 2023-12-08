import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const ARRAY_READING_CODE = `const array = [1, 2, 3];

array[1];`;

const ARRAY_TRAVERSING_CODE = `for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}`;

const ARRAY_DELETION_LAST_CODE = `array.pop();`;

const ARRAY_DELETION_MIDDLE_CODE = `// удаление элемента по индексу i
for (let j = i + 1; j < array.length; j++) {
  array[j - 1] = array[j];
}

array.length--;`;

const ARRAY_INSERTION_LAST_CODE = `array.push(4);`;

const ARRAY_INSERTION_MIDDLE_CODE = `// вставка элемента по индексу i
for (let j = array.length - 1; j > i - 1; j--) {
  array[j + 1] = array[j];
}

array[i] = 4;`;

function Arrays(): ReactElement {
  return (
    <>
      <p>
        Массив — это структура данных, в которой можно хранить коллекции элементов. Каждый
        элемент проиндексирован.
      </p>
      <p>Наиболее распространёнными операциями являются:</p>
      <ul className="list-disc list-inside">
        <li className="ml-6">Чтение</li>
        <li className="ml-6">Удаление</li>
        <li className="ml-6">Вставка</li>
      </ul>
      <h2 className="font-bold my-2">Чтение из массива</h2>
      <p>Чтение из массива происходит через доступ по индексу:</p>
      <Code value={ARRAY_READING_CODE} />
      <p>
        Если известен индекс элемента, доступ происходит мгновенно. Сложность по времени
        составляет <i>O</i>(1).
      </p>
      <h2 className="font-bold my-2">Обход массива</h2>
      <p>
        Сложность обхода массива из n элементов — <i>O</i>(<i>n</i>).
      </p>
      <Code value={ARRAY_TRAVERSING_CODE} />
      <p>
        Количество операций линейно зависит от <i>n</i>. Если <i>n</i> удвоится,
        количество операций также удвоится.
      </p>
      <h2 className="font-bold my-2">Удаление из массива</h2>
      <p>
        При удалении любого элемента из массива (кроме последнего) необходимо сдвинуть все
        последующие элементы на 1 позицию влево. В худшем случае придётся переместить все
        оставшиеся элементы. Таким образом, сложность будет <i>O</i>(<i>n</i>).
      </p>
      <Code value={ARRAY_DELETION_MIDDLE_CODE} />
      <p>
        Удаление последнего элемента из массива — <i>O</i>(1), так как другие элементы не
        придётся сдвигать.
      </p>
      <Code value={ARRAY_DELETION_LAST_CODE} />
      <h2 className="font-bold my-2">Вставка в массив</h2>
      <p>
        При вставке в массив необходимо сдвигать элементы по аналогии с удалением, но
        вправо. Сложность аналогичная — в худшем случае <i>O</i>(<i>n</i>).
      </p>
      <Code value={ARRAY_INSERTION_LAST_CODE} />
      <p>
        При вставке в конец массива сложность <i>O</i>(1).
      </p>
      <Code value={ARRAY_INSERTION_MIDDLE_CODE} />
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
            <td className="border-2 border-gray-300 border-solid p-2">Чтение</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">—</td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Удаление</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              При удалении последнего элемента <i>O</i>(1)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Вставка</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)<sup>*</sup>
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              При вставке в конец массива <i>O</i>(1)
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Arrays;
