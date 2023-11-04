const express = require('express');
const router = express.Router();

// middleware to check if the user is logged in
const checkAuth = (req, res, next) => {
    if (!req.user) {
        console.log("checkAuth");
        console.log(req.user);
        res.redirect("/auth/login");
    } else {
        next();
    }
};

router.get("/", checkAuth, (req, res) => {
    console.log(req.user);
    res.render("profile", { user: req.user, imageUrl: req.user.avatarUrl });
});

module.exports = router;