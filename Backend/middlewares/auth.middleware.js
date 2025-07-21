const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const captainModel = require('../models/captain.model');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Check if the token is blacklisted
    const isBlackListed = await userModel.findOne({token: token});

    if (isBlackListed) {
        return res.status(401).json({ message: 'Token is blacklisted.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};


module .exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers['authorization']?.split(' ')[1];
    console.log("Token:", token); 
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    // Check if the token is blacklisted
    const isBlackListed = await blackListTokenModel.findOne({ token });

    if (isBlackListed) {
        return res.status(401).json({ message: 'Token is blacklisted.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id).select('-password');
        if (!captain) {
            return res.status(404).json({ message: 'Captain not found.' });
        }
        req.captain = captain;
        next();
    } catch (error) {
        return res.status(400).json({ message: 'Invalid token.' });
    }
};
