import type { ReactElement } from 'react';

function CombinationSum(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>result</code>, которую будем возвращать из функции, и
        вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя текущий индекс <code>i</code>, текущее сочетание <code>cur</code>{' '}
        и сумму этого сочетания <code>total</code>. Вызовем её с нулевым индексом, пустым
        массивом и нулевой суммой, после чего вернём из функции <code>result</code>.
      </p>
      <p className="mb-2">
        Первый базовый случай в <code>backtrack</code> случается тогда, когда сумма
        текущего сочетания достигла <code>target</code>. В таком случае мы добавляем его
        копию в <code>result</code>. Второй базовый случай случается, когда индекс вышел
        за пределы <code>candidates</code>, или сумма превысела <code>target</code>. В
        таком случае просто завершаем работу функции.
      </p>
      <p className="mb-2">
        Будем добавлять число, на которое указывает индекс <code>i</code> в сочетание,
        после чего рекурсивно вызываем <code>backtrack</code> для новой суммы. После того,
        как мы добавим все сочетания с этим числом, мы удалим текущее число из сочетания и
        передвинем индекс <code>i</code>.
      </p>
    </>
  );
}

export default CombinationSum;
