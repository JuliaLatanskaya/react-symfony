import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import WithRoutes from './components/WithRoutes';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(<Router> <WithRoutes /> </Router> , document.getElementById('root'));