const express = require("express");
// const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();
// app.use(express.static("public"));

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(express.static(path.join(__dirname, 'public/')))

// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/maddendata',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );

app.get("/users", (req, res) => {
  res.json({
    "users": ["alix", "betsy", "frantz"]
  })
})

// require("./controller/app-routes.js")(app);


// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(() => {
app.listen(PORT, () => {
    console.log(
      "Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
// });