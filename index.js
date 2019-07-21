const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.listen(process.env.port || 5500,() =>{
  console.log("Started Server on Port 5000......");
});


mongoose.connect("mongodb+srv://harish:pass@123@cluster0-9orjl.mongodb.net/test?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;
const routes = require('./routes/api');


app.use(bodyParser.json());
app.use('/api',routes);




// app.get('/',(req,res) => {
//   res.send({
//     name:'harish',
//     age:19
//   });
// });
