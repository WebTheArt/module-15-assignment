const jwt = require("jsonwebtoken");

// GET: Return Hello World
exports.sayHello = (req, res) => {
    res.send("Hello World");
};

// GET: Generate JWT
exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: "testUser" }, process.env.SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};

// POST: Return Body Response
exports.postBody = (req, res) => {
    res.send("I am post body");
};
