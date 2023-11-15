import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewsFeed from './feedNoticia';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NewsFeed/>
    {/* <App/> */}
  </React.StrictMode>
);
