//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                              DEPENDENCIES                                //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override')
var cors = require('cors')


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
app.use(bodyParser.json())
app.use(express.json());
app.use(methodOverride('_method'));
app.use(cors())

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                               CONTROLLERS                                //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.get('/', (req, res)=>{
	res.send('hello')
});

const authorsController = require('./controllers/authorsController.js');
app.use('/author', authorsController);

const articlesController = require('./controllers/articlesController.js');
app.use('/article', articlesController);

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                DATABASE                                  //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

mongoose.connect('mongodb://localhost:27017/meancrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});

//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach
//                                LISTENER                                  //
//zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach~//~zach

app.listen(PORT, () => {
  console.log(`I'm so ${PORT + 8}, you so ${PORT} and late`);
})
