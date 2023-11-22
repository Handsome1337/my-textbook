import CodeEditor from '@uiw/react-textarea-code-editor';
import type { ReactElement } from 'react';

type Props = {
  value: string;
};

function Code({ value }: Props): ReactElement {
  return (
    <div className="overflow-x-auto">
      <CodeEditor
        className="w-max min-w-full text-base"
        data-color-mode="dark"
        readOnly
        language="js"
        value={value}
      />
    </div>
  );
}

export default Code;
