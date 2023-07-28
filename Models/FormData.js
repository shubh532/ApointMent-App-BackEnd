const Sequelize = require('sequelize')

const sequelize = require('../Utility/Database')

const ClientData = sequelize.define('clientdata', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = ClientData