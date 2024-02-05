import type { ReactElement } from 'react';

function FindMinimumInRotatedSortedArray(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим два указателя <code>left</code> и <code>right</code>, которые будут
        указывать на первое и последнее число в массиве. Пройдём бинарным поиском по
        массиву.
      </p>
      <p className="mb-2">
        На каждой итерации проверяем, больше ли <code>nums[middle]</code> чем{' '}
        <code>nums[right]</code>. Если больше, это означает, что правая часть массива не
        отсортирована, значит, минимальное значение находится там, перемещаем указатель{' '}
        <code>left</code>. Если <code>nums[middle]</code> не больше, чем{' '}
        <code>nums[right]</code>, то это означает, что правая часть массива отсортирована,
        перемещаем указатель <code>right</code>.
      </p>
      <p className="mb-2">
        После того, как указатели пересекутся, на минимальное число будет указывать
        указатель <code>left</code>. Вернём <code>nums[left]</code> из функции.
      </p>
    </>
  );
}

export default FindMinimumInRotatedSortedArray;
