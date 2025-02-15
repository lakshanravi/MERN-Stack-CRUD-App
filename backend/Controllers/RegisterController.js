const Regi = require('../Model/Register');

const registerUsers = async (req, res, next) => {
    const { name, gmail, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await Regi.findOne({ gmail });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        const newUser = await Regi.create({ name, gmail, password });

        return res.status(201).json({ message: "User Registered Successfully", user: newUser });
    } catch (err) {
        console.error("Error registering user:", err);
        return res.status(500).json({ status: "error", error: err.message });
    } 
};

exports.registerUsers = registerUsers;
