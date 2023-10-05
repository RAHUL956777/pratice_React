import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'joke 1',
            body:'joke 1 body'
        },
        {
            id:2,
            title:'joke 2',
            body:'joke 2 body'
        },
        {
            id:3,
            title:'joke 3',
            body:'joke 3 body'
        },
        {
            id:4,
            title:'joke 4',
            body:'joke 4 body'
        },
        {
            id:5,
            title:'joke 5',
            body:'joke 5 body'
        }
    ];
    res.send(jokes);
})

app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`);
});