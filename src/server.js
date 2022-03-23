const express = require("express");
const bodyParser= require('body-parser'). ///TA LINIJKA
  const app = express()
// pamiętaj, aby umieścić tę linijkę przed CRUDem!!
app.use(bodyParser.urlencoded({ extended: true })) ///TA LINIJKA
app.use(bodyParser.json()) //TA LINIJKA
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  // Uwaga: __dirname jest ścieżką, w której aktualnie się znajdujesz
})
app.post('/someuserdata', (req, res) => {
  console.log('Hello again! Examples for postgraduates studies!')
  console.log(req.body)
})
app.listen(8080, function() {
  console.log("Nasłuchiwanie na porcie 8080");
})
