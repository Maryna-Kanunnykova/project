import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

const text = "HelloWorld!"
const elem = (
  <div>
  <h1> {text}</h1>
  <input type="text" />
  <button>Кнопка</button>
  <button>вторая   кнопка</button>
  </div>
  
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

