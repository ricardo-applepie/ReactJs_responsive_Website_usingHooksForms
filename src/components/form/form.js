import React, { useState } from "react";
import "./form.scss";
import Button from "../button/button";
import validator from 'validator';

function Form() {
    const [emailError, setEmailError] = useState('');

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
        <div>
            
            <form className="book_a_demo-form">
                <div className="book_a_demo-form-wrapper">
                    <div className="book_a_demo-form_title">
                    <h1>Help us personalize your demo</h1>
                </div>
                    <p className="emailValidator-error">{emailError}</p>
                    <input onBlur={(e) => validateEmail(e)}  className="work-mail"  placeholder="Work Mail"/>
                    <input className="full-name" placeholder="Full Name" />
               <div className="company-input-wrapper">
                    <input className="company-name" placeholder="Company Name"/>
                    <input className=" company-size" placeholder="Company Size" />
               </div>

               <div className="form-btn-wrapper">
                    <Button buttonStyle="form-btn">
                       Request Demo 
                   </Button>
               </div>
                </div>
            </form>
        </div>
    )
    
}

export default Form ;