import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

//Actions
import { createCommentAction } from "../../redux/actions/CommentsActions";

const CommentsComponent = () => {
  const [titleComments, setTitleComments] = useState();
  const [descriptionsComments, setDescriptionsComments] = useState();

  const signinUserState = useSelector((state) => state.signinUser);
  const { user } = signinUserState;

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      titleComments,
      descriptionsComments,
      uidUser: user.uid,
    };

    dispatch(createCommentAction(comment));
  };

  const inputsChange = (event, inputName) => {
    let value = event.target.value;
    if (inputName === "titleComments") {
      setTitleComments(value);
    } else if (inputName === "descriptionsComments") {
      setDescriptionsComments(value);
    }
  };

  return (
    <div>
      <h2>Add TEST</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => inputsChange(event, "titleComments")}
        />
        <br />
        <input
          type="text"
          placeholder="Your Comment"
          onChange={(event) => inputsChange(event, "descriptionsComments")}
        />
        <br />

        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};
export default CommentsComponent;
