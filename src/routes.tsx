import React from 'react';

// import { Container } from './styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './Pages/Dashboard';
import GroupPage from './Pages/GroupPage';
import Login from './Pages/Login';
import Registro from './Pages/Registro';
import Senha from './Pages/Senha';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Registro} />
                <Route path="/forgotpassword" component={Senha} />
                <Route path="/group/:id" component={GroupPage} />
            </Switch>
        </Router>
    );
}

export default Routes;