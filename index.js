const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const mongojs = require('mongojs');
//tss-formarete:tss-2018@ds247499.mlab.com:47499/tss-formarete'
//tss-2018
//var db = mongojs('mongodb://ds247499.mlab.com:47499/tss-formarete');
var db = mongojs('tss-formarete:tss-2018@ds247499.mlab.com:47499/tss-formarete');
//var db = mongojs('localhost:27017/palazzo_madama');

db.on('error', function(error) {
  console.log('we had an error.');
});
console.log('------------------------');  

express() 
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

 
  .get('/utenti', (req, res) => {
  /*   'Content-Type': 'text/json', */
                          res.set({
                            'Content-Type': 'text/plain',
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
 

  ///mongodb://<dbuser>:<dbpassword>@ds247499.mlab.com:47499/tss-formarete

  