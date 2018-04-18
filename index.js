const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.json({a:"b"}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
 

  ///mongodb://<dbuser>:<dbpassword>@ds247499.mlab.com:47499/tss-formarete