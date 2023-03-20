const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const drugstoreController = require("./src/controllers/drugstore.controller");


const app = express();
const PORT = 3310;
app.use(cors());
app.use(bodyParser.json())

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else
        console.log("Error occurred, server can't start", error);
    }
);

app.get("/drugstore",drugstoreController.listDrugstore);
app.delete("/drugstore",drugstoreController.deleteDrugstore);

module.exports = app;