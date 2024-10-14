const express = require("express");
const app = express();
      I
app.get("/", (req,res) => {
    res.send("acorda caraigit");
})     

app.listen(8000, () => {
    console,log(`Servidor de pé: http://localhost:8000`);
})