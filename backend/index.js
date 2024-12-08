const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("¡Hola desde Node.js en Docker!");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
