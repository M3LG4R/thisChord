import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    renderEmailField() {
        if (this.props.formType === "Register") {
        return (
            <>
            <h5>Email</h5>
              <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                />
            </>
        )
        }
    }

    renderSubtitle() {
        if (this.props.formType === "Login") {
            return (
                <div className="login-form-subtitle">We're so excited to see you again!</div>
            );
        }
    }


    render() {
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
          <br />
                    {this.renderErrors()}
                    <div className="login-form">
                        <br />
                        <div className="login-form-title">{this.props.formType === "Register" ? 'Create an Account' : 'Welcome Back!'}</div>
                        {this.renderSubtitle()}
                        {this.renderEmailField()}
                        <br />
                        <h5>{this.props.formType === "Login" ? 'Email:' : 'Username:'}</h5>
              <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                            />
                        <br />
                        <h5>Password:</h5>
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType === "Register" ? 'Continue' : 'Login'} />
                        {this.props.navLink}
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;