# React_Chatbot

This guide provides a step-by-step approach to setting up a React-based chatbot application, including backend and frontend development.

- The frontend of the application will run on `http://localhost:3000` in your browser.
- The backend of the application will run on `http://localhost:5000`.

### How to Run:

1. Clone the repository:

   ```bash
   git clone https://github.com/ManojModhale/React_Chatbot.git
   ```

2. ### Database Configuration

In your Node.js application, the MySQL connection pool is configured in server.js file as follows:

```javascript
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: '',       // MySQL server host
  port: ,              // MySQL server port
  user: '',            // MySQL username
  password: '', // MySQL password
  database: '',  // Database name
  waitForConnections: true, // Wait for connections if pool is full
  connectionLimit: 10,     // Maximum number of connections in pool
  queueLimit: 0            // No limit for queued requests
});
```

3. Run Commands :
    ```bash
   node server.js
   ```
    
   ```bash
   npm install
   ```

   ```bash
   npm start
   ```

## Backend Setup

1. **Create a Backend Directory**
   ```bash
   mkdir chatbot-backend
   cd chatbot-backend
   ```

2. **Initialize Node.js Project**
   ```bash
   npm init -y
   ```

3. **Install Required Packages**
   ```bash
   npm install express mysql body-parser cors
   ```

4. **Configure MySQL User**
   ```sql
   ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Developer@01';
   FLUSH PRIVILEGES;
   ```

5. **Start Backend Server**
   Create a file named `server.js` and run:
   ```bash
   node server.js
   ```

6. **Install MySQL Driver**
   ```bash
   npm install mysql@latest
   npm install mysql2
   ```

7. **Create Database and Table**
   ```sql
   CREATE DATABASE chatbot_db;

   CREATE TABLE products (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255),
     description VARCHAR(255),
     price DECIMAL(10, 2),
     category VARCHAR(255)
   );

   INSERT INTO products (name, description, price, category) 
   VALUES 
     ('Samsung Galaxy S21', 'Latest smartphone with 5G capability, 128GB storage, and 64MP camera.', 799.99, 'electronics'),
     ('Nike Air Max 270', 'Comfortable running shoes with modern design and great cushioning.', 150.00, 'footwear'),
     ('Sony WH-1000XM4', 'Noise-cancelling wireless headphones with 30 hours of battery life.', 348.00, 'audio'),
     ('Apple MacBook Pro 13"', 'High-performance laptop with M1 chip, 8GB RAM, and 256GB SSD.', 1299.00, 'computers'),
     ('Dell UltraSharp 27"', '27-inch 4K UHD monitor with color accuracy and ultra-thin bezels.', 599.99, 'electronics'),
     ('Canon EOS Rebel T7', 'DSLR camera with 24.1MP, Full HD 1080p video recording, and 9-point autofocus.', 479.00, 'electronics'),
     ('Adidas Ultraboost 21', 'Running shoes with responsive cushioning and adaptive fit for a comfortable run.', 180.00, 'footwear'),
     ('iRobot Roomba 675', 'Wi-Fi connected robot vacuum with 3-stage cleaning system and smart mapping.', 249.99, 'home_appliances'),
     ('Levi’s 501 Original Fit Jeans', 'Classic denim jeans with a straight fit and 100% cotton fabric.', 59.99, 'clothing'),
     ('Instant Pot Duo 7-in-1', 'Multi-functional electric pressure cooker with slow cooking, yogurt making, and more.', 89.99, 'home_appliances');

   USE chatbot_db;
   SELECT * FROM products;
   ```



## Frontend Setup

1. **Create React App**
   ```bash
   npx create-react-app chatbot-frontend
   cd chatbot-frontend
   ```

2. **Install Required Packages**
   ```bash
   npm install react@18 react-dom@18 react-scripts
   npm install axios
   ```

3. **Start the Frontend**
   ```bash
   npm start
   ```

## Additional Notes
- Ensure your backend and frontend servers are running on separate ports.
- Use `axios` for API calls to connect the frontend with the backend.
- Keep your MySQL credentials secure in environment files or configuration files.


  
