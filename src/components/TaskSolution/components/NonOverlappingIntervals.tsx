import type { ReactElement } from 'react';

function NonOverlappingIntervals(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для того, чтобы нам было проще находить пересечения интервалов, нам необходимо
        отсортировать их по значению их начала. Создадим переменную{' '}
        <code>result = 0</code>, которую будем возвращать из функции, и переменную{' '}
        <code>prevEnd = intervals[0][1]</code>, в которую будем записывать значение конца
        последнего интервала. Пройдём циклом по интервалам, начиная со второго.
      </p>
      <p className="mb-2">
        На каждой итерации проверяем, пересекается ли последний интервал с текущим
        интервалом. Если <code>intervals[i][0] &gt;= prevEnd</code>, то это означает, что
        интервалы не пересекаются. Обновим <code>prevEnd</code>. Иначе интервалы
        пересекаются и мы должны удалить один из них, увеличим <code>result</code>.
        Удалять будем тот, который кончается позже, поэтому в <code>prevEnd</code> запишем
        минимальное значение из <code>prevEnd</code> и <code>intervals[i][1]</code>.
      </p>
      <p className="mb-2">
        После прохождения цикла вернём <code>result</code> из функции.
      </p>
    </>
  );
}

export default NonOverlappingIntervals;
