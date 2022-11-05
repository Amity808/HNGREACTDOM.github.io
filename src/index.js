import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes} from 'react-router-dom';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <Routes> */}
      <App />
    {/* </Routes> */}
    </BrowserRouter>
  </React.StrictMode>
);


// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// )