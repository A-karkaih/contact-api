const express = require('express');
const { getContacts, updateContact, createContact, deleteContact, getOneContact  } = require('../cntrollers/mycontactController');
const router = express.Router();


router.route("/").get(getContacts).post(createContact);


router.route("/:id").put(updateContact).delete(deleteContact).get(getOneContact);


module.exports = router;
