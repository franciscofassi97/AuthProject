import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Firebase
import fire from "../../fire";

//Action //Constants
import { USER_SIGNIN_RESET } from "../../redux/constants/usersConstants";

//Components
import ModalComponent from "../modal/ModalComponent";

import SignInComponent from "../users/SignInComponent";

//Material ui
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import CreateDrawingsComponets from "../drawings/CreateDrawingsComponets";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const HomeComponent = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [openModalDrawing, setOpenModalDrawing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signinUserState = useSelector((state) => state.signinUser);
  const { success: successUserSignIn } = signinUserState;

  fire.auth().onAuthStateChanged((user) => {
    return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUserSignIn) {
      setOpenModal(false);
    }
  }, [successUserSignIn]);

  const signOut = () => {
    fire.auth().signOut();
    dispatch({ type: USER_SIGNIN_RESET });
  };

  const menu = () => (
    <div>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Auth
          </Typography>

          {!isLoggedIn ? (
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => setOpenModal(true)}
            >
              Sing In
            </Button>
          ) : (
            <div>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => signOut()}
              >
                Log Out
              </Button>
              <Button
                component={Link}
                variant="outlined"
                color="inherit"
                to="/comments"
              >
                Add Comment
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                onClick={() => setOpenModalDrawing(true)}
              >
                Add Imagen
              </Button>
              <Button
                component={Link}
                variant="outlined"
                color="inherit"
                to="/list/users"
              >
                Explore
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <ModalComponent
        title="Sign In"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <SignInComponent />
      </ModalComponent>

      <ModalComponent
        title="Upload"
        openModal={openModalDrawing}
        setOpenModal={setOpenModalDrawing}
      >
        <CreateDrawingsComponets />
      </ModalComponent>
    </div>
  );

  return <>{menu()}</>;
};

export default HomeComponent;
