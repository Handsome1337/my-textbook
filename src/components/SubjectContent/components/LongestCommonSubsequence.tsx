import lcsDecisionTree from 'assets/lcs-decision-tree.png?url';
import lcsDp from 'assets/lcs-dp.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const DFS = `function dfs(s1, s2) {
  return dfsHelper(s1, s2, 0, 0);
}

function dfsHelper(s1, s2, i1, i2) {
  if (i1 === s1.length || i2 === s2.length) {
    return 0;
  }

  if (s1[i1] === s2[i2]) {
    return 1 + dfsHelper(s1, s2, i1 + 1, i2 + 1);
  }
  
  return Math.max(dfsHelper(s1, s2, i1 + 1, i2), dfsHelper(s1, s2, i1, i2 + 1));
}`;

const MEMOIZATION = `function memoization(s1, s2) {
  const N = s1.length;
  const M = s2.length;
  const cache = new Array(); 
  
  for (let row = 0; row < N; row++) {
    cache.push(new Array(M).fill(-1));
  }

  return memoHelper(s1, s2, 0, 0, cache);
}

function memoHelper(s1, s2, i1, i2, cache) {
  if (i1 === s1.length || i2 === s2.length) {
    return 0;
  }

  if (cache[i1][i2] !== -1) {
    return cache[i1][i2];
  }

  if (s1[i1] === s2[i2]) {
    cache[i1][i2] = 1 + memoHelper(s1, s2, i1 + 1, i2 + 1, cache);
  } else {
    cache[i1][i2] = Math.max(memoHelper(s1, s2, i1 + 1, i2, cache), memoHelper(s1, s2, i1, i2 + 1, cache));
  }

  return cache[i1][i2];
}`;

const DP = `function dp(s1, s2) {
  const N = s1.length;
  const M = s2.length;
  const dp = new Array();

  for (let row = 0; row <= N; row++) {
    dp.push(new Array(M + 1).fill(0));
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = 1 + dp[i][j];
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[N][M];
}`;

const OPTIMIZED_DP = `function optimizedDp(s1, s2) {
  const N = s1.length;
  const M = s2.length;
  let dp = new Array(M + 1).fill(0);

  for (let i = 0; i < N; i++) {
    let curRow = new Array(M + 1).fill(0);

    for (let j = 0; j < M; j++) {
      if (s1[i] === s2[j]) {
        curRow[j + 1] = 1 + dp[j];
      } else {
        curRow[j + 1] = Math.max(dp[j + 1], curRow[j]);
      }
    }

    dp = curRow;
  }

  return dp[M];
}`;

function LongestCommonSubsequence(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Наибольшая общая подпоследовательность (Longest Common Subsequence — LCS) — один
        из самых известных алгоритмов динамического программирования, имеющий множество
        различных вариаций. Вопрос здесь довольно простой:
      </p>
      <p className="mb-2">
        <strong>
          Даны две строки s1 и s2. Найдите длину самой длинной общей подпоследовательности
          между двумя строками.
        </strong>
      </p>
      <p className="mb-2">
        Прежде чем перейти к решению этого вопроса, давайте в первую очередь разберёмся,
        что такое подпоследовательность.
      </p>
      <h2 className="font-bold my-2">Что такое подпоследовательность?</h2>
      <p className="mb-2">
        Подпоследовательность — это подмножество данного множества, в котором сохраняется
        относительный порядок символов/элементов. Если <code>s1 = ADCB</code> и{' '}
        <code>s2 = ABC</code>, <code>AC</code> является подпоследовательностью, а{' '}
        <code>CA</code> — нет. Подпоследовательность не обязательно должна быть
        непрерывной — при условии, что сохраняется относительный порядок элементов.
      </p>
      <p className="mb-2">
        <strong>
          Подпоследовательность отличается от подмассива или подстроки, которые должны
          быть непрерывными. Например, <code>ADC</code> будет считаться
          подмассивом/подстрокой <code>s1</code>, поскольку элементы «касаются» друг
          друга.
        </strong>
      </p>
      <h2 className="font-bold my-2">Решение методом грубой силы</h2>
      <p className="mb-2">
        Если <code>s1 = ADCB</code> и <code>s2 = ABC</code>, нетрудно догадаться, что
        самая длинная общая подпоследовательность между <code>s1</code> и <code>s2</code>{' '}
        — это <code>AB</code>. Однако алгоритмически определить это является непростой
        задачей.
      </p>
      <p className="mb-2">
        Используя метод грубой силы, мы можем инициализировать два указателя,{' '}
        <code>i1</code> и <code>i2</code>, начинающихся с индекса <code>0</code>, и
        сравнить каждый символ в <code>s1</code> и <code>s2</code>. Если символы в{' '}
        <code>0</code>-м индексе равны, мы можем разбить нашу проблему на подзадачу и
        перейти к <code>1</code>-му индексу. На <code>1</code>-м индексе, где{' '}
        <code>s1[1] = D</code> и <code>s2[1] = B</code>, имеем несовпадение символов. Мы
        не можем включить оба символа: если мы увеличим <code>i2</code>, мы будем искать{' '}
        <code>D</code> в <code>s2</code>, а если мы увеличим <code>i1</code>, мы будем
        искать <code>B</code> в <code>s1</code>.
      </p>
      <p className="mb-2">
        Однако мы не знаем, какой из них приведёт к LCS, поэтому мы можем исследовать оба
        маршрута в нашем дереве рекурсии. На данный момент нам нужно принять два решения.
        Когда мы увеличиваем только <code>i1</code>, мы будем сравнивать <code>CB</code> и{' '}
        <code>BC</code> из <code>s1</code> и <code>s2</code> соответственно. И наоборот,
        если мы увеличим только <code>i2</code>, мы будем сравнивать <code>DCB</code> с{' '}
        <code>C</code> в <code>s1</code> и <code>s2</code> соответственно. Однако в обоих
        случаях LCS будет одинаковой, то есть <code>AC</code>. Мы продолжаем повторять
        это, пока не достигнем базового случая, когда <code>i1 === s1.length</code> или{' '}
        <code>i2 === s2.length</code>. Это означает, что мы исчерпали один или оба
        указателя и можем вернуть <code>0</code>.
      </p>
      <p className="mb-2">
        В конечном счёте, когда мы находим совпадение, мы можем увеличить длину нашей
        подпоследовательности и увеличить указатели <code>i1</code> и <code>i2</code>.
        Если мы не находим совпадение, у нас есть возможность увеличить любой из
        указателей, но мы пробуем оба. Мы можем визуализировать это в виде дерева решений
        ниже:
      </p>
      <img
        alt="Дерево решений задачи о наибольшей общей подпоследовательности"
        className="mb-2"
        height="360"
        src={lcsDecisionTree}
        width="580"
      />
      <p className="mb-2">
        В коде у нас может быть функция <code>dfs</code>, которой мы передаём{' '}
        <code>s1</code> и <code>s2</code>. Однако, поскольку мы используем указатели{' '}
        <code>i1</code> и <code>i2</code>, мы можем использовать <code>dfsHelper</code> в
        качестве вспомогательного метода. Когда мы вызываем <code>dfsHelper</code>, наши{' '}
        <code>i1</code> и <code>i2</code> будут переданы как <code>0</code>. Конечно, они
        будут увеличиваться при наших рекурсивных вызовах. Мы определяем наш базовый
        случай и переходим к двум решениям, которые мы можем принять. Если{' '}
        <code>s1[i1] === s2[i2]</code>, мы идём по пути, где увеличиваем <code>i1</code> и{' '}
        <code>i2</code> и добавляем <code>1</code> к любому ответу, который мы получим.
      </p>
      <p className="mb-2">
        Если мы не находим совпадение, мы исследуем оба пути, увеличивая <code>i1</code> и{' '}
        <code>i2</code> и беря максимальную длину.
      </p>
      <Code value={DFS} />
      <p className="mb-2">
        Как нам перейти от этого решения методом грубой силы к решению динамического
        программирования? Возможно, что ещё более важно, откуда мы вообще знаем, что можем
        применить мемоизацию к этой проблеме? Мы видим, что меняются две переменные:{' '}
        <code>i1</code> и <code>i2</code>. В нашем дереве решений мы также заметили, что
        бывают случаи, когда мы пересчитываем значения, которые можно сохранить и извлечь
        из кэша. Поскольку меняются два значения, это сигнал к использованию мемоизации, а
        затем, в конечном итоге, к двумерному динамическому программированию.
      </p>
      <h2 className="font-bold my-2">Решение с мемоизацией</h2>
      <p className="mb-2">
        Мы знаем, что для решения с мемоизацией нам нужен кэш для хранения уже вычисленных
        значений. Напомним, что мемоизация — это всего лишь оптимизированная рекурсия,
        поэтому самая большая разница между этим кодом и решением с рекурсией — это
        кэширование. У нас есть две функции: <code>memoization</code> и{' '}
        <code>memoHelper</code>. В нашей функции <code>memoization</code> мы
        инициализируем сетку <i>N</i> ∗ <i>M</i>, которую заполняем значениями{' '}
        <code>-1</code>, что указывает на то, что мы ещё не рассчитали для них значение.
      </p>
      <p className="mb-2">
        В наш <code>memoHelper</code> мы передаём дополнительный параметр{' '}
        <code>cache</code>. У нас есть два базовых случая: если мы исчерпаем один из наших
        указателей, длина будет равна <code>0</code>, и если наш кэш содержит значение в
        указателях, в которых мы находимся, мы можем просто вернуть это значение,
        поскольку нам не нужно его пересчитывать.
      </p>
      <p className="mb-2">
        <strong>
          Следует отметить, что порядок проверки этих базовых случаев имеет значение.
          Прежде чем проверять кэш, мы должны проверить, вышли ли мы за пределы сетки или
          нет. Это не позволит нам проверить несуществующее место в кэше.
        </strong>
      </p>
      <p className="mb-2">
        Затем у нас есть два варианта: либо наши символы совпадают, либо нет. Если наши
        символы совпадают, мы сохраним их в нашем кэше. Мы не возвращаем{' '}
        <code>cache[i1][i2]</code> сразу, потому что хотим сохранить значения в нашем
        кэше. Если у нас есть несоответствие, мы найдём максимум из двух рекурсивных
        вызовов, где мы увеличим как <code>i1</code>, так и <code>i2</code>. В конце мы
        можем вернуть <code>cache[i1][i2]</code>. Это будет нижнее правое значение, то
        есть LCS.
      </p>
      <p className="mb-2">
        <strong>
          Мы возвращаем <code>cache[i1][i2]</code>, потому что <code>i1</code> и{' '}
          <code>i2</code> будут исчерпаны, когда мы доберёмся до оператора{' '}
          <code>return</code>.
        </strong>
      </p>
      <Code value={MEMOIZATION} />
      <img alt="Сетка" className="mb-2" height="340" src={lcsDp} width="340" />
      <h2 className="font-bold my-2">Метод динамического программирования снизу</h2>
      <p className="mb-2">
        Напомним, что в решениях с методом динамического программирования снизу мы разумно
        используем уже вычисленные значения в нашей сетке для расчёта новых значений. Это
        кажется простым, но это непросто. Это связано с тем, что есть крайние случаи,
        которые нам нужно обработать, и если их не обработать, они могут легко привести к
        ошибкам.
      </p>
      <p className="mb-2">
        Во-первых, нам нужно будет инициализировать нашу сетку размером{' '}
        <code>N+1 * M+1</code>. Нам нужен этот дополнительный столбец, потому что, когда
        мы хотим получить доступ к элементу по диагонали вверх, мы выйдем за пределы,
        когда находимся в первой строке. Затем мы пройдёмся по сетке, и если мы найдём
        совпадение, мы получим доступ к значению, которое существует на одну строку вверх
        и на один столбец влево, т. е. <code>dp[i][j]</code>. Если наши символы не
        совпадают, мы возьмём максимум из значения слева и значения выше.
      </p>
      <Code value={DP} />
      <h2 className="font-bold my-2">
        Оптимизированный метод динамического программирования снизу
      </h2>
      <p className="mb-2">
        Оптимизация предыдущего решения заключалась бы в одновременном хранении в памяти
        только двух строк. В конце концов, нам нужен доступ только к текущей строке и
        строке выше. Итак, у нас есть две строки: <code>dp</code> и <code>curRow</code>.
        Таким образом, мы сохраняем в памяти только две строки. <code>dp</code> обозначает
        нашу предыдущую строку, а <code>curRow</code> представляет нашу текущую строку. На
        каждой итерации, когда мы заканчиваем вычисление значения <code>curRow</code>, мы
        присваиваем <code>dp = curRow </code> и инициализируем новый <code>curRow</code>,
        заполненный нулями.
      </p>
      <p className="mb-2">
        Если мы можем иметь в памяти только две строки, мы бы предпочли выбрать строку (
        <code>s1</code> или <code>s2</code>) с меньшей длиной в качестве длины строки
        сетки. Итак, в данном случае нам повезло, и мы выбрали меньшую из двух строк, что
        довело нашу сложность по памяти до <i>O</i>(<i>m</i>). Однако если мы бы взяли{' '}
        <code>min(s1, s2)</code>, наша сложность по памяти могла бы снизиться до <i>O</i>(
        <i>min</i>(<i>n</i>, <i>m</i>)).
      </p>
      <Code value={OPTIMIZED_DP} />
    </>
  );
}

export default LongestCommonSubsequence;
