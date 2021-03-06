import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter,
    withRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LogInFormContainer from './UserAuth/login_form_container';
import SignUpFormContainer from './UserAuth/signup_form_container';
import LandingPageContainer from './landing/landing_page_container';
import MainApp from './MainApp/main_app';
import Modal from './modal';

const App = () => (
    <>
        <Route exact path="/" component={LandingPageContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/register" component={SignUpFormContainer} />
        <ProtectedRoute path="/channels/" component={MainApp} />
        {/* <ProtectedRoute path="/:inviteCode" component={inviteJoin} /> */}
    </>
);

export default App;