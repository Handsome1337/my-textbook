import type { ReactElement } from 'react';

function JumpGame(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>goal</code>, которая будет указывать на нашу цель —
        последний индекс <code>nums</code>. Пройдём циклом по массиву чисел от
        предпоследнего к первому. На каждой итерации будем проверять, можем ли мы достичь
        цели. Если можем, то передвинем <code>goal</code> на текущий индекс.
      </p>
      <p className="mb-2">
        После прохождения цикла, если цель находится в первом индексе, вернём{' '}
        <code>true</code>, иначе <code>false</code>.
      </p>
    </>
  );
}

export default JumpGame;
