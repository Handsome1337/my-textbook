import { Code } from 'components';
import type { ReactElement } from 'react';

function Task(): ReactElement {
  return (
    <article>
      <Code value="console.log('Hello world!');" />
    </article>
  );
}

export default Task;
