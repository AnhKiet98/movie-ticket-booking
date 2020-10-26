import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Modal from "./components/Modal/Modal";
import PageNotFound from "./pages/404/PageNotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import { HomeTemplate } from './Teamplates/HomeTeamplates';
import { makeStyles } from "@material-ui/core/styles";
function App() {
  const useStyles = makeStyles({
    container: {
      display: "flex"
    }
  });
  const classes = useStyles();
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <HomeTemplate exact path="/login" component={Login} />
          <HomeTemplate exact path="/modal" Component={Modal} />
          <HomeTemplate exact path="/" Component={Home} />
          <Route exact path="/dangki" component={Registration} />
          <HomeTemplate exact path="*" Component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <div className={classes.container}>

      </div>
    </div>
  );
}

export default App;
