# Delivery-App
Simple Delivery App Backend Practice Repo

You're running a food delivery service and have been tasked with building the backend component to your delivery tracking system.

A basic front-end component has been provided to help you test your server.

*** Basic Req's ***

1. Using MySQL, create a schema for an orders table with a unique ID, username, restaurant, and itemsOrdered. Assume that itemsOrdered will be a string.

2. In response to a POST request to /orders, create a new entry in the orders table and send a 201 status back to the client.

3. In response to a GET request to /orders, query the database and send an an array to the client with an object for each order. Each object should contain the order ID, username, restaurant, and itemsOrdered.

*** Extra Credit ***

1. Create a second table in your schema called users. This table should have a unique ID, username, address, and phone number. Refactor your orders schema so that instead of a username property, it references the users table via the user ID.

2. In response to a POST request to /users, create a new entry in the users table.

3. Refactor your handler for POST requests to /orders: Check if the user exists in users table. If it does not, send an error back to the client. If the user exists, create a new entry in orders, but only reference the user ID, instead of the username.

4. Refactor your handler for GET requests to /orders to include the user's address in your response to the client.

*** Before starting ***
Ensure that live-server is globally installed on your computer.

In the command line, from the root repo:
1. Run "npm install"
2. Run "npm compile" in its own tab to compile the frontend using babel.
3. Run "npm start" in its own table to start the express server.

*** Documentation ***
You are very highly encouraged to use only the following documentation:

Expressjs - https://expressjs.com/
MySQL - https://dev.mysql.com/doc/
SQL Cheatsheet - http://www.cheat-sheets.org/sites/sql.su/
Sequelize - http://docs.sequelizejs.com/
MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript
W3schools - https://www.w3schools.com/js/default.asp

*** Optional Technologies ***
Sequelize
Postman


