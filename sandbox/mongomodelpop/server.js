//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                              DEPENDENCIES                                //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                              CONFIGURATION                               //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const PORT = 3000;

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                             ERROR HANDLING                               //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                               MIDDLEWARE                                 //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.use(express.urlencoded({extended:false}));

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                               CONTROLLERS                                //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const authorsController = require('./controllers/authors.js');
app.use('/authors', authorsController);

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                 ROUTES                                   //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.get('/', (req, res) => {
  res.render('index.ejs')
})

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                DATABASE                                  //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

mongoose.connect('mongodb://localhost:27017/blog');
mongoose.connection.once('open', ()=>{
	console.log('connected to mongo');
});



//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                LISTENER                                  //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.listen(PORT, () => {
  console.log(`I'm so ${PORT + 8}, you so ${PORT} and late`);
})
