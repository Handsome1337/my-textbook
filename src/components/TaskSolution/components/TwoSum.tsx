import type { ReactElement } from 'react';

function TwoSum(): ReactElement {
  return (
    <>
      <p>
        Создадим <code>Map</code>, в котором будем хранить каждое число и индекс, по
        которому оно хранится в массиве <code>nums</code>. Затем в цикле на каждой
        итерации необходимо вычислить разницу <code>diff</code> между <code>target</code>{' '}
        и текущим элементом.
      </p>
      <p>
        Если в <code>prevMap</code> хранится индекс этой разницы, то возвращаем его и
        текущий индекс, иначе переходим к следующему элементу.
      </p>
    </>
  );
}

export default TwoSum;
