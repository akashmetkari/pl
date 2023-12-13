// app.js with Mongoose

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
const mongoURL = 'mongodb://localhost:27017/mydatabase'; // Update with your database name

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route to serve the HTML page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submitForm', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        console.log('Data inserted:', savedUser);
        res.send('Data inserted successfully!');
    } catch (error) {
        console.error('Error inserting data into MongoDB:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).send('Internal Server Error');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
