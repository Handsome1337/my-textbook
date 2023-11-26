import type { ReactElement } from 'react';

function RemoveDuplicatesFromSortedArray(): ReactElement {
  return (
    <>
      <p>
        Создадим переменную <code>currentUniqueIndex</code>, в которой будет храниться
        индекс последнего уникального элемента. Затем в цикле сравним каждый элемент с
        последним уникальным элементом. Если элементы не равны, инкрементируем значение
        индекса и кладём текущий элемент по этому индексу.
      </p>
      <p>
        После этого необходимо увеличить значение индекса на 1, чтобы получить количество
        уникальных элементов.
      </p>
    </>
  );
}

export default RemoveDuplicatesFromSortedArray;
