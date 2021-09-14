import { useState } from "react";
import { useDispatch } from "react-redux";
import fire from "../../fire";

//Action
import { signinUserAction } from "../../redux/actions/usersActions";

const SignUpComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const inputsChange = (event, inputName) => {
    let value = event.target.value;
    if (inputName === "email") {
      setEmail(value);
    } else if (inputName === "password") {
      setPassword(value);
    } else if (inputName === "firstName") {
      setFirstName(value);
    } else if (inputName === "lastName") {
      setLastName(value);
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
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          value={firstName}
          onChange={(event) => inputsChange(event, "firstName")}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          id="lastName"
          value={lastName}
          onChange={(event) => inputsChange(event, "lastName")}
        />
      </div>
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
