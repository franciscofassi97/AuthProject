import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import fire, { authGoogle } from "../../fire";

//action
import { signinUserAction } from "../../redux/actions/usersActions";

const SignInComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const user = fire.auth().currentUser;

        dispatch(signinUserAction(user));
      })
      .catch((error) => {
        console.error(`Incorrect username or password ${error}`);
      });
  };

  const handleGoogle = () => {
    fire
      .auth()
      .signInWithPopup(authGoogle)
      .then((result) => {
        const user = result.user;
        dispatch(signinUserAction(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formSignIn = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={({ target }) => setEmail(target.value)}
        placeholder="Email"
      />
      <br />
      <input
        type="password"
        onChange={({ target }) => setPassword(target.value)}
        placeholder="Password"
      />
      <br />
      <button type="submit">Sign in</button>
    </form>
  );

  return (
    <div>
      {formSignIn()}
      <div>
        <button
          onClick={() => {
            handleGoogle();
          }}
        >
          Log con google
        </button>

        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default SignInComponent;
