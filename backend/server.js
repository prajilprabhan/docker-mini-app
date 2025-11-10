const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo;27017/dockerlearn', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}   
)
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Could not connect to MongoDB...', err));
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Backend!' });
});
app.listen(5000, () => console.log("backend running on port 5000"));