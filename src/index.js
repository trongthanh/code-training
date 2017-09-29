//*
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';

ReactDOM.render(<App />, document.getElementById('app'));

/*/
import App from './esm/App.js';

const root = document.getElementById('app');
root.innerHTML = App.render();
//*/

// NOTE: Webpack only!
// import('./common/utils.js').then(module => {
// 	console.log('Util module loaded', module.str);
// });
