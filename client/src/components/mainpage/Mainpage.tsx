import Sidebar from "../sidebar/Sidebar";
import BoardDisplay from "../boardDisplay/boardDisplay";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  mainpage: {
    height: "100vh",
    width: "100vw",
    display: "flex",
  },
});
const Mainpage = () => {
  const classes = useStyles();
  const [activeBoard, setActiveBoard] = useState<number>(0);
  const [addBoardModalOpen, setAddBoardModalOpen] = useState<boolean>(false);
  return (
    <div className={classes.mainpage}>
      <Grid container sx={{ minWidth: "800px" }}>
        <Grid item xs={3} md={2}>
          <Sidebar
            setActiveBoard={setActiveBoard}
            activeBoard={activeBoard}
            setAddBoardModalOpen={setAddBoardModalOpen}
          />
        </Grid>
        <Grid item xs={9} md={10}>
          <BoardDisplay
            activeBoardID={activeBoard}
            addBoardModalOpen={addBoardModalOpen}
            setAddBoardModalOpen={setAddBoardModalOpen}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Mainpage;
