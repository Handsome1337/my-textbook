import type { ReactElement } from 'react';

function PartitionLabels(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим объект <code>CharToLastIndex</code>, в котором ключами будут буквы, а
        значениями — последний индекс, по которому эта буква встречается. Заполним этот
        объект. Создадим также массив <code>result</code>, который будем возвращать из
        функции, размер текущей части <code>size</code> и указатель <code>end</code>,
        который будет указывать на конец текущей части.
      </p>
      <p className="mb-2">
        Пройдём циклом по строке. На каждой итерации будем увеличивать <code>size</code> и
        передвигать <code>end</code>, если последний индекс текущей буквы дальше, чем{' '}
        <code>end</code>. Если <code>i === end</code>, то это означает, что мы дошли до
        конца текущей части, добавим <code>size</code> в <code>result</code>, после чего
        сбросим <code>size</code>.
      </p>
      <p className="mb-2">
        Когда цикл закончит работу, вернём <code>result</code> из функции.
      </p>
    </>
  );
}

export default PartitionLabels;
