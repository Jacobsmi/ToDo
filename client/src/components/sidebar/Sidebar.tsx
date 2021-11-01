import { ButtonBase, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteBoard from "../../api/deleteBoard";
import { Board } from "../mainpage/Mainpage";
import { useState } from "react";

const useStyles = makeStyles({
  sidebar: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "gray",
  },
  sidebarBoards: {
    marginLeft: "10px",
  },
  boardsList: {
    marginLeft: "15px",
    fontSize: "18px",
  },
  trashIcon: {
    display: "none",
    "&:hover": {
      color: "#3F3F3F",
    },
  },
  activeBoard: {
    backgroundColor: "#5d5d5d",
  },
  boardContainer: {
    fontSize: "15px",
    minHeight: "25px",
    WebkitUserSelect: "none",
    paddingLeft: "5px",
    "&:hover": {
      backgroundColor: "#5d5d5d",
      "& $trashIcon": {
        display: "flex",
      },
    },
  },
});

interface SidebarProps {
  setActiveBoard(id: number): void;
  activeBoard: number;
  setAddBoardModalOpen(value: boolean): void;
  setAllBoards(boards: Board[]): void;
  allBoards: Board[];
}

const Sidebar = ({
  setActiveBoard,
  activeBoard,
  setAddBoardModalOpen,
  setAllBoards,
  allBoards 
}: SidebarProps) => {
  const classes = useStyles();
  const [displayingBoards, setDisplayingBoards] = useState(false);

  const handleDeleteClick = async (id: number) => {
    const apiResponse = await deleteBoard(id);
    if (apiResponse.status === "failure") {
      alert("Failed to delete board. Please try again later.");
    } else {
      setAllBoards(allBoards.filter((board) => board.id !== id));
    }
  };

  return (
    <div className={classes.sidebar}>
      <Typography align="center">To Do App</Typography>
      <div className={classes.sidebarBoards}>
        <ButtonBase
          sx={{ width: "100%", justifyContent: "flex-start" }}
          onClick={() => {
            setDisplayingBoards(!displayingBoards);
          }}
        >
          {displayingBoards ? (
            <ArrowDropDownIcon />
          ) : (
            <ArrowDropDownIcon sx={{ transform: "rotate(-90deg)" }} />
          )}
          Boards
        </ButtonBase>
        {displayingBoards ? (
          <div className={classes.boardsList}>
            {allBoards.length > 0 ? (
              <>
                {allBoards.map((board) => {
                  return (
                    <Grid
                      container
                      key={board.id}
                      className={`${classes.boardContainer}  ${
                        activeBoard === board.id ? classes.activeBoard : ""
                      }`}
                      display="flex"
                      alignItems="center"
                    >
                      <Grid
                        item
                        xs={8}
                        onClick={() => {
                          setActiveBoard(board.id);
                        }}
                      >
                        <Typography sx={{ fontSize: "14px" }}>
                          {board.name}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        justifyContent="center"
                        className={classes.trashIcon}
                        xs={4}
                      >
                        <DeleteIcon
                          sx={{ transform: "scale(0.6)", display: "block" }}
                          onClick={() => {
                            handleDeleteClick(board.id);
                          }}
                        />
                      </Grid>
                    </Grid>
                  );
                })}{" "}
              </>
            ) : (
              <Typography sx={{ fontSize: "14px" }}>No boards</Typography>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <ButtonBase 
          onClick={()=>{
            setAddBoardModalOpen(true);
          }}
          sx={{
            paddingY: "10px",
            width: "100%"
          }}
        >
          <AddIcon sx={{ transform: "scale(0.6)"}} />
          Add a Board
        </ButtonBase>
    </div>
  );
};

export default Sidebar;
