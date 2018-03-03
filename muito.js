var express=require('express');
var app=express();
app.listen(3000,function(){
	console.log('服务器在3000端口启动');
})
app.get('/',function(req,res){
	res.sendFile(__dirname+'/reader/angularSPA/app.html');
})
app.use(express.static(__dirname+'/reader/angularSPA/')) ;

