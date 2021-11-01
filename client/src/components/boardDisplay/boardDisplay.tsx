import { Board } from "../mainpage/Mainpage";

interface BoardDisplayProps {
  activeBoardID: number;
  setAddBoardModalOpen(value: boolean): void;
  setAllBoards(boards: Board[]): void;
  allBoards: Board[];
}

const BoardDisplay = ({
  activeBoardID,
}: BoardDisplayProps) => {

  return (
    <div className="BoardDisplay">
      {activeBoardID}
    </div>
  );
};

export default BoardDisplay;
