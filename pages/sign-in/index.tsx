import React from "react";
import SignIn from "../../components/Auth/SignIn";
import AuthHeader from "../../components/Header/AuthHeader/AuthHeader";

const index = () => {
  return (
    <div>
      <AuthHeader />
      <SignIn />
    </div>
  );
};

export default index;
