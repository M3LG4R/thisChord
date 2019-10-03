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
        this.props.processForm(user).then(this.props.clearErrors())
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    renderErrors() {
        return (
            <>
                {this.props.errors.map((error, i) => (
                    <span className="session-error-msg" key={`error-${i}`}>
                        {error}
                    </span>
               ))}
            </>
        );
    }
    
    renderEmailField() {
        const { errors } = this.props;
        let emailError;
        if ((Array.isArray(errors)) && errors.length !== 0) {
        emailError = errors.some((error) => error.includes("Email"));
        }
        if (this.props.formType === "Register") {
            return (
                <>
                <div className="input-margin-bottom20">
                    <h5>Email</h5>{ emailError ? this.renderErrors() : null }
                    <div className="input-wrap">
                    <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className={`login-input ${emailError ? "error-input" : null}`}
                        />
                    </div>
                </div>
                </>
            );
        }
    }

    renderSubtitle() {
        if (this.props.formType === "Login") {
            return (
                <div className="login-form-subtitle">We're so excited to see you again!</div>
            );
        }
    }

    renderPasswordReset() {
        if (this.props.formType === "Login") {
            return (
                <>
                    <button className="forgot-password">
                        <div className="forgotpw-content">Forgot your password?</div>
                    </button>
                </>
            );
        }
    }

    renderNeedAccountMsg() {
    if (this.props.formType === "Login") {
        return (
            <span className="need-account">Need an Account?</span>
        );
    }
    }
    renderInputField() {
        const { errors } = this.props;
        debugger
        if (this.props.formType === "Login") {
            let emailError;
            if ((Array.isArray(errors)) && errors.length !== 0) {
                emailError = errors.some((error) => error.includes("Email"));
            }
            return (
                <>
                    <div className="input-margin-bottom20">
                        <h5>Email</h5>{emailError ? this.renderErrors() : null}
                        <div className="input-wrap">
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className={`login-input ${emailError ? "error-input" : null}`}
                            />
                        </div>
                    </div>
                </>
            );
        } else {
            let usernameError;
            if ((Array.isArray(errors)) && errors.length !== 0) {
                usernameError = errors.some((error) => error.includes("Username"));
            }
            return (
                <>
                    <div className="input-margin-bottom20">
                        <h5>Username</h5>{usernameError ? this.renderErrors() : null}
                        <div className="input-wrap">
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className={`login-input ${usernameError ? "error-input" : null}`}
                            />
                        </div>
                    </div>
                </>
            );
        }
    }


    render() {
        const { errors } = this.props;
        let passwordError;
        if ((Array.isArray(errors)) && errors.length !== 0) {
            passwordError = errors.some((error) => error.includes("Password"));
        }
        return (
            <>
            <div className="login-bg">
                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        {/* {this.renderErrors()} */}
                        <div className="login-form">
                            <div className="login-form-title">{this.props.formType === "Register" ? 'Create an Account' : 'Welcome back!'}</div>
                            {this.renderSubtitle()}
                            <div className="input-margin-top20-block">
                            {this.renderEmailField()}
                            {this.renderInputField()}
                            <div>
                                <h5>Password</h5>{passwordError ? this.renderErrors() : null}
                                <div className="input-wrap">
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={`login-input ${passwordError ? "error-input" : null}`}
                                    />
                                </div>
                                {this.renderPasswordReset()}
                            </div>
                            <input className="session-submit" type="submit" value={this.props.formType === "Register" ? 'Continue' : 'Login'} />
                            <div className="margint4">
                                {this.renderNeedAccountMsg()}
                                {this.props.navLink}
                            </div>
                            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </>
        );
    }
}

export default SessionForm;