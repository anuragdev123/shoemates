
var express = require('express');
var app = express(); 						
var mongoose = require('mongoose'); 				
var port = process.env.PORT || 8080; 					
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
mongoose.connect('mongodb://shoemates:123789456@ds111066.mlab.com:11066/shoemates', function (err, res) {
    if (err) {
        console.log('ERROR  DB connecting ');
    } else {
        console.log('Successfully DB connected ');
    }
});
var shoeModel = require('./model/shoeModel.js');
 	
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({'extended': 'true'})); 
app.use(bodyParser.json()); 
app.use(bodyParser.json({type: 'application/vnd.api+json'})); 
app.use(methodOverride('X-HTTP-Method-Override')); 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/submitDesign',function(req,res){
	if(req.body.name&&req.body.email&&req.body.company){
		var shoe = new shoeModel();
		shoe.name= req.body.name;
		shoe.email = req.body.email;
		shoe.address = req.body.address;
		shoe.company = req.body.company;
		shoe.shoe_size = req.body.shoe_size;
		shoe.costomize_shoe = req.bosy.costomize_shoe;
		shoe.save(function(err,obj){
if(err) res.status(500).send(err);
res.status(200).json({message:'order placed Successfully'})
		})
	}else{
		res.status(200).json({status:'failed',message:'fields are missing'})
	}

})

app.listen(port);
console.log("App listening on port " + port);
