import passport from "passport";

export const getRegistro = (req, res) => {
  res.render("register");
};

export const postRegistro = passport.authenticate("registro", {
  successRedirect: "/login",
  failureRedirect: "/registro/errorRegistro",
});

export const errorRegistro = (req, res) => {
  res.render("error-register");
};
