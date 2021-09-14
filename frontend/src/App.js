import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

//Components
import Container from "./Container";

//Action
import { authObserver } from "./redux/actions/usersActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authObserver());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Container />
      </BrowserRouter>
    </div>
  );
};

export default App;
