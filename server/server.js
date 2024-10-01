const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const mongo_uri = process.env.MONGO_URI;

mongoose.connect(mongo_uri, 
    { useNewUrlParser: true,
      useUnifiedTopology: true 
    })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define a simple API route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
