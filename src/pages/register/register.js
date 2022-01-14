import React, { useState, useEffect } from 'react';
import './register.scss';
import validator from 'validator';
import passwordEyeDisplay from '../../images/hide.png';
import Button from '../../components/button/button';
import background from '../../images/background.png';
import { formerPageUrls } from '../../helper/helper';

function Register() {
  const [password, ComparePassword] = useState('');
  const [passwordConfirm, ComparePasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [passwordConfrimDisplay, TogglePasswordConfirmDisplay] =
    useState('password');
  const [passwordDisplay, TogglePasswordDisplay] = useState('password');
  const [emailError, setEmailError] = useState('');
  const [termsAndConditionError, setTermsAndConditionError] = useState('');

  const [isChecked, setChecked] = useState('');
  const validateEmail = (e) => {
    let email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else if (email === '') {
      setEmailError('');
    } else {
      setEmailError('Please enter valid email');
    }
  };

  function handlemousedown(e) {
    TogglePasswordDisplay('text');
  }

  function handlemousedownConfrmPassword() {
    TogglePasswordConfirmDisplay('text');
  }

  function checkUpperLowerCaseAndNumber(str) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(str);
    return regex;
  }

  function handlepasswordChange(e) {
    let inputVal1 = e.target.value;
    let hasPasswordUpperLowerAndNumber = checkUpperLowerCaseAndNumber(
      e.target.value
    );
    console.log(hasPasswordUpperLowerAndNumber);

    ComparePassword(inputVal1);

    if (!hasPasswordUpperLowerAndNumber && inputVal1.length < 8) {
      setError('Your password must be at least 8 characters ');
    } else if (!hasPasswordUpperLowerAndNumber && inputVal1.length >= 8) {
      setError(
        'Your password must consist of  1 uppercase, 1 lowercase and 1 numerical character '
      );
    } else {
      setError('');
    }
  }

  function handlepasswordConfirmChange(e) {
    let inputVal2 = e.target.value;
    console.log(passwordConfirm);
    ComparePasswordConfirm(inputVal2);
  }

  function CheckIfpasswordsMatch() {
    if (passwordConfirm === password) {
      console.log('same passwords');
    } else {
      console.log('not same');
      setError('Your passwords do not match');
    }
  }

  useEffect(() => {
    CheckIfpasswordsMatch();
  }, [passwordConfirm]);

  function handleChecked(e) {
    setChecked(e.target.checked);
    setTermsAndConditionError('');
  }
  function onFormSumit(e) {
    e.preventDefault();
    if (!isChecked) {
      setTermsAndConditionError('please accept terms and conditions');
    } else {
      setTermsAndConditionError('');
    }
  }
  return (
    <div className="register display-flex container ">
      <div className="register__form">
        <div className=" login-img">
          <svg
            className="logo__svg"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 229.33 46.89"
          >
            <defs>
              <style></style>
            </defs>
            <text class="cls-1" transform="translate(0 32.78)">
              101
              <tspan class="cls-2" x="77.24" y="0">
                Metrics
              </tspan>
            </text>
          </svg>
        </div>

        <div>
          <div className="data__connections">
            <h1>Data Connections Simplified</h1>
            <p>Upto 90% off your data processing costs</p>
          </div>

          <div className="">
            <form onSubmit={(e) => onFormSumit(e)} className="">
              <div className="">
                <div className="register__firstAndLastname display-flex-justify">
                  <div>
                    <label>First Name</label>
                    <input className="company-name login__form-input" />
                  </div>

                  <div>
                    <label>Last Name</label>
                    <input className=" company-size login__form-input" />
                  </div>
                </div>
                <label>Email</label>
                <p className="emailValidator-error">{emailError}</p>
                <input
                  className="work-mail login__form-input"
                  onBlur={(e) => validateEmail(e)}
                />
                <label>Password</label>
                <p className="emailValidator-error">{error}</p>

                <div className="login__form_password">
                  <input
                    className="full-name login__form-input"
                    onBlur={(e) => handlepasswordChange(e)}
                    name="password"
                    type={passwordDisplay}
                  />

                  <img
                    onMouseDown={(e) => handlemousedown(e)}
                    onMouseUp={() => TogglePasswordDisplay('password')}
                    src={passwordEyeDisplay}
                    alt=""
                  />
                </div>
                <label>Confirm Password</label>
                <div className="login__form_password">
                  <input
                    className="full-name login__form-input"
                    onBlur={(e) => handlepasswordConfirmChange(e)}
                    type={passwordConfrimDisplay}
                  />

                  <img
                    onMouseDown={(e) => handlemousedownConfrmPassword(e)}
                    onMouseUp={() => TogglePasswordConfirmDisplay('password')}
                    src={passwordEyeDisplay}
                    alt=""
                  />
                </div>
                <p className="emailValidator-error">{termsAndConditionError}</p>

                <div className="remember-me display-flex">
                  <input
                    onChange={(e) => handleChecked(e)}
                    type="checkbox"
                    checked={isChecked}
                    className="login__form-checkbox"
                  />
                  <p>
                    I accept
                    <a href={formerPageUrls.terms}>
                      {' '}
                      <span>Terms and Conditions</span>
                    </a>
                  </p>
                </div>
                <div className="form-btn-wrapper">
                  <Button buttonStyle="login-form ">Create Account</Button>
                </div>
              </div>
            </form>

            <p className="already__have__and__account">
              Already have an 101metrics account?{' '}
              <a href={formerPageUrls.signin}>
                <span>Sign In </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="register__image">
        <img src={background} />
      </div>
    </div>
  );
}

export default Register;
