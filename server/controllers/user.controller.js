const User  = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    register: (req, res)=>{
        const user = new User(req.body)
        user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log("Registration was successful!")
                res.json({
                    successMessage: "Thank you for registering! You may now login.",
                    user: newUser 
                })
            })
            .catch((err)=>{
                console.log("Registration was not successful")
                res.status(400).json(err)
            })
    },
    login: (req, res)=>{
        User.findOne({email: req.body.email})
            .then((userRecord)=>{
                if(userRecord === null){
                    res.status(400).json({message: "Invalid Login Attempt!"})
                }
                else{
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then((isPasswordValid)=>{
                            if(isPasswordValid){
                                console.log("password is valid");
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            id: userRecord._id,
                                            email: userRecord.email,
                                            name: userRecord.name
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                        {
                                            httpOnly: true,
                                            expires: new Date(Date.now() + 9000000)
                                        }
                                ).json({
                                    message: "Succesfully logged in",
                                    userLoggedIn: userRecord.name
                                });
                            }
                            else{
                                res.status(400).json({message: "Invalid Attempt"})
                            }
                        })
                        .catch((err)=>{
                            console.log(err);
                            res.status(400).json({ message: "Invalid Attempt" });
                        })
                }
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json({ message: "Invalid Attempt" });
            })
    },
    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "You have successfully logged out!",
        });
    },
    getLoggedInUser: (req, res)=>{
        User.findOne({_id: req.jwtpayload.id})
            .then((user)=>{
                console.log(user);
                res.json(user)
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    findAllUsers: (req, res) => {
        User.find()
            .then((allUsers) => {
                res.json(allUsers);
            })
            .catch((err) => {
                console.log("Find All Users failed");
                res.json({ message: "Something went wrong in findAll", error: err })
            })
    },
    updateUser: (req, res)=>{
        User.findOneAndUpdate({_id: req.jwtpayload.id},
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedUser)=>{
                console.log(updatedUser)
                res.json(updatedUser)
            })
            .catch((err)=>{
                console.log("Error in updateUser");
                res.status(400).json(err) 
            })
    }
}