import React from 'react';
import './App.css';
import Auth from './components/Auth';
import Registration from './components/Registration/Registration';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Header/Header';

import { Switch, Route, Redirect } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            <Header />
            <Redirect from='/' to='/auth'/>
            <Switch>
                <Route path='/auth'>
                    <Auth />
                </Route>
                <Route path='/registration'>
                    <Registration />
                </Route>
                <Route path='/calculator'>
                    <Calculator />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
