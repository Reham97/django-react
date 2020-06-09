import React, { Component } from 'react';

class Login extends Component {

    state = {
        credentials: { username: '', password: '' }
    }

    login = event => {
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    this.props.userLogin(data.token);
                    // console.log(data);
                }
            )
            .catch(error => console.error(error))
    }

    register = event => {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state.credentials)
        })
            .then(data => data.json())
            .then(
                data => {
                    console.log(data.token);
                    // console.log(data);
                }
            )
            .catch(error => console.error(error))
    }
    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({ credentials: cred });
    }

    render() {
        return (

            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-form validate-form p-l-25 p-r-25 p-t-100">
                            <span className="login100-form-title">
                            </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                                <input type="text" name="username" placeholder="Username" 
                                value={this.state.credentials.username} onChange={this.inputChanged}
                                className="input100"/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Please enter password">
                                <input type="password" name="password" placeholder="Password" 
                                value={this.state.credentials.password} onChange={this.inputChanged} 
                                className="input100"/>
                                <span className="focus-input100"></span>
                            </div>

                            <div className="text-right p-t-13 p-b-23">

                            </div>


                            <div className="container-login100-form-btn">
                                <button onClick={this.login} className="login100-form-btn">
                                Login
                            </button>
                                <div className="text-right p-t-50 p-b-23">

                                </div>


                                <button onClick={this.register} className="login100-form-btn"  >
                                Register
                            </button>
                            </div>

                           
                           
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;