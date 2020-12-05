import React from 'react';
import { Link } from 'react-router-dom'
import styles from './css/special/signup.module.css'
//import logo from '../img/logo.png';

// Functional Component

const Login = props =>{

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
    
    signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

    return (

        <div className="one">
        <div className={styles.mainer} id="main">
        <div className={styles.container} id="container">
  <div className={styles.formContainer}>
    <form action="#">
      <h1 className={styles.h1}>Create Account</h1>
      <p className={styles.p}>Via</p>
      <div className={styles.socialMediaPlatforms}>
        <Link className="social-media-1"><i className="fab fa-facebook" /></Link>
        <Link className="social-media-1"><i className="fab fa-instagram" /></Link>
        <Link className="social-media-1"><i className="fab fa-linkedin" /></Link>
      </div>
      <span>OR</span>
      <input type="text" name="name" id="business-name" placeholder="Business Name" />
      <input type="email" name="email" id="email" placeholder="Enter your Email Address" />
      <input type="password" name="password" id="password" placeholder="Enter Password" />
      <button type="submit" id="signup-button" className="signup-button">Sign Up</button>
    </form>
  </div>
  <div className={styles.signInContainer}>
    <form action="#">
      <h1 className={styles.h1}>Welcome Back</h1>
      <p className={styles.p}> Sign In Via</p>
      <div className={styles.socialMediaPlatforms}>
        <Link className="social-media-1"><i className="fab fa-facebook" /></Link>
        <Link className="social-media-1"><i className="fab fa-instagram" /></Link>
        <Link><i className="fab fa-linkedin" /></Link>
      </div>
      <span>OR</span>
      <input type="email" name="email" id="signin-email" placeholder="Enter your Email Address" />
      <input type="password" name="password" id="signin-password" placeholder="Enter Password" />
      <Link>Forgot your password?</Link>
      <button type="submit" id="login-button" className="login-button">Sign In</button>
    </form>
  </div>
  <div className={styles.overlayContainer}>
    <div className={styles.overlay}>
      <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
        <h1 className={styles.h1}>Already have an account? </h1>
        <p className={styles.p}>
          Provide your details and continue your journey with us
        </p>
        <button className={styles.ghost} id="signIn">Sign In</button>
      </div>
      <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
        <h1 className={styles.h1}>Don't Have an Account Yet?</h1>
        <p className={styles.p}>
          Enter your details and start journey with us
        </p>
        <button className={styles.ghost} id="signUp">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>


    )
}

export default Login