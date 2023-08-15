const path = require("path");

const express = require("express");
const app = express();

const sendEmail = require("./utils/sendEmail");

app.use(express.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("subscription");
});

app.get("/sent", (req, res) => {
  res.render("sent");
});

app.post("/sendemail", (req, res) => {
  const {username, email } = req.body;
  const name = username;
  const to = email;
  sendEmail(to,name);
  res.redirect("/sent");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
