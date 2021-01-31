import { useAuth } from "./use_auth";
import { Route, Redirect } from "react-router-dom";
const  PrivateRoute = ({ children, ...rest }) =>{
    console.log("private route");
  let auth = useAuth();
  console.log(rest);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
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
    />
  );
}
export default PrivateRoute;