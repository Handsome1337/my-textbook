import directedAcyclicGraph from 'assets/directed-acyclic-graph.png?url';
import directedCyclicGraph from 'assets/directed-cyclic-graph.png?url';
import disconnectedDirectedAcyclicGraphs from 'assets/disconnected-directed-acyclic-graphs.png?url';
import topologicalSortReversedEdges from 'assets/topological-sort-reversed-edges.png?url';
import topologicalSortReversedResult from 'assets/topological-sort-reversed-result.png?url';
import topologicalSortUnknownStart from 'assets/topological-sort-unknown-start.png?url';
import topologicalSortPrerequisitesExample from 'assets/topological-sort-prerequisites-example.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const TOPOLOGICAL_SORT = `function topologicalSort(edges, n) {
  const adj = new Map();

  for (let i = 1; i <= n; i++) {
    adj.set(i, []);
  }
  
  for (const [src, dst] of edges) {
    adj.get(src).push(dst);
  }

  const topSort = [];
  const visited = new Set();

  for (let i = 1; i <= n; i++) {
    dfs(i, adj, visited, topSort);
  }

  return topSort.reverse();
}

function dfs(src, adj, visited, topSort) {
  if (visited.has(src)) {
    return;
  }

  visited.add(src);

  for (const neighbor of adj.get(src)) {
    dfs(neighbor, adj, visited, topSort);
  }

  topSort.push(src);
}`;

function TopologicalSort(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">Идея</h2>
      <p className="mb-2">
        Топологическая сортировка — это способ сортировки ориентированного ациклического
        графа (directed acyclic graph — DAG), при котором каждый узел предшествует
        зависимым узлам. Простой пример – университетские курсы. Есть некоторые курсы,
        которые можно пройти без каких-либо предварительных условий, а есть курсы, которые
        имеют предварительные условия, то есть вы не можете пройти их, если предварительно
        не прошли другие курсы.
      </p>
      <p className="mb-2">
        Другими словами, некоторые курсы можно проходить независимо от других курсов, а
        другие необходимо проходить в определённом порядке. Мы можем представить этот
        сценарий с помощью «DAG», где рёбра представляют зависимости между курсами.
      </p>
      <p className="mb-2">
        Итак, если у нас есть узел <code>C</code> и от него зависят узлы <code>A</code> и{' '}
        <code>B</code>, то <code>A</code> и <code>B</code> появятся перед <code>C</code> в
        топологическом порядке. В каком порядке они появляются, не имеет значения, если
        только <code>A</code> и <code>B</code> не зависят друг от друга.
      </p>
      <h2 className="font-bold my-2">Пример</h2>
      <p className="mb-2">
        Предположим, нам дан следующий ориентированный ациклический граф (DAG).
        Топологический порядок этого графа будет следующим: <code>A, B, C, D, E, F</code>.
        Обратите внимание, что каждый узел появляется перед зависимым узлом.
      </p>
      <img
        alt="Ориентированный ациклический граф"
        className="mb-2"
        height="420"
        src={directedAcyclicGraph}
        width="220"
      />
      <p className="mb-2">
        Это довольно простой пример. Ранее мы упоминали, что топологическая сортировка
        работает на ациклических графах. Что, если бы в нашем графе был цикл? Давайте
        немного модифицируем приведённый выше граф и применим к нему ту же концепцию. В
        этом случае у нас есть ребро, выходящее из <code>E</code> и входящее в{' '}
        <code>A</code>. Порядок будет таким: <code>E, A, B, C, D, E, F</code>. Это
        фактически противоречит идее топологической сортировки, поскольку невозможно иметь{' '}
        <code>E</code> перед <code>A</code>, а также после <code>A</code>. Это всё равно,
        что сказать: чтобы пройти курс <code>A</code>, вы должны сначала пройти курс{' '}
        <code>E</code>, но чтобы пройти курс <code>E</code>, вы должны сначала пройти курс{' '}
        <code>A</code> — это цикл.
      </p>
      <img
        alt="Ориентированный циклический граф"
        className="mb-2"
        height="420"
        src={directedCyclicGraph}
        width="300"
      />
      <p className="mb-2">
        Если циклов нет, топологическая сортировка будет работать даже на несвязных
        графах. Если в графе есть два связных компонента, порядок расположения вершин
        отдельных несвязных компонентов не имеет значения, поскольку они независимы друг
        от друга. В приведённом ниже графе есть два связных компонента, и одним из
        возможных валидных порядков может быть <code>A, B, C, D, E, F, G, H</code>.
      </p>
      <img
        alt="Несвязные ориентированные ациклические графы"
        className="mb-2"
        height="420"
        src={disconnectedDirectedAcyclicGraphs}
        width="360"
      />
      <h2 className="font-bold my-2">Алгоритм</h2>
      <p className="mb-2">
        Для обхода графа мы можем использовать BFS или DFS. В нашем случае мы будем
        использовать рекурсивный DFS. Вопрос здесь в том, каким будет наш базовый случай?
        Если взглянуть на наш граф, то видно, что мы хотим выйти из функции, когда
        достигнем <code>F</code>. Однако в этом случае мы посетим <code>F</code> дважды,
        потому что <code>F</code> можно достичь из <code>D</code>, но также и из{' '}
        <code>E</code>, т. е. <code>D-&gt;F</code>, <code>E-&gt;F</code>. Чтобы избежать
        этого, мы можем использовать <code>Set</code> <code>visited</code> для
        отслеживания посещённых узлов. Это приведёт к порядоку{' '}
        <code>A, B, D, F, C, E, G, H</code>, что окажется неверным. Проблема здесь в том,
        что <code>F</code> появляется раньше <code>C</code> и <code>E</code>, но{' '}
        <code>F</code> зависит как от <code>C</code>, так и от <code>E</code>.
      </p>
      <p className="mb-2">
        Мы хотим найти способ посетить <code>C</code> и <code>E</code> до того, как
        посетим <code>F</code>. Есть два распространённых метода, которые мы можем
        использовать для решения этой проблемы.
      </p>
      <ol className="list-decimal list-inside">
        <li className="mb-2">
          Развернуть рёбра графа и запустить обратный обход. Напомним обратный обход:{' '}
          <code>left, right, root</code>. Это даст нам правильный топологический порядок,
          который показан ниже.
          <p className="mb-2">
            <strong>Числа рядом с вершинами обозначают порядок их посещения.</strong>
          </p>
          <figure className="bg-white">
            <img
              alt="Топологическая сортировка с помощью разворота рёбер графа"
              className="mx-auto"
              height="501"
              src={topologicalSortReversedEdges}
              width="580"
            />
          </figure>
        </li>
        <li className="mb-2">
          Вместо того, чтобы разворачивать граф, выполнить обратный обход и развернуть
          результирующий массив. Это избавляет нас от разворачивания графа и по-прежнему
          даёт нам правильный топологический порядок.
          <figure className="bg-white">
            <img
              alt="Топологическая сортировка с помощью разворота результирующего массива"
              className="mx-auto mt-2"
              height="420"
              src={topologicalSortReversedResult}
              width="800"
            />
          </figure>
        </li>
      </ol>
      <h2 className="font-bold my-2">
        Топологическая сортировка без известной начальной точки
      </h2>
      <p className="mb-2">
        В примерах выше мы говорили о графах, где мы знали, какие вершины являются
        «головами» связных компонентов. Однако большинство задач не столь удобны. Тем не
        менее, пока у нас есть список всех вершин входного графа, мы можем решить
        проблему. Вместо того, чтобы выполнять DFS, начиная с «головы» (или исходной
        вершины) каждого компонента, мы будем запускать его для каждой отдельной вершины
        каждого компонента в том порядке, в котором они появляются.
      </p>
      <p className="mb-2">
        Предположим, что первые четыре вершины появляются в порядке{' '}
        <code>B, C, H, A</code>. В этом случае мы можем просто выполнять обратный DFS по
        одной вершине за раз. Мы можем посетить соседей <code>B</code>, затем соседей{' '}
        <code>C</code> и, наконец, соседей <code>H</code> и <code>A</code>. К тому
        времени, как мы посетим другие узлы, мы уже посетим их или их соседей, поэтому мы
        можем просто вернуться из функции. Это будет выглядеть следующим образом.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Топологическая сортировка без известной начальной точки"
          className="mx-auto"
          height="441"
          src={topologicalSortUnknownStart}
          width="800"
        />
      </figure>
      <h2 className="font-bold my-2">Реализация</h2>
      <p className="mb-2">
        Предположим, нам дан ориентированный ациклический граф и мы хотим вернуть
        топологический порядок. Сначала мы построим список смежности, используя данный
        массив рёбер. Чтобы сохранить наш топологический порядок, мы можем использовать
        массив <code>topSort</code> и <code>Set</code> <code>visited</code>, чтобы
        избежать повторного посещения одной и той же вершины дважды. Мы можем выполнить
        наш DFS и вернуть массив <code>topSort</code> с топологическим порядком.
      </p>
      <h2 className="font-bold my-2">DFS</h2>
      <p className="mb-2">
        Несмотря на то, что функция <code>dfs</code> является вспомогательной функцией,
        она формирует наш массив. Мы можем передать <code>src</code>, который обозначает
        текущий узел, на котором мы находимся. <code>adj</code>, который представляет
        список смежности и позволяет нам просматривать соседей. <code>visited</code> и
        массив <code>topSort</code>, который мы и вернём в конце. Если текущий узел{' '}
        <code>src</code> уже находится в <code>Set</code> <code>visited</code>, мы можем
        вернуться из функции. В противном случае мы добавим его в <code>visited</code> и
        выполненим <code>dfs</code> для его соседей. После выполнения <code>dfs</code> мы
        можем добавить <code>src</code> к нашему <code>topSort</code>.
      </p>
      <Code value={TOPOLOGICAL_SORT} />
      <h2 className="font-bold my-2">Циклический путь</h2>
      <p className="mb-2">
        Что, если бы нам не было гарантировано, что граф ацикличен? Как бы мы добавили
        обнаружение циклов в нашем графе? Мы можем объявить еще один <code>Set</code>{' '}
        <code>path</code>, который будет отслеживать текущий путь в нашем DFS. Как и в
        случае с <code>visited</code>, мы добавим вершины в наш <code>path</code>. Затем,
        как только рекурсивные вызовы для всех соседей выполнятся, мы также извлечём
        вершину из нашего <code>path</code>. Если мы посетим одну и ту же вершину по пути
        дважды, мы можем вернуть <code>false</code>, поскольку это означает, что в нашем
        графе есть цикл.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Во введении мы кратко упомянули, что одно из применений топологической сортировки
        — это предварительные условия курса. Граф ниже представляет собой конкретный
        пример этого: A = алгебра, C = химия, E = английский язык и P = физика.
        Топологический порядок имеет смысл, поскольку вам необходимо сдать «Физику I»,
        прежде чем изучать «Физику II», и так далее.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Топологическая сортировка на примере предварительных условий курса"
          className="mx-auto"
          height="441"
          src={topologicalSortPrerequisitesExample}
          width="660"
        />
      </figure>
    </>
  );
}

export default TopologicalSort;
