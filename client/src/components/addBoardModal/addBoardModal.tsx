import { ButtonBase, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import addBoard from "../../api/addBoard";
import { Board } from "../mainpage/Mainpage";

interface AddBoardModalProps {
  addBoardModalOpen: boolean;
  setAddBoardModalOpen(value: boolean): void;
  setAllBoards(value: Board[]): void;
  allBoards: Board[];
}

const AddBoardModal = ({
  addBoardModalOpen,
  setAddBoardModalOpen,
  setAllBoards,
  allBoards,
}: AddBoardModalProps) => {
  const [boardName, setBoardName] = useState<string>("");
  // const [addBoardErrors, setAddBoardErrors] = useState<boolean>(false);

  const handleBoardNameChange = (e: any) => {
    setBoardName(e.target.value);
  }

  const handleAddClick = async () => {
    // Add to database so that we can recieve ID for the board
    const apiRes = await addBoard(boardName);
    if (apiRes.status === "success"){
      setAddBoardModalOpen(false);
      let newBoardsArr = allBoards.slice();
      newBoardsArr.push({id: apiRes.id, name: boardName});
      setAllBoards(newBoardsArr);
    }
  };

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
          <TextField label="Board Name" variant="standard" onChange={handleBoardNameChange}></TextField>
          <ButtonBase
            style={{
              backgroundColor: "#8F8F8F",
              padding: "10px",
              borderRadius: "10px",
            }}
            onClick={handleAddClick}
          >
            Add Board
          </ButtonBase>
        </div>
      </Modal>
    </div>
  );
};

export default AddBoardModal;
