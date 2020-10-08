const Router = require("express")
const routes = Router()

routes.get("/contratos", (req, res) => {
    var database = require("./database")

    database.select().table("master_adapter_comercial.TB_Contrato").then(data => {
        res.status(200).json(data)
    }).catch(err => {
        console.log(err)
    })
})

module.exports = routes;