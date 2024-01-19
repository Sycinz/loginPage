const express = require('express')
const path = require('path')

const app = express()

console.log(__dirname)

app.use(express.static(path.join(__dirname, `../client/dist`)))

app.get('/api', (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, `../client/index.html`))
})

app.listen(5000, () => {
    console.log('Server listens on 5000')
})