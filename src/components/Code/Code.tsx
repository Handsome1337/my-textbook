import CodeEditor from '@uiw/react-textarea-code-editor';
import type { ReactElement } from 'react';

type Props = {
  value: string;
};

function Code({ value }: Props): ReactElement {
  return (
    <div className="overflow-x-auto">
      <CodeEditor
        className="bg-gray-200/25 border-2 border-gray-300 border-solid font-mono min-w-full rounded text-base w-max"
        data-color-mode="light"
        readOnly
        language="js"
        value={value}
      />
    </div>
  );
}

export default Code;
