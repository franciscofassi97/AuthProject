//Materia ui
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const ModalComponent = ({ title, openModal, children, setOpenModal }) => {
  return (
    <Dialog open={openModal}>
      <DialogTitle id="">
        <div style={{ display: "flex" }}>
          <Typography
            variant="h5"
            color="primary"
            component="div"
            style={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <IconButton
            variant="outlined"
            color="secondary"
            onClick={() => setOpenModal(false)}
          >
            <HighlightOffIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{children}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
