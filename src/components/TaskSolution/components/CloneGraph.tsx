import type { ReactElement } from 'react';

function CloneGraph(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим <code>Map</code> <code>OldToNew</code>, в которой ключами будут узлы из
        переданного графа, а значениями — копии этих узлов. Напишем вспомогательную
        рекурсивную функцию <code>dfs</code>, которая заполнит <code>OldToNew</code>. В
        ней будем проверять, существует ли уже копия переданного узла. Если существует,
        будем возвращать её. Если копии не существует, создадим её, добавим в{' '}
        <code>OldToNew</code>, и добавим к ней соседей, вызвав для них <code>dfs</code>,
        после чего вернём копию.
      </p>
      <p className="mb-2">
        Если граф не пустой, вернём из функции результат <code>dfs(node)</code>, иначе
        вернём <code>null</code>.
      </p>
    </>
  );
}

export default CloneGraph;
