import React from 'react';
import ReactDOM from 'react-dom';
import App from '@ui/App';

console.log('eslint warning');

document.body.insertAdjacentHTML('afterbegin', '<div class="root" />');

ReactDOM.render(<App />, document.querySelector('.root'));
