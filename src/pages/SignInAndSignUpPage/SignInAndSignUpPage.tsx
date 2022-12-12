import React from "react";

import styles from "./SignInAndSignUpPage.module.scss";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

const SignInAndSignUp: React.FC = () => {
  return (
    <div className={styles["sign-in-and-sign-up"]}>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
