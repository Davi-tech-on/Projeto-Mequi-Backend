const express = require("express");
const app = express();

const cupomRoutes = require('./src/routes/cupomRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');

app.use(express.json());

app.get("/", (req, res) => {
    res.send('hello world');
})

app.use("/usuarios", usuarioRoutes);
app.use("/cupons", cupomRoutes);


app.all("*", (req, res) => {
    res.status(404).send("Rota não encontrada!");
})

app.listen(8000, () => {
    console.log(`Servidor de pé: http://localhost:8000`);
})