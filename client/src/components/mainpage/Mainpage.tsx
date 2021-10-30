import Sidebar from "../sidebar/Sidebar";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles({
    mainpage: {
        height: "100vh",
        width: "100vw",
        display: "flex"
    }
})
const Mainpage = () => {

    const classes = useStyles();
    const [activeBoard, setActiveBoard] = useState<number>(0);
    return(
        <div className={classes.mainpage}>
            <Sidebar setActiveBoard={setActiveBoard} activeBoard={activeBoard} />
        </div>
    )
}

export default Mainpage;