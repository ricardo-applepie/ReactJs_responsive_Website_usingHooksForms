import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.scss"
import passwordEyeDisplay from "../../images/hide.png";
import Button from "../../components/button/button";

import validator from 'validator';
import { formerPageUrls } from "../../helper/helper";
import { reactPageUrls } from "../../helper/helper";


const axios = require('axios');



function Login() {

    const [passwordDisplay, TogglePasswordDisplay] = useState("password");

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        let email = e.target.value;

        if (validator.isEmail(email)) {
            setEmailError('')
        }
        else if (email === "") {
            setEmailError('');
        }
        else {
            setEmailError('Please enter valid email')
        }


    }

  function loginUser(){
      console.log("testing login")
      axios.post('https://dev.helppr.ai/user/login/', {
          "email": 'eng.eladib@gmail.com',
          "password": 'MNBmnb123'
      })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
          });
  }


    function handlemousedown(e) {
        TogglePasswordDisplay("text");
    }

    return (
        <div className="page__overlay">


            <div className="login-wrapper">
                <div className="login-img">
                    <svg className="logo__svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.33 46.89"><defs><style></style></defs><text class="cls-1" transform="translate(0 32.78)">101<tspan class="cls-2" x="77.24" y="0">Metrics</tspan></text></svg>
                </div>
                <div className="login">

                    <div>
                        <div>
                            <div className="login-welcome-back">
                                <h2>Welcome Back !</h2>
                                <p>Don't have an account ? <span><a href={formerPageUrls.accounts}>Sign Up</a></span></p>
                            </div>

                            <div>
                                <form className="login__form">
                                    <div>
                                        <p className="emailValidator-error">{emailError}</p>
                                        <input onBlur={(e) => validateEmail(e)} type="email" required className="login__form-input" placeholder="Email" />
                                        <div className="login__form_password">

                                            <input onChange={() => TogglePasswordDisplay("password")} type={passwordDisplay} minlength="8" className="login__form-input" placeholder="Password" />
                                            <img onMouseDown={(e) => handlemousedown(e)} onMouseUp={() => TogglePasswordDisplay("password")} src={passwordEyeDisplay} alt="" />
                                        </div>
                                        <div className="remember-me">
                                            <input type="checkbox" className="login__form-checkbox" />

                                            <p>Remember me</p>
                                        </div>
                                         
                                        <Button  buttonStyle="login-form">
                                            Login
                                        </Button>
                                        <div className="forgot-password">
                                            <p>Forgot your password <span><Link to={reactPageUrls.reset}>Reset it</Link> </span></p>
                                        </div>
                                    </div>
                                </form>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>


    )
}

export default Login;