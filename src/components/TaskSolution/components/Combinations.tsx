import type { ReactElement } from 'react';

function Combinations(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>result</code>, которую будем возвращать из функции, и
        вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя число <code>start</code> и текущее сочетание{' '}
        <code>combination</code>. Вызовем её с единицей и пустым массивом, после чего
        вернём из функции <code>result</code>.
      </p>
      <p className="mb-2">
        Базовый случай в <code>backtrack</code> случается тогда, когда наше текущее
        сочетание достигло размера{' '}
        <code>
          <i>k</i>
        </code>
        . В таком случае мы добавляем его копию в <code>result</code>.
      </p>
      <p className="mb-2">
        Запустим цикл от <code>start</code> до{' '}
        <code>
          <i>n</i>
        </code>{' '}
        включительно. На каждой итерации мы добавляем число в сочетание, после чего
        рекурсивно вызываем <code>backtrack</code> для следующего числа. После того, как
        мы добавим все сочетания с этим числом, мы удалим текущее число из сочетания и
        перейдём к следующей итерации.
      </p>
    </>
  );
}

export default Combinations;
