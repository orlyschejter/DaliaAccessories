const express = require('express')
const path = require('path')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000

const Dishes = require('./models/dishes');
const Rings = require('./models/searchring');

const url = "mongodb+srv://dbUser:mongodb+srv://dbUser:dbUserPassword@cluster0.928g1.mongodb.net/conFusion?retryWrites=true&w=majority";
const dbname = 'conFusion';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .use(express.json())
  .use(express.urlencoded())
  .get('/', (req, res) => res.render('pages/index'))
  .post('/Subscribe', async (req, res)=> {
      try {
          const doc = new Dishes(req.body);
          await doc.save();
      }
      catch{
          alert('Check the information');
      }})
    .post('/Search', async (req, res)=>{
        try {
            let query = req.body.query;
            if (query === "Red")
                res.sendfile('public/p14.html', x);
            else if (query === "Love")
                res.sendfile('public/p14.html', x);
            else if (query === "Blue")
                res.sendfile('public/p14.html', x);
            else if (query === "Dalia")
                res.sendfile('public/p14.html', x);
            else if (query === "Classic"||query === "Combo"|| query === "Classic Combo")
                res.sendfile('public/p14.html', x);
            else if (query === "corazones")
                res.sendfile('public/p14.html', x);
            else if (query === "Dolce"||query === "Vita"||query === "Dolce Vita")
                res.sendfile('public/p14.html', x);
            else if (query === "Morrocan"|| query ==="Morrocan Ring")
                res.sendfile('public/p14.html', x);
            else if (query === "Turquoise")
                res.sendfile('public/p14.html', x);
            else if (query === "Valentine")
                res.sendfile('public/p14.html', x);
            else if (query === "Coral")
                res.sendfile('public/p14.html', x);
            else if (query === "Turquoise")
                res.sendfile('public/p14.html', x);
            else if (query === "Blue Love")
                res.sendfile('public/p14.html', x);
            else if (query === "Variety"|| query=== "Variety Pack")
                res.sendfile('public/p14.html', x);
            else if (query === "Rose"||query==="Rose 217")
                res.sendfile('public/p14.html', x);

        }
        catch (err) {
            console.log(err);
            res.status(500).send('er ging iets mis');
        }
})
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
