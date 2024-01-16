import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.sendFile(`~/Code/React/loginPage/index.html`)
})

app.listen(8000, () => {
    console.log('Server listens on 8000')
})