const express = require("express");
const router = express.Router();
const UserModel = require("./UsersModel");
const bcrypt = require("bcryptjs");
const User = require("./UsersModel");


router.get("/admin/users", (req, res) => {
  UserModel.findAll().then((users) => {
    res.render("partials/adminViews/usersViews/index", { users: users });
  });
});

router.get("/admin/users/create", (req, res) => {
  res.render("partials/adminViews/usersViews/create");
});

router.post("/users/create", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;

  UserModel.findOne({ where: { email: email }}).then((user) => {
    if (user == undefined) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      UserModel.create({
        email: email,
        password: hash,
      })
        .then(() => {
          res.redirect("/");
        })
        .catch((err) => {
          res.redirect("/");
        });
    } else {
      res.redirect("/admin/users/create");
    }
  });
});

// router.get("/login", (req, res) => {
//   res.render("partials/adminViews/usersViews/login");
// });

router.get("/admin/users/login", (req, res) => {
  
  res.render("partials/adminViews/usersViews/login");

});


router.post("/authenticate", (req, res) => {
  
   var email = req.body.email;
  var password = req.body.password;

  UserModel.findOne({ where: { email: email } }).then((user) => {
    if (user != undefined) {
      // Se existe um usuário com esse e-mail
      // Validar senha
      var correct = bcrypt.compareSync(password, user.password);

      if (correct) {
        req.session.user = {
          id: user.id,
          email: user.email,
        };
        res.redirect("/admin/articles");
      } else {
        res.redirect("/admin/users/login");
      }
    } else {
      res.redirect("/admin/users/login");
    }
  });
});

router.get("/admin/users/logout", (req, res) => {

    req.session.user = undefined;
    res.redirect("/admin/users/login");
});

module.exports = router;
