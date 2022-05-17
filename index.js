const express= require("express");
const app =express()
const port =3200;

app.use(express.static("Dashboard"));
app.listen(port,()=>{
    console.log(`app started on port ${port}`)
});