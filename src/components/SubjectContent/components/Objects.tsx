import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const NAMES_FREQUENCY_MAP = `const names = ['Илья', 'Михаил', 'Александр', 'Роман', 'Александр', 'Дмитрий'];
const frequencyMap = {};

names.forEach((name) => {
  if (frequencyMap[name]) {
    frequencyMap[name]++;
  } else {
    frequencyMap[name] = 1;
  }
});

console.log(frequencyMap); // { Илья: 1, Михаил: 1, Александр: 2, Роман: 1, Дмитрий: 1 }`;

function Objects(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Объект — это коллекция свойств, состоящая из пар ключ/значение. <code>Map</code> –
        это коллекция ключ/значение, как и объект. Но основное отличие в том, что{' '}
        <code>Map</code> позволяет использовать ключи любого типа.
      </p>
      <table className="border-collapse mb-2 table-auto w-full">
        <caption className="caption-bottom">
          Сравнение объектов и массив по сложности по времени
        </caption>
        <thead>
          <tr>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Операции
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Объект/<code>Map</code>
            </th>
            <th className="border-2 border-gray-300 border-solid p-2 text-left">
              Массив
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Вставка</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Удаление</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>n</i>)
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300 border-solid p-2">Поиск</td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(1)
            </td>
            <td className="border-2 border-gray-300 border-solid p-2">
              <i>O</i>(<i>log n</i>), если массив отсортирован
            </td>
          </tr>
        </tbody>
      </table>
      <p>Недостатком объектов является то, что они не упорядочены.</p>
      <p>
        Объекты не допускают существование двух одинаковых ключей. Представим, что у нас
        есть массив имён и необходимо подсчитать, как часто встречается каждое имя. Мы
        можем создать объект, в котором ключами будут имена, а значением — то, сколько раз
        это имя встречается в массиве. Если имени в объекте нет, то мы добавляем его со
        значением 1, иначе инкрементируем значение по этому имени.
      </p>
      <Code value={NAMES_FREQUENCY_MAP} />
    </>
  );
}

export default Objects;
