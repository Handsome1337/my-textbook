import type { ReactElement } from 'react';

function MergeIntervals(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для того, чтобы нам было проще находить пересечения интервалов, нам необходимо
        отсортировать их по значению их начала. Создадим массив <code>result</code>,
        который будем возвращать из функции, и запишем в него первый интервал. Пройдём
        циклом по интервалам, начиная со второго.
      </p>
      <p className="mb-2">
        На каждой итерации сохраним конец предыдущего интервала в <code>lastEnd</code>.
        Будем проверять, пересекается ли последний интервал в <code>result</code> с
        текущим интервалом. Если <code>lastEnd &lt; intervals[i][0]</code>, то это
        означает, что последний интервал в <code>result</code> заканчивается раньше, чем
        начинается текущий интервал. Значит, мы должны добавить текущий интервал в{' '}
        <code>result</code>. Иначе интервалы пересекаются. В таком случае мы не должны
        добавлять текущий интервал в <code>result</code>, мы должны обновить последний
        интервал, записав в него пересечение последнего и текущего интервалов. Так как они
        отсортированы по значению их начала, то начало объединённого интервала будет
        записано в последнем интервале в <code>result</code>. Обновим конец последнего
        интервала на <code>Math.max(lastEnd, intervals[i][1])</code>.
      </p>
      <p className="mb-2">
        После прохождения цикла вернём массив <code>result</code> из функции.
      </p>
    </>
  );
}

export default MergeIntervals;
