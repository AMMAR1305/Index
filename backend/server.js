
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


//middleware - request is  convert into json 

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URI
 )
.then(() => {
  console.log('MongoDB Connected Successfully')})
.catch((err) => {
    console.log('Error connecting to MongoDB', err);
});

app.use('/auth', require('./routes/authRoutes'));

app.get('/api', (req, res) => {
  res.send('Hello World! Hi Everyone!');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  res.send(data.Name + ' ' + data.Age + ' ' + data.Dept);
});

app.listen(port, () => {
  console.log(`Server Running on 4000`);
});
          

