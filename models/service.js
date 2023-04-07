import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    service:String,
    createdAt:{
        type:Date,
        default:new Date(),
    },
})


const Service =  mongoose.model('Service', serviceSchema)
export default Service;

