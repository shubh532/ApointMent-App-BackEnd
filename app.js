const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const cors =require('cors')

const sequelize = require('./Utility/Database')

const FormRoutes = require("./Routes/formRoute")

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(cors())

app.use(bodyParser.json())

app.use(FormRoutes)

sequelize.sync({ force: true }).then(result => {
  // console.log(result)
  app.listen(4000, 'localhost', () => {
    console.log('Server is running on http://localhost:4000');
  })
})
  .catch(err => console.log(err))