import mongoose from 'mongoose';

const rentalSchema = mongoose.Schema({
    title:String,
    description:String,
    name:String,
    creator:String,
    address:String,
    zipcode:String,
    state:String,
    country:String,
    phone:String,
    email:String,
    property:String,
    price:String,
    rentaltype: String, 
    tags:[String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }

});

const RentalMessage = mongoose.model('RentalMessage' , rentalSchema);

export default RentalMessage;