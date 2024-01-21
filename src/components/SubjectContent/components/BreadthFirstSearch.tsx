import breadthFirstSearch from 'assets/breadth-first-search.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BFS = `function bfs(root) {
  const queue = []; // представим, что это очередь, чтобы не занимать место реализацией очереди

  if (root) {
    queue.push(root);
  }

  let level = 0;

  while (queue.length > 0) {
    console.log('level' + level + ':');

    const levelLength = queue.length;

    for (let i = 0; i < levelLength; i++) {
      const curr = queue.shift(); // представим, что это операция очереди dequeue

      console.log(curr.val);

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }

    level++;
  }
}`;

function BreadthFirstSearch(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">Концепция</h2>
      <p className="mb-2">
        При поиске в глубину мы отдавали приоритет глубине. Для поиска в ширину
        (Breadth-first Search — BFS) мы отдаём приоритет ширине. Мы фокусируемся на
        посещении всех узлов на одном уровне, прежде чем перейти на следующий уровень.
      </p>
      <p className="mb-2">
        Как правило, поиск в ширину реализуется итеративно, и именно такую реализацию мы
        рассмотрим в этой статье. Вы можете написать этот алгоритм рекурсивно, но это
        намного сложнее.
      </p>
      <p className="mb-2">
        BFS использует структуру данных «очередь», которая позволяет нам удалять элементы
        из головы за <i>O</i>(1) по времени. Скоро это обретёт смысл.
      </p>
      <p className="mb-2">Псевдокод для BFS показан ниже.</p>
      <Code value={BFS} />
      <p className="mb-2">
        Возьмём для примера бинарное дерево <code>[4, 3, 6, 2, null, 5, 7]</code> и
        применим алгоритм BFS. Помните, наша цель — посетить все узлы на одном уровне,
        прежде чем перейти к следующему.
      </p>
      <p className="mb-2">
        Если мы добавим наш корневой узел <code>root</code> в нашу очередь и пройдёмся по
        очереди так, что в любой момент времени наша очередь будет содержать узлы только
        на определённом уровне, то мы гарантируем, что мы посещаем уровни по порядку, а
        также не перепутаем уровни. Это именно то, чего достигает код внутри цикла{' '}
        <code>while</code>. Пока наша очередь не пуста, мы удаляем узлы, присутствующие в
        нашей очереди, и добавляем в очередь их дочерние узлы (что будет являться
        следующим уровнем). Поэтому, когда мы удаляем <code>root</code>, мы добавляем в
        очередь его дочерние узлы, которые равны <code>3</code> и <code>6</code>. Затем мы
        удаляем <code>3</code> и добавляем его дочерний узел <code>2</code>. Затем мы
        удаляем <code>6</code> и добавляем в очередь <code>5</code> и <code>7</code>.
        Из-за того, что очереди следуют принципу FIFO, мы гарантируем, что посещаем узлы
        слева направо.
      </p>
      <p className="mb-2">
        Наша очередь становится пустой, как только мы посетим все узлы.
      </p>
      <p className="mb-2">
        На изображении ниже показано, как будет выглядеть состояние очереди на каждом
        уровне дерева.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Поиск в ширину"
          className="mx-auto"
          height="459"
          src={breadthFirstSearch}
          width="780"
        />
      </figure>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Технически, общая проделанная работа равна <i>c</i> * <i>n</i>, где <i>n</i> —
        количество узлов в дереве, а <i>c</i> — объем работы, выполняемой на каждом узле.
        Всего мы выполнили три операции для каждого узла — вывод в консоль, добавление
        узла и его удаление. Это то, что представляет собой <i>c</i>. В случае
        асимптотического анализа мы можем отбросить эту константу, что означает, что
        сложность алгоритма по времени составит <i>O</i>(<i>n</i>).
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Поиск в ширину будет чрезвычайно полезен, когда дело дойдёт до обхода графа, что
        мы вскоре увидим.
      </p>
    </>
  );
}

export default BreadthFirstSearch;