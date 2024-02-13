import type { ReactElement } from 'react';

function PalindromePartitioning(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Напишем вспомогательную функцию <code>isPalindrome</code>, которая проверяет,
        является ли подстрока от <code>left</code> до <code>right</code> строки{' '}
        <code>str</code> палиндромом.
      </p>
      <p className="mb-2">
        В функции <code>partition</code> создадим переменную <code>result</code>, которую
        будем возвращать из функции, и переменную <code>part</code>, которая будет
        содержать в себе текущую часть.
      </p>
      <p className="mb-2">
        Напишем вспомогательную рекурсивную функцию <code>backtrack</code>, которая будет
        принимать в себя индекс <code>i</code>, который будет указывать на то, с какой
        буквы в <code>s</code> мы сейчас ищем палиндромы.
      </p>
      <p className="mb-2">
        Базовым случаем будет, если <code>i</code> больше либо равно длине <code>s</code>.
        Это означает, что мы прошли по всем индексам в <code>s</code>, добавим нашу
        текущую часть в <code>result</code>.
      </p>
      <p className="mb-2">
        Пройдём циклом <code>for</code> от <code>i</code> до конца строки. Если подстрока
        от <code>i</code> до <code>j</code> является палиндромом, то добавим её в{' '}
        <code>part</code> и вызовем <code>backtrack</code> для следующего индекса, после
        чего удалим эту подстроку из <code>part</code>.
      </p>
      <p className="mb-2">
        Вызовем <code>backtrack</code> с нулевым индексом, после чего вернём из функции{' '}
        <code>result</code>.
      </p>
    </>
  );
}

export default PalindromePartitioning;
