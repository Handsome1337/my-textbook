import decimalValueBit from 'assets/decimal-value-bit.png?url';
import { Code } from 'components/Code';
import type { ReactElement } from 'react';

const BIT_OPERATIONS = `// И
let n = 1 & 1;

// ИЛИ 
n = 1 | 0;

// исключающее ИЛИ
n = 0 ^ 1;

// НЕ (отрицание)
n = ~n;

// Сдвиг битов
n = 1;
n = n << 1;
n = n >> 1;`;

const COUNT_BITS = `function countBits(n) {
  let count = 0;

  while (n > 0) {
    if ((n & 1) === 1) {
      count++;
    }

    n = n >> 1; // то же самое, что и n / 2
  }

  return count;
}`;

const COMMENT = `/*
  23 -> 10111
  
  // Первый бит был 1, увеличиваем значение счётчика и сдвигаем вправо.
  10111 & 00001 -> 00001
  
  // Первый бит был 1, увеличиваем значение счётчика и сдвигаем вправо.
  
  01011 & 00001 -> 00001
  
  // Мы снова получаем 1, увеличиваем значение счётчика и сдвигаем вправо.
  
  00101 & 00001 -> 00001
  
  // Мы получаем 0, поэтому только сдвигаем вправо, оставляя счётчик нетронутым.
  
  00010 & 00001 -> 00000
  
  // Мы получаем 1, поэтому сдвигаем вправо и увеличиваем значение счётчика.
  00001 & 00001 -> 00001
*/`;

function BitOperations(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Бит — это самая фундаментальная единица, которую компьютер использует для
        представления данных.
      </p>
      <p className="mb-2">
        Давайте посмотрим, как мы можем использовать биты для решения алгоритмических
        задач.
      </p>
      <h2 className="font-bold my-2">Таблицы истинности и битовые операции</h2>
      <p className="mb-2">С битами мы можем выполнять следующие операции:</p>
      <ol className="list-decimal list-inside">
        <li className="ml-6 mb-2">
          <strong>И</strong> (<strong>AND</strong>) - при применении к двум битам оба бита
          должны быть <code>1</code>, чтобы получить <code>1</code>. В противном случае мы
          получим <code>0</code>. Обозначается символом <code>&</code>.
        </li>
        <li className="ml-6 mb-2">
          <strong>ИЛИ</strong> (<strong>OR</strong>) – при применении к двум битам только
          один из битов должен быть <code>1</code>, чтобы получить <code>1</code>. Это
          означает, что если оба бита <code>1</code>, мы получим <code>1</code>, и{' '}
          <code>0</code>, если оба бита <code>0</code>. Обозначается символом{' '}
          <code>|</code>.
        </li>
        <li className="ml-6 mb-2">
          <strong>исключающее ИЛИ</strong> (<strong>XOR</strong>) – при применении к двум
          битам мы получим <code>1</code>, если только один из битов <code>1</code>. В
          противном случае мы получим <code>0</code>. Обозначается символом <code>^</code>
          .
        </li>
        <li className="ml-6 mb-2">
          <strong>НЕ</strong> (<strong>NOT</strong>) – отрицание просто переворачивает
          текущий бит. Отрицание <code>0</code> это <code>1</code> и отрицание{' '}
          <code>1</code> это <code>0</code>. Обозначается символом <code>~</code>.
        </li>
        <li className="ml-6 mb-2">
          <strong>Сдвиг битов</strong> (<strong>Bit shifts</strong>) – сдвиг битов
          означает сдвиг наших битов влево или вправо. Он берёт все биты и сдвигает их на
          одну позицию влево или вправо. <code>&gt;&gt;</code> — это сдвиг вправо, а{' '}
          <code>&lt;&lt;</code> — сдвиг влево.
        </li>
      </ol>
      <p className="mb-2">
        <strong>
          Технически говоря, сдвиг влево означает умножение данного целого числа на 2, а
          сдвиг вправо означает деление данного целого числа на 2. Удвоение и уменьшение
          пополам соответственно.
        </strong>
      </p>
      <p className="mb-2">
        Чтобы продемонстрировать вышеизложенные концепции, давайте возьмем{' '}
        <code>001</code> для примера, что представляет <code>1</code> в десятичном
        формате.
      </p>
      <p className="mb-2">
        Выполнение сдвига влево три раза приведет к следующему результату: в последней
        операции мы отбрасываем <code>1</code> и заменяем её <code>0</code>.
      </p>
      <ul className="mb-2">
        <li>
          <code>001 &lt;&lt; 1</code> = <code>010</code>
        </li>
        <li>
          <code>010 &lt;&lt; 1</code> = <code>100</code>
        </li>
        <li>
          <code>100 &lt;&lt; 1</code> = <code>000</code>
        </li>
      </ul>
      <p className="mb-2">
        Ниже показано, как мы пришли к выводу, что <code>001</code> представляет собой{' '}
        <code>1</code> в десятичном формате. Мы можем использовать это для преобразования
        любого двоичного числа в десятичное и любого десятичного числа в двоичное.
      </p>
      <img
        alt="Десятичные числа и биты"
        className="mb-2"
        height="140"
        src={decimalValueBit}
        width="780"
      />
      <p className="mb-2">
        Ниже приведён код, представляющий то, что мы обсуждали до сих пор.
      </p>
      <Code value={BIT_OPERATIONS} />
      <h2 className="font-bold my-2">Демонстрация</h2>
      <p className="mb-2">
        Допустим, нас просят посчитать количество битов <code>1</code>, которые находятся
        в двоичном представлении числа <code>23</code>.
      </p>
      <p className="mb-2">
        Используя приведённое выше изображение, мы получаем, что двоичное представление
        числа <code>23</code> — <code>10111</code>. Чтобы подсчитать количество{' '}
        <code>1</code>, мы можем продолжать сдвигать наши биты вправо, пока не получим все{' '}
        <code>0</code>. Вопрос в том, как мы узнаем, когда нужно увеличить счётчик? Нам
        нужен способ определить, что наш текущий бит равен <code>1</code>. Напомним, что{' '}
        <code>1 & 1 = 1</code>. Итак, если наш текущий бит <code>n</code> приводит к{' '}
        <code>n & 1 = 1</code>, мы можем увеличить наш счётчик.
      </p>
      <Code value={COUNT_BITS} />
      <Code value={COMMENT} />
      <p className="mb-2">
        Из вышеперечисленных операций мы имеем значение счётчика <code>4</code>.
      </p>
    </>
  );
}

export default BitOperations;
