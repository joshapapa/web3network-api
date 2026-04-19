const express = require("express");
const cors = require("cors");


const app = express();
require("dotenv").config();



app.use(express.json()); 
app.use(
  cors({
    origin: [
      "https://www.web3networks.org",

    ],
    credentials: true,
  })
);

// Routes
app.use("/", require("./routes/walletInfoController"));



app.get("/", (req, res) => res.send("Hello World")); 



const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}`));