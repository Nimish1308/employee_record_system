const express = require("express");
const router = express.Router();

const { home, createEmpRecord, findEmpById, findAllEmp, updateEmpById, deleteEmpById } = require("../controllers/crudControllers");

router.route("/").get(home);
router.route("/create").post(createEmpRecord);
router.route("/findbyid/:id").get(findEmpById);
router.route("/find").get(findAllEmp);
router.route("/update/:id").put(updateEmpById);
router.route("/delete/:id").delete(deleteEmpById);

module.exports = router;