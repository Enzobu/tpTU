const UserService = require('../services/userServices')
const User = require('../models/userModel');


const userService = new UserService();

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new user
exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        //SERVICE RAJOUTÉ
        const check = await userService.isEmailTaken(email)
        
        if (check) {
            return res.status(401).json({ message: 'Email already taken' });
        }
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        const newUser = await User.create({ name, email });
        res.status(201).json(newUser);
    } catch (error) {
    res.status(500).json({ error: error.message });
}
};

// Update user by ID
exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findByPk(req.params.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.update({ name, email });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        await user.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
