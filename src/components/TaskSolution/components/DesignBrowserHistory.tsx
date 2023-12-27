import type { ReactElement } from 'react';

function DesignBrowserHistory(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Эту задачу можно более эффективно решить с помощью массива или стека, но мы решим
        её, используя двусвязный список. Для этого нам понадобится класс{' '}
        <code>ListNode</code> для создания узлов списка. Он будет принимать в себя
        значение и ссылки <code>prev</code> и <code>next</code> на предыдущий и следующий
        узлы, которые по умолчанию будут указывать на <code>null</code>.
      </p>
      <p className="mb-2">
        В конструкторе <code>BrowserHistory</code> создадим указатель{' '}
        <code>this.currentPage</code>, который будет указывать на узел домашней страницы
        (который будет являться началом списка).
      </p>
      <p className="mb-2">
        Для того, чтобы перейти на новую страницу с помощью метода <code>visit</code>, нам
        просто нужно добавить новый узел, который будет следовать за{' '}
        <code>this.currentPage</code>. При этом все узлы после{' '}
        <code>this.currentPage</code> будут удалены из списка, потому что на них больше не
        будет ничего указывать. При создании нового узла мы передаём ему ссылку на
        предыдущий узел, которая указывает на <code>this.currentPage</code>, а затем
        просто переносим указатель <code>this.currentPage</code> на только что добавленный
        узел.
      </p>
      <p className="mb-2">
        Методы <code>back</code> и <code>forward</code> очень похожи, разница лишь в том,
        в какую сторону от <code>this.currentPage</code> мы передвигаемся. Создадим цикл{' '}
        <code>while</code>, который будет исполнятся, пока мы не достигнем первого или
        последнего узла списка (<code>this.currentPage.prev</code> или{' '}
        <code>this.currentPage.next</code> станут указывать на <code>null</code>), либо
        пока мы не пройдём нужное количество шагов. На каждой итерации перемещаем
        указатель <code>this.currentPage</code> и отнимаем 1 шаг. После завершения цикла
        возвращаем значение текущей страницы <code>this.currentPage.val</code>.
      </p>
    </>
  );
}

export default DesignBrowserHistory;
