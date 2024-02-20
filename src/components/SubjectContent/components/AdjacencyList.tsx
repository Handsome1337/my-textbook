import adjacencyListEdges from 'assets/adjacency-list-edges.png?url';
import adjacencyListDepthFirstSearch from 'assets/adjacency-list-depth-first-search.png?url';
import adjacencyListBreadthFirstSearch from 'assets/adjacency-list-breadth-first-search.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const ADJACENCY_LIST = `// Узел графа для списка смежности
class GraphNode {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
} 

// Или используем хеш-карту
const adjList = new Map();

// Даны направленные рёбра, построим список смежности
const edges = [["A", "B"], ["B", "C"], ["B", "E"], ["C", "E"], ["E", "D"]];

for (const edge of edges) {
  const src = edge[0];
  const dst = edge[1];

  // Если текущий источник не существует, добавим его в хеш-карту
  if (!adjList.has(src)) {
    adjList.set(src, []);    
  }

  // Если текущий пункт назначения не существует, добавим его в хеш-карту
  if (!adjList.has(dst)) {
    adjList.set(dst, []);    
  }

  // Получим массив соседей по ключу (источник) и добавим в него пункт назначения
  adjList.get(src).push(dst);    
}`;

const DFS = `function dfs(node, target, adjList, visit) {
  if (visit.has(node)) {
    return 0;
  }

  if (node === target) {
    return 1;
  }

  let count = 0;
  visit.add(node);

  for (const neighbor of adjList.get(node)) {
    count += dfs(neighbor, target, adjList, visit); 
  }

  visit.delete(node);
  return count;
}`;

const BFS = `function bfs(node, target, adjList) {
  let length = 0;
  const visit = new Set();
  const queue = []; // представим, что это очередь, чтобы не занимать место реализацией очереди
  visit.add(node);
  queue.push(node);

  while (queue.length !== 0) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      const curr = queue.shift(); // представим, что это операция очереди dequeue

      if (curr === target) {
        return length;
      }

      for (const neighbor of adjList.get(curr)) {
        if (!visit.has(neighbor)) {
          visit.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    length++;
  }

  return length;
}`;

function AdjacencyList(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Список смежности, вероятно, является «самым приятным» форматом из трёх, которые мы
        рассмотрели. Здесь нам дан список направленных рёбер, и мы должны соединить
        источник с пунктами назначения. Другими словами, нам нужно построить список
        смежности по массиву рёбер.
      </p>
      <p className="mb-2">
        Код ниже демонстрирует, как мы можем построить список смежности. Мы можем
        использовать хеш-карту, где ключом является вершина, и он сопоставляется со
        списком своих соседей, которые также являются вершинами. Хеш-карта подходит,
        поскольку мы предполагаем, что все ключи значений уникальны.
      </p>
      <Code value={ADJACENCY_LIST} />
      <figure className="bg-white mb-2">
        <img
          alt="Граф, представленный списком смежности"
          className="mx-auto"
          height="400"
          src={adjacencyListEdges}
          width="800"
        />
      </figure>
      <h2 className="font-bold my-2">DFS для списка смежности</h2>
      <p className="mb-2">
        Допустим, мы хотим посчитать количество путей, ведущих от источника к пункту
        назначения.
      </p>
      <p className="mb-2">
        В приведённом ниже коде у нас есть список смежности, источник и цель{' '}
        <code>target</code>. Подобно обходу матрицы, мы будем использовать{' '}
        <code>Set</code> под названием <code>visit</code>, чтобы отслеживать вершины,
        которые мы уже посетили.
      </p>
      <p className="mb-2">
        Затем мы будем рекурсивно запускать DFS в нашем списке, пока не достигнем целевого
        узла, после чего вернем <code>1</code>. Как только мы найдём путь, мы вернёмся,
        удалив узлы из нашего <code>Set</code> и вернув <code>count</code>.
      </p>
      <Code value={DFS} />
      <p className="mb-2">
        На изображении ниже продемонстрирован описанный выше алгоритм. Красные галочки
        указывают, что узел был посещён и находится в <code>Set</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Поиск в глубину в графе, представленным списком смежности"
          className="mx-auto"
          height="1260"
          src={adjacencyListDepthFirstSearch}
          width="1060"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Этот бэктрекинг является экспоненциальным. В худшем случае каждый узел связан с
        каждым другим узлом графа. Напомним правило,{' '}
        <code>
          E &lt;= V<sup>2</sup>
        </code>
        . Итак, предположим, что каждая вершина имеет <i>N</i> рёбер. Если мы хотим
        создать дерево решений, определяющее, сколько вершин могут быть соседями каждой
        вершины, и высота этого дерева равна <i>V</i>, это означает, что в худшем случае
        нам придется выполнить{' '}
        <i>
          N<sup>v</sup>
        </i>{' '}
        работы по очень схожим причинам к тому, что мы обсуждали в статье о матрицах.
      </p>
      <h2 className="font-bold my-2">BFS для списка смежности</h2>
      <p className="mb-2">
        Запуск BFS аналогичен тому, что мы видели раньше. Допустим, наша цель — найти{' '}
        <strong>кратчайший путь</strong> от узла к цели. Под кратчайшим путем мы
        подразумеваем достижение пункта назначения путём посещения наименьшего количества
        возможных вершин.
      </p>
      <p className="mb-2">
        Наш код очень похож на код, когда мы рассматривали BFS для графа, представленного
        матрицей, за исключением того, что в этом случае нам не нужно беспокоиться о
        крайних случаях. Мы будем продолжать увеличивать длину на каждом уровне, пока не
        найдем целевую вершину <code>target</code>.
      </p>
      <Code value={BFS} />
      <p className="mb-2">
        Глядя на изображение ниже, приведённый выше фрагмент кода вернёт <code>2</code>.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Поиск в ширину в графе, представленным списком смежности"
          className="mx-auto"
          height="819"
          src={adjacencyListBreadthFirstSearch}
          width="1060"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Ранее мы узнали, что количество рёбер в графе ограничено <i>V</i>
        <sup>2</sup>. Однако мы знаем, что в этом случае у нас нет петель и нет
        максимального количества рёбер. Следовательно, мы можем сказать, что сложность по
        времени равна <i>O</i>(<i>V</i> + <i>E</i>), где <i>V</i> — количество вершин, а{' '}
        <i>E</i> — количество рёбер. Это связано с тем, что в худшем случае наш BFS должен
        учитывать все пути ко всем возможным вершинам, а это означает, что общая работа
        будет равна количеству вершин и рёбер вместе взятых.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Вы можете в это не поверить, но на самом деле это лишь поверхностное понимание и
        объяснение основ. В конце концов, существует целая область исследований под
        названием Теория графов.
      </p>
    </>
  );
}

export default AdjacencyList;
