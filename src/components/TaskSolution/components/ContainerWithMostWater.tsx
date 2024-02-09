import type { ReactElement } from 'react';

function ContainerWithMostWater(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>result</code> и указатели <code>left</code> и{' '}
        <code>right</code>, которые будут указывать на первый и последний элемент массива{' '}
        <code>height</code> соответственно.
      </p>
      <p className="mb-2">
        Пройдём циклом по массиву пока наши указатели не пересекутся. На каждой итерации
        рассчитаем площадь прямоугольника между текущими вертикальными линиями и обновим{' '}
        <code>result</code>, если получившаяся площадь больше, чем <code>result</code>.
        После чего передвинем указатель линии, который указывает на наименьшую из них
        (потому что для этой линии уже не существует большей площади).
      </p>
      <p className="mb-2">
        Когда указатели пересекутся, вернём <code>result</code>.
      </p>
    </>
  );
}

export default ContainerWithMostWater;
