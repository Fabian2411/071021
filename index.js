const express = require('express');
const app = express();
const port = process.env.PORT || 3000

//view engine
app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})


app.get('/', (req, res) => {
    res.render('index.ejs', { title: 'home' })
})

app.get('/about', (req, res) => {
    res.render('about.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})