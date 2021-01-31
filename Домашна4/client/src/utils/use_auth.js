import AuthService from "../services/auth.service";

import React, { useState, useEffect, useContext, createContext } from "react";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};
function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = (username, password, callback) => {
    return AuthService.login(username, password)
      .then((response) => {
        setUser(response);
        callback();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const signup = (username, email, password, callback) => {
    return AuthService.register(username, email, password).then((response) => {
      setUser(response);
      callback();
    });
  };

  const signout = (callback) => {
    return AuthService.logout().then(() => {
      setUser(false);
      callback();
    });
  };

  const check = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(user);
    } else {
      setUser(false);
    }
  };

  // useEffect(() => {
  //   const user = localStorage.getItem("user");
  //   if (user) {
  //     setUser(user);
  //   } else {
  //     setUser(false);
  //   }
  // }, []);

  return {
    user,
    signin,
    signup,
    signout,
    check,
  };
}
