import React from 'react';
import {render} from 'react-dom';
import './Resources/css/app.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';

const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}


render(<App />, document.getElementById('root'));
