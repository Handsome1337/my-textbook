import type { ReactElement } from 'react';

function TopKFrequentElements(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим <code>Map</code> <code>count</code>, в котором будем хранить частоту
        встречания в массиве каждого числа, массив <code>frequencies</code>, в котором по
        каждому индексу <code>i</code> будет храниться массив чисел, которые встречаются в{' '}
        <code>nums</code> <code>i</code> раз (числа могут встречаться в массиве максимум{' '}
        <code>nums.length</code> раз, поэтому зададим <code>frequencies</code> размер{' '}
        <code>nums.length + 1</code>), и <code>result</code>.
      </p>
      <p className="mb-2">
        Пройдём циклом по массиву чисел и заполним <code>count</code>. После этого пройдем
        циклом по <code>count</code> и заполним массив <code>frequencies</code>.
      </p>
      <p className="mb-2">
        И наконец пройдём циклом по <code>frequencies</code>. Так как чем чаще число
        встречается в массиве <code>nums</code>, тем дальше оно будет находиться в{' '}
        <code>frequencies</code>, мы будем идти от конца к началу. На каждой итерации
        проходим по всем числам в <code>frequencies[i]</code> и добавляем их в{' '}
        <code>result</code>. Как только <code>result.length === k</code>, возвращаем его
        из функции.
      </p>
    </>
  );
}

export default TopKFrequentElements;
