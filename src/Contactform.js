import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
    fullnameError: "",
    emailError: "",
    phoneError: "",
    messageError: ""
  };


class Contactform extends Component {
    state = initialState;

    validate = () => {
        let fullnameError = "";
        let emailError = "";
        let phoneError = "";
        let messageError = "";
    
        if (!this.state.fullname) {
          fullnameError = "Name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
          emailError = "Invalid Email";
        }

        if (!this.state.phone) {
          phoneError = "Phone cannot be blank";
        }

        if (!this.state.message) {
          messageError = "Message cannot be blank";
        }
    
        if (emailError || fullnameError || phoneError || messageError) {
          this.setState({ emailError, fullnameError, phoneError, messageError });
          return false;
        }
    
        return true;
      };

/*constructor(props){
    super(props);
    this.state = {
        fullname: "",
        email: "",
        phone: "",
        message: ""
    }
}
*/


/*handlename = (event) => {
    this.setState({ fullname: event.target.value})
}

handleemail = (event) => {
    this.setState({ email: event.target.value})
}

handlenumber = (event) => {
    this.setState({ number: event.target.value})
}

handlemessage = (event) => {
    this.setState({ message: event.target.value})
}*/

handlechange = (event) => {
    this.setState ({[event.target.name] : event.target.value })
}

handlesubmit = (event) => {
/*  alert(`my name is ${this.state.fullname}.
    My email id is ${this.state.email}.
    My mobile number is ${this.state.phone}.
    My message to your company is ${this.state.message}`);*/
    /*This below single line is a replacement of all above commented code*/
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
         <div> 
           
            <section>
                <div className="inner-section">
                    <div className="container">
                        <h2>Get In <b>Touch</b></h2><br />
                        <div className="row">
                            <div className="col-md-8">
                                <div className="well well-sm">
                                    <form onSubmit = {this.handlesubmit} >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="name">Name</label>
                                                    <input type="text" className="form-control" value={this.state.fullname} name="fullname" onChange={this.handlechange} id="name" placeholder="Enter name" />
                                                    <div style={{ fontSize: 12, color: "red" }}>
                                                        {this.state.fullnameError}
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="email">Email Address</label>
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                                        </span>
                                                        <input type="email" className="form-control" value={this.state.email} name="email" onChange={this.handlechange} id="email" placeholder="Enter email" /></div>
                                                        <div style={{ fontSize: 12, color: "red" }}>
                                                            {this.state.emailError}
                                                        </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="phone">Phone</label>
                                                    <input type="number" id="phone" name="phone" value={this.state.phone} onChange={this.handlechange} className="form-control" placeholder="0000 000 0000" />
                                                    <div style={{ fontSize: 12, color: "red" }}>
                                                        {this.state.phoneError}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label for="name">Message</label>
                                                    <textarea name="message" value={this.state.message} onChange={this.handlechange} id="message" className="form-control" rows="9" cols="25"
                                                        placeholder="Message"></textarea>
                                                    <div style={{ fontSize: 12, color: "red" }}>
                                                        {this.state.messageError}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn-brograd pull-right" id="btnContactUs">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <form>
                                <legend><span className="fa fa-globe"></span> <strong>Our office</strong></legend>
                                <address>
                                    <strong>lorem Mine, Inc.</strong><br />
                                    795 Folsom Ave, Suite 600<br />
                                    San Francisco, CA 94107<br /><br />
                                    <abbr title="Phone">
                                        <b>Phone No:</b></abbr>
                                    <br />(123) 456-7890
                                </address>
                                <address>
                                    <strong>Email</strong><br />
                                    <Link to="mailto:#">first.last@example.com</Link>
                                </address>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                                    <div className='details'><h3>USA</h3></div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i></div>
                                    <div className='details'><h3>+00 0000000000</h3></div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-xs-12">
                                <div className="box">
                                    <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i></div>
                                    <div className='details'><h3>info@loremipsum.com</h3></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

          </div>
        )
    }
}

export default Contactform;