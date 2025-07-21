const  captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType
     
}) => {

    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }   
    try {
        const captain = new captainModel({
            fullname: {
                firstname,
                lastname
            },
            email,
            password,
            vehicle:{
                color,
                plate,
                capacity,
                vehicleType
            }
        });
        await captain.save();
        return captain;
} catch (error) {
    console.error("Error creating captain:", error);  // 👈 Add this line
    throw new Error('Error creating captain');
}

};
   