var http = require('http');
var fs= require('fs');
var url=require('url');



http.createServer(function(req,res){

    var q=url.parse(req.url,true)
    

    if(q.pathname==='/'){
        
    fs.readFile('samplehtml.html', function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();

    })
}else if(q.pathname==='/login'){
    res.writeHead(404,{'Content-Type':'text/html'})
    res.write('login')
    res.end()
}else if(q.pathname==='/signup'){
    fs.readFile('signup.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end();

    })
}else if(q.pathname==='/signupaction'){
    console.log(q.query)
    res.write('signupaction');
    res.write();

}else {
    res.write('error')
    res.end()
}

}).listen(8080,() => {console.log('server started')});