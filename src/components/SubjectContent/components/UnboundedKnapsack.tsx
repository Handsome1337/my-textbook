import unboundedKnapsack1 from 'assets/unbounded-knapsack1.png?url';
import unboundedKnapsack2 from 'assets/unbounded-knapsack2.png?url';
import unboundedKnapsack3 from 'assets/unbounded-knapsack3.png?url';
import unboundedKnapsackDp from 'assets/unbounded-knapsack-dp.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const DFS = `function dfs(profit,  weight, capacity) {
  return dfsHelper(0, profit, weight, capacity);
}

function dfsHelper(i, profit, weight, capacity) {
  if (i === profit.length) {
    return 0;
  }

  // Пропускает предмет i
  let maxProfit = dfsHelper(i + 1, profit, weight, capacity);

  // Включает предмет i
  const newCapacity = capacity - weight[i];

  if (newCapacity >= 0) {
    const p = profit[i] + dfsHelper(i, profit, weight, newCapacity);
    // Вычисляет максимум
    maxProfit = Math.max(maxProfit, p);
  }

  return maxProfit;
}`;

const MEMOIZATION = `function memoization(profit, weight, capacity) {
  // Двумерный массив с N строк и M + 1 столбцов, инициализированный с -1
  const N = profit.length;
  const M = capacity;
  const cache = new Array();
  
  for (let row = 0; row < N; row++) {
    cache.push(new Array(M + 1).fill(-1));
  }

  return memoHelper(0, profit, weight, capacity, cache);
}

function memoHelper(i, profit, weight, capacity, cache) {
  if (i === profit.length) {
    return 0;
  }

  if (cache[i][capacity] !== -1) {
    return cache[i][capacity];
  }

  // Пропускает предмет i
  cache[i][capacity] = memoHelper(i + 1, profit, weight, capacity, cache);

  // Включает предмет i
  const newCapacity = capacity - weight[i];

  if (newCapacity >= 0) {
    const p = profit[i] + memoHelper(i, profit, weight, newCapacity, cache);
    // Вычисляет максимум
    cache[i][capacity] = Math.max(cache[i][capacity], p);  
  }

  return cache[i][capacity];
} `;

const DP = `function dp(profit, weight, capacity) {
  const N = profit.length;
  const M = capacity;
  const dp = new Array();

  for (let row = 0; row < N; row++) {
    dp.push(new Array(M + 1).fill(0));
  }

  // Заполняет первый столбец и строку, чтобы сократить количество условий
  for (let i = 0; i < N; i++) {
    dp[i][0] = 0;
  }

  for (let c = 0; c <= M; c++) {
    if (weight[0] <= c) {
      dp[0][c] = (Math.floor(c / weight[0])) * profit[0];
    } 
  }

  for (let i = 1; i < N; i++) {
    for (let c = 1; c <= M; c++) {
      const skip = dp[i - 1][c];
      let include = 0;
      
      if (c - weight[i] >= 0) {
        include = profit[i] + dp[i][c - weight[i]];
      }

      dp[i][c] = Math.max(include, skip);
    }
  }

  return dp[N - 1][M];
}`;

const OPTIMIZED_DP = `function optimizedDp(profit, weight, capacity) {
  const N = profit.length;
  const M = capacity;
  let dp = new Array(M + 1).fill(0);

  for (let i = 1; i < N; i++) {
    const curRow = new Array(M + 1).fill(0);

    for (let c = 1; c <= M; c++) {
      const skip = dp[c];
      let include = 0;

      if (c - weight[i] >= 0) {
        include = profit[i] + curRow[c - weight[i]];
      }

      curRow[c] =  Math.max(include, skip);
    }

    dp = curRow;
  }

  return dp[M];
}`;

function UnboundedKnapsack(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Иногда вопрос может быть о небольшой вариации задачи о рюкзаке 0-1.
      </p>
      <h2 className="font-bold my-2">Небольшая вариация рюкзака 0-1</h2>
      <p className="mb-2">
        В предыдущей статье нам разрешалось включать каждый предмет не более одного раза.
        Благодаря неограниченному рюкзаку у нас нет ограничений на то, сколько раз мы
        можем включать предмет. В связи с этим перед нами стоит следующий вопрос.
      </p>
      <p className="mb-2">
        <strong>
          Учитывая список из N предметов и рюкзак ограниченной вместимости, верните
          максимальную общую ценность, которая может содержаться в рюкзаке. Ценность i-го
          предмета равна profit[i], а его вес равен weight[i]. Предположим, у вас может
          быть <i>неограниченное количество</i> каждого доступного предмета.
        </strong>
      </p>
      <p className="mb-2">
        Опять же, мы пытаемся максимизировать нашу общую ценность, выбирая предметы так,
        чтобы наша вместимость оставалась <code>&gt;=0</code>. Поскольку мы можем включать
        один и тот же предмет несколько раз, высота нашего дерева решений в конечном итоге
        будет равна <i>m</i>, где <i>m</i> — общая вместимость. Это отличается от 0-1, где
        высота нашего дерева решений была <i>n</i>, где <i>n</i> — длина массивов{' '}
        <code>profit</code> и <code>weight</code>.
      </p>
      <p className="mb-2">
        Как и раньше, мы можем включить или исключить любой предмет. Разница здесь в том,
        что когда мы добавляем предмет, мы можем <strong>продолжать</strong> включать его
        до тех пор, пока у нас не останется для него места. Вот визуализированное дерево
        решений. Вы можете заметить разницу?
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Дерево решений задачи о неограниченном рюкзаке"
          className="mx-auto"
          height="459"
          src={unboundedKnapsack1}
          width="780"
        />
      </figure>
      <p className="mb-2">
        Обратите внимание, что в левом поддереве мы решили включить первый предмет дважды.
        Подобным образом, в правом поддереве мы изначально решили исключить первый
        предмет. Затем мы можем сделать выбор: включить второй предмет или исключить его.
        Заметим: если мы пропустим предмет, мы не сможем включить его снова. Обратите
        внимание, что максимальная ценность, которую мы можем получить, равна{' '}
        <code>18</code>, куда мы решили включить <code>7</code> дважды и <code>4</code>{' '}
        один раз. Оставшуюся часть дерева решений рекомендуется нарисовать самостоятельно.
      </p>
      <p className="mb-2">
        Однако это лишь один из способов визуализации дерева решений. Есть ещё один способ
        визуализировать это, хотя для этого требуются циклы. Это будет выглядеть так, как
        показано на изображении ниже. Для краткости включено только левое поддерево, но
        этого достаточно, чтобы вы поняли суть происходящего. Когда <code>Вм = 3</code>, у
        нас есть возможность снова включить <code>weight[0]</code> или{' '}
        <code>weight[1], weight[2], weight[3]</code>. Причина, по которой мы можем снова
        включить <code>weight[0]</code>, заключается в том, что мы не пропустили его
        изначально и у нас есть неограниченное количество.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Дерево решений задачи о неограниченном рюкзаке с циклами"
          className="mx-auto"
          height="360"
          src={unboundedKnapsack2}
          width="780"
        />
      </figure>
      <p className="mb-2">
        <strong>
          Ранее мы упоминали, что в худшем случае высота этого дерева будет <i>O</i>(2
          <sup>
            <i>c</i>
          </sup>
          )/<i>O</i>(2
          <sup>
            <i>m</i>
          </sup>
          ). Это имеет смысл, потому что если у нас есть предмет весом <code>1</code>, и
          мы продолжали выбирать этот предмет, наше дерево решений будет выглядеть
          следующим образом.
        </strong>
      </p>
      <img
        alt="Дерево решений задачи о неограниченном рюкзаке с циклами"
        className="mb-2"
        height="459"
        src={unboundedKnapsack3}
        width="620"
      />
      <h2 className="font-bold my-2">Более глубокое погружение</h2>
      <p className="mb-2">
        Чтобы лучше понять, почему этот алгоритм работает, давайте углубимся в
        подробности. Напомним, что в динамическом программировании речь идёт о разбиении
        проблемы на подзадачи. В исходной задаче у нас есть четыре предмета на выбор, и мы
        можем выбирать каждый предмет бесконечное количество раз. Среди всех этих
        возможностей мы пытались максимизировать ценность. В исходное левое поддерево мы
        пытались включить все возможности, в которых был хотя бы один экземпляр первого
        предмета. Затем, если мы решим снова пойти влево из этого левого поддерева, мы
        включим ещё одно вхождение первого предмета. Однако если бы мы решили пойти
        направо, мы бы пропустили первый предмет и перешли к включению второго предмета.
      </p>
      <p className="mb-2">
        Поскольку у нас остаётся только три предмета, когда мы пропускаем первый, это ещё
        больше усложняет задачу. В исходном правом поддереве у нас есть все возможности
        включить хотя бы один второй предмет. Если мы продолжим идти вправо, мы разобьём
        задачу ещё дальше, выбрав не более одного второго предмета. Обратите внимание, что
        каждый раз количество предметов, из которых мы можем выбирать, становится меньше,
        поэтому у нас остаётся меньше вариантов выбора, пока вместимость не исчерпается и
        выбора больше не останется. Вот что обозначает дерево.
      </p>
      <h2 className="font-bold my-2">Реализация</h2>
      <ul>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Реализация с помощью метода грубой силы</strong>
          </p>
          <p className="mb-2">
            С точки зрения реализации 0-1 и неограниченный рюкзак отличаются только на 1
            строку. То есть, когда мы решаем включить предмет <code>i</code>, нам не нужно
            пропускать предмет <code>i</code>, выполняя <code>i + 1</code>, поскольку мы
            можем включать его неограниченное количество раз.
          </p>
          <Code value={DFS} />
          <p className="mb-2">
            <strong>
              Следует также отметить, что в рекурсивных вызовах мы передаём{' '}
              <code>newCapacity</code> вместо <code>capacity</code>, что не изменилось по
              сравнению с предыдущей статьёй. Это связано с тем, что вместимость меняется
              на каждом этапе.
            </strong>
          </p>
          <p>
            Несмотря на то, что наша вместимость изменилась, у нас по-прежнему есть доступ
            ко всем элементам наших массивов <code>profit</code> и <code>weight</code>.
          </p>
        </li>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Реализация мемоизации</strong>
          </p>
          <p className="mb-2">
            <strong>
              Ниже показано решение с мемоизацией, которое снова отличается той же
              строкой, что обсуждалась выше.
            </strong>
          </p>
          <Code value={MEMOIZATION} />
        </li>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Реализация методом динамического программирования снизу</strong>
          </p>
          <p className="mb-2">
            Истинным подходом к динамическому программированию будет метод динамического
            программирования снизу. Решение для него остаётся тем же, что и для метода
            динамического программирования снизу 0-1, за исключением того, что мы меняем
            одну строку кода, а именно{' '}
            <code>include = profit[i] + dp[i][c - weight[i]]</code>. Обратите внимание,
            что это очень тонко — мы изменили <code>dp[i - 1]</code> на <code>dp[i]</code>
            .
          </p>
          <p className="mb-2">
            Поскольку сложность по времени равна <i>O</i>(<i>n</i> ∗ <i>m</i>),
            пространство решений очень похоже: у нас есть сетка <i>n</i> ∗ <i>m</i>, где{' '}
            <i>n</i> — количество предметов, а <i>m</i> — вместимость. Нашим ответом будет
            нижняя правая ячейка, то есть последняя строка и последний столбец. Но как нам
            получить ответ для каждой ячейки? По сути, нам нужен доступ только к текущей и
            предыдущей строкам каждый раз, когда мы выполняем расчёт. Если у нас
            недостаточно вместимости, мы можем использовать значение{' '}
            <code>dp[i - 1][c]</code> для заполнения этой ячейки, где <code>dp</code>{' '}
            представляет наше пространство решений.
          </p>
          <p className="mb-2">
            И наоборот, если мы решим включить этот предмет, у нас будет{' '}
            <code>include = profit[i] + dp[i][c - weight[i]]</code>, что возьмёт ценность
            от текущего предмета и прибавит её к значению в{' '}
            <code>dp[i][c - weight[i]]</code>. В данном случае мы не движемся по диагонали
            вверх.
          </p>
          <Code value={DP} />
          <p className="mb-2">И оптимизированное по памяти решение:</p>
          <Code value={OPTIMIZED_DP} />
          <p className="mb-2">
            Вот как наше решение будет выглядеть визуализировано, со всеми значениями,
            заполненными в сетке.
          </p>
          <img alt="Сетка" height="300" src={unboundedKnapsackDp} width="640" />
        </li>
      </ul>
      <h2 className="font-bold my-2">Сложность по времени и памяти</h2>
      <p className="mb-2">
        Сложность по времени оптимизированного решения равна <i>O</i>(<i>n</i> ∗ <i>m</i>
        ), где <i>n</i> — количество предметов, а <i>m</i> — вместимость.
      </p>
      <p className="mb-2">
        Занимаемая память равна <i>O</i>(<i>m</i>), поскольку длина нашей строки может
        быть равна только её вместимости.
      </p>
    </>
  );
}

export default UnboundedKnapsack;
