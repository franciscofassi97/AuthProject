import { useState } from "react";
import { useDispatch } from "react-redux";
import fire from "../../fire";

//Action
import { signinUserAction } from "../../redux/actions/usersActions";

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const inputsChange = (event, inputName) => {
    let value = event.target.value;
    if (inputName === "email") {
      setEmail(value);
    } else if (inputName === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        dispatch(signinUserAction(user));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const formRegister = () => (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          value={email}
          onChange={(event) => inputsChange(event, "email")}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          value={password}
          onChange={(event) => inputsChange(event, "password")}
        />
      </div>

      <button type="submit">Registar</button>
    </form>
  );

  return <>{formRegister()}</>;
};

export default SignUpComponent;
