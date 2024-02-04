import type { ReactElement } from 'react';

function PermutationInString(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Если длина <code>s1</code> больше, чем длина <code>s2</code>, то мы можем сразу
        вернуть <code>false</code>.
      </p>
      <p className="mb-2">
        По условию задачи в строках могут находиться только английские буквы в нижнем
        регистре, то есть может быть только 26 различных символов. Создадим массивы{' '}
        <code>s1Count</code> и <code>s2Count</code> из <code>26</code> элементов и
        заполним их нулями. В этих массивах по каждому индексу будет храниться, сколько
        раз встречается буква в строке (первый <code>0</code> индекс для{' '}
        <code>&apos;a&apos;</code>, последний <code>25</code> — для{' '}
        <code>&apos;z&apos;</code>). Пройдёмся циклом от <code>0</code> до{' '}
        <code>s1.length</code> по строкам и увеличим значения букв в <code>s1Count</code>{' '}
        и <code>s2Count</code>. Также создадим переменную <code>matches</code>, которая
        будет хранить число совпадений между <code>s1Count</code> и <code>s2Count</code>.
        Пройдёмся циклом от <code>0</code> до <code>26</code>, на каждой итерации увеличим{' '}
        <code>matches</code> в случае совпадения.
      </p>
      <p className="mb-2">
        Создадим указатель <code>left</code>, указывающий на первую букву в{' '}
        <code>s2</code>, и пройдёмся циклом <code>for</code> от <code>s1.length</code> до{' '}
        <code>s2.length</code>. На текущую букву будет указывать указатель{' '}
        <code>right</code>. На каждой итерации проверяем, равно ли число совпадений{' '}
        <code>26</code>. Если равно, возвращаем из функции <code>true</code>.
      </p>
      <p className="mb-2">
        Увеличиваем частоту встречания текущей буквы в <code>s2Count</code>, после чего
        проверяем, совпадает ли эта частота в <code>s1Count</code> и <code>s2Count</code>.
        Если совпадает, увеличиваем количество совпадений. Иначе, если в{' '}
        <code>s1Count</code> число меньше на <code>1</code>, уменьшаем количество
        совпадений. После этого уменьшаем частоту буквы в <code>s2Count</code>, на которую
        указывает <code>left</code>. Снова проверяем, совпадает ли частота. Если
        совпадает, увеличиваем количество совпадений. Иначе, если в <code>s1Count</code>{' '}
        число больше на <code>1</code>, уменьшаем количество совпадений. После чего
        сдивагем левый указатель вправо.
      </p>
      <p className="mb-2">
        После завершения последней итерации, если перестановка существует в{' '}
        <code>s2</code>, <code>matches</code> будет равно <code>26</code>. Вернём из
        функции <code>matches === 26</code>.
      </p>
    </>
  );
}

export default PermutationInString;
