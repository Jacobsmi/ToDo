import Sidebar from "../sidebar/Sidebar";
import BoardDisplay from "../boardDisplay/boardDisplay";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import getAllBoards from "../../api/getAllBoards";
import AddBoardModal from "../addBoardModal/addBoardModal";

const useStyles = makeStyles({
  mainpage: {
    height: "100vh",
    width: "100vw",
    display: "flex",
  },
});

export interface Board {
  id: number;
  name: string;
}

const Mainpage = () => {
  const classes = useStyles();
  const [activeBoard, setActiveBoard] = useState<number>(0);
  const [addBoardModalOpen, setAddBoardModalOpen] = useState<boolean>(false);
  const [allBoards, setAllBoards] = useState<Board[]>([]);

  useEffect(() => {
    async function getBoardsApiCall() {
      const boardsAPIRes = await getAllBoards();
      if (boardsAPIRes.status === "failure") {
        alert(
          "Failed to get boards from the API. Please check the API or try again later."
        );
      } else {
        setAllBoards(boardsAPIRes.boards);
      }
    }
    getBoardsApiCall();
  }, []);

  return (
    <div className={classes.mainpage}>
      <Grid container sx={{ minWidth: "800px" }}>
        <Grid item xs={3} md={2}>
          <Sidebar
            setActiveBoard={setActiveBoard}
            activeBoard={activeBoard}
            setAddBoardModalOpen={setAddBoardModalOpen}
            setAllBoards={setAllBoards}
            allBoards={allBoards}
          />
        </Grid>
        <Grid item xs={9} md={10}>
          <BoardDisplay
            activeBoardID={activeBoard}
            setAddBoardModalOpen={setAddBoardModalOpen}
            setAllBoards={setAllBoards}
            allBoards={allBoards}
          />
        </Grid>
        <AddBoardModal
          addBoardModalOpen={addBoardModalOpen}
          setAddBoardModalOpen={setAddBoardModalOpen}
          setAllBoards={setAllBoards}
          allBoards={allBoards}
        />
      </Grid>
    </div>
  );
};

export default Mainpage;
