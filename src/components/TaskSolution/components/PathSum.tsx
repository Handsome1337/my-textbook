import type { ReactElement } from 'react';

function PathSum(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Эту задачу можно решить разными способами, но самый простой способ будет связан с
        использованием рекурсии.
      </p>
      <p className="mb-2">
        Первым базовым случаем будет, когда переданный корень будет равен{' '}
        <code>null</code>. В таком случае искомого пути не существует, возвращаем{' '}
        <code>false</code>. Вторым базовым случаем будет, когда мы дошли до листового
        узла. В таком случае мы возвращаем <code>true</code>, если разность{' '}
        <code>targetSum</code> и <code>root.val</code> равна нулю — это значит, что путь
        равен <code>targetSum</code>. Если путь не равен <code>targetSum</code>,
        возвращаем <code>false</code>.
      </p>
      <p className="mb-2">
        Иначе, если узел есть, но он не листовой, возвращаем рекурсивный вызывов функции
        для левого и правого поддерева, вычев <code>root.val</code> из{' '}
        <code>targetSum</code>. Если какой-то из вызовов вернул <code>true</code>, то
        существует валидный путь, вернём <code>true</code>, иначе — <code>false</code>.
      </p>
    </>
  );
}

export default PathSum;
