const express = require("express");
const helmet = require("helmet");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cookieParser= require('cookie-parser')
const db = require("./api/db");
const session = require('express-session')
const config = require("./server.config.js");
const passport = require('passport')
// const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./api/Models/User')
app.use(morgan("tiny"));
app.use(helmet());

// Express Route File Requires
const authAPI = require("./api/routes");

app.use(express.static(path.resolve(__dirname, "./src/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(session({secret: 'bootcamp'}))
app.use(passport.initialize())
app.use(passport.session())

// FACEBOOK

passport.use(new FacebookStrategy({
  clientID: '4243685519027344',
  clientSecret: '24ca1bba5df2970c9591b2112585e584',
  callbackURL: "http://localhost:8000/secret",
  profileFields: ["email"]
},
function(accessToken, refreshToken, profile, done) {
  User.findOrCreate({email: profile._json.email}, function(err, user) {
    if (err) { return done(err); }
    done(null, user);
  });
}
));

// LOCAL STRATEGY
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     function (email, password, done) {
//         User.findOne({where : { email: email }})
//         .then((user) => {
//           if (!user) {
//             return done(null, false); // user not found
//           }
//           user.hashCreator(password, user.salt).then((hash) => {
//             if (hash !== user.password) {
//               return done(null, false); // invalid password
//             }
//             done(null, user); // success :D
//           });
//         })
//         .catch(done);
//     }
//   )
// );


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id)
    .then(user => done(null, user))
});


// Express Routing
app.use("/api", authAPI);
app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "./src/public", "index.html"));
});

db.sync({ force: true }).then(() => {
	console.log("DB Connected");
	http.createServer(app).listen(config.port, () => {
		console.log(`Server listening at port http://localhost:${config.port}`);
	});
});
