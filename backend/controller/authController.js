const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register = async (req, res) => {
    const { Name, Email, Password } = req.body;
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);
    const user = await User.create({
        Name,
        Email,
        Password: hashedPassword
    });

    res.status(201).json({ message: 'User registered successfully' });

};


exports.login = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const existingUser = await User.findOne({ Email });

        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }

        const isMatching = await bcrypt.compare(Password, existingUser.Password);

        if (!isMatching) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
        res.status(200).json({ message: 'Login Successful' });

    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};