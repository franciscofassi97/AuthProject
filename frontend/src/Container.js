import { Route, Switch } from "react-router-dom";

//Components
import PrivateRoute from "./PrivateRoute/PrivateRoutes";
import SignUpComponent from "./components/users/SignUpComponent";
import TestComponent from "./components/test/TestComponent";
//Materia Ui
import { makeStyles } from "@material-ui/core";
import HomeComponent from "./components/home/HomeComponent";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Container = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <HomeComponent />
      <div className={classes.content}>
        <div className={classes.toolbar}></div>
        <main>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/signup" component={SignUpComponent} />
            <PrivateRoute exact path="/test" component={TestComponent} />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Container;
