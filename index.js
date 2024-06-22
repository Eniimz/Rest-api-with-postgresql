const express = require('express');
require('dotenv').config();
const studentRoutes = require("./src/students/routes.js")

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
  res.send("server running")
})

app.use("/api/students", studentRoutes);

app.listen(5000, () => {
  console.log("the server is running on port 5000")
})

