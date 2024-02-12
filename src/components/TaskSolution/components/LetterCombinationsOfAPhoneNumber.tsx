import type { ReactElement } from 'react';

function LetterCombinationsOfAPhoneNumber(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим объект <code>DigitToChar</code>, в котором ключами будут цифры на
        клавиатуре, а значениями — строки из доступных для этой цифры букв.
      </p>
      <p className="mb-2">
        Создадим переменную <code>result</code>, которую будем возвращать из функции, и
        вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя текущий индекс <code>i</code> и текущую строку{' '}
        <code>curStr</code>. Если в строке есть цифры, вызовем её с нулевым индексом и
        пустой строкой, после чего вернём из функции <code>result</code>.
      </p>
      <p className="mb-2">
        Базовый случай в <code>backtrack</code> случается тогда, когда наша текущая строка
        достигла размера сроки <code>digits</code>. В таком случае мы добавляем строку в{' '}
        <code>result</code>.
      </p>
      <p className="mb-2">
        Пройдём циклом по всем возможным буквам для текущей строки. На каждой итерации мы
        сдвигаем индекс <code>i</code> на <code>1</code> и добавляем букву в строку, после
        чего рекурсивно вызываем <code>backtrack</code> для новой строки.
      </p>
    </>
  );
}

export default LetterCombinationsOfAPhoneNumber;
