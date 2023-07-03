const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const generateUniqueUserId = require("../services/uniqueId");
const validation = require("../validation/user.validation")
exports.registerUser = async (req, res) => {
    try {
        const { email } = req.body
        const { error } = validation.registerUser(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }
        const userId = await generateUniqueUserId();
        const newUser = new User({ ...req.body, userId })
        await newUser.save();
        res.status(201).json({ message: "you registered successfully, please login" });
    } catch (error) {
        res.status(500).json({ message: "internal server error", });
    }
}
exports.loginUser = async (req, res) => {
    try {
        const { userId, password } = req.body
        const { error } = validation.loginUser(req.body)
        if (error) {
            return res.status(400).json({ message: error.details[0].message })
        }
        const user = await User.findOne({ userId })
        if (!user) {
            return res.status(400).json({ message: "invalid credentials" })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "invalid credentials" });
        }
        if (!user.isActive) {
            return res.status(403).json({ message: "account is not active" })
        }
        const token = await user.generateAuthToken()
        user.token = token
        await user.save()
        res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error.message)
        res.status(500).json({ message: "internal server error" });
    }
}