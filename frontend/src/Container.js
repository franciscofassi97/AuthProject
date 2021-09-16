import { Route, Switch } from "react-router-dom";

//Components
import PrivateRoute from "./privateRoute/PrivateRoutes";
import SignUpComponent from "./components/users/SignUpComponent";
import CommentsComponent from "./components/comments/CommentsComponent";
import CreateDrawingsComponets from "./components/drawings/CreateDrawingsComponets";

//Materia Ui
import { makeStyles } from "@material-ui/core";
import HomeComponent from "./components/home/HomeComponent";
import ListAllUsers from "./components/users/ListAllUsers";
import ListDrawigsComponent from "./components/drawings/ListDrawigsComponent";
import SeeMoreDrawingComponent from "./components/drawings/SeeMoreDrawingComponent";

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
            <PrivateRoute
              exact
              path="/comments"
              component={CommentsComponent}
            />
            <PrivateRoute
              exact
              path="/drawings"
              component={CreateDrawingsComponets}
            />
            <PrivateRoute exact path="/list/users" component={ListAllUsers} />

            <PrivateRoute
              exact
              path="/drawing/:uidusers"
              component={ListDrawigsComponent}
            />

            <PrivateRoute
              exact
              path="/drawing/by/:idDrawing/:uidUser"
              component={SeeMoreDrawingComponent}
            />
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default Container;
