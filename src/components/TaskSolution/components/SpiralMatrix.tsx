import type { ReactElement } from 'react';

function SpiralMatrix(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим массив <code>result</code>, который мы будем возвращать из функции, и
        четыре указателя <code>left</code>, <code>top</code>, <code>right</code> и{' '}
        <code>bottom</code>, которые будут указывать на углы матрицы. Запустим цикл{' '}
        <code>while</code>, который будет исполняться, пока указатели <code>left</code> и{' '}
        <code>right</code> или <code>top</code> и <code>bottom</code> не пересекутся. На
        каждой итерации будем запускать четыре вложенных цикла <code>for</code>.
      </p>
      <p className="mb-2">
        В первом цикле <code>for</code> мы будем проходить по верхней строке и добавлять
        все значения в <code>result</code>, после чего передвинем указатель{' '}
        <code>top</code>. Затем мы повторим то же самое с правой колонкой во втором цикле{' '}
        <code>for</code> и перенесём указатель <code>right</code>. Теперь надо проверить,
        пересекаются ли наши указатели, и если пересекаются, то из цикла{' '}
        <code>while</code> необходимо выйти. Это возможно в том случае, если, например,
        наша матрица состоит из одной строки. Если указатели не пересекаются, запустим ещё
        два вложенных цикла <code>for</code> для нижней строки и левой колонки. В этих
        циклах мы будем идти от конца к началу.
      </p>
      <p>
        Когда указатели пересекутся, вернём <code>result</code> из функции.
      </p>
    </>
  );
}

export default SpiralMatrix;
