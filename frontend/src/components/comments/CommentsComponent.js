import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { createCommentAction } from "../../redux/actions/commentsActions";
//Constams
import { COMENT_CREATE_REST } from "../../redux/constants/commentsConstants";
import LoadingComponent from "../modal/LoadingComponent";

const CommentsComponent = ({ idDrawing }) => {
  const [titleComments, setTitleComments] = useState();
  const [descriptionsComments, setDescriptionsComments] = useState();

  const signinUserState = useSelector((state) => state.signinUser);
  const { user } = signinUserState;

  const createCommentState = useSelector((state) => state.createComment);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = createCommentState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successCreate) {
      alert("The comment was create succecfully");
      dispatch({ type: COMENT_CREATE_REST });
    }
  }, [dispatch, successCreate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      titleComments,
      descriptionsComments,
      uidUser: user.uid,
      idDrawing,
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

  const formComment = () => (
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
  );

  return (
    <div>
      {loadingCreate ? (
        <LoadingComponent />
      ) : errorCreate ? (
        <h1>Error</h1>
      ) : (
        formComment()
      )}
    </div>
  );
};
export default CommentsComponent;
