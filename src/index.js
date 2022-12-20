import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Routing from "./components/Routing";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-modal-video/scss/modal-video.scss";
import 'react-toastify/dist/ReactToastify.css';
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Routing/>
);
