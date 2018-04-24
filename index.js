const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongojs = require('mongojs');
const bodyParser = require('body-parser');


const responseHeader = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin' : '*',
  'Access-Control-Allow-Methods': 'PUT,POST,DELETE,GET'
}

var db = mongojs('tss-formarete:tss-2018@ds247499.mlab.com:47499/tss-formarete');

db.on('error', function(error) {
  console.log('we had an error.');
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/utenti', (req, res) => {
                          res.set(responseHeader)
                         
                          db.utenti.find({}).sort({firstName:-1},function(err,utenti){
                                console.log(utenti);
                                res.json(utenti)
                          });
})
 
app.post('/utenti', (req, res) => {
                        res.set(responseHeader);

                        let utente = req.body;

                        db.utenti.insert(utente,function(err,queryresult){

                              console.log("response of post",utente,queryresult);
                              console.log("-----------------------------------");
                              
                             
                              
                              res.json(queryresult)
                        }); 

});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
 
