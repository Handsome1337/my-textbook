import type { ReactElement } from 'react';

function EvaluateReversePolishNotation(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи удобно использовать стек, в который мы будем складывать
        числа, а для операций с ними доставать два последних числа.
      </p>
      <p className="mb-2">
        Пройдём циклом по <code>tokens</code>. На каждой итерации цикла проверяем,
        является ли токен операндом. Если не является, то токен представляет собой число,
        добавляем его в стек. Иначе достаём два последних числа из стека и совершаем
        операцию. При делении оборачиваем результат в <code>Math.trunc()</code>, чтобы
        отбросить дробную часть. Добавляем результат операции в стек.
      </p>
      <p className="mb-2">
        Так как гарантируется, что входные данные представляют собой валидное
        арифметическое выражение в обратной польской записи, после завершения цикла в
        стеке останется только одно значение. Возвращаем его.
      </p>
    </>
  );
}

export default EvaluateReversePolishNotation;