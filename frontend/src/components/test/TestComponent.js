import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

//Actions
import { createTestAction } from "../../redux/actions/testActions";

const TestComponent = () => {
  const [nombreTest, setNombreTest] = useState();
  const [descripcionTest, setDescripcionTest] = useState();

  const testState = useSelector((state) => state.test);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const test = {
      nombreTest,
      descripcionTest,
    };

    dispatch(createTestAction(test));
    console.log(test);
  };

  return (
    <div>
      <h2>Add TEST</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre test"
          onChange={({ target }) => setNombreTest(target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="descripcion"
          onChange={({ target }) => setDescripcionTest(target.value)}
        />
        <br />

        <button type="submit">Add Test</button>
      </form>
    </div>
  );
};
export default TestComponent;
