const express = require('express')
const router = express.Router()

const cartController = require("../Controller/CartController")

// GET all users
router.get("/get-cart/:idUser", cartController.getCart)
router.post("/add", cartController.add)
router.post("/merge", cartController.merge)
router.post("/update", cartController.update)
router.delete("/delete", cartController.delete);


module.exports = router;