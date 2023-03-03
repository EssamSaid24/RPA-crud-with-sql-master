const express= require("express");
const router = express.Router();
const processController = require("../controllers/processController");


router.get("/processes",processController.getProccesses);
router.get("/processes/create",processController.redirectCreateProcess);
router.post("/processes",processController.createProcess);
router.get('/processes/delete/:id' , processController.deleteProcess);



module.exports = router;
