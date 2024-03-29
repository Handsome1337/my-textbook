import combinations from 'assets/combinations.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const COMBINATIONS_TRIVIAL = `function combinations(n, k) {
  const combs = [];
  helper(1, [], combs, n, k);
  return combs;
}

function helper(i, curComb, combs, n, k) {
  if (curComb.length === k) {
    combs.push([...curComb]);
    return;
  }

  if (i > n) {
    return;
  }

  // путь, по которому мы включаем i
  curComb.push(i);
  helper(i + 1, curComb, combs, n, k);
  curComb.pop();
  
  // путь, по которому мы НЕ включаем i
  helper(i + 1, curComb, combs, n, k);
}`;

const COMBINATIONS_OPTIMIZED = `function combinations2(n, k) {
  const combs = [];
  helper2(1, [], combs, n, k);
  return combs;
}

function helper2(i, curComb, combs, n, k) {
  if (curComb.length === k) {
    combs.push([...curComb]);
    return;
  }

  if (i > n) {
    return;
  }

  for (let j = i; j < n + 1; j++) {
    curComb.push(j);
    helper2(j + 1, curComb, combs, n, k);
    curComb.pop();
  }
}`;

function Combinations(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">Концепция</h2>
      <p className="mb-2">
        С математической точки зрения, сочетания имеют то же определение, что и
        подмножества. Порядок, в котором мы размещаем элементы, не имеет значения.
        Существует очень аккуратная математическая формула для расчёта количества
        возможных сочетаний размера <i>k</i> при заданном <i>n</i>, которая, хотя и не так
        уместна для сочетаний в информатике, все же актуальна. Поясним это на примере.
      </p>
      <h2 className="font-bold my-2">Пример использования сочетаний</h2>
      <p className="mb-2">Предположим, перед нами стоит следующая задача:</p>
      <p className="mb-2">
        <strong>
          Даны два числа <i>n</i> и <i>k</i>, верните все возможные сочетания размера{' '}
          <i>k</i>, выбирая из значений от <code>1</code> до <i>n</i>.
        </strong>
      </p>
      <p className="mb-2">
        Предположим, что <i>n</i> = <code>5</code> и <i>k</i> = <code>2</code>. Другими
        словами, вопрос звучит так: «сколько существует способов выбрать уникальные
        подмножества размера <code>2</code> из множества чисел в диапазоне от{' '}
        <code>1</code> до <code>5</code>?». Ограничением здесь является то, что наши
        сочетания могут иметь размер только <code>2</code>. Напомним, что одно и то же
        сочетание с элементами, расположенными в другом порядке, не считается, т. е.{' '}
        <code>[2, 1]</code> и <code>[1, 2]</code> считаются за <code>1</code> уникальное
        сочетание.
      </p>
      <p className="mb-2">Итак, как нам решить эту проблему в коде? Есть два подхода.</p>
      <ul>
        <li className="mb-2">
          <strong>Тривиальный подход</strong>
          <p className="mb-2">
            Этот подход аналогичен подходу к подмножествам. Мы проходим через{' '}
            <code>1 − 5</code> в нашем дереве решений и принимаем решение включить или
            исключить текущее число, в котором мы находимся. Здесь мы ограничены
            количеством элементов, которые нам разрешено включать в наше сочетание.
            Поскольку <i>k</i> = <code>2</code>, наш базовый случай срабатывает, когда{' '}
            <code>curComb.length === k</code>. Вот почему, когда мы достигаем{' '}
            <code>[1, 2]</code>, нам не нужно идти дальше.
          </p>
          <p className="mb-2">
            Проблема с этим подходом заключается в том, что высота дерева станет <i>n</i>,
            где <i>n</i> — длина нашего стека рекурсивных вызовов. Это связано с тем, что
            в худшем случае нам, возможно, придётся пройти через весь диапазон значений,
            пока мы не достигнем базового случая.
          </p>
          <p className="mb-2">
            Построение каждого сочетания требует работы <i>O</i>(<i>k</i>). Это даёт нам
            верхнюю границу <i>O</i>(<i>k</i> ⋅ 2
            <sup>
              <i>n</i>
            </sup>
            ), которая является приблизительной. В предыдущей статье мы не были ограничены
            количеством элементов, которые могли быть в каждом множестве, поэтому у нас
            была сложность <i>O</i>(<i>n</i> ⋅ 2
            <sup>
              <i>n</i>
            </sup>
            ). Давайте рассмотрим реализацию этой техники, прежде чем перейти к более
            эффективному решению.
          </p>
          <Code value={COMBINATIONS_TRIVIAL} />
          <p className="mb-2">
            Вы можете заметить, что приведенный выше код очень похож на код из статьи о
            подмножествах, и вы будете правы. Тем не менее, есть небольшие различия. В
            нашей функции <code>helper</code> <code>i</code> обозначает текущее число в
            диапазоне, <code>curComb</code> представляет текущее сочетание,{' '}
            <code>combs</code> представляет список списков, которые будут содержать каждый{' '}
            <code>curComb</code>. <code>k</code> представляет размер каждого сочетания,
            содержащего элементы, выбранные из диапазона, доходящего до <code>n</code>.
            Наш базовый случай срабатывает, когда длина <code>curComb</code> достигает{' '}
            <code>k</code>. Изучив каждый <code>i</code>, мы возвращаемся назад и
            исследуем другие сочетания, исключающие <code>i</code>. Повторяем это до тех
            пор, пока <code>i &lt;= n</code>.
          </p>
        </li>
        <li className="mb-2">
          <strong>Оптимизированный подход</strong>
          <p className="mb-2">
            В начале этой статьи мы упомянули, что существует изящная математическая
            формула для определения количества сочетаний. Формула выглядит следующим
            образом и является более эффективной, чем <i>k</i> ⋅ 2
            <sup>
              <i>n</i>
            </sup>
            :{' '}
            <span className="after:absolute after:content-['.'] after:leading-[0.25rem] after:left-full after:ml-0.5 after:rotate-180 after:top-1/2 flex flex-col items-center relative text-sm w-max">
              <span>
                <i>n</i>!
              </span>
              <span className="bg-black h-px w-full" />
              <span>
                <i>k</i>!(<i>n</i> - <i>k</i>)!
              </span>
            </span>
          </p>
          <p className="mb-2">
            При таком подходе мы можем создать каждое нужное нам сочетание, не идя по
            пути, где мы не создаём ни одного допустимого сочетания. Но нам также нужно
            следить за дубликатами. Итак, для каждого <code>i</code> мы хотим включать
            только числа, следующие за ним. Это помогает нам избежать дублирования в наших
            сочетаниях. Это также гарантирует, что у нас не будет дерева решений размера{' '}
            <i>n</i>. На каждом шаге мы выбираем число, т. е. мы никогда не выбираем
            число. Поскольку мы никогда не используем значение повторно, каждая ветвь
            приводит к появлению различных сочетаний, которые выглядят следующим образом:
          </p>
          <figure className="bg-white mb-2">
            <img
              alt="Все возможные сочетания"
              className="mx-auto"
              height="240"
              src={combinations}
              width="680"
            />
          </figure>
          <p className="mb-2">
            Если{' '}
            <code>
              <i>n</i> = 5
            </code>{' '}
            и{' '}
            <code>
              <i>k</i> = 2
            </code>
            , мы получаем <code>5! / (2! * (5 - 2)!) = 10</code>
          </p>
          <Code value={COMBINATIONS_OPTIMIZED} />
        </li>
      </ul>
    </>
  );
}

export default Combinations;
