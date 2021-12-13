import React, { ChangeEvent, FormEvent, useState, useContext } from "react";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { app } from "../../lib/firebaseInstance";

import styles from "./SignUp.module.scss";
import LoadingSpinner from "../UI/LoadingSpinner";
import AuthContext from "../../store/AuthStore/auth-context";

const SignUp = () => {
  const authCtx = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const auth = getAuth(app);

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const nameNotValid = name.trim() === "";
  const emailNotValid = email.trim() === "" || !email.includes("@");
  const passwordNotValid = password.trim() === "" || password.length < 6;

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.uid) {
          localStorage.setItem("loggedInUserId", user.uid);
          localStorage.setItem("loggedInUserName", name);
          authCtx?.logUserIn(user.uid, name);
          const db = getFirestore(app);
          await setDoc(doc(db, "users", user.uid), {
            userName: name,
            userEmail: email,
          });
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
            <label>Enter your name</label>
            <input value={name} onChange={nameChangeHandler} />
          </div>
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
            type='submit'
            disabled={nameNotValid || emailNotValid || passwordNotValid}
          >
            Sign up
          </button>
          <p>
            Already have an account?{" "}
            <a
              onClick={() => router.push("/sign-in")}
              className={styles.switchButton}
            >
              Sign in here.
            </a>
          </p>
        </>
      )}
    </form>
  );
};

export default SignUp;
