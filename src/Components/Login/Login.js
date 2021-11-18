import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";
  const { googleSignIn } = useAuth();
  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className="text-black lg:py-28 body-font">
      <div className="container flex justify-center">
        <div className="lg:w-2/6 md:w-1/2 bg-red-300 rounded-lg p-8 flex flex-col w-full mt-10">
          <h2 className="text-lg font-medium title-font mb-5">
            Sign in
          </h2>
          <div className="relative mt-8">with</div>
          <button
            onClick={handleGoogleSignIn}
            className="flex justify-center rounded-md mb-4 bg-red-400 border-0 py-2 px-8 focus:outline-none hover:bg-red-500 rounded text-lg"
          >google</button>
          <p className="text-xs mt-3">Enjoy your day</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
