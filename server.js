require('dotenv').config();
const mongoose = require("mongoose");
const app = require("./app");

const port = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.CONN_URI
  )
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
