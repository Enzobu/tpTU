const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');
const MemberCard = require('../models/memberCardModel.js');


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
    cardId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
        references: {
            model: MemberCard,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    role: {
      type: DataTypes.ENUM('admin', 'pasAdmin'),
      allowNull: true
    }
}, {
    timestamps: true
});

User.belongsTo(MemberCard, { foreignKey: 'cardId', as: 'memberCard' });
MemberCard.hasOne(User, { foreignKey: 'cardId', as: 'user' });

module.exports = User;