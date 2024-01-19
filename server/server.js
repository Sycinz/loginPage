import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send("Hello from node.js!")
})

app.listen(8000, () => {
    console.log('Server listens on 8000')
})