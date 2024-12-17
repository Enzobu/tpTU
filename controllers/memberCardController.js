const MemberCard = require('../models/memberCardModel');
const crypto = require('crypto');



// Get all cards
exports.getAllCards = async (req, res) => {
    try {
        const cards = await MemberCard.findAll();
        res.json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get card by ID
exports.getCardById = async (req, res) => {
    try {
        const card = await MemberCard.findByPk(req.params.id);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create new card
exports.createCard = async (req, res) => {
    try {
        const { userId } = req.body;
        
        if (!userId) {
            return res.status(400).json({ error: 'UserId is required' });
        }
        const newCard = await MemberCard.create({ userId });
        
        res.status(201).json(newCard);
    } catch (error) {
    res.status(500).json({ error: error.message });
}
};

// Update card by ID
exports.updateCard = async (req, res) => {
    try {
        const { name, email } = req.body;
        const card = await User.findByPk(req.params.id);

        if (!card) {
            return res.status(404).json({ error: 'User not found' });
        }

        await card.update({ name, email });
        res.json(card);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete card by ID
exports.deleteCard = async (req, res) => {
    try {
        const card = await MemberCard.findByPk(req.params.id);
        if (!card) {
            return res.status(404).json({ error: 'Card not found' });
        }
        await card.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
