const S = require('sequelize')
const db = require('../db');
const bcrypt = require('bcrypt');
const { useState } = require('react');
const { use } = require('../routes');
const saltRounds = 10;

class User extends S.Model {}

User.init(
    {
        email: {
            type: S.DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: S.DataTypes.STRING,
            allowNull: false,
        },
        salt: {
            type: S.DataTypes.STRING,
        }
    }, 
    {sequelize: db, modelName: "users"}
);
// Instance method
User.prototype.hashCreator =  async (password, salt) => {
    let hashPass = await bcrypt.hash(password, salt)
    return hashPass
}

User.addHook("beforeCreate", async (user, options) => {
    const returnedSalt = await bcrypt.genSalt(saltRounds)
    user.salt = returnedSalt
    let passHash = await user.hashCreator(user.password, user.salt)
    user.password = passHash;
})


module.exports = User;
