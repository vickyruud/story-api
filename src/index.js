const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan')
require("dotenv").config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Connects to the database
mongoose
  .connect(process.env.DB, options)
  .then(() => console.log(`Database Connected`))
  .catch((err) => console.log(err));

// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;

const contributions = require("./routes/contributions");
const users = require("./routes/users");
const stories = require("./routes/stories");

const passport = require("passport");

const app = express();

const port = process.env.PORT || 5000;

//Morgan
app.use(morgan('tiny'));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./validation/passport")(passport);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/api/", users);
app.use("/api/", stories);
app.use("/api/", contributions);




app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
