import kadanesAlgorithm from 'assets/kadanes-algorithm.png?url';
import slidingWindow from 'assets/sliding-window.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BRUTE_FORCE = `function bruteForce(nums) {
  let maxSum = nums[0];

  for (let l = 0; l < nums.length; l++) { 
    let curSum = 0;

    for (let r = l; r < nums.length; r++) {
      curSum += nums[r];
      maxSum = Math.max(maxSum, curSum);
    }
  }

  return maxSum;
}`;

const KADANES = `function kadanes(nums) {
  let maxSum = nums[0];
  let curSum = 0;

  for (const n of nums) {
    curSum = Math.max(curSum, 0);
    curSum += n;
    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
}`;

const SLIDING_WINDOW = `function slidingWindow(nums) {
  let maxSum = nums[0];
  let curSum = 0;
  let maxL = 0;
  let maxR = 0;
  let L = 0;

  for (let R = 0; R < nums.length; R++) {
    if (curSum < 0) {
      curSum = 0;
      L = R;
    }

    curSum += nums[R];

    if (curSum > maxSum) {
      maxSum = curSum;
      maxL = L; 
      maxR = R;     
    }    
  }

  return [maxL, maxR];
}`;

function KadanesAlgorithm(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Алгоритм Кэдейна — это жадный алгоритм/алгоритм динамического программирования,
        который можно использовать для решения задач с массивами, чтобы снизить сложность
        по времени до <i>O</i>(<i>n</i>). Он используется для вычисления подмассива
        максимальной суммы, заканчивающегося в определённой позиции.
      </p>
      <h2 className="font-bold my-2">Мотивация</h2>
      <p className="mb-2">Предположим, нам задан следующий вопрос:</p>
      <p className="mb-2">
        <strong>Найдите непустой подмассив с наибольшей суммой.</strong>
      </p>
      <p className="mb-2">
        Этот вопрос просит нас найти группу смежных значений в массиве, которые дают
        наибольшую сумму. Затем нас просят вернуть эту сумму.
      </p>
      <p className="mb-2">
        Если мы на секунду забудем об алгоритме Кэдейна, то решением методом грубой силы
        будет пройти через каждый подмассив и вычислить сумму, отслеживая при этом
        максимальную сумму. Это сработает, но предстоит много повторяющейся работы. На
        каждой итерации нашего внешнего цикла <code>for</code> наш внутренний цикл
        выполняет линейную работу. Это приводит к сложности <i>O</i>(<i>n</i>
        <sup>2</sup>).
      </p>
      <Code value={BRUTE_FORCE} />
      <p className="mb-2">Мы можем сделать лучше.</p>
      <p className="mb-2">
        Алгоритм Кэдейна сообщает нам, что существует способ вычислить наибольшую сумму,
        совершив всего один проход по массиву, сводя сложность к линейному времени.
        Давайте посмотрим, как это можно сделать.
      </p>
      <p className="mb-2">
        Поскольку мы ищем наибольшую сумму, рекомендуется избегать отрицательных чисел,
        поскольку мы знаем, что это противоречит тому, о чём спрашивает вопрос.
        Отрицательные числа только уменьшат нашу сумму. Алгоритм Кэдейна выполняет один
        цикл <code>for</code> по массиву и в начале каждой итерации, если текущая сумма
        отрицательна, он сбрасывает текущую сумму до нуля. Таким образом, мы обеспечиваем
        один проход и решаем задачу за линейное время. Вот как это будет выглядеть в коде
        и визуализировано. Помните, что ключевым моментом здесь является то, что если мы
        встречаем подмассив с отрицательной суммой, мы отбрасываем его, и продолжаем
        рассматривать подмассив до тех пор, пока он имеет положительную сумму.
      </p>
      <img
        alt="Алгоритм Кэдейна"
        className="mb-2"
        height="440"
        src={kadanesAlgorithm}
        width="1720"
      />
      <Code value={KADANES} />
      <h2 className="font-bold my-2">Скользящее окно</h2>
      <p className="mb-2">
        Иногда проблема может потребовать вернуть фактический подмассив, содержащий
        наибольшую сумму, а не только саму сумму. В предыдущей реализации у нас не
        обязательно было два явных указателя, которые отслеживали бы подмассив, но мы
        действительно можем сделать это, отслеживая «окно». Окно в этом случае обозначает
        непрерывный подмассив, который не нарушает наше ограничение на то, чтобы сумма
        оставалась положительной.
      </p>
      <p className="mb-2">
        Для этого у нас может быть левый указатель <code>L = 0</code> и правый указатель{' '}
        <code>R</code>. Мы будем добавлять элементы справа и удалять слева. Поскольку нам
        нужен подмассив с максимальной суммой, мы также можем иметь два других указателя,{' '}
        <code>maxL</code> и <code>maxR</code>, которые отслеживают подмассив, содержащий
        максимальную сумму на данный момент. Таким образом, мы не теряем их при
        перемещении <code>L</code> и <code>R</code>. Как и раньше, если наша текущая сумма
        становится отрицательной, мы можем переместить левый указатель до правого
        указателя. Это означает, что наше ограничение нарушено, и мы удаляем все элементы
        слева и запускаем новое окно.
      </p>
      <Code value={SLIDING_WINDOW} />
      <img
        alt="Скользящее окно"
        className="mb-2"
        height="680"
        src={slidingWindow}
        width="1720"
      />
      <p className="mb-2">
        <strong>Подмассивом является часть массива, которая является смежной.</strong>
      </p>
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Поскольку мы делаем только один проход, наша сложность по времени сводится к{' '}
        <i>O</i>(<i>n</i>).
      </p>
    </>
  );
}

export default KadanesAlgorithm;
