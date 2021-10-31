import { Modal, Typography, TextField, ButtonBase } from "@mui/material";

interface BoardDisplayProps {
  activeBoardID: number;
  addBoardModalOpen: boolean;
  setAddBoardModalOpen(value: boolean): void;
}

const BoardDisplay = ({
  activeBoardID,
  addBoardModalOpen,
  setAddBoardModalOpen,
}: BoardDisplayProps) => {
  return (
    <div className="BoardDisplay">
      {activeBoardID}
      <Modal
        open={addBoardModalOpen}
        onClose={() => {
          setAddBoardModalOpen(false);
        }}
        style={{display:'flex',alignItems:'center',justifyContent:'center'}}
      >
        <div
            style={{
                height: "40%",
                width: "45%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around"
            }}
        >
            <Typography variant="h5" align="center" style={{marginTop: "2%"}}>Add a Board</Typography>
            <TextField label="Board Name" variant="standard"></TextField>
            <ButtonBase style={{backgroundColor: "#8F8F8F", padding: "10px", borderRadius: "10px"}}>Add Board</ButtonBase>
        </div>
      </Modal>
    </div>
  );
};

export default BoardDisplay;
