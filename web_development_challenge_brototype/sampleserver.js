var http = require('http');
var fs= require('fs');
var url=require('url');



http.createServer(function(req,res){

    var q=url.parse(req.url)
    

    if(req.url==='/'){
        
    fs.readFile('samplehtml.html', function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();

    })
}else if(req.url==='/login'){
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('login')
    res.end()
}else if(req.url==='/signup'){
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();

    })
}else if(req.url==='/signupaction'){
    res.write('signupaction');
    res.write();

}else {
    res.write('error')
    res.end()
}

}).listen(8080,() => {console.log('server started')});