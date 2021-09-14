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

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const HomeComponent = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
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
                component={Link}
                variant="outlined"
                color="inherit"
                to="/drawings"
              >
                Add Imagen
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
    </div>
  );

  return (
    // <div>
    //   <h1>Welcome!</h1>

    //   <div>
    //     {!isLoggedIn ? (
    //       <Link to="/signin">SingIn</Link>
    //     ) : (
    //       <div>
    //         <span onClick={signOut}>
    //           <button>Sign out</button>
    //         </span>
    //         <div>
    //           <Link to="/test">Add test</Link>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <div>
    //     {/* <Link to="/signup">Signup</Link> */}
    //     <Button
    //       variant="outlined"
    //       color="primary"
    //       onClick={() => setOpenModal(true)}
    //     >
    //       Sing Up
    //     </Button>
    //     <ModalComponent
    //       title="Sign Up"
    //       openModal={openModal}
    //       setOpenModal={setOpenModal}
    //     >
    //       <SignUpComponent />
    //     </ModalComponent>
    //   </div>
    // </div>
    <>{menu()}</>
  );
};

export default HomeComponent;
