const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'newDB_app',
  password: '152006'
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password()
  ];
};


// // INSERTING new data
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let data = [];
// for(let i = 1; i <= 100; i++){
//   data.push(getRandomUser()); // 100 fake users
// }


// HOME route
app.get("/", (req, res) => {
  let q = `SELECT COUNT(*) FROM user`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }

});


// SHOW users ROUTE
app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;

  try {
    connection.query(q, (err, users) => {
      if (err) throw err;

      res.render("showusers.ejs", { users });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }

});


// EDIT route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

// UPDATE (DB) route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let {password : formPass, username : newUsername} = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if(formPass != user.password){
        res.send("WRONG PASSWORD");
      }
      else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});

// ADD new user
// app.post("/user", (req, res) => {
//   let { id } = req.params;
//   let q = `SELECT * FROM user WHERE id = '${id}'`;

//   try {
//     connection.query(q, (err, result) => {
//       if (err) throw err;
//       let user = result[0];
//       res.render("edit.ejs", { user });
//     });
//   } catch (err) {
//     console.log(err);
//     res.send("Some error in DB");
//   }
// });



app.listen("8080", () => {
  console.log("server is listening to port 8080");
});


// try{
//   connection.query(q, [data], (err, res) => {
//     if(err) throw err;
//     console.log(res);
//   });
// } catch(err){
//   console.log(err);
// }

// connection.end();