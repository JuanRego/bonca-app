import { useLocation, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";

const Routes = () => {
  const location = useLocation();

  return (
    <Switch location={location} key={location.pathname}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login"></Route>
      <Route exact path="/cadastro"></Route>
    </Switch>
  );
};

export default Routes;
