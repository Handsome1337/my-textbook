import type { ReactElement } from 'react';

function LongestRepeatingCharacterReplacement(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим объект <code>count</code>, в котором ключами будут символы, а значением -
        их количество в текущем окне. Также создадим переменные <code>result</code>,{' '}
        <code>maxFrequency</code>, которая будет хранить максимальную частоту встречания
        символа в окне, и указатель <code>left</code>, указывающий на первый символ.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> по строке, в котором указатель <code>right</code>{' '}
        будет указывать на последний символ в нашем окне. На каждой итерации цикла
        увеличим значение текущего символа в <code>count</code> и обновим{' '}
        <code>maxFrequency</code>, если <code>count[s[right]] &gt; maxFrequency</code>.
      </p>
      <p className="mb-2">
        Затем, если разность длины нашего окна и <code>maxFrequency</code> больше{' '}
        <code>k</code>, нам необходимо сдвинуть наш указатель <code>left</code> вправо, не
        забыв уменьшить количество символов в <code>count</code>. В конце каждой итерации
        обновляем <code>result</code>.
      </p>
      <p className="mb-2">
        После прохождения по строке вернём <code>result</code> из функции.
      </p>
    </>
  );
}

export default LongestRepeatingCharacterReplacement;
