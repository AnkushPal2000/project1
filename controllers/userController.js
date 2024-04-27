const User = require('../models/user')

exports.addUser = async (req, res) => {
    try {
        const { name, age } = req.body;

        const data = new User({
            name: name,
            age: age
        })

        const result = await data.save();
        res.status(200).json({ message: "Data Inserted" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
}

exports.getUser = async (req, res) => {
    try {

        const result = await User.find();
        res.status(200).json({ message: "Data Fetched", result });
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });
    }
}