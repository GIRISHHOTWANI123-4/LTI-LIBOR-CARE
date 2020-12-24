import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Batchdata from "./components/batchdata";
import reportWebVitals from './reportWebVitals';
import Calculator from "./components/calculator";
import PowerBI from "./components/powerbi";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path={'/'} component={App}/>
            <Route exact path={'/batchdetails'} component={Batchdata}/>
            <Route exact path={'/calculate'} component={Calculator}/>
            <Route exact path={'/powerbi'} component={PowerBI}/>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </Switch>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
