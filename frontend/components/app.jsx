import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './login_form_container';
import SignUpFormContainer from './signup_form_container';
import LandingPageContainer from './landing/landing_page_container';

const App = () => (
    <div>
        <h1>Discourse, the best way to chat</h1>
        <Route exact path="/" component={LandingPageContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/register" component={SignUpFormContainer} />
    </div>
);

export default App;