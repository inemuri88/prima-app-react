import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './components/Layout';
import App from "./components/App"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    <Layout></Layout>
  </React.StrictMode>
);



