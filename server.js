const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const app = express();
const corsOptions = {
    origin: [ "http://127.0.0.1:5173", "http://localhost:5173"]
}

app.use(cors(corsOptions));
app.use(express.json());

app.get("/generate-pdf", (req, res) => {
    const latexCode = `
    \\documentclass{article}
    \\begin{document}
    Hello, \\textbf{Shirsty}! Your LaTeX PDF works!
    \\end{document}`;

    fs.writeFileSync("template.tex", latexCode);

    exec("pdflatex template.tex", (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${stderr}`);
            return res.status(500).send("pdf generation failed");
        }
        res.sendFile(__dirname + "/template.pdf");
    })
});

app.listen(5000, () => {
    console.log("server runnning yooooo");
});