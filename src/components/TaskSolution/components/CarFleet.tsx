import type { ReactElement } from 'react';

function CarFleet(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Для решения этой задачи будем использовать стек. Также для удобства создадим
        массив <code>pairs</code>, который будет хранить пары{' '}
        <code>[position, speed]</code> для каждой машины, и отсортируем его так, чтобы
        первым элементом была ближайшая к <code>target</code> машина.
      </p>
      <p className="mb-2">
        Пройдём циклом по массиву <code>pairs</code>. На каждой итерации добавляем в стек
        время, за которое текущая машина доедет до <code>target</code>.
      </p>
      <p className="mb-2">
        Если в стеке 2 и более элемента и последний элемент меньше либо равен
        предпоследнему (это означает, что машина догонит другую машину, но обогнать её она
        не может), то удаляем из стека последний элемент, потому что эти машины образуют{' '}
        <strong>car fleet</strong>.
      </p>
      <p className="mb-2">
        После прохождения по массиву вернём из функции <code>stack.length</code>.
      </p>
    </>
  );
}

export default CarFleet;
