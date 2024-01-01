import middleOfTheListOdd from 'assets/middle-of-the-list-odd.png?url';
import middleOfTheListEven from 'assets/middle-of-the-list-even.png?url';
import linkedListCycleDetection from 'assets/linked-list-cycle-detection.png?url';
import linkedListCycleStartDetection from 'assets/linked-list-cycle-start-detection.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const MIDDLE_OF_LIST = `function middleOfList(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}`;

const CYCLE_DETECTION_SET = `function hasCycle(head) {
  const visited = new Set();

  while (head) {
    if (visited.has(head)) {
      return true;
    }

    visited.add(head);

    head = head.next;
  }

  return false;
}`;

const CYCLE_DETECTION_POINTERS = `function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}`;

const CYCLE_START_DETECTION = `function cycleStart(head) {
  let slow = head;
  let fast = head;
  
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  let slow2 = head;
  
  while (slow !== slow2) {
    slow = slow.next;
    slow2 = slow2.next;
  }

  return slow;
}`;

function FastAndSlowPointers(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Мы можем использовать метод двух указателей при работе со связными списками.
        Указатели могут начинаться в одном и том же месте или даже в разных местах, а
        затем мы будем перемещать их с разной скоростью. Обычно есть указатели{' '}
        <code>fast</code> и <code>slow</code>. Указатель <code>fast</code> движется в два
        раза быстрее, чем указатель <code>slow</code>.
      </p>
      <h2 className="font-bold my-2">
        Примеры использования быстрых и медленных указателей
      </h2>
      <p className="mb-2">Рассмотрим несколько примеров, демонстрирующих эту технику.</p>
      <p className="mb-2">
        <strong>Задача: найти середину связного списка.</strong>
      </p>
      <p className="mb-2">
        Решение методом грубой силы заключается в том, чтобы перебрать весь связный список
        и, используя переменную, скажем, <code>length</code>, отслеживать длину. Затем мы
        можем запустить цикл <code>for</code> до <code>length / 2</code>, и когда мы
        выйдем из цикла <code>for</code>, мы достигнем середины.
      </p>
      <p className="mb-2">
        Это решение работает, но оно не элегантно. Лучший и более эффективный способ —
        разместить два указателя в начале связного списка. Наш указатель <code>fast</code>{' '}
        движется в два раза быстрее, чем указатель <code>slow</code>. К тому времени,
        когда указатель <code>fast</code> дойдёт до конца, указатель <code>slow</code>{' '}
        окажется в середине связного списка. Это имеет смысл, поскольку если медленный
        указатель движется со скоростью, вдвое меньшей скорости указателя{' '}
        <code>fast</code>, и указатель <code>fast</code> достиг конца, то медленный
        указатель должен находиться посередине.
      </p>
      <Code value={MIDDLE_OF_LIST} />
      <p className="mb-2">
        Для связных списков нечётной длины мы можем начать оба указателя в одном и том же
        месте.
      </p>
      <img
        alt="Поиск середины списка нечётной длины"
        className="mb-2"
        height="201"
        src={middleOfTheListOdd}
        width="1880"
      />
      <p className="mb-2">
        Для связных списков чётной длины середина может быть одним из двух узлов. Мы можем
        выбрать любой из узлов в качестве середины. На демонстрации ниже выбор{' '}
        <code>3</code> означает, что указатели <code>fast</code> и <code>slow</code>{' '}
        начинаются с <code>head</code>.
      </p>
      <p className="mb-2">
        Однако, выбор <code>2</code> означает, что <code>fast</code> начинается с{' '}
        <code>slow.next</code>, что имеет смысл, поскольку, если <code>fast</code>{' '}
        начинается дальше <code>slow</code>, он дойдёт до конца быстрее.
      </p>
      <img
        alt="Поиск середины списка чётной длины"
        className="mb-2"
        height="441"
        src={middleOfTheListEven}
        width="1880"
      />
      <p className="mb-2">
        <strong>
          Что произойдёт, если цикл <code>while</code> будет проверять только наличие{' '}
          <code>fast</code>, без <code>fast.next</code>? Мы получим ошибку. Это связано с
          тем, что к тому времени, когда быстрый указатель достигает последнего узла в
          связном списке, <code>fast.next === null</code>, что означает, что когда мы
          попытаемся выполнить <code>fast = fast.next.next</code> в блоке{' '}
          <code>while</code>, мы вызываем <code>null.next</code>, чего на самом деле не
          существует!
        </strong>
      </p>
      <p className="mb-2">
        Сложность по времени для приведённого выше составляет <i>O</i>(<i>n</i>), где{' '}
        <i>n</i> — это длина связного списка. Сложность по памяти составляет <i>O</i>(1).
      </p>
      <h2 className="font-bold my-2">Обнаружение цикла</h2>
      <p className="mb-2">
        Используя приведённую выше концепцию, мы также можем обнаруживать циклы в наших
        связных списках. Это связано с тем, что если в нашем связном списке есть цикл, наш
        быстрый указатель в конечном итоге догонит медленный указатель, поскольку он
        никогда не станет <code>null</code>. Это также называют алгоритмом «черепахи и
        зайца» Флойда. Представьте себе, что черепаха и заяц стартуют с одной и той же
        позиции на круговой беговой дорожке. Заяц движется в два раза быстрее черепахи.
        Поскольку поле круглое, в какой-то момент заяц пройдёт мимо черепахи.
      </p>
      <p className="mb-2">
        В этом заключается идея использования быстрых и медленных указателей при
        обнаружении цикла. Мы начинаем наши указатели <code>slow</code> и{' '}
        <code>fast</code> с начала связного списка. Если наши указатели <code>slow</code>{' '}
        и <code>fast</code> встречаются, мы знаем, что существует цикл.
      </p>
      <p className="mb-2">
        <strong>Задача: определить, существует ли в связном списке цикл.</strong>
      </p>
      <p className="mb-2">
        Возможно, вы поняли, что это похоже на обнаружение дубликатов в массиве. По сути,
        если мы встречаем узел, который уже видели, то у нас должен быть цикл. Технически
        мы могли бы использовать <code>Set</code> для обнаружения цикла. Мы бы хранили все
        наши узлы (ссылку на объект, а не значение, поскольку несколько узлов могут иметь
        одинаковые значения) в нашем <code>Set</code> и проверяли наличие каждого узла в
        нём.
      </p>
      <Code value={CYCLE_DETECTION_SET} />
      <p className="mb-2">
        Хотя это будет работать, такое решение занимает больше места, <i>O</i>(<i>n</i>).
        Решение, представленное ниже, более эффективно. Идея состоит в том, что если цикл
        действительно существует, наш быстрый указатель в конечном итоге встретится с
        медленным указателем. Они всегда будут встречаться, и быстрый указатель не
        пропустит медленный указатель, потому что на каждой итерации быстрый указатель
        приближается на одну позицию к медленному указателю. Так, на демонстрации ниже,
        начиная с шага 2, быстрый указатель находится на 3 позиции позади медленного
        указателя. На шаге 3 он отстаёт на 2 позиции, на шаге 4 — на одну позицию, после
        чего догоняет медленный указатель на шаге 5.
      </p>
      <Code value={CYCLE_DETECTION_POINTERS} />
      <figure className="bg-white mb-2">
        <img
          alt="Обнаружение цикла в списке"
          className="mx-auto"
          height="801"
          src={linkedListCycleDetection}
          width="1401"
        />
      </figure>
      <p className="mb-2">
        <strong>
          Задача: определить, существует ли в связном списке цикл, и вернуть узел, в
          котором он начинается.
        </strong>
      </p>
      <p className="mb-2">
        Сложная часть этой задачи — найти, где начинается цикл. Конечно, мы можем
        использовать наши быстрый и медленный указатели для обнаружения цикла, но узел, в
        котором встречаются медленный и быстрый указатели, не обязательно будет узлом, где
        начинается цикл. Способ решения этой проблемы — инициализровать другой медленный
        указатель, назовём его <code>slow2</code>, который указывает на начало связного
        списка после того, как наши первоначальные медленный и быстрый указатели
        пересеклись. Если <code>C</code> — это узел, в котором начинается цикл, то
        расстояние от <code>slow</code> до <code>C</code> и расстояние от{' '}
        <code>slow2</code> до <code>C</code> должны быть равны. Таким образом, когда{' '}
        <code>slow2</code> и <code>slow</code> встречаются, мы гарантированно приходим к{' '}
        <code>C</code>. Чуть позже мы докажем это с помощью простых математических
        вычислений.
      </p>
      <Code value={CYCLE_START_DETECTION} />
      <figure className="bg-white mb-2">
        <img
          alt="Обнаружение начала цикла в списке"
          className="mx-auto"
          height="1100"
          src={linkedListCycleStartDetection}
          width="1400"
        />
      </figure>
      <p className="mb-2">Давайте теперь докажем, почему этот метод работает.</p>
      <h2 className="font-bold my-2">
        Математическое доказательство «черепахи и зайца» Флойда
      </h2>
      <p className="mb-2">
        1. Обозначим расстояние между первым узлом и узлом, в котором начинается цикл,
        через <code>P</code>.
      </p>
      <p className="mb-2">
        2. Обозначим длину цикла через <code>C</code>.
      </p>
      <p className="mb-2">
        3. Расстояние от узла, в котором указатели <code>slow</code> и <code>fast</code>{' '}
        пересекаются, до узла, в котором начинается цикл, обозначим через <code>X</code>.
      </p>
      <p className="mb-2">
        Используя эту информацию, мы можем вывести, что расстояние между началом цикла и
        узлом, в котором пересекаются указатели <code>slow</code> и <code>fast</code>,
        равно <code>C - X</code>.
      </p>
      <p className="mb-2">
        Мы знаем, что <code>2 * slow = fast</code>. Используя приведённую выше информацию,
        давайте перепишем это уравнение через <code>C, X, P</code>, в результате чего
        получим следующее:
      </p>
      <p className="mb-2">
        <strong>
          Шаг 1: перепишем через <code>C, X, P</code>
        </strong>
      </p>
      <p className="mb-2">
        <code>2(P + C - X) = P + C + C - X</code>
      </p>
      <p className="mb-2">
        <strong>Шаг 2: раскроем скобки</strong>
      </p>
      <p className="mb-2">
        <code>2P + 2C - 2X = P + 2C - X</code>
      </p>
      <p className="mb-2">
        <strong>
          Шаг 3: теперь мы можем перенести всё в левую часть, что приведёт к следующему
        </strong>
      </p>
      <p className="mb-2">
        <code>P - X = 0</code>
      </p>
      <p className="mb-2">
        <strong>
          Шаг 4: определим <code>P</code>
        </strong>
      </p>
      <p className="mb-2">
        <code>P = X</code>
      </p>
      <p className="mb-2">
        Таким образом, если <code>P = X</code>, должно быть так, что указатели{' '}
        <code>slow</code> и <code>slow2</code> находятся на одинаковом расстоянии от узла,
        в котором начинается цикл.
      </p>
    </>
  );
}

export default FastAndSlowPointers;
