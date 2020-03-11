const createError = require("http-errors");

exports.isLoggedIn = (req, res, next) => {
  if (req.session.currentUser) next();
  else next(createError(401));
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) next();
  else next(createError(403));
};

exports.validationLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) next(createError(400));
  else next();
};

exports.isAdmin = (req,res,next)=>{
  if (req.session.currentUser.isAdmin) next();
  else next(createError(401));
  // Check error Code
}