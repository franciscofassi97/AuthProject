import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Actions
import { uploadDrawingAction } from "../../redux/actions/drawingsActions";

const CreateDrawingsComponets = () => {
  const [titleDrawing, setTitleDrawing] = useState("");
  const [descriptionDrawing, setDescriptionDrawing] = useState("");
  const [imagenUrlDrawing, setImagenUrlDrawing] = useState("");

  const signinUserState = useSelector((state) => state.signinUser);
  const { user } = signinUserState;

  const dispatch = useDispatch();

  const imputsChange = (event, inputName) => {
    let value = event.target.value;
    if (inputName === "titleDrawing") {
      setTitleDrawing(value);
    } else if (inputName === "descriptionDrawing") {
      setDescriptionDrawing(value);
    }
  };

  const handleChangeImagen = (event, inputFileName) => {
    let value = event.target.files[0];
    if (inputFileName === "setImagenUrlDrawing") {
      setImagenUrlDrawing(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newDrawing = {
      titleDrawing,
      descriptionDrawing,
      imagenUrlDrawing,
      uidUser: user.uid,
    };
    dispatch(uploadDrawingAction(newDrawing));
  };

  const formCreateDrawings = () => (
    <form onSubmit={submitHandler} encType="multipart/form-data">
      <div className="form-group">
        <label htmlFor="titleDrawing"> Title</label>
        <input
          id="titleDrawing"
          placeholder="Title Drawing"
          required
          value={titleDrawing}
          onChange={(event) => imputsChange(event, "titleDrawing")}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="descriptionDrawing"> Description</label>
        <textarea
          id="descriptionDrawing"
          placeholder="Description Drawing"
          required
          value={descriptionDrawing}
          onChange={(event) => imputsChange(event, "descriptionDrawing")}
        ></textarea>
      </div>

      <div className="form-group" id="">
        <label htmlFor="imagen">Select imagen</label>
        <input
          onChange={(event) => handleChangeImagen(event, "setImagenUrlDrawing")}
          type="file"
          accept="image/*"
          name="
          imagenUrlDrawing"
          required
        />
      </div>
      <button type="submit">Upload</button>
    </form>
  );

  return <div>{formCreateDrawings()}</div>;
};

export default CreateDrawingsComponets;
