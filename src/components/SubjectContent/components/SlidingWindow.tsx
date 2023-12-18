import slidingWindowFixed from 'assets/sliding-window-fixed.png?url';
import slidingWindowVariable1 from 'assets/sliding-window-variable-1.png?url';
import slidingWindowVariable2 from 'assets/sliding-window-variable-2.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const FIXED_BRUTE_FORCE = `function closeDuplicatesBruteForce(nums, k) {
  for (let l = 0; l < nums.length; l++) {
    for (let r = l + 1; r < Math.min(nums.length, l + k); r++) {
      if (nums[l] === nums[r]) {
        return true;
      }
    }
  }

  return false;
}`;

const FIXED_SLIDING_WINDOW = `function closeDuplicates(nums, k) {
  let window = new Set();
  let l = 0;
  
  for (let r = 0; r < nums.length; r++) {
    if (r - l + 1 > k) {
      window.delete(nums[l]);
      l++;
    }

    if (window.has(nums[r])) {
      return true;
    }

    window.add(nums[r]);
  }

  return false;
}`;

const VARIABLE_LONGEST_SUBARRAY = `function longestSubarray(nums) {
  let length = 0;
  let l = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[l] !== nums[r]) {
      l = r;
    }

    length = Math.max(length, r - l + 1);
  }

  return length;
}`;

const VARIABLE_SHORTEST_SUBARRAY = `function shortestSubarray(nums, target) {
  let total = 0;
  let l = 0;
  let length = Infinity;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];

    while (total >= target) {
      length = Math.min(r - l + 1, length);
      total -= nums[l];
      l++;
    }
  }

  if (length === Infinity) {
    return 0;
  }

  return length;
}`;

function SlidingWindow(): ReactElement {
  return (
    <>
      <h2 className="font-bold my-2">Скользящее окно фиксированного размера</h2>
      <p className="mb-2">
        Идея скользящего окна фиксированного размера состоит в том, чтобы{' '}
        <strong>поддерживать</strong> два указателя, которые находятся на расстоянии{' '}
        <code>k</code> друг от друга и соответствуют определённому ограничению.
      </p>
      <p>Посмотрим на задачу:</p>
      <p className="mb-2">
        <strong>
          Дан массив, верните <code>true</code>, если в окне размера <code>k</code> есть
          два элемента, которые равны.
        </strong>
      </p>
      <p className="mb-2">
        Решение этой проблемы методом грубой силы — запустить два цикла <code>for</code> и
        вернуть <code>true</code>, если в подмассиве размера <code>k</code> существуют
        равные элементы (дубликаты).
      </p>
      <p className="mb-2">
        Представим, что у нас есть массив <code>[1, 2, 3, 2, 3, 3]</code> и{' '}
        <code>k = 3</code>. Глядя на массив, мы замечаем, что есть два числа, которые
        дублируются. Используя метод грубой силы, внешний цикл сделает <i>n</i> итераций,
        внутренний цикл будет делать <i>k</i> итераций, где <code>k &lt;= n</code>, что
        означает, что в худшем случае мы получаем квадратичную сложность по времени{' '}
        <i>O</i>(<i>n</i>
        <sup>2</sup>).
      </p>
      <Code value={FIXED_BRUTE_FORCE} />
      <p className="mb-2">
        Можно добиться лучшего решения с использованием метода скользящего окна. В данном
        случае, мы должны поддерживать окно размера <code>k</code>, и внутри него должно
        быть два дубликата.
      </p>
      <p className="mb-2">
        <code>Set</code> позволяет хранить уникальные элементы и имеет сложность по
        времени <i>O</i>(1) для просмотра, удаления и вставки элементов. Мы можем
        использовать его для обозначения нашего окна и добавлять элементы, на которые
        указывает правый указатель. Когда размер нашего окна превышает <code>k</code>, мы
        можем удалять элементы, на которые указывает левый указатель, чтобы сохранять
        размер нашего окна. Если мы встретим уже добавленное число, мы можем вернуть{' '}
        <code>true</code>. Размер нашего множества никогда не превысит <code>k</code>.
      </p>
      <Code value={FIXED_SLIDING_WINDOW} />
      <img
        alt="Метод двух указателей (фиксированная длина)"
        height="960"
        src={slidingWindowFixed}
        width="1680"
      />
      <h2 className="font-bold my-2">
        Сложность по времени для скользящего окна фиксированного размера.
      </h2>
      <p className="mb-2">
        Мы снизили сложность по времени с <i>O</i>(<i>n</i>
        <sup>2</sup>) до <i>O</i>(<i>n</i>), посколько мы выполняем только один проход по
        массиву. В худшем случае мы совершим <i>n</i> итераций. Операции над нашим{' '}
        <code>Set</code> составляют <i>O</i>(1) по времени.
      </p>
      <p className="mb-2">
        При этом фиксированный размер — не едиственный способ реализовать метод
        скользящего окна. Существует также вариант скользящего окна, в котором мы
        продолжаем расширять наше окно до тех пор, пока не попадём в заданное ограничение.
      </p>
      <h2 className="font-bold my-2">Скользящее окно переменного размера</h2>
      <p className="mb-2">
        Рассмотрим относительно простой пример, затем перейдём к более сложному.
      </p>
      <p className="mb-2">
        <strong>
          Простой пример: найдите длину самого длинного подмассива, в каждой позиции
          которого одинаковые значения.
        </strong>
      </p>
      <p className="mb-2">
        Применим метод скользящего окна к массиву <code>[4, 2, 2, 3, 3, 3]</code>.
      </p>
      <p className="mb-2">
        Вновь будем использовать два указателя: <code>L</code> и <code>R</code>. Наше
        ограничение состоит в том, что в нашем окне не может быть разных значений. В то же
        время нам придётся отслеживать самое длинное окно, с которым мы столкнулись,
        которое соответствует нашему ограничению, т. е. имеет одинаковые значения в каждой
        позиции.
      </p>
      <p className="mb-2">
        Запустим цикл <code>for</code> по нашему массиву и будем расширять окно справа,
        пока не встретим значение, с которым раньше не сталкивались. Затем уменьшаем окно,
        совмещая указатель <code>L</code> с указателем <code>R</code>. Нам не нужно
        увеличивать <code>L</code>, поскольку если мы встретим новое значение, то все
        предыдущие значения были дубликатами. Затем мы повторно вычисляем длину{' '}
        <code>length</code> нашего окна, беря максимальную из текущей длины и предыдущей
        максимальной длины. Длина текущего окна вычисляется с помощью{' '}
        <code>R - L + 1</code>, что обеспечивает включение обоих индексов.
      </p>
      <Code value={VARIABLE_LONGEST_SUBARRAY} />
      <img
        alt="Метод двух указателей (переменная длина)"
        className="mb-2"
        height="560"
        src={slidingWindowVariable1}
        width="1700"
      />
      <p className="mb-2">
        Обратите внимание, у нас есть два указателя, мы расширяем наше окно справа и
        сдвигаем левый указатель, когда наше ограничение нарушается.
      </p>
      <p className="mb-2">
        <strong>
          Классический пример: найдите длину самого короткого подмассива, сумма которого
          больше или равна переданному значению <code>target</code>. Предполагается, что
          все значения в массиве положительные.
        </strong>
      </p>
      <p className="mb-2">
        Здесь необходимо найти минимальную длину. Будем расширять наше окно справа, и если
        наша сумма станет больше или равна <code>target</code>, мы начнём отнимать слева,
        пока окно не перестанет нарушать это ограничение.
      </p>
      <Code value={VARIABLE_SHORTEST_SUBARRAY} />
      <img
        alt="Метод двух указателей (переменная длина)"
        height="840"
        src={slidingWindowVariable2}
        width="1720"
      />
      <h2 className="font-bold my-2">
        Сложность по времени для скользящего окна переменного размера.
      </h2>
      <p className="mb-2">
        Прелесть этого метода в том, что он снижает сложность по времени до <i>O</i>(
        <i>n</i>). Возникает вопрос: как можно иметь цикл <code>while</code> внутри цикла{' '}
        <code>for</code> и иметь сложность по времени <i>O</i>(<i>n</i>)? Цикл{' '}
        <code>while</code> не выполняет <i>n</i> итераций на каждой итерации цикла{' '}
        <code>for</code>, он выполнит <i>n</i> итераций всего. Фактически, в некоторых
        итерациях цикла <code>for</code> он даже не запускается. Например, когда{' '}
        <code>total &lt; target</code>, цикл <code>while</code> никогда не выполняется.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Метод скользящего окна очень абстрактный и может применяться ко многим проблемам,
        некоторые из которых могут включать в себя другие концепции. Ключевая вещь,
        которая говорит о том, что проблему можно решить с использованием метода
        скользящего окна фиксированного размера — если проблема указывает на подмассив с
        длиной <code>k</code>.
      </p>
    </>
  );
}

export default SlidingWindow;
