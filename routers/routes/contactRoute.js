const express = require("express");
const { creatContact } = require("../controllers/contactController");
const contactRouter = express.Router();

contactRouter.post("/", creatContact);

module.exports = contactRouter;
