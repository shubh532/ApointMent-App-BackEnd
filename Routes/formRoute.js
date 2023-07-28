const express = require("express")
const Router = express.Router()

const formController = require("../Controllers/form")

Router.get('/get-data', formController.getForm)
Router.post("/add-user", formController.postForm)
Router.delete("/delete/:userId", formController.postDeleteuser)
Router.put("/edit-user/:userId", formController.putEditUSer)


module.exports = Router