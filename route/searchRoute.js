const express = require("express");

const keywordSearch = require("../controllers/searchControllers");
const router = express.Router();

router.get("/searchKeyword/:keyword", keywordSearch);

module.exports = router;
