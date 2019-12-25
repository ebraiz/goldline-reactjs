import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button,Container,Row,Col } from 'react-bootstrap';

const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: ""
  };


class Loginform extends Component {
    state = initialState;

    validate = () => {
        let usernameError = "";
        let passwordError = "";

        if (!this.state.username) {
          usernameError = "Username is empty";
        }

        if (!this.state.password) {
          passwordError = "Password is empty";
        }
    
        if (usernameError || passwordError) {
          this.setState({ usernameError, passwordError });
          return false;
        }
    
        return true;
      };

handlechange = event => {
    /*this.setState ({[event.target.name] : event.target.value })*/
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
        [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
};

handlesubmit = event => {
    console.log( JSON.stringify(this.state));
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
};

render(){
      return (
            <div className="main-login main-center">
                <form className="form-horizontal" onSubmit = {this.handlesubmit} >
                    <div className="form-group">
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-user fa" aria-hidden="true"></i>
                                </span>
                                <input type="text" className="form-control input-lg alt-input" value={this.state.username} name="username" onChange={this.handlechange} id="username" placeholder="Enter Username" />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.usernameError}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="cols-sm-10">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                                </span>
                                <input type="password" className="form-control input-lg alt-input" value={this.state.password} name="password" onChange={this.handlechange} id="password"  placeholder="Enter Password" />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.passwordError}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="rememberMe" checked={this.state.rememberMe} onChange={this.handlechange} /> Remember me</label>
                    </div>
                    <div className="form-group">
                        <Button type="submit" className="btn btn-brograd2">Login</Button>
                    </div>
                    <div className="login-register heading2">
                        <Link to="Signup">Create Account</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default Loginform;