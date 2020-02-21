const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.regiterUser = async (req, res) => {

    try {

        let body = req.body;
        let passwordSalt = 10;

        bcrypt.hash(body.password, passwordSalt, async function (err, hash) {

            let _user = new userModel({
                username: body.name,
                email: body.email,
                password: hash
            });

            await _user.save();

            res.json({
                Ok: true,
                message: 'User was Registred Correctly'
            });

        });

    } catch (err) {
        res.status(400).json({
            Ok: false,
            err
        });
    }

};

module.exports = userController;