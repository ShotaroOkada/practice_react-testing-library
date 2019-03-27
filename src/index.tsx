import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Counter from './Counter/counter'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Counter />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
