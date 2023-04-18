const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

// mongoose.connect('mongodb://localhost/countdown', {useNewUrlParser : true});


app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {

    const {username, password} = req.body;
    res.json({
        username,
        password,
    });
});

app.listen(port, () => {
    console.log("listening on port 4000")
})