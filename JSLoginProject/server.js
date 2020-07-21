var http= require('http');
var fs = require('fs');

var server=http.createServer(
    function(req,res){
        if (req.method === 'POST'){
            var data = "";
            req.on("data",function(chunk){
                data += chunk
            })
            req.on("end", ()=>{
                res.writeHead(200,{"Content-Type":"text/html"});
                if(data === "user=sesame&pw=open"){
                    res.end(`Correct`)
                ;}
                else{
                    res.end(`No`)
                }
            })
            if (data.user === "123"){
                console.log("yeah")
            }
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            fs.createReadStream("./index.html","UTF-8").pipe(res);
        }})
server.listen(7000);
