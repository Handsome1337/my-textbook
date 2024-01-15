import type { ReactElement } from 'react';

function DeleteNodeInABST(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Воспользуемся рекурсией для решения этой задачи. Базовым случаем будет являться
        ситуация, при которой переданный корень равен <code>null</code> — в таком случае
        нам нечего удалять, возвращаем <code>null</code>.
      </p>
      <p className="mb-2">
        Пройдём по нашему дереву. На каждом уровне рекурсии проверяем, как соотносятся
        удаляемое значение и значение текущего узла. Если удаляемое значение больше
        значения текущего узла, то рекурсивно удаляем это значение в правом поддереве
        текущего узла, иначе — в левом. Когда поддерева не будет существовать, это
        приведёт к базовому случаю. Возвращаем из функции <code>root</code>, чтобы на
        предыдущем уровне рекурсии мы могли сохранить получившееся поддерево.
      </p>
      <p className="mb-2">
        Если удаляемое значение и значение текущего узла равны, то мы нашли узел, который
        необходимо удалить. Если у этого узла ноль или один дочерний узел, то это легко,
        мы можем просто передать на предыдущий уровень рекурсии этих детей (
        <code>if (!root.left)</code> и <code>else if (!root.right)</code>).
      </p>
      <p className="mb-2">
        Если же у этого узла два дочерних узла, то нам нужно заменить значение текущего
        узла на значение его последовательного преемника. Последовательным преемником
        является самый левый узел в правом поддереве удаляемого узла. По-другому можно
        сказать, что это наименьший узел среди всех узлов, которые больше удаляемого узла.
        Это гарантирует, что полученное дерево по-прежнему будет валидным бинарным деревом
        поиска.
      </p>
      <p className="mb-2">
        Создадим указатель <code>cur</code> и пройдём по правому поддереву до самой левой
        его части, на каждой итерации обновляя наш указатель. Затем обновим значение
        текущего узла, а в правом поддереве рекурсивно удалим значение, которое мы только
        что перенесли в текущий узел.
      </p>
    </>
  );
}

export default DeleteNodeInABST;
