const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const port = 3000;
const session = require("express-session");
const sessionSecret = process.env.SESSION_SECRET
const { create } = require("express-handlebars");
const hbs = create({
  extname: "hbs",
  defaultLayout: "main",
  partialsDir: "views/partials",
  // helpers: require('./utils/helpers')
});

require("./config/passport.js");

const app = express();

app.use(morgan("dev"));

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use("/", require("./routes/index.js"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
