import RentalMessage from "../models/rentalMessage.js";
// import mongoose from 'mongoose';

export const getRentals = async (req,res) =>{
    try {
        const rentalMessage = await RentalMessage.find();

        console.log(RentalMessage);
        res.status(200).json(rentalMessage);
    } catch (error) {
        res.status(404).json({message:error.message});

    }
}
