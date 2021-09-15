const DrawingsComponent = ({
  titleDrawing,
  descriptionDrawing,
  imagenUrlDrawing,
  votesDrawing,
  displayNameUser,
}) => {
  return (
    <div>
      <div>
        <p>{titleDrawing}</p>
        <p>{descriptionDrawing}</p>
        <p>{displayNameUser}</p>
      </div>
      <div>
        <img src={imagenUrlDrawing} alt={titleDrawing} />
        <p>{votesDrawing}</p>
      </div>
    </div>
  );
};

export default DrawingsComponent;
