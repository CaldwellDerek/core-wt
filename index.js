const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const allRoutes = require("./controllers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
app.use(require('express-session')({ secret: 'password', resave: true, saveUninitialized: true }));
const PORT = process.env.PORT || 3000;

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 4
    },
    resave: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"))

const hbs = exphbs.create({});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(allRoutes);

sequelize.sync({ force: false}).then( ()=> {
    app.listen(PORT, () => {
        console.log(`SERVER RUNNING - Listening on Port: ${PORT}`)
    })
})
