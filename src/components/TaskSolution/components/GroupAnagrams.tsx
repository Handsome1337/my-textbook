import type { ReactElement } from 'react';

function GroupAnagrams(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>result</code>, равную пустому объекту, и пройдём циклом
        по строкам <code>strs</code>.
      </p>
      <p className="mb-2">
        В каждой строке у нас могут быть только символы английского алфавита в нижнем
        регистре. Таким образом, всего имеется 26 вариантов символов. Создадим массив{' '}
        <code>count</code> из 26 элементов, заполненный нулями, в котором будем отмечать,
        сколько раз каждый возможный символ встречается в строке.
      </p>
      <p className="mb-2">
        Пройдём циклом по строке <code>str</code>. На каждой итерации добавляем в{' '}
        <code>count</code> встретившийся символ. Чтобы найти нужный индекс в{' '}
        <code>count</code>, мы выполняем{' '}
        <code>char.charCodeAt() - &apos;a&apos;.charCodeAt()</code>, что означает, что мы
        из кода текущей буквы вычитаем код буквы <code>&apos;a&apos;</code>. Например,{' '}
        <code>&apos;a&apos;.charCodeAt() - &apos;a&apos;.charCodeAt()</code> будет равно
        нулю, а <code>&apos;z&apos;.charCodeAt() - &apos;a&apos;.charCodeAt()</code> будет
        равно 25.
      </p>
      <p className="mb-2">
        Сформируем ключ для объекта <code>result</code>, переведя <code>count</code> в
        строку. Затем добавляем в результат текущую строку. После завершения цикла по
        строкам нам осталось вернуть из функции значения <code>result</code>.
      </p>
    </>
  );
}

export default GroupAnagrams;
