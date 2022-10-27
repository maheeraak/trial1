const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! Whats gooood')
})
app.get('/image' , (req, res) => {
    res.send('path.newfolder(mountain1)')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

