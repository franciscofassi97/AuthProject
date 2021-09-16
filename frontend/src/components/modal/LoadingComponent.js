//material ui
import LoopIcon from "@material-ui/icons/Loop";
import IconButton from "@material-ui/core/IconButton";
const LoadingComponent = () => {
  return (
    <div>
      <i>
        <IconButton aria-label="Loading">
          <LoopIcon />
        </IconButton>
      </i>
    </div>
  );
};

export default LoadingComponent;
