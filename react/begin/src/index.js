import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    // React.createElement('button', {
    //   //слушатель события
    //   onClick: () => console.log('CLICK') //стрелочная функция
    // },'Нажми на меня!'),
    <App/>,
  document.getElementById('root')
);
