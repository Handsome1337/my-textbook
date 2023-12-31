import prefixSum from 'assets/prefix-sum.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const PREFIX_SUM_CONSTRUCTOR = `class PrefixSum {
  constructor(nums) {
    this.prefix = [];

    let total = 0;

    for (const num of nums) {
      total += num;
      this.prefix.push(total);
    }
  }
}`;

const RANGE_SUM = `rangeSum(left, right) {
  const leftPrefix = left > 0 ? this.prefix[left - 1] : 0;
  const rightPrefix = this.prefix[right];
  
  return rightPrefix - leftPrefix;
}`;

function PrefixSums(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Префиксная сумма — это очень полезная техника, которую можно использовать с
        массивами. Представим, что у нас есть массив <code>nums = [2, -1, 3, -3, 4]</code>
        . Основная идея состоит в том, что мы создаём массив, скажем, <code>prefix</code>,
        и заполняем его так, чтобы значение его индекса <code>i</code> обозначало текущую
        сумму подмассива <code>nums</code>, который начинается с <code>0</code> и доходит
        до индекса <code>i</code> включительно. Это чрезвычайно полезно, когда мы хотим
        получить сумму подмассива, заканчивающегося произвольным индексом <code>i</code>.
      </p>
      <p className="mb-2">
        Таким образом, для массива <code>[2, -1, 3, -3, 4]</code> префикс будет{' '}
        <code>[2, 1, 4, 1, 5]</code>.
      </p>
      <p className="mb-2">Посмотрим на задачу, демонстрирующую эту концепцию.</p>
      <p className="mb-2">
        Дан массив значений, необходимо разработать структуру данных, которая может
        возвращать сумму подмассива значений.
      </p>
      <p className="mb-2">
        Создадим класс <code>PrefixSum</code>, который принимает массив <code>nums</code>,
        для которого мы хотим рассчитывать сумму подмассива значений. Мы можем пройти
        циклом по <code>nums</code> и добавить каждое число в переменную{' '}
        <code>total</code>. Будем добавлять <code>total</code> в массив{' '}
        <code>prefix</code> на каждой итерации.
      </p>
      <Code value={PREFIX_SUM_CONSTRUCTOR} />
      <p className="mb-2">
        После вычисления суммы, мы можем вычислить сумму любого подмассива, начинающегося
        с индекса <code>left</code> и заканчивающегося индексом <code>right</code> за{' '}
        <i>O</i>(1) по времени, потому что нам не нужно её пересчитывать. Мы можем сделать
        это так: <code>prefix[right] - prefix[left - 1]</code>. <code>-1</code>{' '}
        гарантирует, что мы исключим сумму всех чисел до <code>left</code>. Однако, если{' '}
        <code>left === 0</code>, будем отнимать 0, так как нам не нужно ничего вычитать.
      </p>
      <Code value={RANGE_SUM} />
      <p className="mb-2">
        Визуализируем, как благодаря префиксной сумме сумма подмассива вычисляется за{' '}
        <i>O</i>(1) по времени. Возьмём два случая: <code>L = 2</code>, <code>R = 3</code>{' '}
        и <code>L = 0</code>, <code>R = 3</code> (когда префикс для первого элемента не
        существует).
      </p>
      <img alt="Расчёт префиксной суммы" height="400" src={prefixSum} width="1600" />
      <h2 className="font-bold my-2">Сложность по времени</h2>
      <p className="mb-2">
        Сложность по времени изначального расчёта префиксной суммы — <i>O</i>(<i>n</i>
        ). Однако расчёт суммы подмассива значений будет выполняться за <i>O</i>(1)
        операций независимо от того, насколько массив большой.
      </p>
      <h2 className="font-bold my-2">Итоги</h2>
      <p className="mb-2">
        Префиксные суммы распространены повсеместно и могут быть чрезвычайно полезны для
        массивов чисел всякий раз, когда необходимо сохранять текущую сумму. Суммирование
        — не единственная операция, которую мы можем выполнить с помощью этой техники.
        Например, мы можем рассчитать префиксное произведение. Также мы можем сделать
        обратное и получить постфиксную сумму, что потребует ту же самую операцию, только
        в обратном порядке.
      </p>
    </>
  );
}

export default PrefixSums;
