const userModel=require('../models/user.model');
const userService=require('../services/user.service');
const { validationResult } = require('express-validator');

const blackListTokenMdoel = require('../models/blackListToken.model');


module.exports.registerUser=async (req,res,next)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isUserExists = await userModel.findOne({ email });
    if (isUserExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = await userModel.hashPassword(password);

    const user= await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashPassword
        // phone
    });
    if(!user){
        return res.status(500).json({message:'User creation failed'});
    }

    const token = user.generateAuthToken();
    res.status(201).json({ token ,user});
}

module.exports.loginUser=async(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password}=req.body;
    const user=await userModel.findOne({email}).select('+password');
    if(!user){
        return res.status(401).json({message:'Invalid credentials'});
    }

    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'});
    }

    const token = user.generateAuthToken();
    res.status(200).json({ token ,user });
}

module.exports.getUserProfile=async(req,res,next)=>{
    const userId = req.user._id; // Assuming user ID is stored in req.user
    const user = await userModel.findById(userId).select('+password'); // Include password in response
    if(!user){
        return res.status(401).json({message:'invalid credentials'});

    }

    const isMatch = await user.comparePassword(req.body.password);
    if(!isMatch){
        return res.status(401).json({message:'Invalid credentials'});
    }

    const token = user.generateAuthToken();
    res.cookie('token', token);
    res.status(200).json({ user });


}

module.exports.logoutUser=async(req,res,next)=>{
    res.clearCookie('token');


    res.status(200).json({message:'User logged out successfully'});
}

module.exports.blackListToken = async (req, res, next) => {
    const token = req.cookies.token; // Assuming the token is stored in a cookie
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const blackListedToken = await blackListTokenMdoel.create({ token });
        res.status(200).json({ message: 'Token blacklisted successfully', blackListedToken });
    } catch (error) {
        res.status(500).json({ message: 'Error blacklisting token', error });
    }
};
