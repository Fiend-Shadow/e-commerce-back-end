const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/userModel");

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin,
  isAdmin
} = require("../helpers/middlewares");



// POST '/auth/signup'
router.post('/signup', isNotLoggedIn, validationLogin, async (req, res, next) => {
  const { username, password , email} = req.body;

  try {																									 // projection
    const usernameExists = await User.findOne({ username }, 'username');
    
    if (usernameExists) return next(createError(400));
    else {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = await User.create({ username, password: hashPass , email });

      newUser.password = "***";
      req.session.currentUser = newUser;
      res
        .status(201)  //  Created
        .json(newUser);
    }
  } 
  catch (error) {
    next(createError(error));
  }
},
);

// POST '/auth/login'
router.post('/login', isNotLoggedIn, validationLogin, async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email }) ;
    if (!user) {
      next(createError(404));
    } 
    else if (bcrypt.compareSync(password, user.password)) {
      
      user.password = '******';
      req.session.currentUser = user;
      res
        .status(200)
        .json(user);
        // ????????????????
    //  SHOULD I CHECK IF USER IS ADMIN HERE IN THIS POST?????


    //return;	 			TODO - remove from the notes
    } 
    else {
      next(createError(401));	// Unauthorized
    }
  } 
  catch (error) {
    next(createError(error));
  }
},
);

// POST '/auth/logout'
router.post('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy();
  res
    .status(204)  //  No Content
    .send();
});

// GET '/auth/me'
router.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserSessionData = req.session.currentUser;
  currentUserSessionData.password = '****';
  
  res.status(200).json(currentUserSessionData);
});


// IS THIS OK????
//GET '/auth/admin'
// router.get('/admin', isLoggedIn, isAdmin, (req, res, next) => {
//   const currentUserSessionData = req.session.currentUser;
//   currentUserSessionData.password = '****';
  
//   res.status(200).json(currentUserSessionData);
// });

module.exports = router;