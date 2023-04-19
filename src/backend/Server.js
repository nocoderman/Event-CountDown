const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/countdown');
}

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const User = mongoose.model("User", userSchema);

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({username}).exec();
    if (user){
        res.status(500);
        res.json({
            message: "username already exists",
        });
        return;
    }

    await User.create({username, password});
    res.json({
        message: "success",
        // username,
        // password,
    });
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function(){
    app.listen(port, () => {
        console.log("listening on port 4000")
    })
});