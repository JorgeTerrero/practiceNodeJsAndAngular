const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {};

userController.regiterUser = async (req, res) => {

    try {

        let body = req.body;
        let passwordSalt = 10;

        bcrypt.hash(body.password, passwordSalt, async function (err, hash) {

            let _user = new userModel({
                username: body.username,
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


userController.loginUser = async (req , res) => {

    try {

        let body = req.body;
        let _user = await userModel.find();

        for (let i = 0; i < _user.length; i++) {
            const element = _user[i].password;
            
            if(body.username == _user[i].username){

                bcrypt.compare(body.password , element , function(err , result){
                     
                    if(result){
                        res.json({
                            Ok: true ,
                            result: result
                        });
                    }else{
                        res.status(400).json({
                            Ok: false , 
                            result: result
                        });
                    }

                });

            }

        }
        
    } catch (err) {
        res.status(400).json({
            Ok: true ,
            err
        });
    }


};

userController.getAllUsers = async (req , res) =>{

    try {

        const _user = await userModel.find();
        res.json(
            _user
        );
        
    } catch (err) {
        res.status(400).json({
            Ok: false ,
            err
        })
    }


};

module.exports = userController;