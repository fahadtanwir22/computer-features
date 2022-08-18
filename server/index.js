const express = require("express");
var cors = require("cors");
const RecordRputes = require("./routes/record.route");
const app = express();
const port = 8080;

app.use(cors());

app.use("/records", RecordRputes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
