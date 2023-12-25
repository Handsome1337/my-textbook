import type { ReactElement } from 'react';

function DailyTemperatures(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать монотонный стек, в котором будем
        хранить индексы дней. Стек является монотонным, так как каждый следующий элемент в
        нём будет представлять индекс дня, в котором температура не возрастает.
      </p>
      <p className="mb-2">
        Создадим массив <code>answer</code>, который мы будем возвращать из функции. Он
        будет такой же длины, как и переданный массив температур. Заполним его нулями,
        чтобы потом не пришлось добавлять нули для тех дней, после которых не будет более
        тёплых дней.
      </p>
      <p className="mb-2">
        Пройдём циклом по температурам. На каждой итерации будем добавлять индекс{' '}
        <code>i</code> в стек, предварительно удалив из стека индексы дней, в которых
        температура ниже текущей температуры <code>temperatures[i]</code>. Для этого в
        цикле <code>while</code> будем проверять, есть ли элементы в стеке, и является ли
        текущая температура более тёплой, чем температура на вершине стека. Если текущая
        температура является более тёплой, то достаём из стека индекс температуры{' '}
        <code>colderDayIndex</code>, и записываем в ответ по этому индексу разность{' '}
        <code>i - colderDayIndex</code>. Эта разность и является количеством дней, которые
        необходимо подождать до потепления для дня с индексом <code>colderDayIndex</code>.
        Повторяем проверку для новой вершины стека.
      </p>
    </>
  );
}

export default DailyTemperatures;