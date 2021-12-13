import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../../lib/firebaseInstance";

import styles from "./SignIn.module.scss";
import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../store/AuthStore/auth-context";

const SignIn = () => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const emailNotValid = email.trim() === "" || !email.includes("@");
  const passwordNotValid = password.trim() === "" || password.length < 6;

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid) {
          const db = getFirestore(app);
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          let userName;
          if (docSnap.exists()) {
            userName = docSnap.data()["userName"];
          }

          localStorage.setItem("loggedInUserId", user.uid);
          localStorage.setItem("loggedInUserName", userName);

          // sets the cookie cookie1
          document.cookie = 'authentication=test; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/';

          authCtx?.logUserIn(user.uid, userName);
          
          router.replace("/");
        }
      })
      .catch((error) => {
        setLoading(false);
        let errorParsed = error.message.split("/")[1];
        errorParsed = errorParsed.slice(0, errorParsed.length - 2);
        alert(errorParsed);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      {loading ? (
        <div className={styles.spinner}>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div className={styles.inputContainer}>
            <label>Enter email</label>
            <input value={email} onChange={emailChangeHandler} />
          </div>
          <div className={styles.inputContainer}>
            <label>Enter password</label>
            <input
              type='password'
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <button
            className={styles.signIn}
            type='submit'
            disabled={emailNotValid || passwordNotValid}
          >
            Sign in
          </button>
          <p className={styles.signIn}>
            No account?{" "}
            <a
              onClick={() => router.push("/sign-up")}
              className={styles.switchButton}
            >
              Create one
            </a>
          </p>
        </>
      )}
    </form>
  );
};

export default SignIn;
