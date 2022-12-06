const db = require("../models");

module.exports = app => {
  app.get('/', (req, res) => {
    res.send('Waweezy Project');
  });

  app.post("/emails", (req, res) => {
    db.mailList.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    })
      // .then(() => {
      //   res.redirect(307, "/api/login");
      // })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};