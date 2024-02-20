import matrixBreadthFirstSearch from 'assets/matrix-breadth-first-search.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const GRAPH = `const matrix = [[0, 0, 0, 0],
               [1, 1, 0, 0],
               [0, 0, 0, 1],
               [0, 1, 0, 0]];`;

const BFS1 = `function bfs(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [[0, 0]]; // представим, что это очередь, чтобы не занимать место реализацией очереди
  const visited = new Set([\`\${0}-\${0}\`]);
}`;

const BFS2 = `let length = 0;

while (queue.length > 0) {
  const queueLength = queue.length;

  for (let i = 0; i < queueLength; i++) {
    const [r, c] = queue.shift(); // представим, что это операция очереди dequeue

    if (r === ROWS - 1 && c === COLS - 1) {
      return length;
    }
    
    const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    for (const [dr, dc] of neighbors) {
      const newR = r + dr;
      const newC = c + dc;
      
      if (Math.min(newR, newC) < 0
        || newR === ROWS
        || newC === COLS
        || visited.has(\`\${newR}-\${newC}\`)
        || grid[newR][newC] === 1) {
        continue;
      }

      queue.push([newR, newC]);
      visited.add(\`\${newR}-\${newC}\`);
    }
  }
  
  length++;
}`;

const BFS = `function bfs(grid) {
  const ROWS = grid.length;
  const COLS = grid[0].length;
  const queue = [[0, 0]]; // представим, что это очередь, чтобы не занимать место реализацией очереди
  const visited = new Set([\`\${0}-\${0}\`]);
  
  let length = 0;
  
  while (queue.length > 0) {
    const queueLength = queue.length;
  
    for (let i = 0; i < queueLength; i++) {
      const [r, c] = queue.shift(); // представим, что это операция очереди dequeue
  
      if (r === ROWS - 1 && c === COLS - 1) {
        return length;
      }
      
      const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      
      for (const [dr, dc] of neighbors) {
        const newR = r + dr;
        const newC = c + dc;
        
        if (Math.min(newR, newC) < 0
          || newR === ROWS
          || newC === COLS
          || visited.has(\`\${newR}-\${newC}\`)
          || grid[newR][newC] === 1) {
          continue;
        }
  
        queue.push([newR, newC]);
        visited.add(\`\${newR}-\${newC}\`);
      }
    }
    
    length++;
  }
}`;

function MatrixBreadthFirstSearch(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Поиск в ширину чаще всего используется для поиска кратчайшего пути в графе.
      </p>
      <p className="mb-2">
        Давайте сразу углубимся в вопрос. Вы заметите, что код BFS для графа похож на код
        BFS для деревьев, с некоторыми крайними случаями.
      </p>
      <p className="mb-2">
        <strong>
          Найдите длину кратчайшего пути от верхнего левого угла сетки до правого нижнего.
        </strong>
      </p>
      <p className="mb-2">
        Мы также можем использовать для этого DFS, но это более грубый подход. BFS более
        эффективен, поскольку при первом обнаружении вершины во время обхода расстояние от
        нашего источника даст нам кратчайший путь. Давайте посмотрим на код, учитывая
        следующую матрицу.
      </p>
      <Code value={GRAPH} />
      <h2 className="font-bold my-2">Первые шаги</h2>
      <p className="mb-2">
        Как и в предыдущей статье, мы запишем количество наших строк и столбцов, что
        говорит нам, где находятся наши границы. Мы будем использовать <code>Set</code>{' '}
        для отслеживания посещённых вершин. Мы будем использовать очередь, чтобы
        отслеживать все посещённые вершины на каждом уровне и определять, на каком уровне
        мы находимся в данный момент. Мы можем инициализировать нашу очередь первой
        вершиной <code>[0, 0]</code> и пометить ее как посещённую. Это наша отправная
        точка.
      </p>
      <Code value={BFS1} />
      <h2 className="font-bold my-2">BFS для графа</h2>
      <p className="mb-2">
        Нам предлагается найти длину кратчайшего пути. После первых шагов мы можем
        инициализировать переменную <code>length</code> значением <code>0</code>. Затем,
        как и в случае с BFS для деревьев, мы можем запустить цикл <code>while</code> для
        нашей очереди и сделать снимок длины очереди. Здесь, когда мы извлекаем элемент из
        очереди, мы получаем <code>r</code> (строку) и <code>c</code> (столбец). В случае
        с деревьями следующим шагом было посещение дочерних узлов извлечённого узла. Здесь
        мы посещаем соседей извлечённой вершины. Нам придётся сделать это только в том
        случае, если мы еще не достигли правого нижнего угла, то есть когда{' '}
        <code>r === ROWS - 1</code> и <code>c === COLS - 1</code>.
      </p>
      <p className="mb-2">
        В лучшем случае мы сможем двигаться во всех четырёх направлениях, не выходя за
        пределы сетки. Для этого мы можем сохранить двумерный массив —{' '}
        <code>neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]</code>. Хотя технически это
        не соседи, массив просто представляет направления, в которых мы можем двигаться —
        вправо, влево, вверх, вниз соответственно.
      </p>
      <p className="mb-2">
        Код в блоке <code>if</code> такой же, как и в DFS. Если мы вышли за пределы,
        координата заблокирована или вершина уже посещена, мы переходим к следующей
        итерации. В противном случае мы добавляем всех соседей в очередь и добавляем их в{' '}
        <code>Set</code>, чтобы гарантировать, что мы не посетим их снова. Обратите
        внимание, как мы добавляем в <code>Set</code> сразу после добавления в очередь.
        Таким образом, в нашей очереди никогда не будет дважды встречаться один и тот же
        элемент, что помогает сделать ее более эффективной с точки зрения сложности по
        времени, о чём мы поговорим позже. Следующий фрагмент кода после первых шагов
        выглядит так.
      </p>
      <Code value={BFS2} />
      <p className="mb-2">Объединив всё это вместе, мы получим следующее.</p>
      <Code value={BFS} />
      <p className="mb-2">
        Ниже мы можем визуализировать этот алгоритм применительно к нашей матрице. Числа и
        кружки одного цвета обозначают длину пути в этой конкретной вершине.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Поиск в ширину в графе, представленным матрицей"
          className="mx-auto"
          height="1200"
          src={matrixBreadthFirstSearch}
          width="1150"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Поскольку мы никогда не посещаем координату дважды, в худшем случае мы посещаем
        каждую координату не более одного раза. Если <i>n</i> — количество строк, а{' '}
        <code>m</code> — количество столбцов, это даёт нам сложность по времени <i>O</i>(
        <i>n</i> ∗ <i>m</i>).
      </p>
    </>
  );
}

export default MatrixBreadthFirstSearch;
