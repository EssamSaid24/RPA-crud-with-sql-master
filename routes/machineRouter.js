const express= require("express");
const router = express.Router();
const machineController = require("../controllers/machineController");


router.get("/machines",machineController.getMachines);
router.get("/machines/create",machineController.redirectCreateMachine);
router.post("/machines" , machineController.createMachine);
router.get('/machines/delete/:id' , machineController.deleteMachine);



module.exports = router;

