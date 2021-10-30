interface BoardDisplayProps {
    activeBoardID: number;
    addBoardModalOpen: boolean;
}

const BoardDisplay = ({activeBoardID, addBoardModalOpen}:BoardDisplayProps) =>{
    return(
        <div className="BoardDisplay">
            {activeBoardID}
        </div>
    )
}

export default BoardDisplay;