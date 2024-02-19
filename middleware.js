module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
        res.send("What is your age?");
    } else if (req.query.age < 18) {
        res.send("You are not able to access this page because you are less than 18.");
    } else {
        next(); 
    }
};
