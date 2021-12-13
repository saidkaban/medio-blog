import React from "react";
import Head from "next/head";

import SignUp from "../../components/Auth/SignUp";
import AuthHeader from "../../components/Header/AuthHeader/AuthHeader";

const SignUpPage = () => {
  return (
    <div>
      <Head>
        <title>Sign up to Medium</title>
      </Head>
      <AuthHeader />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
