import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const initialState = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    gender: "",
    usernameError: "",
    emailError: "",
    passwordError: "",
    confirmpasswordError: "",
    genderError: "",
    locationError: ""
  };


class Signupform extends Component {
    state = initialState;

    validate = () => {
        let usernameError = "";
        let emailError = "";
        let passwordError = "";
        let confirmpasswordError = "";
        let genderError = "";
        let locationError = "";

        if (!this.state.username) {
          usernameError = "Username is empty";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email";
          }

        if (!this.state.password) {
          passwordError = "Password is empty";
        }
    
        if (!this.state.confirmpassword) {
          confirmpasswordError = "Confirm Password is empty";
        }

        if (!this.state.gender) {
            genderError = "Gender is empty";
        }

        if (!this.state.location) {
            locationError = "Location is empty";
        }

        if (usernameError || emailError || passwordError || confirmpasswordError || genderError || locationError) {
          this.setState({ usernameError, emailError, passwordError, confirmpasswordError, genderError, locationError });
          return false;
        }
    
        return true;
      };

handlechange = (event) => {
    /*this.setState ({[event.target.name] : event.target.value })*/
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
        [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
}

handlesubmit = (event) => {
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
                                <i className="fa fa-envelope fa" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="form-control input-lg alt-input" value={this.state.email} name="email" onChange={this.handlechange} id="email" placeholder="Enter Email" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailError}
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
                            <input type="password" className="form-control input-lg alt-input" value={this.state.password} name="password" onChange={this.handlechange} id="n_password" placeholder="New Password" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.passwordError}
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
                            <input type="password" className="form-control input-lg alt-input" value={this.state.confirmpassword} name="confirmpassword" onChange={this.handlechange} id="c_password" placeholder="Confirm Password" />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.confirmpasswordError}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label className="checkbox-inline">
                        <input type="checkbox" name="gender" checked={this.state.male} onChange={this.handlechange} />Male
                    </label>
                    <label className="checkbox-inline">
                       <input type="checkbox" name="gender" checked={this.state.female} onChange={this.handlechange} />Female
                    </label>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.genderError}
                    </div>
                </div>

                <div className="form-group">
                    <label for="sel1">Location:</label>
                    <select className="form-control" name="location" value={this.state.location} onChange={this.handlechange} id="sel1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.locationError}
                    </div>
                </div>

                <div className="form-group">
                    <Button type="submit" className="btn btn-brograd2">Signup</Button>
                </div>
                <div className="login-register heading2">
                    <Link to="/Login">Already Registered?</Link>
                </div>
            </form>
        </div>
        )
    }
}

export default Signupform;