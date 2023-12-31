import type { ReactElement } from 'react';

function ValidParentheses(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать стек, так как каждую закрывающую скобку
        необходимо сравнивать с последней открывающей скобкой. Поэтому будем хранить в
        стеке открывающие скобки.
      </p>
      <p className="mb-2">
        Создадим объект <code>CloseToOpenBracket</code>, в котором ключами будут
        закрывающие скобки, значениями — открывающие. Затем, в функции{' '}
        <code>isValid</code> проверим длину переданной строки. Если в строке нечётное
        количество символов, то такая строка точно невалидна, вернём <code>false</code>.
        Создадим стек, в котором будем хранить открывающие скобки.
      </p>
      <p className="mb-2">
        Пройдём циклом по переданной строке. На каждой итерации проверяем, является ли
        скобка закрывающей. Если является, то смотрим на размер стека и последнюю
        открывающую скобку в нём. Если стек не пустой и последняя открывающая скобка в нём
        подходит для текущей закрывающей скобки, удаляем открывающую скобку из стека,
        иначе возвращаем <code>false</code>, так как если стек пустой или скобки не
        подходят, то такая строка не является валидной. Если текущая скобка является
        открывающей, добавляем её в стек.
      </p>
      <p className="mb-2">
        Строка является валидной, если после прохождения цикла стек пустой. Возвращем{' '}
        <code>!stack.length</code>.
      </p>
    </>
  );
}

export default ValidParentheses;
