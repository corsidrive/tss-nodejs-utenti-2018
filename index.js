const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongojs = require('mongojs');

var db = mongojs('tss-formarete:tss-2018@ds247499.mlab.com:47499/tss-formarete');
//var db = mongojs('localhost:27017/palazzo_madama');

db.on('error', function(error) {
  console.log('we had an error.');
});
console.log('------------------------');  

express() 
.get('/utenti', (req, res) => {
                          res.set({
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin' : '*',
                            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                          })



                          db.utenti.find({},function(err,utenti){
                                console.log(utenti);
                                res.json(utenti)
                          });

                          }

  )




  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
 
  