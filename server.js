
const express = require('express');
const log = console.log;
const app = express();
const path = require('path');
const PORT= 8080;



app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(PORT, () => {
  log('server is starting on port, ' , 8080);


});

//missing parser

//app.post('/email', (req,res) => {
  //something to do
  //we need to send an email
 // res.json({message: 'Gracias por mandarnos tu informacion, nos estaremos contactando pronto'})
//});

