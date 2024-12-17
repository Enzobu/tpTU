const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');


// Define the User model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    role: {
      type: DataTypes.ENUM('admin', 'pasAdmin'),
      allowNull: true
    }
}, {
    timestamps: true
});

module.exports = User;

const MemberCard = require('../models/memberCardModel.js');

User.hasOne(MemberCard , {as: "cardId", foreignKey: "id"});

