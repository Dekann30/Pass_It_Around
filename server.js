const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req,res)=>{
    res.send(`99 Bottles of wine on the wall - <a href='/98'>Take one down, Pass it around</a>`)
})

app.get('/:numOfBottles', (req,res)=>{
    let bottles = req.params.numOfBottles
    
    if (bottles > 0) {res.send(`${bottles} Bottles of wine on the wall - <a href='/${bottles -= 1}'>Take one down, Pass it around</a>`)
} else {
    res.send(`0 Bottles of wine on the wall - <a href='/'>Start Over?</a>`)
}
})

app.listen(PORT, (req,res)=>{
    console.log('port is working')
})