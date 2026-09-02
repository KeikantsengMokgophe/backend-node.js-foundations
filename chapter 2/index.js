const express = require('express') // require express module
const app = express()
const path = require('path')
app.use(express.static('public')) // calls express function to start new Express app

app.listen(3000, () => {
      console.log("App listening on port 3000")

})

app.get('/', (req, res) => {
      res.sendfile(path.resolve(__dirname, 'index.html'))
            
  })


app.get('/about', (req, res) => {
      res.json({
            name: 'keikantseng'
      })
})

app.get('/about',(req,res) =>{ // called when request to /about comes in 
    res.sendfile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact',(req,res) =>{ // called when request to /contact comes
      res.sendfile(path.resolve(__dirname, 'contact.html'))

      })