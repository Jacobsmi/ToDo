import { ButtonBase, Modal, TextField, Typography } from "@mui/material";

interface AddBoardModalProps {
	addBoardModalOpen: boolean;
	setAddBoardModalOpen(value: boolean): void;
}

const AddBoardModal = ({addBoardModalOpen, setAddBoardModalOpen, }: AddBoardModalProps) => {
  return (
    <div className="AddBoardModal">
      <Modal
        open={addBoardModalOpen}
        onClose={() => {
          setAddBoardModalOpen(false);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "40%",
            width: "45%",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h5" align="center" style={{ marginTop: "2%" }}>
            Add a Board
          </Typography>
          <TextField
            label="Board Name"
            variant="standard"
          ></TextField>
          <ButtonBase
            style={{
              backgroundColor: "#8F8F8F",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={() => {}}
          >
            Add Board
          </ButtonBase>
        </div>
      </Modal>
    </div>
  );
};

export default AddBoardModal;
