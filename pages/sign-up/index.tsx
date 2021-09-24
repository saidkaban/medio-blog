import React from "react";

import SignUp from "../../components/Auth/SignUp";
import AuthHeader from "../../components/Header/AuthHeader/AuthHeader";

const SignUpPage = () => {
  return (
    <div>
      <AuthHeader />
      <SignUp />
    </div>
  );
};

export default SignUpPage;
