// import  express  from "express";
const express = require ("express")
const app = express()
require('./database')
const cors = require('cors')
const contactRouter = require('./routes/contact')
const bodyparser = require('body-parser')


app.use(cors({
    origin: "*"
}))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use('/contact', contactRouter)
app.listen(3000, () => {
    console.log("L'API est lancè")
})


/*
Pour lancer le serveur :
- node index.js
- npm start
- nodemon (qui permet de relancer le serveur automatiquement apres chaque sauvegardes)
 */