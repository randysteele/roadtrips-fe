import React from "react";
import { withAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = withAuth0();
  return (
    <button
      className="btn btn-primary btn-block"
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
    >
      Sign Up
    </button>
  );
};

export default SignupButton;