const express = require("express");
const app = express();
const PORT = 4000;
require("./db/connection");
const routes = require("./routes/router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
