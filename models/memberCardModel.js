const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

// Define the cardMemeber model
const MemberCard = sequelize.define('MemberCard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false
    },
    card_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = MemberCard;