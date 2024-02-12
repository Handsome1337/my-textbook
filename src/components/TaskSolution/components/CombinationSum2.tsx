import type { ReactElement } from 'react';

function CombinationSum2(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Чтобы избежать дубликатов, удобно предварительно отсортировать массив{' '}
        <code>candidates</code>. Создадим переменную <code>result</code>, которую будем
        возвращать из функции, и вспомогательную рекурсивную функцию{' '}
        <code>backtrack</code>, которая будет принимать в себя текущее сочетание{' '}
        <code>cur</code>, текущий индекс <code>position</code> и разность переданной в
        функцию <code>target</code> и суммой этого сочетания <code>target</code>. Вызовем
        её с пустым массивом, нулевым индексом и переданным в функцию <code>target</code>,
        после чего вернём из функции <code>result</code>.
      </p>
      <p className="mb-2">
        Базовый случай в <code>backtrack</code> случается тогда, когда разность{' '}
        <code>target</code> меньше или равна нулю. Если разность равна нулю, то мы
        добавляем копию сочетания в <code>result</code>.
      </p>
      <p className="mb-2">
        Создадим переменную <code>prev</code> с дефолтным значением <code>-1</code>.
        Пройдём циклом от <code>position</code> до конца массива <code>candidates</code>.
        На каждой итерации проверяем, встречалось ли уже это число. Если встречалось,
        переходим к следующей итерации.
      </p>
      <p className="mb-2">
        Добавим в сочетание текущее число, после чего рекурсивно вызовем{' '}
        <code>backtrack</code> для следующего числа. После этого удалим текущее число из
        сочетания и обновим значение <code>prev</code>.
      </p>
    </>
  );
}

export default CombinationSum2;
