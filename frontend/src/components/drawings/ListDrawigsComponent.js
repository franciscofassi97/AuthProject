import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

//Actions
import { getDrawingsByIdUserAction } from "../../redux/actions/drawingsActions";
import CommentsComponent from "../comments/CommentsComponent";
//Components
import DrawingsComponent from "./DrawingsComponent";

const ListDrawigsComponent = () => {
  const dispatch = useDispatch();
  const idUsuario = useParams();

  const getDrawingsByIdUserState = useSelector(
    (state) => state.getDrawingsByIdUser
  );
  const { drawingsByIdUser, loading, succes, error } = getDrawingsByIdUserState;

  useEffect(() => {
    dispatch(getDrawingsByIdUserAction(idUsuario.uidusers));
  }, [dispatch, idUsuario.uidusers]);

  return (
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
          <div>
            <CommentsComponent />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListDrawigsComponent;
