import React from 'react';
import Loginform from './Loginform';
import { Link } from 'react-router-dom';

const Login = () => {

  return (

     <div className="login-page">
        <div className="container-fluid">
            <div className="row main">
                <div className="col-sm-12">
                    <div className="panel-heading">
                       <div className="panel-title text-center">
                            <Link to="/"><img src="assets/images/logo.png" className="img-responsive mx-auto" alt="" /></Link>
                            <hr />
                        </div>
                    </div> 
                    <Loginform />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;