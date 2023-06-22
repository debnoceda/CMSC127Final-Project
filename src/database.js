const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection('mysql://njtt8k2ryehmn82i2r1m:pscale_pw_qeBbwbz7lYwIXLLmiqV0HnSRtuaby6jj5RS5ZF2AErp@aws.connect.psdb.cloud/lato-lato_deluxe?ssl={"rejectUnauthorized":true}');

// {
//     user: "njtt8k2ryehmn82i2r1m",
//     host: "aws.connect.psdb.cloud",
//     password: "pscale_pw_qeBbwbz7lYwIXLLmiqV0HnSRtuaby6jj5RS5ZF2AErp",
//     database: "lato-lato_deluxe",
// }

app.post('/sign-up', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email

    db.query(
        'SELECT * FROM users WHERE userName = ? OR emailAdd = ?',
        [userName, email],
        (err, result) => {
          if (err) {
            res.status(500).json({ success: false, message: 'An error occurred while checking for duplicate accounts.' });
          } else if (result.length > 0) {
            res.status(409).json({ success: false, message: 'Username or email already exists. Account creation failed.' });
          } else {
            // Insert the new user into the database
            db.query(
              'INSERT INTO users (userName, pass, firstName, lastName, emailAdd) VALUES (?, ?, ?, ?, ?)',
              [userName, password, firstName, lastName, email],
              (err, result) => {
                if (err) {
                  res.status(500).json({ success: false, message: 'An error occurred while creating the account.' });
                } else {
                  res.status(200).json({ success: true, message: 'Account created successfully.' });
                }
              }
            );
          }
        }
    );
});

app.post('/login', (req, res) => {
    const userName = req.body.userName
    const password = req.body.password

    db.query(
        "SELECT userName, pass FROM users WHERE userName = ? AND pass = ?",
        [userName, password],
        (err, result) => {
            if (err){
                res.send({err:err})
            }
            if (result.length > 0){
                res.send(result)
            }
            else{
                res.send({message: "Username and password is incorrect. Please try again"})
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running server");
});