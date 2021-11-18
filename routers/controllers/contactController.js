const contactModel = require("../../db/models/contactSchema");

const creatContact = (req, res) => {
  const { userName, email, Message } = req.body;
  const newcontact = new contactModel({
    userName,
    email,
    Message,
  })
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "create new message",
        contact: result,
      });
    })
    .catch((err) => {
      res.status(500);
      res.json(err);
    });
};

module.exports = {
  creatContact,
};
