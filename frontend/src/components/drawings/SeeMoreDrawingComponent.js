import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDrawingByIdAction } from "../../redux/actions/drawingsActions";

import Typography from "@material-ui/core/Typography";
import { getUserByIdAction } from "../../redux/actions/usersActions";

const SeeMoreDrawingComponent = () => {
  const idDrawing = useParams().idDrawing;
  const uidUser = useParams().uidUser;

  console.log(uidUser);
  const dispatch = useDispatch();
  const getDrawingByIdState = useSelector((state) => state.getDrawingById);

  const getUserByIdState = useSelector((state) => state.getUserById);
  const {
    success: successUserById,
    loading: loadingUserById,
    error: errorUserById,
    user,
  } = getUserByIdState;
  const {
    drawing,
    success: successGet,
    error: errorGet,
    loading: loadingGet,
  } = getDrawingByIdState;

  useEffect(() => {
    if (!successGet && !successUserById) {
      dispatch(getDrawingByIdAction(idDrawing));
      dispatch(getUserByIdAction(uidUser));
    }
  }, [dispatch, successGet, idDrawing, successUserById, uidUser]);

  //dispatch getUserByID drawing.uidUser
  const showDrawing = () => (
    <div>
      <Typography variant="h3" color="initial">
        {drawing.titleDrawing}
      </Typography>
      {loadingUserById ? (
        <p>Loading</p>
      ) : (
        <Typography variant="h3" color="initial">
          {user.displayName}
        </Typography>
      )}

      <img src={drawing.imagenUrlDrawing} alt={drawing.titleDrawing} />

      <Typography variant="h3" color="initial">
        {drawing.descriptionDrawing}
      </Typography>

      <Typography variant="h3" color="initial">
        {drawing.votesDrawing}
      </Typography>
    </div>
  );

  return (
    <div>{loadingGet ? <h1>Loading...</h1> : <h1>{showDrawing()}</h1>}</div>
  );
};

export default SeeMoreDrawingComponent;
