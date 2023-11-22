import CodeEditor from '@uiw/react-textarea-code-editor';
import type { ReactElement } from 'react';
import './Code.css';

type Props = {
  value: string;
};

function Code({ value }: Props): ReactElement {
  return (
    <div className="overflow-x-auto">
      <CodeEditor
        className="code"
        data-color-mode="dark"
        readOnly
        language="js"
        value={value}
      />
    </div>
  );
}

export default Code;
