var exp = require("express");
var app=exp();
var bp=require('body-parser');

 app.use(bp.urlencoded({extended : false}))
//app.use(bp.json());

app.get('/login',function(req,res){
    res.sendFile(__dirname + '/loginpass.html');
});

app.get('/logincheck',function(req,res){
    if(req.query.uid=="object" && req.query.pwd=="knowit")
    {
        res.send("login successfull")
    }
    else
        res.send("invalid credentials")
});

app.post('/logincheck',function(req,res){
    if(req.body.uid=="object" && req.body.pwd=="knowit")
    {
        res.send("login successfull")
    }
    else
        res.send("invalid credentials")
});

app.all('*',function(req,res){
    res.send("invalid url")
});
app.listen(9000,function(){
    console.log("server started")
})