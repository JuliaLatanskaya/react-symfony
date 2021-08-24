import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.css';
import App from './components/App';


function AppTwo() {
    return <h1>Second app</h1>;
}

ReactDOM.render( <React.Fragment>
    <App /> <AppTwo />
</React.Fragment>, document.getElementById('root'));