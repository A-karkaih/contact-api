//@Desc Get all contacts
//@route  Get /api/contacts
//@access  public

const getContacts = (req, res) => {

    res.status(200).json({ message: "Get all contacts" });

}

//@Desc Create New Contact
//@route  POST /api/contacts
//@access  public

const createContact = (req, res) => {

    console.log("the request body is ", req.body);
    
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        
        throw new Error("All fields are mandatory! ");
    }

    res.status(201).json({ message: "Create contacts" });

} 

//@Desc Update contact  for id 
//@route  PUT /api/contacts/:id
//@access  public

const updateContact = (req, res) => {

    res.status(200).json({ message: `Update contact for ${req.params.id}` });

}


//@Desc Delete contact for id
//@route  DELETE /api/contacts/:id
//@access  public

const deleteContact = (req, res) => {

    res.status(200).json({ message: `Delete contacts for ${req.params.id}` });

}




//@Desc Get all contacts
//@route  Get /api/contacts/:id
//@access  public

const getOneContact = (req, res) => {

    res.status(200).json({ message: `Get contacts for ${req.params.id}` });

}



module.exports = { getContacts , updateContact , createContact , deleteContact ,getOneContact };