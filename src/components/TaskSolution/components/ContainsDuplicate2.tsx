import type { ReactElement } from 'react';

function ContainsDuplicate2(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи отлично подходит <code>Set</code>. Будем хранить в нём
        элементы, которые расположены между двумя указателями <code>l</code> и{' '}
        <code>r</code> включительно.
      </p>
      <p className="mb-2">
        Пройдём циклом по массиву. На каждой итерации проверяем, больше ли разница между{' '}
        <code>l</code> и <code>r</code>, чем <code>k</code>. Если так, то будем удалять из{' '}
        <code>Set</code> число, на которое указывает левый указатель, и передвигать его.
        Затем проверяем, есть ли в <code>Set</code> текущее число. Если есть, то мы нашли
        нужный дубликат, возвращаем <code>true</code>. Иначе добавляем в <code>Set</code>{' '}
        текущее число.
      </p>
      <p className="mb-2">
        Если цикл прошёл по всему массиву, то дубликатов нет, возвращаем{' '}
        <code>false</code>.
      </p>
    </>
  );
}

export default ContainsDuplicate2;
