import type { ReactElement } from 'react';

function JumpGame2(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим переменную <code>result</code>, которую будем возвращать из функции, и
        два указателя <code>left</code> и <code>right</code>, которые будут указывать на
        края окна, которое мы можем достичь после всех вариантов шагов из предыдущего
        окна. Изначально окно состоит из одного индекса <code>0</code>.
      </p>
      <p className="mb-2">
        Запустим цикл <code>while</code>, который будет исполняться, пока указатель{' '}
        <code>right</code> не достигнет конца <code>nums</code>. На каждой итерации будем
        создавать переменную <code>farthest</code>, которая будет хранить самый длинный
        возможный шаг из текущего окна. Пройдём вложенным циклом <code>for</code> от{' '}
        <code>left</code> до <code>right</code> включительно, и рассчитаем{' '}
        <code>farthest</code>. После этого передвинем указатели <code>left</code> и{' '}
        <code>right</code> на <code>right + 1</code> и <code>farthest</code>{' '}
        соответственно и увеличим <code>result</code> на единицу.
      </p>
      <p className="mb-2">
        Когда цикл <code>while</code> закончит работу, вернём <code>result</code> из
        функции.
      </p>
    </>
  );
}

export default JumpGame2;
