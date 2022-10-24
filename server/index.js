require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 4000;
const url = process.env.MONGOATLAS_URI;
// const url = process.env.MONGOLAB_URI;

app.set(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./Config/passport")(passport);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(`Error occured while Connecting ${err}`));

app.use("/", require("./routes/routes"));
app.use("/users", require("./routes/users"));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
