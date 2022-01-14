import React, { useState, useEffect } from 'react';
import Button from '../../components/button/button';
// import useForm from "react-hook-form";
import passwordEyeDisplay from '../../images/hide.png';

function ResetUpdate() {
  const [password, ComparePassword] = useState('');

  const [passwordConfirm, ComparePasswordConfirm] = useState('');

  const [error, setError] = useState('');
  const [passwordDisplay, TogglePasswordDisplay] = useState('password');
  const [passwordConfrimDisplay, TogglePasswordConfirmDisplay] =
    useState('password');

  function checkUpperLowerCaseAndNumber(str) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(str);
    return regex;
  }

  function handlemousedown(e) {
    TogglePasswordDisplay('text');
  }

  function handlemousedownConfrmPassword() {
    TogglePasswordConfirmDisplay('text');
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
        'Your password must consist of  1 uppercase, 1 lowercase and 1 numerical character'
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

  return (
    <div>
      <div className="page__overlay">
        <div className="login-wrapper">
          <div>
            <div className="login-img">
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
            </div>{' '}
          </div>
          <div className="login">
            <div>
              <div>
                <div className="login-welcome-back">
                  <h2>Enter Your New Password</h2>
                </div>

                <div>
                  <form className="login__form">
                    <p className="emailValidator-error">{error} </p>

                    <div className="update__input">
                      <div className="login__form_password">
                        <input
                          name="password"
                          onBlur={(e) => handlepasswordChange(e)}
                          type={passwordDisplay}
                          className="login__form-input"
                          placeholder="Password"
                        />
                        <img
                          onMouseDown={(e) => handlemousedown(e)}
                          onMouseUp={() => TogglePasswordDisplay('password')}
                          src={passwordEyeDisplay}
                          alt=""
                        />
                      </div>

                      <div className="login__form_password">
                        <input
                          name="confirmPassword"
                          onBlur={(e) => handlepasswordConfirmChange(e)}
                          type={passwordConfrimDisplay}
                          className="login__form-input"
                          placeholder="Confrim Password"
                        />
                        <img
                          onMouseDown={(e) => handlemousedownConfrmPassword(e)}
                          onMouseUp={() =>
                            TogglePasswordConfirmDisplay('password')
                          }
                          src={passwordEyeDisplay}
                          alt=""
                        />
                      </div>
                      <p className="update__input-text">
                        The password should be 8 characters and have 1
                        uppercase, 1 lowercase and 1 numerical character
                      </p>

                      <Button buttonStyle="login-form">Change Password</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetUpdate;
