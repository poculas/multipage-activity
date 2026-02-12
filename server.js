const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contacts.html'));
})  

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
})  

app.get('/data/posts', (req, res) => {
    res.sendFile(path.join(__dirname, 'data', 'post.json'));
})  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});