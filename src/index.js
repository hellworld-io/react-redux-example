import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const rootId = document.getElementById('root');
ReactDOM.render(<App />, rootId);
registerServiceWorker();
