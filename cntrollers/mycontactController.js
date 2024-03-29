const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@Desc Get all contacts
//@route  Get /api/contacts
//@access  private

const getContacts = asyncHandler(async (req, res) => {

    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);

});

//@Desc Create New Contact
//@route  POST /api/contacts
//@access  private

const createContact = asyncHandler(async (req, res) => {

    console.log("the request body is ", req.body);
    
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {

        res.status(400);
        
        throw new Error("All fields are mandatory! ");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    });
   

    res.status(201).json(contact);

});

//@Desc Update contact  for id
//@route  PUT /api/contacts/:id
//@access  private

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {

        res.status(404);
        throw new Error("Contact Not Found! ");
    }
    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other user contacts!");

    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        
    
    );

    res.status(200).json(updatedContact);

});


//@Desc Delete contact for id
//@route  DELETE /api/contacts/:id
//@access  private

const deleteContact = asyncHandler( async (req, res) => {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {

        res.status(404);
        throw new Error("Contact Not Found! ");
    }

    if (contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User dont have permission to update other user contacts!");

    }

        

        await Contact.deleteOne({ _id: req.params.id });

        res.status(200).json(contact);
   
    
    

});



//@Desc Get all contacts
//@route  Get /api/contacts/:id
//@access  private

const getOneContact = asyncHandler(async (req, res) => {

    const contact = await Contact.findById(req.params.id);
    if (!contact) {

        res.status(404);
        throw new Error("Contact Not Found! ");
    }

    res.status(200).json(contact);

});



module.exports = { getContacts , updateContact , createContact , deleteContact ,getOneContact };