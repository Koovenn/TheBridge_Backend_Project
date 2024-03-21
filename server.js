const express = require("express");
const morgan = require("morgan");
const passport = require("passport");
const port = 3000;
const session = require("express-session");
const MemoryStore = require('memorystore')(session)
const dotenv = require('dotenv').config('/.env');
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
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000
    }),
    secret: process.env.SESSION_SECRET,
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

app.get('/', (req, res) => {
  res.redirect("/auth/login-page");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
