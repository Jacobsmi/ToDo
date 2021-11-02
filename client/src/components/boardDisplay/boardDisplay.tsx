import { Grid } from "@mui/material";
import { Board } from "../mainpage/Mainpage";

interface BoardDisplayProps {
  activeBoardID: number;
  setAddBoardModalOpen(value: boolean): void;
  setAllBoards(boards: Board[]): void;
  allBoards: Board[];
}

const BoardDisplay = ({ activeBoardID }: BoardDisplayProps) => {
  return (
    <div
      className="BoardDisplay"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Grid container>
        <Grid item xs={6} display="flex" justifyContent="right">
          Header Text
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="right">
          Add a Task
        </Grid>
      </Grid>
    </div>
  );
};

export default BoardDisplay;
