import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

//Actions
import { getDrawingsByIdUserAction } from "../../redux/actions/drawingsActions";

//Components
import DrawingsComponent from "./DrawingsComponent";
import Button from "@material-ui/core/Button";
import LoadingComponent from "../modal/LoadingComponent";

const ListDrawigsComponent = () => {
  const dispatch = useDispatch();
  const idUsuario = useParams();

  const getDrawingsByIdUserState = useSelector(
    (state) => state.getDrawingsByIdUser
  );
  const {
    drawingsByIdUser,
    loading: loadingGet,
    success: successGet,
    error: errorGet,
  } = getDrawingsByIdUserState;

  useEffect(() => {
    if (successGet) {
    } else {
      dispatch(getDrawingsByIdUserAction(idUsuario.uidusers));
    }
  }, [dispatch, idUsuario.uidusers, successGet]);

  return (
    <div>
      {loadingGet ? (
        <LoadingComponent />
      ) : errorGet ? (
        <h1>Error</h1>
      ) : (
        <div>
          {drawingsByIdUser.map((drawing) => (
            <div>
              <DrawingsComponent
                key={drawing._id}
                titleDrawing={drawing.titleDrawing}
                descriptionDrawing={drawing.descriptionDrawing}
                imagenUrlDrawing={drawing.imagenUrlDrawing}
                votesDrawing={drawing.votesDrawing}
              />
              <Button
                variant="outlined"
                color="inherit"
                component={Link}
                to={`/drawing/by/${drawing._id}/${drawing.uidUser}`}
              >
                Ver mas
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListDrawigsComponent;
