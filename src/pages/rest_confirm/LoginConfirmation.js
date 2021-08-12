import React from "react";
import {Link} from "react-router-dom";
import "./loginConfirmation.scss"
import Button from "../../components/button/button";

function LoginConfirmation (){

    return(
        <div className="page__overlay">
       

        <div className="login-confirmation-wrapper">
        
        <div className="container">
            <div className="login-confirmation">
                <div className="login-confirmation-img">
                    <svg className="logo__svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.33 46.89"><defs><style></style></defs><text class="cls-1" transform="translate(0 32.78)">101<tspan class="cls-2" x="77.24" y="0">Metrics</tspan></text></svg>
                </div>
                <div className="reset-confirm-text-wrapper">
                    
                        <p className="reset-confirm-text">
                            
                            We have sent an email to the provided account email address if an account exists.
                            Please check your inbox and follow the instructions given.
                            <br />
                            <br />
                            <br />
                      
                          </p> 
                        <p className="reset-confirm-receive-email">
                         
                                If you do not receive an email, please try again or contact <span>support@101metrics.com</span> for help.   
                         </p>
                </div>

                    <div className="login-confirm-btn-wrapper">
                    <Link to="/">
                        <Button buttonStyle="login-confirm-btn">
                            BACK TO METRICS
                        </Button>
                    </Link>
                  
                </div>
            </div>

          </div>
          
        </div>
        </div>
    )
}

export default LoginConfirmation;