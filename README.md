# Restaurant Website with Feedback Form

A responsive restaurant website that showcases food items and allows users to submit feedback. Built using HTML, CSS, and JavaScript with a Node.js backend and MySQL for storing feedback data.


## 🔧 Tech Stack
**Frontend:** HTML5, CSS3, JavaScript  
**Backend:** Node.js, Express.js  
**Database:** MySQL (managed via MySQL Workbench)  
**Tools:** VS Code, Git, npm, MySQL Workbench


## 📦 Features
- Responsive homepage with restaurant and food item sections  
- Functional feedback form (Name, Phone, Message)  
- Feedback submitted to the backend using `fetch()`  
- Data stored in MySQL database securely  
- Clean file structure and easy to maintain

## 📁 Folder Structure
```bash
restaurant-website/
├── db/
│ └── restaurant_db.sql # Database export (optional)
├── public/
│ ├── index.html # Homepage
│ ├── about.html # About page
│ ├── menu.html # Food item page
│ ├── css/
│ │ ├── aboutstyle.css 
│ │ ├── indextyle.css 
│ │ └── menustyle.css
│ └── images/ # Image assets
├── server/
│ └── server.js # Express backend with MySQL connection
├── package.json # npm dependencies
└── README.md # Project documentation
```


## 🛠️ Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/jeevitha28-g/restaurant-website-feedback.git
cd restaurant-website-feedback
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Set up MySQL database**
-Open MySQL Workbench
-Create the database and table by running:
```bash
CREATE DATABASE IF NOT EXISTS restaurant_db;
USE restaurant_db;

CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(15),
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

5. **Start the server**
```bash
node server/server.js
```

6. **Open in browser**
Open `public/index.html` directly in your browser or serve it with a static server.

## ⚙️ Usage
-Visit the homepage to learn about the restaurant
-Navigate to the menu to view food items
-Fill in the feedback form on the feedback page
-On submission, the feedback is sent to the backend and stored in MySQL

## 💡 How It Works (Explanation)
-`feedback.html` contains a form with input fields for name, phone, and message
-On submit, JavaScript captures the data and sends it using `fetch()` to `/submit-feedback`
-`server.js` handles the POST request and inserts the data into the MySQL `feedback` table
-MySQL Workbench manages your database and can be used to view submitted entries

## License
This project is for learning and demonstration purposes. You are free to modify and reuse the code.


## Contact
Made with ❤️ by Jeevitha (https://github.com/jeevitha28-g)
