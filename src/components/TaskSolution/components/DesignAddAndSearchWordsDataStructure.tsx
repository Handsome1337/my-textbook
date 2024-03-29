import type { ReactElement } from 'react';

function DesignAddAndSearchWordsDataStructure(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим класс узла префиксного дерева <code>TrieNode</code>. У него будет два
        поля: булево <code>isEndOfWord</code>, отвечающее за то, является ли буква
        последней в слове, и <code>children</code>, в котором будут храниться следующие
        буквы слов.
      </p>
      <p className="mb-2">
        Напишем класс <code>WordDictionary</code>. Создадим в нём корневой узел{' '}
        <code>root</code>. В методе <code>addWord</code> создадим указатель{' '}
        <code>cur</code>, который будет указывать на текущий узел. Пройдём циклом по
        переданному слову. На каждой итерации проверяем, встречается ли текущая буква в{' '}
        <code>children</code> у текущего узла. Если не встречается, то добавим её. В конце
        итерации передвинем указатель на следующую букву. После прохождения цикла пометим
        последнюю букву как последнюю букву в слове <code>cur.isEndOfWord = true</code>.
      </p>
      <p className="mb-2">
        Для метода <code>search</code> нам понадобится вспомогательная рекурсвиная функция{' '}
        <code>dfs</code>. Метод <code>dfs</code> будет принимать в себя искомое слово,
        индекс текущего символа и узел, из которого мы будем искать. Напишем её ниже, а из{' '}
        <code>search</code> вернём вызов <code>this.#dfs(word, 0, this.root)</code>.
      </p>
      <p className="mb-2">
        В методе <code>dfs</code> создадим указатель <code>cur</code>, который будет
        указывать на текущий узел. Пройдём циклом от <code>index</code> до конца слова. На
        каждой итерации у нас будет два условия. Если текущий символ равен{' '}
        <code>&apos;.&apos;</code>, то это наш рекурсвиный случай. Вместо этого символа мы
        должны выбрать каждую букву, встречающуюся в префиксном дереве после текущей
        буквы. Поэтому пройдём циклом по <code>cur.children</code> и на каждой итерации
        будем вызывать <code>dfs</code>. Если на какой-то из итераций <code>dfs</code>{' '}
        вернул <code>true</code>, то вернём <code>true</code> из функции. Иначе вернём{' '}
        <code>false</code>.
      </p>
      <p className="mb-2">
        Во втором условии мы проверяем, находится ли текущая буква (символ точки мы
        обработали в предыдущем условии, поэтому теперь <code>word[i]</code> точно
        является буквой) в <code>cur.children</code>. Если нет, возвращаем{' '}
        <code>false</code>. Иначе передвигаем указатель <code>cur</code>. Если цикл
        закончил работу, вернём из функции <code>cur.isEndOfWord</code>.
      </p>
    </>
  );
}

export default DesignAddAndSearchWordsDataStructure;
