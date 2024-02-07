import type { ReactElement } from 'react';

function GenerateParentheses(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим массив <code>result</code> и вспомогательную рекурсивную функцию{' '}
        <code>backtrack</code>, которая будет принимать в себя количество открывающих
        скобок <code>openN</code>, закрывающих скобок <code>closedN</code> и текущую
        последовательность скобок <code>path</code>. Базовым случаем будет, когда
        количество открывающих и закрывающих скобок равно <code>n</code>. В таком случае
        добавляем в <code>result</code> текущую последовательность <code>path</code>.
      </p>
      <p className="mb-2">
        Дальше у нас есть два пути. Если открывающих скобок ещё меньше, чем <code>n</code>
        , то добавляем добавляем в последовательность открытую скобку и вызываем{' '}
        <code>backtrack</code> для нового <code>path</code>. Затем, если закрывающих
        скобок меньше, чем открывающих, делаем то же самое с закрывающей скобкой.
      </p>
      <p className="mb-2">
        Вызовем <code>backtrack(0, 0, &apos;&apos;)</code>, после чего вернём из функции{' '}
        <code>result</code>.
      </p>
    </>
  );
}

export default GenerateParentheses;
