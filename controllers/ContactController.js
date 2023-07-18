// ici on fais la function qui nous permet de stocker en base de donner les informations du contact on recit dans req les reponses 
const contact = ((req, res, next) => {
    //Permet de voir ce que le front a envoyé
    console.log(req.body)

    // Permet de renvoyer true au front
    res.json(true)
})
module.exports = {
    contact
}