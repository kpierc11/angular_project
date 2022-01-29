const express = require("express");
var cors = require('cors')
const app = express();
const port = 3000;


//initial server code
app.get("/users", cors(), function (req, res) {
  const Users = [
    { id: "1", name: "kaleb", email: "kalebpierce@gmail.com" },
    { id: "2", name: "bob", email: "fakegmail@gmail.com" },
  ];
  res.status(200).json(Users);
  console.log("You made a get request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//set up database connection

