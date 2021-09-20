import React, { useContext } from 'react';
import AuthContext from '../../store/auth-context';

import styles from './Auth.module.scss';

const Auth = () => {
  const authCtx = useContext(AuthContext);

  const content = authCtx?.isAuthSignUp ? (
    <div className={styles.authScreen}>
      <h1 className={styles.title}>Join Medium.</h1>
      <p className={styles.greeting}>
        Create an account to receive great stories in your inbox, personalize
        your homepage, and follow authors and topics that you love.
      </p>
      <button className={styles.authButton}>Sign up with Google</button>
      <button className={styles.authButton}>Sign up with Facebook</button>
      <button className={styles.authButton}>Sign up with email</button>
      <p>
        Already have an account?{' '}
        <a onClick={authCtx?.switchToSignIn} className={styles.switchButton}>
          Sign in
        </a>
      </p>
      <p className={styles.disclaimer}>
        Click “Sign Up” to agree to Medium’s{' '}
        <a className={styles.disclaimerLink}>Terms of Service</a> and
        acknowledge that Medium’s{' '}
        <a className={styles.disclaimerLink}>Privacy Policy</a> applies to you.
      </p>
    </div>
  ) : (
    <div className={styles.authScreen}>
      <h1 className={styles.title}>Welcome back.</h1>
      <button className={styles.authButton}>Sign in with Google</button>
      <button className={styles.authButton}>Sign in with Facebook</button>
      <button className={styles.authButton}>Sign in with email</button>
      <p>
        No account?{' '}
        <a onClick={authCtx?.switchToSignUp} className={styles.switchButton}>
          Create one
        </a>
      </p>
      <p className={styles.disclaimer}>
        Click “Sign In” to agree to Medium’s{' '}
        <a className={styles.disclaimerLink}>Terms of Service</a> and
        acknowledge that Medium’s{' '}
        <a className={styles.disclaimerLink}>Privacy Policy</a> applies to you.
      </p>
    </div>
  );

  return content;
};

export default Auth;
