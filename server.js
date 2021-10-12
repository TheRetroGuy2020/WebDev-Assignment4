/*
 * Write your server code in this file.  Don't forget to add your name and
 * @oregonstate.edu email address below, so we know whose code we're grading.
 *
 * name: Christian Bryant
 * email: Hidden
 */
var http = require('http')

var fs = require('fs')

var port = process.env.PORT

var index, styling, java, unknown = 0

fs.readFile('./public/index.html', function(err, data){
    console.log("read file of index")
    if(err){
        throw err
    }
    index = data
})
fs.readFile('./public/style.css', function(err, data){
    console.log("read file of style")
    if(err){
        throw err
    }
    styling = data
})

fs.readFile('./public/index.js', function(err, data){
    console.log("read file of java")
    if(err){
        throw err
    }
    java = data
})

fs.readFile('./public/404.html', function(err, data){
    console.log("read file of 404")
    if(err){
        throw err
    }
    unknown = data
})

var server = http.createServer(function (req, res) {
    if(req.url === '/index.html'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(index)
        res.end()
    }
    else if(req.url === '/style.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        res.write(styling)
        res.end()
    } 
    else if(req.url === '/index.js') {
        res.writeHead(200, {
            'Content-Type': 'application/javascript'
        })
        res.write(java)
        res.end()
    }    
    else if(req.url === '/404.html') {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.write(unknown)
        res.end()
    } 
    else if(req.url === '/'){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
        res.write(index)
        res.end()
    }
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        })
        res.write(unknown)
        res.end()
    } 
})

if(port){
    console.log("Port defined, listening on ", port)
    server.listen(port)
}
else{
    console.log("Port undefined, listening on 3000")
    server.listen(3000)
}