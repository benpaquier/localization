const express = require("express")
const app = express()
const port = 5000
const engine = require("express-handlebars").engine
const translations = require("./translations.json")

app.engine("handlebars", engine())
app.set("view engine", "handlebars")

// je rends le dossier public accessible
app.use(express.static('public'))

app.get('/:lang?', (req, res) => {
  let { lang } = req.params

  if (!translations[lang]) {
    lang = "fr"
  }

  res.render('home', {
    pageTitle: translations[lang].pageTitle,
    title: translations[lang].title,
    src: `/images/${lang}.jpeg`
  })
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})