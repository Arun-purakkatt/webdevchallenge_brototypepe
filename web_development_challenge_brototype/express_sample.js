const express = require('express')
const app = express()
const port = 3000
const path= require('path')

//middleware
app.use(function(req,res,next) {
    console.log('start')
    next()
})

app.get('/', (req, res,next) => {
  res.send('Hello World!')
  console.log('middle')
  next()
})


app.use(function(req,res) {
    console.log('end')
    
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname,'signup2.html'))
    
})

app.post('/signup', (req, res) => {
    
    res.send('account created successfully')
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})