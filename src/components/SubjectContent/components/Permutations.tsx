import permutations from 'assets/permutations.png?url';
import permutationsRecursive from 'assets/permutations-resursive.png?url';
import permutationsIterative from 'assets/permutations-iterative.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const PERMUTATIONS_RECURSIVE = `function permutationsRecursive(nums) {
  return helper(0, nums);
}

function helper(i, nums) {
  if (i === nums.length) {
    return [[]];
  }

  const resultPermutations = [];
  const permutations = helper(i + 1, nums);

  for (let permutation of permutations) {
    for (let j = 0; j < permutation.length + 1; j++) {
      const permutationCopy = [...permutation];
      permutationCopy.splice(j, 0, nums[i]);
      resultPermutations.push(permutationCopy);
    }
  }

  return resultPermutations; 
}`;

const PERMUTATIONS_ITERATIVE = `function permutationsIterative(nums) {
    let permutations = [[]];

    for (let n of nums) {
        const nextPermutations = new Array();
        for (let permutation of permutations) {
            for (let i = 0; i < permutation.length + 1; i++) {
                const permutationCopy = [...permutation];
                permutationCopy.concat(permutation);
                permutationCopy.splice(i, 0, n);
                nextPermutations.push(permutationCopy);
            }  
        }

        permutations = nextPermutations;
    }

    return permutations;
}`;

function Permutations(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Говоря математическим языком, перестановка множества различных объектов — это
        упорядоченное расположение этих объектов. В отличие от сочетаний, мы хотим
        использовать все данные нам элементы, то есть не пропускать элементы. Если у нас
        есть 4 элемента, мы можем создавать перестановки, переставляя элементы. Пока
        порядок расположения элементов различен, мы будем считать его допустимой
        перестановкой.
      </p>
      <h2 className="font-bold my-2">Пример использования перестановок</h2>
      <p className="mb-2">
        <strong>
          Дан список чисел, верните все возможные различные перестановки чисел.
        </strong>
      </p>
      <p className="mb-2">
        Предположим, что <code>nums = [1, 2, 3, 4]</code>. При каждой перестановке мы
        можем выбрать три других числа, исключая само число. Итак, для <code>1</code> мы
        можем выбрать <code>[2, 3, 4]</code>, и для <code>2</code> мы можем выбрать{' '}
        <code>[1, 3, 4]</code>. Обратите внимание, что элементы различны, но в то же
        время, если мы изменим порядок, у нас будет новая, допустимая перестановка. Вот
        как будут выглядеть визуализированные перестановки.
      </p>
      <p className="mb-2">
        <strong>
          Изображение ниже демонстрирует, как мы можем генерировать перестановки для всех
          чисел, если дан список <code>[1, 2, 3, 4]</code>. Число перестановок здесь равно{' '}
          <code>
            <i>n</i>!
          </code>
          , где <i>n</i> — количество элементов в списке. <code>4! = 24</code>,
          следовательно, получаем <code>24</code> перестановки.
        </strong>
      </p>
      <img
        alt="Все возможные перестановки"
        className="mb-2"
        height="701"
        src={permutations}
        width="1601"
      />
      <p className="mb-2">
        Каждая перестановка будет иметь размер <i>n</i>, а количество перестановок,
        которые мы можем создать, равно{' '}
        <code>
          <i>n</i>!
        </code>
        . Чтобы упростить реализацию, для каждого <i>n</i> мы создадим копию наших текущих
        перестановок и для каждой из этих перестановок вставим <i>n</i> в разные позиции,
        что даст нам новые перестановки. Например, если у нас есть <code>[1, 2]</code> и{' '}
        <code>n = 3</code>, мы сначала создадим копию <code>[1, 2]</code> и будем
        выполнять цикл до <code>[1, 2].length + 1</code>, и вставим <code>3</code> в
        каждую позицию от <code>0</code> до <code>[1, 2].length + 1</code>, что даст{' '}
        <code>[3, 1, 2]</code>, <code>[1, 3, 2]</code>, <code>[1, 2, 3]</code>. Затем мы
        сделаем то же самое для <code>n = 4</code>.
      </p>
      <p className="mb-2">
        Для вставки в начало массива сложность по времени равна <i>O</i>(<i>n</i>). Это в
        сочетании с <i>n</i>! означает, что наша сложность по времени равна <i>O</i>(
        <i>n</i> ⋅ <i>n</i>!), что технически не является стопроцентной точностью, о чем
        мы поговорим чуть позже.
      </p>
      <p className="mb-2">
        Мы собираемся реализовать два решения: рекурсивное и итеративное.
      </p>
      <ul>
        <li className="mb-2">
          <strong>Рекурсивное решение</strong>
          <p className="mb-2">
            Для рекурсивного решения мы можем использовать подход, описанный ранее.
            Большая часть работы выполняется с использованием функции <code>helper</code>,
            которая принимает <code>i</code> и <code>nums</code>. <code>i</code> — наш
            указатель, по которому мы проходим, а <code>nums</code> — наш заданный список,
            который в данном случае равен <code>[1, 2, 3, 4]</code>. Самая сложная часть
            этого решения — это, пожалуй, вложенный цикл <code>for</code>.
          </p>
          <Code value={PERMUTATIONS_RECURSIVE} />
          <img
            alt="Рекурсивный поиск перестановок"
            className="mb-2"
            height="300"
            src={permutationsRecursive}
            width="280"
          />
        </li>
        <li className="mb-2">
          <strong>Итеративное решение</strong>
          <p className="mb-2">
            В итеративном решении вместо выполнения рекурсивного вызова мы просто будем
            перебирать числа, <code>for (const n of nums)</code>. В конце каждой итерации
            мы можем обновить наши <code>permutations</code> до значений{' '}
            <code>nextPermutations</code>, чтобы не создавать одну и ту же копию на каждой
            итерации.
          </p>
          <Code value={PERMUTATIONS_ITERATIVE} />
          <p className="mb-2">
            <strong>
              Визуализация того, как мы создаём итеративное решение. Различные цвета
              используются для обозначения того, что на каждой итерации у нас есть новая
              копия <code>permutation</code> и что мы не используем одну и ту же копию
              повсюду.
            </strong>
          </p>
          <figure className="bg-white mb-2">
            <img
              alt="Итеративный поиск перестановок"
              className="mx-auto"
              height="380"
              src={permutationsIterative}
              width="700"
            />
          </figure>
        </li>
      </ul>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Если количество предоставленных нам элементов равно <i>n</i>, то для каждого
        элемента может быть <i>n</i>! перестановок. Однако внутри каждого цикла{' '}
        <code>for</code> в обоих решениях есть еще один цикл <code>for</code>, который
        работает от <code>0</code> до длины каждой перестановки, которая равна <i>n</i>,
        поскольку мы используем все элементы. <i>n</i> ⋅ <i>n</i> = <i>n</i>
        <sup>2</sup>. В результате мы получаем <i>n</i>
        <sup>2</sup> ⋅ <i>n</i>!, что даёт <i>O</i>(<i>n</i>
        <sup>2</sup> ⋅ <i>n</i>!).
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Это всё, что мы рассмотрим на тему бэктрекинга в этом справочнике. Это решение для
        перестановок могло показаться ошеломляющим, но это лишь один из способов, которым
        это можно сделать.
      </p>
    </>
  );
}

export default Permutations;
