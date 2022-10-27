import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <DotLoader color="#164E63" size={176} />
      </div>
    );
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
