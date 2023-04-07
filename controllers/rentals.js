import RentalMessage from "../models/rentalMessage.js";
import mongoose from 'mongoose';

export const getRentals = async (req,res) =>{
    const {page} = req.query;

    try {
        const LIMIT = 6;
        const startIndex = (Number(page)-1)*LIMIT;
        const total = await RentalMessage.countDocuments({});

        const rents = await RentalMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

        console.log(RentalMessage);
        res.status(200).json({data:rents,currentPage:Number(page),numberOfPages:Math.ceil(total/LIMIT)});
    } catch (error) {
        res.status(404).json({message:error.message});

    }
}
export const getRental = async (req, res) => { 
    const { id } = req.params;

    try {
        const rental = await RentalMessage.findById(id);
        
        res.status(200).json(rental);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
} 


export const getRentalsBySearch = async(req,res) =>{
   const { searchQuery,tags } = req.query
    try {
        const title = new RegExp(searchQuery,'i');
        const rentals = await RentalMessage.find({ $or: [ { title }, { tags: { $in: tags?.split(',') } } ]});
         res.json({data:rentals});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





export const createRental = async (req,res) => {
    const rental = req.body;

    const newRental = new RentalMessage({...rental,creator:req.userId,createdAt: new Date().toISOString() });

    try {
        
       await newRental.save();

       res.status(201).json(newRental);

    } catch (error) {
       res.status(409).json({message:error.message}); 
    }
}
export const updateRental = async (req,res) => {
    const {id:_id } = req.params;
    const rental = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
    const updatedRental = await RentalMessage.findByIdAndUpdate(_id, rental,{new:true});
    res.json(updatedRental);

}

export const deleteRental = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await RentalMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}





// export const getRentalCreator = async (req, res) => { 
// //     // const { userId } = req.params.user;
    
//     try {
//         const rental = await  await req.user.populate('posts').execPopulate()
//             res.status(req.user.rental)

// //         // console.log(rental)
// //         res.status(200).json(rental);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// } 




// router.get('/posts',authenticate, async (req,res) => {
//     try {
//         await req.user.populate('posts).execPopulate()
//         res.send(req.user.posts)
//     } catch (error) {
//         res.status(500).send()
//     }
// })
