import type { ReactElement } from 'react';

function Permutations2(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим массив <code>result</code>, который будем возвращать из функции, массив
        текущей перестановки <code>permutation</code> и объект <code>count</code>, в
        котором ключами будут числа, встречающиеся в <code>nums</code>, а значениями — то,
        сколько раз встречается это число. Заполним <code>count</code>.
      </p>
      <p className="mb-2">
        Создадим вспомогательную рекурсивную функцию <code>backtrack</code>. Базовым
        случаем будет, когда длина текущей перестановки <code>permutation</code> стала
        равна длине <code>nums</code>, в таком случае добавляем её копию в{' '}
        <code>result</code> и прекращаем работу функции.
      </p>
      <p className="mb-2">
        Пройдём циклом по каждому числу в <code>count</code>. Если число ещё не было
        использовано в перестановке столько раз, сколько оно встречается в{' '}
        <code>nums</code>, то <code>count[num]</code> будет больше <code>0</code>. Если
        так, то добавим число в перестановку, уменьшим его значение в <code>count</code> и
        рекурсивно вызовем <code>backtrack</code>. После чего удалим это число из
        перестановки и вернём значение в <code>count</code>.
      </p>
      <p className="mb-2">
        Вызовем <code>backtrack</code> для нулевого индекса, после чего вернём{' '}
        <code>result</code>.
      </p>
    </>
  );
}

export default Permutations2;
