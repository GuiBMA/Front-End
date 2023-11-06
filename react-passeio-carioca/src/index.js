import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NewsFeedItem from './feedNoticia';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <NewsFeedItem/>
    <App />
    <NewsFeedItem/>
  </React.StrictMode>
);
