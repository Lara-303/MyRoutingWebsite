//import express and other required modules
const express = require('express');

//create a server using express
const app = express();

//porting
const PORT = 5000;
//home route
app.get('/', (req, res) => {
  res.send('LARA is a Full Stack Web Development learning website');
});

//about route
app.get('/about', (req, res) => {
  res.send('Learn more about LARA and our mission to provide high-quality web development education.');
});


//contact route
app.get('/contact', (req, res) => {
  res.send('Get in touch with us for any inquiries or support.');
});

//finding error 404 route
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});