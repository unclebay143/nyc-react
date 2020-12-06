import React, { Component } from "react";
import "./css/reset.css";
import Forgot from "./ForgotPassword";

class ResetPassword extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="reset-section">
          <div className="reset-case">
            <div className="image_case">
              <img
                src={process.env.PUBLIC_URL + "/images/recoverArt.png"}
                alt="Reset"
              />
            </div>
            <div className="form_case">
              <div className="input-icon">
                <p className="first-text">Reset Password</p>
                <p className="second-text">
                  Provide the following details to reset your password.
                </p>
                <input
                  type="text"
                  name="code"
                  id="resetcode"
                  placeholder="Reset code"
                  required
                />
                <br />
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="newpassword"
                  id="password"
                  placeholder="New password"
                  required
                />
                <br />
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="confirmpassword"
                  id="cpassword"
                  placeholder="Re-enter password"
                  required
                />
                <br />
                <button className="reset" type="submit">
                  Reset Password
                </button>
                <br />
                <a href={Forgot}>
                  <p className="resetcode">Resend Reset Code</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
