import { getAuth } from "@firebase/auth";
import { Redirect, Route } from "react-router";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ path, component, redirectTo }) => {
  const auth = getAuth();

  const [user, isLoading] = useAuthState(auth);

  if (user) {
    return <Route path={path} component={component} />;
  }

  if (isLoading) {
    return <h2>En chargement ...</h2>;
  }

  return <Redirect to={redirectTo} />;
};

export default ProtectedRoute;
