const express = require('express');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: [ "http://127.0.0.1:5173", "http://localhost:5173"]
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send( "jai mata di, chal gya");
});

app.listen(5000, () => {
    console.log("server runnning yooooo");
});