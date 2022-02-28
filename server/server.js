// Telling node that we want to use express. Import express.
const express = require("express")
const cors = require("cors")

const app = express()

// Middleware
app.use(express.json()) // Telling express to accept JSON
app.use(cors())

const inventory = ["pizza", "cake", "burritos", "tacos", "swordfish steak", "caffeine", "potatoes", "Tootsie Rolls", "hamburgers", "hotdogs"]

app.get("/api/inventory", (req, res) => {
    console.log(req.query)
    if(req.query.item) {
        const filteredItems = inventory.filter((invItem) => {
            return invItem.toLowerCase().includes(req.query.item.toLowerCase())
        })
        return res.status(200).send(filteredItems)
    }else {
    return res.status(200).send(inventory)
    }
})

app.get("/api/inventory/:id", (req,res) =>{
    console.log(req.params)
    const numIndex = +req.params.id
    res.status(200).send(inventory[numIndex])
})

const SERVER_PORT = 5050
app.listen(SERVER_PORT, () => {
    console.log(`Server running on ${SERVER_PORT}`)
})

