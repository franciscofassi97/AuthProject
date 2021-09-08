import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const signinUserState = useSelector((state) => state.signinUser);
  const { user } = signinUserState;

  return (
    <Route
      {...rest}
      render={(props) =>
        user.uid ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default PrivateRoute;
