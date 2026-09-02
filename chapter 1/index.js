const http = require('http')
const fs = require('fs')
const homepage = fs.readFileSync('index.html')
const aboutpage = fs.readFileSync('about.html')
const contactpage = fs.readFileSync('contact.html')
const notfoundpage = fs.readFileSync('notfound.html')

const server =  http.createServer((req, res) =>{
      console.log(req.url)
      if(req.url === '/contact')
          res.end(contactpage)
      else if(req.url === '/about')
              res.end(aboutpage)
      else if(req.url === '/portfolio')
              res.end('The portfolio page')
      else{
            res.writeHead(404)
            res.end(notfoundpage)
      }    
})

server.listen(3001)