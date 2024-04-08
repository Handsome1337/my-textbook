import segmentTree from 'assets/segment-tree.png?url';
import segmentTreeUpdate from 'assets/segment-tree-update.png?url';
import segmentTreeRangeQueryBaseCase from 'assets/segment-tree-range-query-base-case.png?url';
import segmentTreeRangeIsInRightSubtree from 'assets/segment-tree-range-is-in-right-sub-tree.png?url';
import segmentTreeRangeIsInLeftSubtree from 'assets/segment-tree-range-is-in-left-sub-tree.png?url';
import segmentTreeRangeOverlapsWIthRightAndLeftSubtree from 'assets/segment-tree-range-overlaps-with-right-and-left-sub-tree.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const SEGMENT_TREE = `class SegmentTree {
  left = null;
  right = null;

  constructor(total, L , R) {
    this.sum = total;
    this.L = L;
    this.R = R;
  }

  ...
}`;

const BUILD = `static build(nums, L, R) {
  if (L === R) {
    return new SegmentTree(nums[L], L, R);
  }

  const M = Math.floor((L + R) / 2);
  const root = new SegmentTree(0, L, R);

  root.left = SegmentTree.build(nums, L, M);
  root.right =  SegmentTree.build(nums, M + 1, R);
  root.sum = root.left.sum + root.right.sum;

  return root;
}`;

const UPDATE = `update(index, val) {
  if (this.L === this.R) {
    this.sum = val;
    return;
  }

  const M = Math.floor((this.L + this.R) / 2);

  if (index > M) {
    this.right.update(index, val);
  } else {
    this.left.update(index, val);
  }

  this.sum = this.left.sum + this.right.sum;
}`;

const RANGE_QUERY = `rangeQuery(L, R) {
  if (L === this.L && R === this.R) {
    return this.sum;
  }

  const M = Math.floor((this.L + this.R) / 2);

  if (L > M) {
    return this.right.rangeQuery(L, R);
  }

  if (R <= M) {
    return this.left.rangeQuery(L, R);
  }
  
  return this.left.rangeQuery(L, M) + this.right.rangeQuery(M + 1, R);
}`;

const BASE_CASE = `if (L === this.L && R === this.R) {
  return this.sum;
}`;

const RANGE_IS_IN_THE_RIGHT_SUBTREE = `if (L > M) {
  return this.right.rangeQuery(L, R);
}`;

const RANGE_IS_IN_THE_LEFT_SUBTREE = `if (R <= M) {
  return this.left.rangeQuery(L, R);
}`;

const RANGE_OVERLAPS_WITH_RIGHT_AND_LEFT_SUBTREE = `return this.left.rangeQuery(L, M) + this.right.rangeQuery(M + 1, R);`;

function SegmentTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Структура деревьев отрезков — одна из самых сложных среди древовидных структур, но
        мы постараемся максимально её упростить.
      </p>
      <h2 className="font-bold my-2">Мотивация</h2>
      <p className="mb-2">
        Предположим, нам дан диапазон значений. Затем, учитывая левый и правый указатели,
        определяющие диапазон, мы хотим иметь возможность вычислить сумму диапазона. Это
        фундаментальная хрестоматийная проблема, связанная с деревьями отрезков, и именно
        на ней мы сосредоточимся.
      </p>
      <p className="mb-2">
        Решение этой проблемы с использованием массива тривиально, для прохождения
        диапазона в худшем случае требуется <i>O</i>(<i>n</i>) времени. Если мы хотим
        обновить значение в массиве, это делается за <i>O</i>(1) по времени. Деревья
        отрезков обещают реализовать как обновление, так и выполнение запросов за <i>O</i>
        (<i>log n</i>) по времени. Хотя это увеличивает накладные расходы на функцию
        обновления, компромисс заключается в том, что наша функция поиска будет работать
        намного быстрее.
      </p>
      <p className="mb-2">
        Идея не слишком отличается от сортировки слиянием и состоит в том, чтобы разбить
        массив на отрезки (точнее, с коэффициентом ветвления, равным двум), и чтобы каждый
        узел представлял постепенно меньший диапазон. Мы разбиваем массив на две равные
        половины, и каждый узел представляет диапазон (который по сути является индексом
        массива).
      </p>
      <p className="mb-2">
        На изображении ниже показано, как строится дерево отрезков с использованием
        массива. Числа красного цвета представляют собой сумму диапазона в данном узле.
        Числа внутри узла представляют собой сам диапазон, включая оба числа. Текст синего
        цвета представляет формулу для расчёта диапазона.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Дерево отрезков"
          className="mx-auto"
          height="420"
          src={segmentTree}
          width="880"
        />
      </figure>
      <h2 className="font-bold my-2">Реализация</h2>
      <p className="mb-2">
        Подобно кучам, деревья отрезков могут быть построены с использованием массивов.
        Напомним, что кучи представляют собой почти полные бинарные деревья, в которых
        каждый уровень заполнен, за исключением, возможно, последнего уровня. Однако
        деревья отрезков имеют пробелы на последнем уровне, что затрудняет их реализацию с
        помощью массивов. Итак, мы реализуем их с помощью объектов класса{' '}
        <code>SegmentTree</code>, которые можно представить как узлы.
      </p>
      <h2 className="font-bold my-2">Конструктор дерева отрезков</h2>
      <p className="mb-2">
        В нашем конструкторе класса <code>SegmentTree</code> нам понадобится следующее:
      </p>
      <ol className="list-decimal list-inside">
        <li className="ml-6">
          <code>right</code> и <code>left</code> указатели на правый и левый дочерние узлы
          (аналогично бинарным деревьям).
        </li>
        <li className="ml-6">
          <code>sum</code>, отслеживает сумму на каждом узле.
        </li>
        <li className="ml-6">
          В любом заданном узле <code>L</code> и <code>R</code> обозначают левую и правую
          границы содержащегося диапазона соответственно.
        </li>
      </ol>
      <Code value={SEGMENT_TREE} />
      <h2 className="font-bold my-2">Построение дерева отрезков</h2>
      <p className="mb-2">
        Принимая массив <code>nums</code>, <code>L</code> и <code>R</code>, мы можем
        применить рекурсивный подход. На каждом уровне мы вычисляем <code>M</code>,
        которое делит текущий диапазон пополам и строит дерево до тех пор, пока не дойдет
        до базового случая, где <code>L === R</code>, т. е. диапазон исчерпается.
      </p>
      <p className="mb-2">
        Для начала мы инициализируем корень <code>root</code> с суммой <code>0</code>.
        Затем мы можем рекурсивно вычислить сумму в каждом узле и вернуть окончательную
        сумму.
      </p>
      <Code value={BUILD} />
      <h2 className="font-bold my-2">Обновление</h2>
      <p className="mb-2">
        Если мы хотим обновить сумму узла, мы можем взять индекс, который мы хотим
        обновить, и значение, которым мы хотим его обновить. Реализация не слишком
        отличается от функции <code>build()</code>. Наш базовый случай: если мы достигнем
        листового узла, мы нашли наш индекс и можем обновить сумму до нового значения.
        Затем мы рассчитаем значение <code>M</code>. Если оно меньше индекса, мы
        рекурсивно спустимся по правому поддереву, а если оно больше индекса, мы
        рекурсивно спустимся по левому поддереву.
      </p>
      <p className="mb-2">Это работает благодаря тому, как мы разделяем наш массив.</p>
      <Code value={UPDATE} />
      <p className="mb-2">Давайте рассмотрим пример:</p>
      <p className="mb-2">
        Пусть <code>i = 3</code> и <code>v = 4</code>, где <code>i</code> — индекс
        обновления, а <code>v</code> представляет новое значение, которое мы хотим
        обновить. Как только мы доберёмся до базового случая, то есть листового узла, мы
        обновим значение и сделаем это рекурсивно.
      </p>
      <figure className="bg-white mb-2">
        <img
          alt="Обновление значения в дереве отрезков"
          className="mx-auto"
          height="1580"
          src={segmentTreeUpdate}
          width="1500"
        />
      </figure>
      <h2 className="font-bold my-2">Запрос диапазона</h2>
      <p className="mb-2">
        Ниже показан код функции <code>rangeQuery</code>.
      </p>
      <Code value={RANGE_QUERY} />
      <p className="mb-2">
        Это самая важная операция дерева отрезков — расчёт запроса диапазона. Допустим,
        нам задан диапазон <code>0,5</code>. В примере, который мы показали выше, этот
        диапазон находится в корневом узле, что делает расчёт <i>O</i>(1) операцией.
        Конечно, это лучший вариант развития событий.
      </p>
      <p className="mb-2">
        Что, если нам дан диапазон, который требует от нас пройти вниз по дереву? Что ж,
        мы будем следовать той же рекурсивной процедуре. Мы пройдёмся вниз по дереву и
        вычислим <code>M</code>. Учитывая <code>L</code> и <code>R</code>, если{' '}
        <code>L &gt; M</code>, наш запрошенный диапазон находится справа. Если{' '}
        <code>R &lt;= M</code>, наш диапазон лежит слева. И это имеет смысл, поскольку
        когда мы вычисляли <code>M</code> в функции <code>build()</code>, левое поддерево
        имело индексы <code>L, M</code>, а правое поддерево имело индексы{' '}
        <code>M + 1, R</code>.
      </p>
      <p className="mb-2">
        В приведённом выше коде у нас есть четыре условия. Давайте рассмотрим случаи, в
        которых будет выполняться каждое условие.
      </p>
      <ul>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Базовый случай</strong>
          </p>
          <p className="mb-2">
            Предположим, нам задан запрос диапазона <code>[0,5]</code>. Это лучший
            сценарий, при котором будет выполняться следующий фрагмент кода. Мы можем
            сразу вернуть сумму, которая равна <code>22</code>.
          </p>
          <Code value={BASE_CASE} />
          <img
            alt="Базовый случай запроса диапазона"
            height="500"
            src={segmentTreeRangeQueryBaseCase}
            width="480"
          />
        </li>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Диапазон находится в правом поддереве</strong>
          </p>
          <p className="mb-2">
            Если нам задан диапазон <code>[5,5]</code>, это означает, что весь наш
            диапазон лежит в правом поддереве. Это так, потому что <code>5 &gt; 2</code>,
            где <code>2</code> представляет букву <code>M</code> в нашем корневом узле. В
            этом случае мы выполним следующую строку:
          </p>
          <Code value={RANGE_IS_IN_THE_RIGHT_SUBTREE} />
          <figure className="bg-white">
            <img
              alt="Запрос диапазона из правого поддерева"
              className="mx-auto"
              height="1100"
              src={segmentTreeRangeIsInRightSubtree}
              width="1500"
            />
          </figure>
        </li>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Диапазон находится в левом поддереве</strong>
          </p>
          <p className="mb-2">
            Если нам задан диапазон <code>[1,1]</code>, весь наш диапазон лежит в левом
            поддереве, потому что <code>1 &lt;= 2</code> где <code>2</code> представляет{' '}
            <code>M</code> в нашем корневом узле.
          </p>
          <Code value={RANGE_IS_IN_THE_LEFT_SUBTREE} />
          <figure className="bg-white">
            <img
              alt="Запрос диапазона из левого поддерева"
              className="mx-auto"
              height="1700"
              src={segmentTreeRangeIsInLeftSubtree}
              width="1460"
            />
          </figure>
        </li>
        <li className="mb-2">
          <p className="mb-2">
            <strong>Диапазон находится в левом и правом поддеревьях</strong>
          </p>
          <p className="mb-2">
            Если нам дан диапазон, которого нет ни в одном узле наших <code>right</code>{' '}
            или <code>left</code> поддеревьев, должно быть так, что он лежит в обоих
            поддеревьях. Примером может служить <code>[2,4]</code>, если это допустимый
            диапазон.
          </p>
          <Code value={RANGE_OVERLAPS_WITH_RIGHT_AND_LEFT_SUBTREE} />
          <figure className="bg-white">
            <img
              alt="Запрос диапазона из левого и правого поддеревьев"
              className="mx-auto"
              height="1700"
              src={segmentTreeRangeOverlapsWIthRightAndLeftSubtree}
              width="1460"
            />
          </figure>
        </li>
      </ul>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">Сложность по времени трёх функций следующая:</p>
      <ul>
        <li>
          <strong>build()</strong> - <i>O</i>(<i>n</i>), где <i>n</i> — количество узлов,
          содержащихся в нашем дереве.
        </li>
        <li>
          <strong>update()</strong> - <i>O</i>(<i>log n</i>), поскольку мы спускаемся по
          высоте дерева, которое является сбалансированным деревом, где <i>h</i> — высота
          дерева, также известная как <i>log n</i>.
        </li>
        <li>
          <strong>rangeQuery()</strong> - <i>O</i>(<i>log n</i>), по причинам, аналогичным
          функции <code>update()</code>.
        </li>
      </ul>
    </>
  );
}

export default SegmentTree;
