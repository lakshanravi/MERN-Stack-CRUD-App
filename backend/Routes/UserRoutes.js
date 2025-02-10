const express = require('express');


/*Why Use express.Router()
Organizes Routes – Keeps your main app.js file clean.
Modular Approach – Allows defining routes in separate files.
Easier Maintenance – Each module handles specific routes.*/
const router = express.Router();
const User = require('../Model/UserModel');
const UserControllers = require('../Controllers/UserControllers');

//dan route path ek create krgnn. function ek call krgnn mokkd wenn oni kyl dala klin hduwa
router.get("/", UserControllers.getAllUser);
router.post("/", UserControllers.addUsers);

//req.params.id methna dipu id kyn nama tama denna oni yata. id ek parameter ekk widiht input wenn oni nisa
router.get("/:id", UserControllers.getById);
router.put("/:id", UserControllers.updateUser);
router.delete("/:id", UserControllers.deleteUser);
module.exports = router;