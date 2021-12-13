/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { useRouter } from "next/router";

import { app } from "../../lib/firebaseInstance";

import ModalContext from "../../store/ModalStore/modal-context";
import AuthContext from "../../store/AuthStore/auth-context";

import styles from "./Auth.module.scss";

const Auth: React.FC<{
  type: "sign-in" | "sign-up" | null;
  onClose: () => void;
}> = ({ type, onClose }) => {
  const modalCtx = useContext(ModalContext);
  const authCtx = useContext(AuthContext);
  const router = useRouter();

  const goToSignUpPageHandler = () => {
    modalCtx?.closeModal();
    router.push("/sign-up");
  };

  const goToSignInPageHandler = () => {
    modalCtx?.closeModal();
    router.push("/sign-in");
  };

  const socialAuthHandler = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        if (user.displayName) {
          localStorage.setItem("loggedInUserId", user.uid);
          localStorage.setItem("loggedInUserName", user.displayName);
          authCtx?.logUserIn(user.uid, user.displayName);

          const db = getFirestore(app);
          await setDoc(doc(db, "users", user.uid), {
            userName: user.displayName,
            userEmail: user.email,
          });
          router.replace("/");
          modalCtx?.closeModal();
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };

  const content =
    type === "sign-up" ? (
      <div className={styles.authScreen}>
        <div className={styles.closeButtonContainer} onClick={onClose}>
          <h3 className={styles.closeButton}>X</h3>
        </div>
        <h1 className={styles.title}>Join Medium.</h1>
        <p className={styles.greeting}>
          Create an account to receive great stories in your inbox, personalize
          your homepage, and follow authors and topics that you love.
        </p>
        <button className={styles.authButton} onClick={socialAuthHandler}>
          <div className={styles.authContent}>
            <img src='/google.svg' alt='Google logo'></img>
            <p style={{ paddingLeft: "1rem" }}>Sign up with Google</p>
          </div>
        </button>
        {/* <button className={styles.authButton} onClick={goToSignUpPageHandler}>
          <div className={styles.authContent}>
            <img src='/twitter.svg' alt='Twitter logo'></img>
            <p style={{ paddingLeft: "1.5rem" }}>Sign up with Twitter</p>
          </div>
        </button> */}
        <button className={styles.authButton} onClick={goToSignUpPageHandler}>
          <div className={styles.authContent}>
            <img src='/email.svg' alt='Email icon'></img>
            <p style={{ paddingLeft: "1.5rem" }}>Sign up with email</p>
          </div>
        </button>
        <p>
          Already have an account?{" "}
          <a
            onClick={() => modalCtx?.openModal("sign-in")}
            className={styles.switchButton}
          >
            Sign in
          </a>
        </p>
        <p className={styles.disclaimer}>
          Click “Sign Up” to agree to Medium’s{" "}
          <a className={styles.disclaimerLink}>Terms of Service</a> and
          acknowledge that Medium’s{" "}
          <a className={styles.disclaimerLink}>Privacy Policy</a> applies to
          you.
        </p>
      </div>
    ) : (
      <div className={styles.authScreen}>
        <div className={styles.closeButtonContainer} onClick={onClose}>
          <h3 className={styles.closeButton}>X</h3>
        </div>
        <h1 className={styles.title}>Welcome back.</h1>
        <button className={styles.authButton} onClick={socialAuthHandler}>
          <div className={styles.authContent}>
            <img src='/google.svg' alt='Google logo'></img>
            <p style={{ paddingLeft: "1rem" }}>Sign in with Google</p>
          </div>
        </button>
        {/* <button className={styles.authButton} onClick={goToSignInPageHandler}>
          <div className={styles.authContent}>
            <img src='/twitter.svg' alt='Twitter logo'></img>
            <p style={{ paddingLeft: "1.5rem" }}>Sign in with Twitter</p>
          </div>
        </button> */}
        <button className={styles.authButton} onClick={goToSignInPageHandler}>
          <div className={styles.authContent}>
            <img src='/email.svg' alt='Email icon'></img>
            <p style={{ paddingLeft: "1.5rem" }}>Sign in with email</p>
          </div>
        </button>
        <p>
          No account?{" "}
          <a
            onClick={() => modalCtx?.openModal("sign-up")}
            className={styles.switchButton}
          >
            Create one
          </a>
        </p>
        <p className={styles.disclaimer}>
          Click “Sign In” to agree to Medium’s{" "}
          <a className={styles.disclaimerLink}>Terms of Service</a> and
          acknowledge that Medium’s{" "}
          <a className={styles.disclaimerLink}>Privacy Policy</a> applies to
          you.
        </p>
      </div>
    );

  return content;
};

export default Auth;
