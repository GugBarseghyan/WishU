const http = require('http')

const server = http.createServer(function(req, res){
    res.write("index.html");
    return res.end()
})
server.listen(2000);