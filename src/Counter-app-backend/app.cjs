const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const bodyParser=require('body-parser')
const userRoutes=require('./routes/users.cjs')
const app=express();
require('dotenv').config
const mongoUri = 'mongodb+srv://maheemshahreear2:GfWHPcKzHH6X3bHH@cluster0.b1zrje5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB cluster
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

module.exports = app;
  
  app.use(cors());
  app.use(bodyParser.json());
  
  app.use('/api/users', userRoutes);
  
  module.exports = app;