import type { ReactElement } from 'react';

function ContainsDuplicate(): ReactElement {
  return (
    <p>
      Для решения этой задачи отлично подходит <code>Set</code>. Пробежим циклом по
      массиву, на каждой итерации будем проверять, есть ли в нашем «множестве» текущий
      элемент. Если есть — возвращаем <code>true</code>, иначе добавляем текущий элемент в
      «множество». Если цикл дошёл до конца, возвращаем <code>false</code>.
    </p>
  );
}

export default ContainsDuplicate;
