import fibonacci1 from 'assets/fibonacci1.png?url';
import oneDimensionDp from 'assets/one-dimension-dp.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BRUTE_FORCE = `function bruteForce(n) {
  if (n <= 1) {
    return n;
  }

  return bruteForce(n - 1) + bruteForce(n - 2);
}`;

const MEMOIZATION = `function memoization(n, cache) {
  if (n <= 1) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = memoization(n - 1, cache) + memoization(n - 2, cache);

  return cache[n];
}`;

const DP = `function dp(n) {
  if (n < 2) { 
    return n;
  }
  
  const dp = [0,1]
  let i = 2;
  
  while (i <= n) {
    const tmp = dp[1];
    dp[1] = dp[0] + dp[1];
    dp[0] = tmp;
    i++;
  }
  
  return dp[1];
}`;

function OneDimensionDP(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Динамическое программирование — это, вероятно, тема, которой люди боятся больше
        всего, но мы постараемся объяснить её интуитивно.
      </p>
      <h2 className="font-bold my-2">Что такое динамическое программирование?</h2>
      <p className="mb-2">
        Проще говоря, это оптимизированная версия рекурсии. Она берёт большую проблему и
        решает её, разбивая её на более мелкие проблемы. Причина, по которой мы говорим,
        что это оптимизированная рекурсия, заключается в том, что она более оптимальна,
        когда речь идет о времени и памяти. Давайте вернёмся к последовательности
        Фибоначчи, которую мы обсуждали ранее в этом справочнике. Мы рассчитали <i>n</i>-е
        число Фибоначчи по формуле: <i>F</i>(<i>n</i>) = <i>F</i>(<i>n</i> - 1) + <i>F</i>
        (<i>n</i> - 2) со следующим кодом:
      </p>
      <Code value={BRUTE_FORCE} />
      <p className="mb-2">
        Мы также установили, что сложность по времени приведённого выше алгоритма равна{' '}
        <i>O</i>(2
        <sup>
          <i>n</i>
        </sup>
        ), поскольку на каждом уровне <code>bruteForce</code> создает еще 2 вызова{' '}
        <code>bruteForce</code>. С помощью динамического программирования мы можем
        значительно повысить производительность этого алгоритма и довести его с <i>O</i>(2
        <sup>
          <i>n</i>
        </sup>
        ) до <i>O</i>(<i>n</i>).
      </p>
      <h2 className="font-bold my-2">Динамическое программирование против рекурсии</h2>
      <p className="mb-2">
        Если мы посмотрим на дерево <code>bruteForce(5)</code> ниже, то увидим, что мы
        вычисляем <code>F(2)</code> три раза, что требует дополнительной работы, поскольку
        мы уже вычислили значение <code>F(2)</code>. Это не кажется большой проблемой,
        когда входные данные малы, но по мере их роста объём проделанной работы растёт
        экспоненциально, что станет чрезвычайно медленным, если у нас будет что-то вроде
        вычисления 100 числа Фибоначчи.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Последовательность Фибоначчи в виде дерева"
          className="mx-auto"
          height="580"
          src={fibonacci1}
          width="1180"
        />
      </figure>
      <p className="mb-2">
        Динамическое программирование говорит нам, что мы можем избежать повторения этих
        вычислений с помощью концепции, называемой <strong>мемоизацией</strong>. Идея
        здесь заключается в том, что после выполнения вычисления мы можем сохранить его в
        кэше, в данном случае <code>F(2)</code>, и если мы снова встретимся с тем же
        вычислением, мы сможем получить результат из нашего кэша. В этом, по сути, и
        состоит идея динамического программирования — рекурсия с мемоизацией.
      </p>
      <p className="mb-2">
        Чтобы представить наш кэш, мы можем использовать объект для отслеживания уже
        выполненных вычислений. Ключом будет число Фибоначчи, а значением будет его
        возвращаемое значение. Таким образом, мы можем получить данные за время <i>O</i>
        (1).
      </p>
      <Code value={MEMOIZATION} />
      <h2 className="font-bold my-2">Метод динамического программирования сверху</h2>
      <p className="mb-2">
        Вышеупомянутый подход известен как «метод динамического программирования сверху»,
        и это связано с тем, что мы обходим дерево от корня и спускаемся вниз до наших
        базовых случаев, что в любом случае по сути является рекурсией. Конечно,
        динамическое программирование сверху писать легче, но существует и динамическое
        программирование снизу.
      </p>
      <p className="mb-2">
        Динамическое программирование снизу начинается с базовых случаев и продвигается
        вверх. На самом деле это делается с помощью циклов и лучше просто потому, что не
        требует лишних расходов на рекурсивные вызовы. Многие люди считают динамическое
        программирование снизу «настоящим» динамическим программированием.
      </p>
      <p className="mb-2">
        Давайте воспользуемся методом динамического программирования снизу для решения той
        же проблемы.
      </p>
      <h2 className="font-bold my-2">Метод динамического программирования снизу</h2>
      <p className="mb-2">
        Мы вычисляем значение <i>n</i>, используя <i>n</i> − 1 и <i>n</i> − 2. Давайте
        теперь предположим, что у нас есть массив из 6 элементов, который поможет нам
        вычислить 5-е число Фибоначчи, где значение, хранящееся в <code>i</code>-м индексе
        массива, представляет значение Фибоначчи для <code>i</code>. Это будет выглядеть
        следующим образом: <code>[0, 1, 1, 2, 3, 5]</code>.
      </p>
      <p className="mb-2">
        Сложность по времени для этого равна <i>O</i>(<i>n</i>), и сложность по памяти
        также равна <i>O</i>(<i>n</i>). Реальный вопрос здесь в том, нужно ли нам вообще
        выделять место для всего массива. Если подумать, мы всегда используем только два
        предыдущих значения для расчёта текущего значения.
      </p>
      <p className="mb-2">
        Динамическое программирование сообщает нам, что можно сохранить только два
        предыдущих значения, а затем использовать их для расчёта следующего значения(ий).
      </p>
      <p className="mb-2">
        Итак, если мы возьмём массив из 2 элементов, мы сможем снизить нашу сложность по
        памяти до <i>O</i>(1). Сделав это, мы можем просто сохранить число Фибоначчи по
        1-му индексу во временной переменной, вычислить следующее число Фибоначчи и
        перезаписать значение 1-го индекса вновь вычисленным числом Фибоначчи и, наконец,
        перезаписать 0-й индекс нашей временной переменной. Обратите внимание на
        следующее: числа над массивом, выделенные белым цветом, представляют индекс, а
        числа красного цвета представляют числа Фибоначчи.
      </p>
      <Code value={DP} />
      <figure className="bg-white mb-2">
        <img
          alt="Вычисление пятого числа Фибоначчи с помощью динамического программирования"
          className="mx-auto"
          height="229"
          src={oneDimensionDp}
          width="1019"
        />
      </figure>
      <p className="mb-2">
        С помощью приведённого выше кода мы снизили сложность по времени до <i>O</i>(
        <i>n</i>), потому что наш цикл идёт до <i>n</i>, и количество наших операций будет
        линейно зависеть от размера нашего <i>n</i>.
      </p>
      <p className="mb-2">
        Мы также довели сложность по памяти до <i>O</i>(1), потому что независимо от того,
        насколько велико наше <i>n</i>, нам всегда будет нужен массив из 2 элементов.
      </p>
      <p className="mb-2">
        Здесь мы использовали только одномерный массив, но также существует двумерное
        динамическое программирование, которое мы рассмотрим позже.
      </p>
    </>
  );
}

export default OneDimensionDP;
