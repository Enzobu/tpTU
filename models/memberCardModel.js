const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

// Define the cardMemeber model
const MemberCard = sequelize.define('MemberCard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: false,
        allowNull: false
    },
    cardId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: true
});

module.exports = MemberCard;