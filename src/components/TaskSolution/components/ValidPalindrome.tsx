import type { ReactElement } from 'react';

function ValidPalindrome(): ReactElement {
  return (
    <>
      <p className="mb-2">
        По условиям задачи мы должны учитывать только символы чисел и латинских букв. Мы
        могли бы с помощью регулярного выражения удалить все остальные символы из строки и
        сохранить получившуюся строку, используя её для проверки, но в данном решении
        будет описан способ без использования дополнительной памяти.
      </p>
      <p className="mb-2">
        Создадим вспомогательную функцию <code>isAlphaNum</code>, которая будет проверять,
        является ли символ числом или латинской буквой. Также создадим два указателя,
        которые будут указывать на начало и конец строки.
      </p>
      <p className="mb-2">
        Используя цикл <code>while</code>, будем перемещать указатели, пока они не
        пересекутся. На каждой итерации с помощью вложенного <code>while</code> и функции{' '}
        <code>isAlphaNum</code> будем проверять, указывает ли указатель на нужный нам
        символ. Если нет, то перемещаем его.{' '}
        <i>
          Вложенные циклы можно заменить на <code>if</code> в связке с директивой{' '}
          <code>continue</code> для упрощения кода
        </i>
        . Если оба указателя указывают на нужные символы (вложенные циклы закончили
        работу), проверяем, являются ли эти символы, приведённые к нижнему регистру,
        одинаковыми. Если нет, то возвращаем <code>false</code> — строка не является
        палиндромом. Иначе перемещаем оба указателя.
      </p>
      <p className="mb-2">
        Когда указатели пересекутся, это будет означать, что строка является палиндромом,
        возвращаем <code>true</code>.
      </p>
    </>
  );
}

export default ValidPalindrome;
