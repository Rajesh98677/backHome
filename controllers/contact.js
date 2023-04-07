import Contact from "../models/contact.js";

export const contact = async (req, res) => {
    const contactinfo = req.body

    const newContact = new Contact({...contactinfo})
    try {
        await newContact.save()
        res.status(201).json(newContact)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}