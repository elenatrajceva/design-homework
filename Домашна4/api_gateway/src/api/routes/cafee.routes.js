const router = require("express").Router();
const { getAllCafes } = require("../controllers/cafee_controller");

router.get("/cafee/all", getAllCafes);
