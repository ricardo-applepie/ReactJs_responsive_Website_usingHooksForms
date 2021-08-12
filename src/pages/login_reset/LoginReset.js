import React, { useState} from "react";
import { Link } from "react-router-dom";
import Button from "../../components/button/button";
import validator from 'validator';


function LoginReset(){
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

    return(
        <div className="page__overlay">
    

            <div className="login-wrapper">
                <div className="login-img">
                    <svg className="logo__svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.33 46.89"><defs><style></style></defs><text class="cls-1" transform="translate(0 32.78)">101<tspan class="cls-2" x="77.24" y="0">Metrics</tspan></text></svg>
                </div>
                <div className="login">

                    <div>
                        <div>
                            <div className="login-welcome-back">
                                <h2>Having trouble signing in ?</h2>
                                <div>
                                    <p>Change your password by entering your email address below.</p>
                                </div>
                            </div>

                            <div>
                                <form className="login__form">
                                    <div>
                                        <p className="emailValidator-error">{emailError}</p>

                                        <input onBlur={(e) => validateEmail(e)} className="login__form-input" placeholder="Email" />

                                        <Button buttonStyle="login-form">
                                            BEGIN PASSWORD RESET
                                        </Button>
                                        <div className="forgot-password">
                                            <p>Really struggling ? Contact us at  <span><Link >support@101metrics.com</Link> </span></p>
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

export default LoginReset ;