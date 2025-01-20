const express = require("express");
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306, 
  user: 'root',
  password: 'Developer@01',
  database: 'chatbot_db',
  waitForConnections: true,
  connectionLimit: 10,  
  queueLimit: 0
});

app.post('/chat', (req, res) => {
    const { message } = req.body;

    const lowerMessage = message.toLowerCase().trim();
  
    
    if (lowerMessage === 'hi' || lowerMessage === 'hello') {
      return res.json({ message: 'Hello! How can I assist you today?' });
    }

    const category = lowerMessage.split('product')[0].trim();
  
  
  if (message.toLowerCase() === 'show me all products') {
    pool.query('SELECT * FROM products', (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        return res.status(500).json({ message: 'Sorry, there was an issue fetching all products.' });
      }
      res.json(results); 
    });
  } 
  
  else if (category) {
    pool.query('SELECT * FROM products WHERE category = ?', [category], (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        return res.status(500).json({ message: 'Sorry, there was an issue fetching products.' });
      }
      
      if (results.length === 0) {
        return res.json({ message: `No products found in the ${category} category.` });
      }
      
      res.json(results); 
    });
  } 
  else {
    res.json({ message: 'I didn\'t understand that.' });
  }
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
