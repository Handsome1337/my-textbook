import type { ReactElement } from 'react';

function Permutations(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим массив <code>result</code>, который будем возвращать из функции, и
        вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя индекс <code>i</code>. Базовым случаем будет, когда индекс вышел
        за пределы массива <code>nums</code>, в таком случае добавляем копию{' '}
        <code>nums</code> в <code>result</code>.
      </p>
      <p className="mb-2">
        Пройдём цилом <code>for</code> от <code>i</code> до <code>nums.length</code>. На
        каждой итерации будем переставлять элементы <code>nums[i]</code> и{' '}
        <code>nums[j]</code> местами, после чего будем вызывать <code>backtrack</code> для
        следующего индекса и возвращать элементы назад на свои места.
      </p>
      <p className="mb-2">
        Вызовем <code>backtrack</code> для нулевого индекса, после чего вернём{' '}
        <code>result</code>.
      </p>
    </>
  );
}

export default Permutations;
