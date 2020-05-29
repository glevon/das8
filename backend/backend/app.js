const app = require("express")()
let bodyParser = require('body-parser')
let database = require('./model')    


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});





app.post('/signup',async function(req,res){
  await database.insert(req.body.user)
  res.send('okkkk')
})
app.post('/login',async function(req,res){
 
  res.send(await database.get_where(req.body.user))
})
app.listen(4000)