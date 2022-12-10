const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path")
// require("dotenv").config();
connectToMongo();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Available Routes

// app.use("/", (req, res) => {
//   res.send("Hello");
// });
__dirname=path.resolve()

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "/Frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend","build", "index.html"));
  });
}
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));



app.listen(port, () => {
  console.log(`UrNotes Backend listening at http://localhost:${port}`);
});
