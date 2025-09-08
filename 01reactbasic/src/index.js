import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

// const reactElement=(
//   <a href="https://google.com "target='_blank'> visit google </a>
// )
const reactElement=React.createElement(
  'a',
  {href :"https://google.com" ,target: "_blank"},
  'click me to visit google'
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    // <App />  this for function
    reactElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
