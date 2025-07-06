const userModel=require('../models/user.model');

module.exports.createUser=async({
    firstname,lastname,email,password
})=>{
     if(!firstname || !email || !password ){
        throw new Error('All fields are required'); 


    }


        const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        throw new Error('Email already exists');
    }

    
    const user= await userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
        // phone
    });

    if(!user){
        throw new Error('User creation failed');
    }

    return user; 
}