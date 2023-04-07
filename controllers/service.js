import Service from "../models/service.js";

export const createService = async (req,res) => {
    const service = req.body;

    const newService = new Service({...service,creator:req.userId,createdAt: new Date().toISOString() });

    try {
        
       await newService.save();

       res.status(201).json(newService);

    } catch (error) {
       res.status(409).json({message:error.message}); 
    }
}

// export const getService = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const service = await Service.findById(id);
        
//         res.status(200).json(service);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// } 
