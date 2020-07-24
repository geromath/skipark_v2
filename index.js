const express = require("express");
const Sequelize = require("sequelize");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Express app...
app.use(express.json());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

require("./routes/ski.routes")(app);

// INITIAL HELLO
app.get("/", (req, res) => res.json({ messege: "hello world" }));

app.listen(port, () => console.log(`App listening on port ${port} ...`));
