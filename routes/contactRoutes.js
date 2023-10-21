const express = require('express');
const { getContacts, updateContact, createContact, deleteContact, getOneContact  } = require('../cntrollers/mycontactController');
const validateToken = require('../cntrollers/middleware/validateTokenHandler');
const router = express.Router();


router.use(validateToken);

router.route("/").get(getContacts).post(createContact);


router.route("/:id").put(updateContact).delete(deleteContact).get(getOneContact);


module.exports = router;
