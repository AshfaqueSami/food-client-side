import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center">
        <div className="flex items-center justify-center ">
          <div className="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
