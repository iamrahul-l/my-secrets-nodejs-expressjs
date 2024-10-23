import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;  

let pass = false;

app.use(bodyParser.urlencoded({ extended: true }));

function getpass(req, res, next) {
    const passverify = req.body["password"];
    if (passverify === "rahul") {
        pass = true;
    }
    next();
}

app.use(getpass);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (pass) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
