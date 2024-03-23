import express from "express";
import {BACKEND_URL} from "@repo/common/config"
const app = express();

app.get("/",(req,res)=>{
  console.log(BACKEND_URL);
  res.json({message: "Hello world dynamic builds new"});
})
app.listen(8080, () => {
  console.log('Server is running on port 8080');
});