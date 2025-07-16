const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection (update password if needed)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'gvtha',         // <-- use your MySQL Workbench password here
  database: 'restaurant_db'
});

// Connect to database
db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

// Route to handle feedback form submission
app.post('/submit-feedback', (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const sql = 'INSERT INTO feedback (name, phone, message) VALUES (?, ?, ?)';
  db.query(sql, [name, phone, message], (err, result) => {
    if (err) {
      console.error('❌ Failed to insert feedback:', err.message);
      return res.status(500).json({ message: 'Database error' });
    }
    console.log('✅ Feedback submitted:', result.insertId);
    res.status(200).json({ message: 'Feedback submitted successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
