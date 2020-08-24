import React from "react";
import { useSelector } from "react-redux";

export default () => {
  const user = useSelector(state => state.user);
  return user ? (
    <div className="secretContainer">
      <div className="secretTitle">
        CONGRATULATIONS YOU REACHED THE SECRET VIEW!!
      </div>
    </div>
  ) : (
    <div className="forbidden">
      ERROR 401 UNAUTHORIZED 
      <p>
        You must be logged in order to reach the secret view.
        </p> 
    </div>
  );
};
