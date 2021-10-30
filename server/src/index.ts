import express, { Request, Response } from "express";
import cors from "cors";
import { pool } from "./utils/createPool";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
/* 
    Get all boards from the database
    Eventually this route will parse a JWT and select only boards with the selected ID
    but, for testing gets all boards in the database
*/
app.get("/boards", async (req: Request, res: Response) => {
  try {
    const conn = await pool.connect();
    const queryResults = await conn.query("SELECT * FROM boards;");
    conn.release();
    return res.send({ status: "success", boards: queryResults.rows });
  } catch (e) {
    return res.send({ status: "failure" });
  }
});

app.delete("/boards", async (req: Request, res: Response) => {
    try{
        const conn = await pool.connect();
        const queryResults = await conn.query("DELETE FROM boards WHERE id=$1;", [req.body.id]);
        conn.release();
        return res.send({ status: "success", boards: queryResults.rows });
    }catch(e){
        return res.send({status: "failure"})
    }
});

app.listen(5000, () => {
  console.log("Listening on http://localhost:5000/");
});
