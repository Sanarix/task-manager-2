import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import { RouterProvider } from 'react-router-dom';
import Router from './router/Router';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';
const app = initializeApp(firebaseConfig);
console.log(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={Router()} />
);
