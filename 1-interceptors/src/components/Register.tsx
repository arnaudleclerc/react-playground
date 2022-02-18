import { Component } from 'react';
import { trackPromise } from 'react-promise-tracker';
import { call201 } from '../xhr/xhr-calls';
import { FormErrors } from './FormErrors';
import './Register.css';

interface IRegisterState {
    email: string,
    password: string,
    formErrors: {
        email: string,
        password: string
    },
    formValid: {
        emailValid: boolean,
        passwordValid: boolean
    }
}

export class Register extends Component<{}, IRegisterState> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: '',
            formErrors: {
                email: '',
                password: ''
            },
            formValid: {
                emailValid: false,
                passwordValid: false
            }
        };
    }

    callApi() {
        trackPromise(
            call201().then(() => {
                console.log('201 Success');
                this.setState({
                    email: '',
                    password: '',
                    formErrors: {
                        email: '',
                        password: ''
                    },
                    formValid: {
                        emailValid: false,
                        passwordValid: false
                    }
                });
            }, error => { console.error(error); })
        );;
    }

    validateField(fieldName: string, value: string) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.formValid.emailValid;
        let passwordValid = this.state.formValid.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            formValid: {
                emailValid: emailValid,
                passwordValid: passwordValid
            }
        });
    }

    errorClass(error: any) {
        return (error.length === 0 ? '' : 'has-error');
    }

    handleUserEmail = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ email: value },
            () => { this.validateField(name, value) });
    }

    handleUserPassword = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ password: value },
            () => { this.validateField(name, value) });
    }

    render() {
        return (
            <form className="registerForm">
                <h2>Register</h2>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email address</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserEmail} />
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserPassword} />
                </div>
                <button type="button" onClick={this.callApi} className="btn btn-primary" disabled={!this.state.formValid.emailValid || !this.state.formValid.passwordValid}>Sign up</button>
            </form>
        )
    }

}

export default Register;