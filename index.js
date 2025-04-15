import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import pg from "pg";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const SaltRounds = 12;

const db = new pg.Client({
    user: process.env.USERNAME_DB,
    host: process.env.LOCALHOST_DB,
    database: process.env.SECURE_DB,
    password: process.env.MY_DB_PASSWORD,
    port: process.env.PORT
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const output = await db.query("SELECT * FROM users WHERE email = $1", [email]);

        if (output.rows.length > 0) {
            res.json("Users email is already registered.Please log in!");
        } else {
            //passwordhashing
            bcrypt.hash(password, SaltRounds, async (err, hash) => {
                if (err) {
                    console.log("An eror occurred during Hashing");
                } else {
                    const input = await db.query("INSERT into users (email, password) VALUES ($1,$2)", [email, hash]);
                    res.json("You are registered successfully");
                }
            });
        }
    } catch (err) {
        res.json("An error occurred during registration");
    }
});




app.post("/user-login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        const result = await db.query("SELECT * FROM users WHERE email=$1", [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            const storePassword = user.password;

        bcrypt.compare(password, storePassword, (err, output)=>{
           
            if (err){
                console.log("There was a problem comaparing the hashing");
            }else{
                console.log(output);
            }
            if (output){
                 res.render("secrets.ejs");
            }else{
               res.json("Incorect password.Please try again!"); 
            }
        });
            
            
        } else {
            res.json("user not found");
        }
    } catch (err) {
        res.json("An error occurred during login");
    }
});

app.listen(port, (req, res) => {
    console.log(`Server listening to port ${port}`);
});
