const express= require('express');
const router=express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const userController=require('../controllers/user.controller');
const { body, validationResult }  = require('express-validator'); 

router.post('/register',[
    body('fullname.firstname').isLength({ min:3}).withMessage('First name must be at least 3 characters long'),
    body('fullname.lastname').isLength({ min:3}).withMessage('Last name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    // body('phone').isMobilePhone().withMessage('Please enter a valid phone number'),

],
userController.registerUser);



router.post('/login',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],

userController.loginUser
)

const auth = authMiddleware.authUser;

router.get('/profile', auth, userController.getUserProfile);

router.get('/logout', auth, userController.logoutUser);




module.exports=router;