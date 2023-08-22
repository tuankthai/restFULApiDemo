const express = require('express')
const cors = require('cors')
// const { getAllPoke } = require("./api-services")
const { poke_db } = require("./database")



// const { getAllPoke } = require('./api-services');

const PORT = 8080;
const app = express();

//use json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())

app.get("/",(req, res)=>{
res.status(200)
res.send("success")
})

app.get("/pokemons", (req, res) => {
    // const data = getAllPoke();
    res.status(200)
    res.send(poke_db)
    console.log({data})
    
})

app.post("/pool", (req, res) => {
    console.log(req.body)
    res.json(req.body)
    
})



app.post("/pokemons", (req, res) => {
    const { body } = req;

    console.log(body)
    poke_db.count += 1;
    poke_db.results.push(body);
    console.log("test added: ", poke_db.results.pop())

    res.status(200);
    res.send(JSON.stringify(body) + "is added")
    
})


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})