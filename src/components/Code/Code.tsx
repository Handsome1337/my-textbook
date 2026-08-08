import CodeEditor from '@uiw/react-textarea-code-editor';
import type { ReactElement } from 'react';

type Props = {
  value: string;
};

function Code({ value }: Props): ReactElement {
  return (
    <div className="my-2 overflow-x-auto">
      <CodeEditor
        className="w-max min-w-full rounded border-2 border-solid border-gray-300 bg-gray-200/25! font-mono! text-base!"
        data-color-mode="light"
        readOnly
        language="js"
        value={value}
      />
    </div>
  );
}

export default Code;
