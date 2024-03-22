import type { ReactElement } from 'react';

function ImplementTriePrefixTree(): ReactElement {
  return (
    <>
      <p className="mb-2">
        Создадим класс узла префиксного дерева <code>TrieNode</code>. У него будет два
        поля: булево <code>isEndOfWord</code>, отвечающее за то, является ли буква
        последней в слове, и <code>children</code>, в котором будут храниться следующие
        буквы слов.
      </p>
      <p className="mb-2">
        Напишем класс <code>Trie</code>. Создадим в нём корневой узел <code>root</code>. В
        методе <code>insert</code> создадим указатель <code>cur</code>, который будет
        указывать на текущий узел. Пройдём циклом по переданному слову. На каждой итерации
        проверяем, встречается ли текущая буква в <code>children</code> у текущего узла.
        Если не встречается, то добавим её. В конце итерации передвинем указатель на
        следующую букву. После прохождения цикла пометим последнюю букву как последнюю
        букву в слове <code>cur.isEndOfWord = true</code>.
      </p>
      <p className="mb-2">
        Методы <code>search</code> и <code>startsWith</code> похожи на <code>insert</code>
        . Также создадим в них указатель на текущий узел и пройдём циклом по переданному
        слову или префиксу. Если текущая буква не встречается в <code>children</code>{' '}
        текущего узла, вернём <code>false</code>. После прохождения цикла в{' '}
        <code>search</code> будем возвращать <code>cur.isEndOfWord</code>, а в{' '}
        <code>startsWith</code> — <code>true</code>.
      </p>
    </>
  );
}

export default ImplementTriePrefixTree;
