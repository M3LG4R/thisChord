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
        this.loginDemo = this.loginDemo.bind(this);
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

    loginDemo(e) {
        e.preventDefault();
        this.props.processForm({email:'test@test.com', password:'password'})
    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    
    errorsExist() {
        const { errors } = this.props;
        if ((Array.isArray(errors)) && errors.length !== 0) {
            return errors
        }
    }

    renderErrors(errortype) {
        let filteredErrors;
        let errors = this.errorsExist();
        if (errors) {
            filteredErrors = errors.filter((error) => error.includes(errortype));
            if (filteredErrors.length > 0) {
                return (
                    <>
                        {filteredErrors.map((error, i) => (
                            <span className="session-error-msg" key={`error-${i}`}>
                                <span>-</span>
                                {error}
                            </span>
                    ))}
                    </>
                );
            }
        }
    }

   
    
    renderEmailField() {
       const emailError = this.renderErrors("Email")
        if (this.props.formType === "Register") {
            return (
                <>
                <div className="input-margin-bottom20">
                        <h5 className={emailError ? "error-head" : ""}>Email{emailError}</h5>
                    <div className="input-wrap">
                    <input type="email"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className={`login-input ${emailError ? "error-input" : ""}`}
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
        let emailError;
        let usernameError;
        if (this.props.formType === "Login") {
            emailError = this.renderErrors("Email")
            return (
                <>
                    <div className="input-margin-bottom20">
                        <h5 className={emailError ? "error-head" : ""}>Email{emailError}</h5>
                        <div className="input-wrap">
                            <input type="email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className={`login-input ${emailError ? "error-input" : ""}`}
                            />
                        </div>
                    </div>
                </>
            );
        } else {
            usernameError = this.renderErrors("Username")
            return (
                <>
                    <div className="input-margin-bottom20">
                        <h5 className={usernameError ? "error-head" : ""}>Username{usernameError}</h5>
                        <div className="input-wrap">
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className={`login-input ${usernameError ? "error-input" : ""}`}
                            />
                        </div>
                    </div>
                </>
            );
        }
    }

    renderDemoButton() {

       return <button className="session-submit demo" onClick={this.loginDemo}>Demo User</button>
    }


    render() {
        let demoButton;
        if (this.props.formType === "Login") {
            demoButton = this.renderDemoButton();
        }
        const passwordError = this.renderErrors("Password")
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
                            <div className="input-margin-bottom20">
                                <h5 className={passwordError ? "error-head" : ""}>Password{passwordError}</h5>
                                <div className="input-wrap">
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.update('password')}
                                        className={`login-input ${passwordError ? "error-input" : ""}`}
                                    />
                                </div>
                                {/* {this.renderPasswordReset()} */}
                            </div>
                            {demoButton}
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